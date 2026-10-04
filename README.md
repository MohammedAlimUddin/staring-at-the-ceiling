# staring at the ceiling

> Minimalist, slick, and personal blog for raw human thoughts, unhurried reflections, and things noticed while looking upward.

Inspired by the clean hierarchy, instant responsiveness, and smooth navigation of [cp-algorithms.com](https://cp-algorithms.com/).

---

## 🌌 Philosophy: The Human Promise

* **No machine rewriting:** Words are written by human hands. Every imperfection, odd cadence, and colloquialism is intentionally preserved.
* **Zero bloat:** Fast static generation with **Astro**, native **View Transitions** for seamless page changes, and clean typography.
* **You own every word:** Thoughts are stored locally in plain Markdown/HTML files.

---

## 🛠️ The "Editorial Assistant" Workflow

You don't need to learn Markdown or deal with image optimization. Here is how you publish:

1. **Write wherever you want:** MS Word (`.docx`), Notepad, Apple Notes, Google Docs.
2. **Hand off to the AI Assistant:**
   * Either drop your draft and photos into the `inbox/` folder or paste the text directly into the chat with:
     > *"Here is my latest thought and photos. Integrate it into the blog."*
   * The AI follows strict rules in `.gemini/rules/blog-assistant.md` & `AGENT_INSTRUCTIONS.md`:
     * **It will never alter or polish your words.**
     * It will place images in `public/images/posts/[slug]/`.
     * It will configure frontmatter (date, category, tags) and format media embeds.
3. **Review & Push:**
   * Run `npm run dev` to preview in your browser if you like.
   * Run:
     ```bash
     git add .
     git commit -m "feat: new thought"
     git push
     ```
   * GitHub Actions will build and publish your post live in ~30 seconds!

---

## 🚀 Local Development

To run the site locally:

```bash
# Start local development server
npm run dev

# Build the static site for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deploying to GitHub Pages (One-Time Setup)

1. Go to your GitHub repository: [MohammedAlimUddin/staring-at-the-ceiling](https://github.com/MohammedAlimUddin/staring-at-the-ceiling)
2. Click **Settings** (top tab) &rarr; **Pages** (left sidebar).
3. Under **Build and deployment** &rarr; **Source**, select:  
   👉 **GitHub Actions**
4. Push your code:
   ```bash
   git push -u origin main
   ```
5. Your site will automatically go live at:  
   👉 `https://mohammedalimuddin.github.io/staring-at-the-ceiling/`
