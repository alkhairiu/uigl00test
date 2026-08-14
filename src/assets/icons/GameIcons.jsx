// ================================================================
// GAME ICONS
// ================================================================
//
// Game icons berada di folder:
//
// public/
// ├── mobile-legends.svg
// ├── efootball.svg
// ├── pubg-mobile.svg
// └── valorant.svg
//
// File di dalam public/ dipanggil langsung menggunakan:
// "/nama-file.svg"
//
// Tidak perlu import.
// ================================================================


// ================================================================
// MOBILE LEGENDS
// ================================================================

export function ControllerIcon({ className = "w-10 h-10" }) {
  return (
    <img
      src="/mobile-legends.svg"
      alt="Mobile Legends"
      className={`${className} object-contain`}
    />
  );
}


// ================================================================
// EFOOTBALL
// ================================================================

export function BallIcon({ className = "w-10 h-10" }) {
  return (
    <img
      src="/efootball.svg"
      alt="EFootball"
      className={`${className} object-contain`}
    />
  );
}


// ================================================================
// PUBG MOBILE
// ================================================================

export function ShieldIcon({ className = "w-10 h-10" }) {
  return (
    <img
      src="/pubg-mobile.svg"
      alt="PUBG Mobile"
      className={`${className} object-contain`}
    />
  );
}


// ================================================================
// VALORANT
// ================================================================

export function CrosshairIcon({ className = "w-10 h-10" }) {
  return (
    <img
      src="/valorant.svg"
      alt="Valorant"
      className={`${className} object-contain`}
    />
  );
}


// ================================================================
// ICON MAP
// ================================================================

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
// FLAME LOGO
// ================================================================
//
// Saat ini file logo yang tersedia di public adalah vite.svg.
// Kalau nanti kamu punya logo sendiri, misalnya:
//
// public/logo.svg
//
// cukup ubah src menjadi:
// "/logo.svg"
// ================================================================

export function FlameLogo({ className = "w-9 h-9" }) {
  return (
    <img
      src="/vite.svg"
      alt="UI Games League"
      className={`${className} object-contain`}
    />
  );
}