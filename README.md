# Firdaus Samad | Portfolio (Angular)

Personal portfolio for Firdaus Samad, Front End Developer and Software Test Automation.

## Tech stack

- Angular 22 (standalone components, signals, new control flow, zoneless)
- TypeScript
- Bootstrap 5.3 and Bootstrap Icons
- Google Fonts: Outfit, Literata

## Features

- Responsive layout: fixed sidebar on desktop, compact top bar with a menu button on phones and tablets
- Sidebar highlights the section you are reading
- Hero with photo and highlighted tech chips
- Profile summary, key skills, work experience, education, certifications
- All content in one data file, so no template changes are needed to update text

## Requirements

- Node.js 22.22.3 or newer (or 24.15+ / 26+)
- npm

## Getting started

```bash
npm install
npm start
```

Open http://localhost:4200.

## Scripts

| Command         | What it does                                                    |
| --------------- | --------------------------------------------------------------- |
| `npm start`     | Start the dev server with live reload                           |
| `npm run build` | Create the production build in `dist/firdaus-portfolio/browser` |

## Project structure

```
├── public/
│   └── photo.jpg                 Profile photo
├── src/
│   ├── app/
│   │   ├── app.component.ts      Component logic (menu, active section)
│   │   ├── app.component.html    Page layout (Bootstrap classes)
│   │   └── data.ts               All portfolio content
│   ├── index.html
│   ├── main.ts                   Entry point
│   └── styles.css                Theme colours, fonts and custom styles
├── angular.json
├── package.json
└── tsconfig.json
```

## How to edit

- **Text and content:** edit `src/app/data.ts` (name, summary, skills, experience, education, certifications, contact details).
- **Social links and resume:** set `linkedin`, `github` and `resumeUrl` in `src/app/data.ts`. Buttons appear only when a value is set. For the resume, put the PDF in `public/` and use its file name.
- **Layout and spacing:** edit the Bootstrap classes in `src/app/app.component.html` (`container-xl`, `row`, `col-*`, `card`, `badge`, `gap-*`).
- **Navigation items:** edit the `links` array in `src/app/app.component.ts`. Each `id` must match a section `id` in the HTML.
- **Colours and fonts:** change the CSS variables at the top of `src/styles.css`.
- **Photo:** replace `public/photo.jpg` with a square image. A larger photo gives a sharper result.

## Deploy

```bash
npm run build
```

Upload the contents of `dist/firdaus-portfolio/browser` to any static host, such as Netlify, Firebase Hosting, GitHub Pages or Cloudflare Pages.

If the site is served from a sub-folder (for example GitHub Pages at `/repo-name/`), build with:

```bash
npx ng build --base-href /repo-name/
```

## Troubleshooting

- **Install or CLI errors:** check your Node version with `node -v`. Angular 22 does not run on older Node versions.
- **Photo not showing:** make sure `public/photo.jpg` exists. The path in the template is `photo.jpg`, relative to the base href.
- **Icons missing:** run `npm install` again to make sure `bootstrap-icons` is installed.
- **Sidebar not highlighting a section:** the section `id` must match an `id` in the `links` array.
