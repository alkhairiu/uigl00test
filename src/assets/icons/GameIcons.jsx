// ================================================================
// GAME ICONS
// ================================================================

// Ikon generik bergaya "esport" untuk tiap game.

export function ControllerIcon({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 18h20a8 8 0 0 1 8 8.4l-.6 6a5 5 0 0 1-8.6 3.1L29 31.6a3 3 0 0 0-2.2-1H21.2a3 3 0 0 0-2.2 1l-3.8 3.9a5 5 0 0 1-8.6-3.1l-.6-6A8 8 0 0 1 14 18Z"
        fill="currentColor"
      />
      <circle cx="16" cy="26" r="1.6" fill="#0B2A4D" />
      <path
        d="M16 23.4v5.2M13.4 26h5.2"
        stroke="#0B2A4D"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="33" cy="24" r="1.4" fill="#0B2A4D" />
      <circle cx="29" cy="28" r="1.4" fill="#0B2A4D" />
    </svg>
  );
}

export function BallIcon({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="16" fill="currentColor" />
      <path
        d="M24 14l5 3.6-1.9 5.9h-6.2L19 17.6 24 14ZM12.5 22l4.4 3.2M35.5 22l-4.4 3.2M16 33l4.6-1.6M32 33l-4.6-1.6M17.9 23.5l-1.6 4.9M30.1 23.5l1.6 4.9"
        stroke="#0B2A4D"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 6 38 11v11c0 10-6 17.5-14 20-8-2.5-14-10-14-20V11L24 6Z"
        fill="currentColor"
      />
      <path
        d="M18 24.5 22 28.5 30.5 19.5"
        stroke="#0B2A4D"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrosshairIcon({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r="15"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <path
        d="M24 3v9M24 36v9M3 24h9M36 24h9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const iconMap = {
  controller: ControllerIcon,
  ball: BallIcon,
  shield: ShieldIcon,
  crosshair: CrosshairIcon,
};


// ================================================================
// PHOENIX LOGO
// ================================================================

export function PhoenixLogo({ className = "w-9 h-9" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 32c0-8 4-14 8-18-1 6 2 8 4 4C20 12 22 8 24 4c2 4 4 8 6 14 2 4 5 2 4-4 4 4 8 10 8 18 0 7-8 12-18 12S6 39 6 32Z"
        fill="url(#phoenixWing)"
      />
      <path
        d="M24 14c3 0 5 4 5 10 0 6-2 12-5 18-3-6-5-12-5-18 0-6 2-10 5-10Z"
        fill="url(#phoenixBody)"
      />

      <defs>
        <linearGradient
          id="phoenixWing"
          x1="6"
          y1="4"
          x2="42"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#124A85" />
          <stop offset="1" stopColor="#081B33" />
        </linearGradient>

        <linearGradient
          id="phoenixBody"
          x1="19"
          y1="14"
          x2="29"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5C451" />
          <stop offset="1" stopColor="#B8860B" />
        </linearGradient>
      </defs>
    </svg>
  );
}


// ================================================================
// FLAME LOGO — GANTI DENGAN LOGO SENDIRI
// ================================================================

// IMPORT LOGO DARI ASSETS
// Sesuaikan path dengan lokasi file logo kamu.
//
// Contoh:
// src/
// ├── assets/
// │   └── images/
// │       └── logo.png
//
// Kalau GameIcons.jsx berada di:
// src/assets/icons/GameIcons.jsx
//
// maka path-nya:
// ../images/logo.png

import logo from "../../../public/vite.svg";


export function FlameLogo({ className = "w-9 h-9" }) {
  return (
    <img
      src={logo}
      alt="UI Games League"
      className={`${className} object-contain`}
    />
  );
}