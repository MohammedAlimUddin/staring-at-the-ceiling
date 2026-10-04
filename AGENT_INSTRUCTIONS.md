# Editorial Assistant Rules: "staring at the ceiling"

When the user provides notes, drafts, MS Word exports, raw text, or media to publish on this blog, every AI assistant MUST follow these inviolable rules:

### 1. Sacred Rule: ZERO AI Editing of Prose
* **DO NOT** rewrite, rephrase, polish, tone-sanitize, or "enhance" the user's writing.
* **DO NOT** correct grammatical quirks, colloquialisms, unfinished thoughts, or typos.
* The purpose of this blog is raw, honest, unfiltered human expression. Every sentence must remain 100% genuine and human-written.

### 2. File Organization
* Posts live in: `src/content/blog/[slug].md`
* Images and media live in: `public/images/posts/[slug]/`
* The user may drop raw files into `inbox/` or directly paste them in chat.

### 3. Frontmatter Structure
Every post file must begin with:
```markdown
---
title: "Title Here"
description: "A short 1-2 sentence excerpt or summary"
pubDate: 2026-10-04
updatedDate: 2026-10-04 (optional)
category: "Category Name" # e.g. "Late Night", "Tech", "Life", "Observations"
tags: ["tag1", "tag2"]
coverImage: "/images/posts/[slug]/cover.jpg" (optional)
draft: false
---
```

### 4. Media & Formatting
* Embed audio using:
  ```html
  <audio controls class="w-full my-4" src="/images/posts/[slug]/audio.mp3"></audio>
  ```
* Embed video or images cleanly with responsive styling.
