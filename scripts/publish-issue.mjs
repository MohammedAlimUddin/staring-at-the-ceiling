import fs from 'node:fs';
import path from 'node:path';

// Read GitHub Actions event payload
const eventPath = process.env.GITHUB_EVENT_PATH;
if (!eventPath || !fs.existsSync(eventPath)) {
  console.log('No GITHUB_EVENT_PATH found or file does not exist. Skipping.');
  process.exit(0);
}

const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
const issue = event.issue;

if (!issue) {
  console.log('Event is not an issue. Skipping.');
  process.exit(0);
}

// Security: Only allow repo owner to publish posts
const repoOwner = process.env.REPO_OWNER || process.env.GITHUB_REPOSITORY_OWNER;
if (repoOwner && issue.user.login.toLowerCase() !== repoOwner.toLowerCase()) {
  console.log(`Issue author (@${issue.user.login}) is not the repo owner (@${repoOwner}). Skipping.`);
  process.exit(0);
}

const title = issue.title.trim();
const rawBody = (issue.body || '').trim();

if (!rawBody && !title) {
  console.log('Empty issue title and body. Skipping.');
  process.exit(0);
}

// Generate date: YYYY-MM-DD
const dateObj = new Date(issue.created_at || Date.now());
const dateStr = dateObj.toISOString().split('T')[0];

// Generate clean URL slug from title
let slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

if (!slug) {
  slug = `thought-${dateStr}-${Date.now().toString().slice(-4)}`;
}

// Generate short description for Astro schema
const cleanText = rawBody
  .replace(/!\[.*?\]\(.*?\)/g, '')
  .replace(/#+\s+/g, '')
  .replace(/\n+/g, ' ')
  .trim();
const description = (cleanText.slice(0, 140) || title).replace(/"/g, '\\"');

// Extract category and tags from issue labels
const labels = (issue.labels || []).map((l) => (typeof l === 'string' ? l : l.name));
const category = labels.length > 0 ? labels[0] : 'Thoughts';
const tags = labels.slice(1);

// Build post frontmatter & preserve 100% of the raw body exactly as written
const postContent = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description}"
pubDate: ${dateStr}
category: "${category}"
tags: ${JSON.stringify(tags)}
draft: false
---

${rawBody}
`;

const postDir = path.resolve('src/content/blog');
if (!fs.existsSync(postDir)) {
  fs.mkdirSync(postDir, { recursive: true });
}

// Avoid overwriting existing posts with the same title
let finalSlug = slug;
let counter = 1;
while (fs.existsSync(path.join(postDir, `${finalSlug}.md`))) {
  finalSlug = `${slug}-${counter}`;
  counter++;
}

const filePath = path.join(postDir, `${finalSlug}.md`);
fs.writeFileSync(filePath, postContent, 'utf8');

console.log(`Successfully created blog post: ${filePath}`);
console.log(`Slug: ${finalSlug}`);

// Export slug for subsequent steps in GitHub Actions
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `slug=${finalSlug}\n`);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `title=${title}\n`);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `post_path=${filePath}\n`);
}

