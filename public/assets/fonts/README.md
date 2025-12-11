Self-hosted fonts guide

This folder holds Open Sans (body) and Oswald (headings) font files for the site.

Recommended filenames (place these files here):

Open Sans (body):

- OpenSans-300.woff2
- OpenSans-Regular.woff2
- OpenSans-600.woff2
- OpenSans-700.woff2

Oswald (headings):

- Oswald-Regular.woff2
- Oswald-500.woff2
- Oswald-700.woff2

Notes

- Download from Google Fonts (Download family) or use a subsetter to reduce size.
- After adding fonts, restart the dev server or rebuild the project:

  ```bash
  npm run dev
  ```

- To speed up loading, add preload links in `index.html` for the critical `.woff2` files:

  ```html
  <link
    rel="preload"
    href="/assets/fonts/OpenSans-Regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
  <link
    rel="preload"
    href="/assets/fonts/Oswald-700.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
  ```
