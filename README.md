# ARENA — Website Kompetisi Esport

Website turnamen esport (Mobile Legends, PUBG Mobile, Valorant, eFootball)
dibangun dengan **React + Vite + React Router + Tailwind CSS**, dibuat
mengikuti mockup: Home, Choose Your Plan, Game Detail, Register Account,
dan Competition/Bracket page.

## Menjalankan project

```bash
npm install
npm run dev       # jalan di http://localhost:5173
npm run build      # build production ke folder dist/
npm run preview    # preview hasil build
```

## Struktur folder

```
esports-website/
├── public/                     # asset statis (favicon, dll)
├── src/
│   ├── assets/
│   │   ├── fonts/              # taruh Lucidity & Harlow Solid di sini (lihat README di dalamnya)
│   │   ├── images/             # foto/gambar (logo sponsor, banner, dll)
│   │   └── icons/
│   │       └── GameIcons.jsx   # ikon SVG generik tiap game + logo flame
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # navbar sticky + menu mobile
│   │   │   └── Footer.jsx
│   │   ├── ui/                 # komponen kecil yang dipakai berulang
│   │   │   ├── Countdown.jsx   # countdown "Register Before"
│   │   │   ├── Accordion.jsx   # FAQ accordion
│   │   │   ├── Tabs.jsx        # tab Overview / Matches
│   │   │   └── SectionHeading.jsx
│   │   └── sections/           # blok besar per section halaman
│   │       ├── Hero.jsx
│   │       ├── AboutUs.jsx
│   │       ├── CompetitionTypes.jsx   # grid "Jenis Lomba"
│   │       ├── WhoCanJoin.jsx
│   │       ├── TimelineSection.jsx
│   │       ├── RegisterBefore.jsx
│   │       ├── Sponsors.jsx
│   │       ├── FAQSection.jsx
│   │       ├── CTASection.jsx         # "Choose Your Path Now!"
│   │       ├── TeamContribution.jsx
│   │       ├── Bracket.jsx
│   │       └── PlayerGrid.jsx
│   │
│   ├── pages/                  # 1 file = 1 halaman/route
│   │   ├── HomePage.jsx
│   │   ├── ChoosePlanPage.jsx  # "Choose Your Plan"
│   │   ├── GameDetailPage.jsx  # detail per game (Mobile Legends, dst) — dinamis via slug
│   │   ├── CompetitionPage.jsx # bracket, klasemen tim, player
│   │   ├── RegisterPage.jsx    # "Register Account" (form interaktif)
│   │   └── NotFoundPage.jsx
│   │
│   ├── data/
│   │   └── games.js            # sumber data tunggal daftar game/turnamen
│   │
│   ├── hooks/
│   │   └── useScrollToTop.js
│   │
│   ├── styles/
│   │   └── index.css           # Tailwind + @font-face Lucidity/Harlow Solid
│   │
│   ├── App.jsx                 # routing + layout (Navbar/Footer)
│   └── main.jsx                # entry point React
│
├── index.html
├── tailwind.config.js          # token warna navy/gold + font family
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Routing

| Path              | Halaman                                  |
| ----------------- | ----------------------------------------- |
| `/`                | Home (hero, about, jenis lomba, FAQ, dll) |
| `/plan`            | Choose Your Plan (pilih game)             |
| `/game/:slug`      | Detail game, contoh `/game/mobile-legends`|
| `/competition`     | Bracket, klasemen tim, daftar player      |
| `/register`        | Form Register Account                     |

## Tipografi

Diatur terpusat di `tailwind.config.js` → `theme.extend.fontFamily`:

- **Heading** (`font-heading` / class `.heading-hero`) → **Lucidity**, dipakai
  di judul besar seperti "REGISTER ACCOUNT", "CHOOSE YOUR PLAN".
- **Sub heading** (`font-subheading` / class `.eyebrow`) → **Harlow Solid**,
  dipakai untuk label miring kecil di atas judul, mis. "Sponsored By".
- **Body** (`font-body`) → **Montserrat**, dipakai untuk semua paragraf,
  tombol, label form, dll.

Lucidity & Harlow Solid adalah font berlisensi (bukan Google Fonts), jadi
file fontnya tidak disertakan. Lihat `src/assets/fonts/README.md` untuk cara
memasangnya — sebelum file itu ada, tampilan otomatis pakai fallback yang
mirip agar tetap rapi.

## Interaktivitas yang sudah dibangun

- Navbar sticky dengan menu mobile (hamburger toggle).
- Countdown "Register Before" yang berjalan tiap detik (real-time).
- Tab "Overview / Matches" tanpa reload halaman.
- FAQ accordion (expand/collapse).
- Form Register dengan validasi client-side & pesan sukses.
- Routing antar halaman dengan React Router (termasuk halaman dinamis per game).

## Catatan

Logo game (Mobile Legends, PUBG Mobile, Valorant, eFootball) di mockup
adalah trademark resmi masing-masing publisher, sehingga di kode ini
diganti ikon generik (`src/assets/icons/GameIcons.jsx`) sebagai placeholder
aman secara hak cipta. Ganti dengan logo resmi (file gambar di
`src/assets/images/`) sesuai kebutuhan lisensi kamu.
