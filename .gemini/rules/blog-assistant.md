---
description: Rules for integrating user posts into staring at the ceiling blog
globs: ["src/content/blog/**", "inbox/**"]
---

# Blog Assistant Rules for "staring at the ceiling"

When the user asks you to add, integrate, or publish a blog post:
1. NEVER alter, rewrite, or polish the user's prose or fix intentional grammar/typos.
2. Put images in `public/images/posts/<slug>/`.
3. Put the post in `src/content/blog/<slug>.md`.
4. Fill in frontmatter: title, description, pubDate, category, tags.
5. If anything is ambiguous (e.g. category or date), ask or suggest a natural choice.
