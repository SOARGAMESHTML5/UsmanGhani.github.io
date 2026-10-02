# Usman Ghani: Portfolio

Live at **https://usmanghani.soargamesstudio.com/**. It's a static site, so no build step is needed.

## How to update it

**Everything is in [`data.js`](data.js).** You never need to touch the HTML, CSS or JS.

| I want to… | Edit in `data.js` |
|---|---|
| Change my title, tagline, photo, email, socials | `profile` |
| Add a new job | Copy a block in `experience` (newest first). Use `end: "present"` for a current job |
| Add a new project / game | Copy the **TEMPLATE** block at the end of `projects` |
| Add a new project category (e.g. "PC Games") | Add a key to `projectCategories`, then use it in a project's `category` |
| Add a skill | Add a string to any `skills[].items` list, or add a whole new group |
| Update what I'm learning in AI/ML | `lab` (`status`: `Learning`, `Building` or `Done`) |
| Add a certificate | `certifications` (optional `url` makes it a link) |
| Update my CV | Replace `assets/Usman_Ghani_CV.pdf` with the new PDF (same name) |

Years of experience and the project count are calculated automatically.

### Adding a project, step by step
1. Put the cover image and screenshots in `assets/img/`. Keep the file names lowercase with no spaces, e.g. `ai-racer-1.png`.
2. In `data.js`, copy the TEMPLATE block in `projects`, remove the `/*` and `*/` around your copy, and fill it in.
3. Optional: add `video` (a YouTube link), `highlights` (bullet points), and `links` (Play Store, WebGL, GitHub, itch.io…).
4. Set `featured: true` to show it at the top.
5. Its page is `project.html?id=<your-id>`.

> ⚠️ GitHub Pages is **case-sensitive**. `Dino.png` and `dino.png` are different files. If an image works on your PC but not online, check the case.

Icons use [Bootstrap Icons](https://icons.getbootstrap.com/). Use any name from that site, e.g. `bi-github`, `bi-youtube`, `bi-google-play`, `bi-apple`, `bi-steam`, `bi-robot`.

## Preview locally
```bash
python -m http.server 8000
```
Then open http://localhost:8000.

## Publish
```bash
git add -A && git commit -m "Update portfolio" && git push
```
GitHub Pages updates within a minute or two.

## Files
```
index.html          home page (rendered from data.js)
project.html        project detail page (?id=...)
data.js             ← ALL your content
assets/css/site.css styling (dark + light theme)
assets/js/site.js   rendering logic
assets/img/         images
assets/Usman_Ghani_CV.pdf
```
