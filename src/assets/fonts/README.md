# Font files

Taruh file font berlisensi di folder ini:

- `Lucidity.woff2` / `Lucidity.ttf` → dipakai untuk semua heading besar
  (class `font-heading`, mis. "REGISTER ACCOUNT", "CHOOSE YOUR PLAN").
- `HarlowSolid.woff2` / `HarlowSolid.ttf` → dipakai untuk eyebrow/sub
  heading miring (class `font-subheading` / `.eyebrow`, mis. "Sponsored By",
  "Frequently Asked Question").

Selama file belum ditaruh di sini, `@font-face` di `src/styles/index.css`
otomatis gagal senyap dan browser jatuh ke font fallback yang sudah
diatur di `tailwind.config.js` (Baloo 2 / Fredoka untuk heading, Playfair
Display italic untuk sub heading) — jadi tampilan tetap rapi walau font
asli belum tersedia.
