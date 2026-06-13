# Davoud Kalantari Portfolio

Static personal portfolio website for an early-career data, machine learning and analytics profile. The site is designed to be recruiter-friendly, responsive and easy to preview locally without build tools or frameworks.

## Folder structure

```text
index.html
assets/
  css/
    style.css
  js/
    main.js
  img/
    profile-main.jpg
  cv/
    CV_Davoud_Kalantari_EN_public.pdf
    CV_Davoud_Kalantari_IT_public.pdf
README.md
```

## Local preview

Open `index.html` directly in a browser by double-clicking it. No server, package manager or build step is required.

## Where to replace placeholders

- English CV: `assets/cv/CV_Davoud_Kalantari_EN_public.pdf`
- Italian CV: `assets/cv/CV_Davoud_Kalantari_IT_public.pdf`
- LinkedIn profile: `https://www.linkedin.com/in/davoud-kalantari/`
- GitHub profile: `https://github.com/Davoud-kalantari`
- GitHub repository links for projects: replace the `href="#"` project buttons in `index.html`

## Notes about the profile image

The main image is loaded from:

`assets/img/profile-main.jpg`

The site references it normally from HTML and does not embed it as base64.

## Later deployment to GitHub Pages

When you are ready to publish:

1. Create or use the repository `Davoud-kalantari.github.io`
2. Add these static files to that repository
3. Commit and push to the default branch
4. Enable GitHub Pages if needed from the repository settings
5. The final public URL should be `https://davoud-kalantari.github.io`

## Current sections included

- Navigation
- Hero
- About
- Skills
- Experience
- Featured Projects
- Certifications
- Contact
- Footer
