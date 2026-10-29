# Nebula AI — Lunar (Browser Edition)

A Chromebook-friendly, static browser workspace hosted with GitHub Pages. No installer or local program is required.

## Features
- Responsive Nebula-inspired chat UI.
- Browse **public** GitHub repository files and include up to five small files in a prompt.
- Store recent prompt history in this browser's local storage.
- Open ChatGPT in a new tab with a prepared prompt.
- No API key is requested or stored.

## Important AI connection limitation
This browser edition does **not** use ChatGPT's private internal APIs and cannot inherit a ChatGPT consumer login session as an API credential. The "Continue in ChatGPT" action opens ChatGPT with the prompt query; review the prompt and send it in ChatGPT. It does not silently send messages or make ChatGPT responses appear inside this page. A supported API/backend integration would be required for direct in-page AI responses, and that is intentionally not included here.

## Deploy on GitHub Pages
1. Open the repository Settings → Pages.
2. Under Build and deployment, choose **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`, then Save.
4. Wait for GitHub Pages to publish. The site URL is typically `https://lun4rscrip1ts.github.io/Nebula-AI-Lunar/`.

The public repository explorer uses GitHub's unauthenticated public API and may be subject to rate limits. Private repositories are not supported by this static page. The site never commits or writes files to GitHub.

## Privacy
Chat history stays in local storage in the browser used to open the site. Don't paste credentials, tokens, or sensitive information into prompts.