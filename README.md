# Firdaus Samad – Angular Portfolio

Angular 22 (standalone components, signals, zoneless) + Bootstrap 5.3 + Bootstrap Icons.

## Run
```
npm install
npm start
```
Needs a current Node.js LTS (Angular 22 requires Node 22.22.3+, 24.15+ or 26+). Open http://localhost:4200

## Edit
- **Content:** everything is in `src/app/data.ts` (name, summary, skills, experience, education, certifications).
- **Layout:** `src/app/app.component.html` uses plain Bootstrap classes (`container`, `row`, `col-*`, `card`, `badge`), so spacing and columns can be changed directly in the markup.
- **Colours and fonts:** `src/styles.css`, at the top (Bootstrap CSS variables).
- **Photo:** replace `public/photo.jpg` with a larger square photo for a sharper result.

## Publish
```
npm run build
```
Upload the contents of `dist/firdaus-portfolio/browser` to Netlify, Firebase Hosting, GitHub Pages or any static host.
