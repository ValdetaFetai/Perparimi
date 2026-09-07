# Sh.F.K. Përparimi - Çegran

## Project Context

This is a static school website for Sh.F.K. Përparimi in Çegran.

- GitHub repository: `https://github.com/ValdetaFetai/Perparimi`
- Production branch: `main`
- Vercel project: `perparimi`
- Public Vercel URL: `https://perparimi.vercel.app/`
- Framework: plain HTML, CSS, and JavaScript
- Build command: none
- Output directory: repository root (`./`)

Vercel is connected to the GitHub repository and redeploys after pushes to `main`.

## Important Files

- `index.html` contains the page structure and navigation sections.
- `style.css` contains the responsive layout and visual styles.
- `script.js` contains the document catalog, mobile navigation, scroll behavior, and footer year.
- `documents/` contains downloadable school files.
- `logo.jfif` and `school.jfif` are the site image assets.

The mobile menu uses `#menuToggle` and `#mobileMenu`. The JavaScript keeps the menu's `open`, `hidden`, `aria-expanded`, and `aria-label` states synchronized.

Documents displayed in the **Planet dhe programet** section are managed in `script.js`.

## Adding a Document

1. Copy the new file into the `documents/` folder.
2. Open `script.js`.
3. Add a new object to the `documents` list:

```js
{
    title: "Document name",
    description: "PDF document",
    file: "documents/file-name.pdf",
    icon: "📄"
}
```

4. Save the file and refresh the page.

## Current Documents

The catalog currently publishes:

- `documents/programi-vjetor-2026.pdf` as **Programi vjetor 2026** (`PDF dokument`)

The original source file, `documents/programi-vjetor-2026.docx`, is retained in the repository, but the public website links to the PDF version.

## Document Type Examples

- Word: `Word document` with the `📄` icon
- PDF: `PDF document` with the `📕` icon
- Excel: `Excel spreadsheet` with the `📊` icon
- Parent material: `Parent material` with the `📁` icon

The `file` value must match the exact file name and location inside the `documents/` folder.

The static page cannot automatically read the contents of the folder in a browser. For this reason, every new document must be registered in the `documents` list.

## Updating and Deploying

After changing the site:

1. Run the editor diagnostics for `index.html`, `style.css`, and `script.js`.
2. Test the mobile menu and document download link in a browser.
3. Check whitespace with `git diff --check`.
4. Commit the change on `main`.
5. Push to `origin main`; Vercel will deploy the new commit automatically.

Recent production commits:

- `31f7753` - Add annual program PDF
- `730d018` - Fix mobile navigation and clean up site

The repository previously contained duplicated HTML/CSS content and unresolved merge-conflict sections. Those were removed during the production cleanup. Do not reintroduce a second HTML document or a second unused stylesheet copy.
