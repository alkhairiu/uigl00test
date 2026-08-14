import { Link } from "react-router-dom";

const stats = [
  {
    label: "Peserta Terdaftar",
    value: "1.200+",
  },
  {
    label: "Total Hadiah",
    value: "Rp 53 Juta",
  },
  {
    label: "Kategori Game",
    value: "4",
  },
];

// 1. Background Bintang
function BackgroundStars() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g fill="url(#star-glow)">
        <path d="M 150 80 Q 150 100 130 100 Q 150 100 150 120 Q 150 100 170 100 Q 150 100 150 80 Z" className="animate-pulse" />
        <path d="M 850 120 Q 850 135 835 135 Q 850 135 850 150 Q 850 135 865 135 Q 850 135 850 120 Z" className="animate-pulse" />
        <path d="M 300 350 Q 300 365 285 365 Q 300 365 300 380 Q 300 365 315 365 Q 300 365 300 350 Z" />
        <path d="M 1150 250 Q 1150 270 1130 270 Q 1150 270 1150 290 Q 1150 270 1170 270 Q 1150 270 1150 250 Z" className="animate-pulse" />
      </g>

      <g fill="#FFFFFF">
        <circle cx="8%" cy="15%" r="1.5" opacity="0.8" />
        <circle cx="18%" cy="35%" r="1" opacity="0.5" />
        <circle cx="25%" cy="10%" r="2" opacity="0.9" />
        <circle cx="38%" cy="22%" r="1.2" opacity="0.7" />
        <circle cx="62%" cy="18%" r="2" opacity="0.8" />
        <circle cx="72%" cy="32%" r="1.5" opacity="0.6" />
        <circle cx="92%" cy="28%" r="2.5" opacity="0.9" />
        <circle cx="88%" cy="60%" r="1.5" opacity="0.7" />
      </g>
    </svg>
  );
}

// 2. Desain Tiang Modern (Futuristic Pylon / Esports Pillar)
function LeftPillarSVG() {
  return (
    <svg
      viewBox="0 0 200 1000"
      preserveAspectRatio="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gold-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8A6419" />
          <stop offset="30%" stopColor="#E2B144" />
          <stop offset="50%" stopColor="#FFF2B2" />
          <stop offset="70%" stopColor="#D4A02A" />
          <stop offset="100%" stopColor="#63450B" />
        </linearGradient>

        <linearGradient id="marble-shaft-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8C9BB0" />
          <stop offset="15%" stopColor="#DDE5ED" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="85%" stopColor="#C4D1DF" />
          <stop offset="100%" stopColor="#69798E" />
        </linearGradient>

        <linearGradient id="pedestal-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A3B1C2" />
          <stop offset="25%" stopColor="#EBF0F5" />
          <stop offset="75%" stopColor="#D1DCE8" />
          <stop offset="100%" stopColor="#7B8CA0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="200" height="25" fill="url(#gold-grad-left)" />
      <rect x="10" y="25" width="180" height="35" fill="url(#marble-shaft-left)" />
      <rect x="5" y="60" width="190" height="15" fill="url(#gold-grad-left)" />
      <path d="M15,75 L185,75 L165,120 L35,120 Z" fill="url(#marble-shaft-left)" />
      <rect x="25" y="120" width="150" height="12" fill="url(#gold-grad-left)" />

      <rect x="35" y="132" width="130" height="668" fill="url(#marble-shaft-left)" />

      {/* Garis Motif Pilar */}
      <line x1="50" y1="132" x2="50" y2="800" stroke="rgba(100,116,139,0.3)" strokeWidth="3" />
      <line x1="65" y1="132" x2="65" y2="800" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
      <line x1="80" y1="132" x2="80" y2="800" stroke="rgba(100,116,139,0.25)" strokeWidth="3" />
      <line x1="100" y1="132" x2="100" y2="800" stroke="rgba(255,255,255,0.9)" strokeWidth="4" />
      <line x1="120" y1="132" x2="120" y2="800" stroke="rgba(100,116,139,0.25)" strokeWidth="3" />
      <line x1="135" y1="132" x2="135" y2="800" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
      <line x1="150" y1="132" x2="150" y2="800" stroke="rgba(100,116,139,0.3)" strokeWidth="3" />

      <rect x="30" y="450" width="140" height="16" fill="url(#gold-grad-left)" />

      <path d="M35,800 L165,800 L180,830 L20,830 Z" fill="url(#marble-shaft-left)" />
      <rect x="15" y="830" width="170" height="15" fill="url(#gold-grad-left)" />

      <rect x="0" y="845" width="200" height="130" fill="url(#pedestal-left)" />

      <rect x="15" y="860" width="170" height="100" fill="none" stroke="url(#gold-grad-left)" strokeWidth="3" rx="4" />
      <path d="M 40,910 C 60,875 80,945 100,910 C 120,875 140,945 160,910" fill="none" stroke="url(#gold-grad-left)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="910" r="8" fill="url(#gold-grad-left)" />
      <circle cx="60" cy="910" r="5" fill="url(#gold-grad-left)" />
      <circle cx="140" cy="910" r="5" fill="url(#gold-grad-left)" />

      <rect x="0" y="975" width="200" height="25" fill="url(#gold-grad-left)" />
    </svg>
  );
}

// 3. Pilar Kanan
function RightPillarSVG() {
  return (
    <div className="w-full h-full [transform:rotateY(180deg)]">
      <LeftPillarSVG />
    </div>
  );
}

function SloganArchHighlight() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-4 md:top-20 w-[95%] max-w-[850px] pointer-events-none z-0">
      <svg
        viewBox="0 0 800 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto opacity-70 md:opacity-80"
      >
        <defs>
          <linearGradient id="arch-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A6419" stopOpacity="0.2" />
            <stop offset="25%" stopColor="#E2B144" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFF2B2" stopOpacity="1" />
            <stop offset="75%" stopColor="#E2B144" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8A6419" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path d="M 50,300 L 50,160 Q 400,0 750,160 L 750,300" stroke="url(#arch-gold)" strokeWidth="2" fill="none" />
        <path d="M 80,300 L 80,170 Q 400,25 720,170 L 720,300" stroke="url(#arch-gold)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
        
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        max-w-[1500px]
        mx-auto
        px-10
        sm:px-16
        md:px-20
        lg:px-24
        pt-16
        sm:pt-24
        md:pt-40
        pb-16
        md:pb-36
        text-center
        overflow-hidden
        {/* Latar belakang diperbarui agar lebih cerah menyerupai langit di gambar referensi */}
      "
    >
      <BackgroundStars />

      <div className="absolute top-0 bottom-0 left-0 z-10 w-10 sm:w-20 md:w-36 lg:w-52 pointer-events-none select-none">
        <LeftPillarSVG />
      </div>

      <div className="absolute top-0 bottom-0 right-0 z-10 w-10 sm:w-20 md:w-36 lg:w-52 pointer-events-none select-none">
        <RightPillarSVG />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto">
        <SloganArchHighlight />

        <div className="inline-flex items-center justify-center relative z-10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-amber-400/60 bg-[#050e24]/90 backdrop-blur-md mb-4 sm:mb-6">
          <span className="font-sans font-bold text-amber-200 text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase">
            UI Games League 2026
          </span>
        </div>

        <h2 className="relative z-10 font-subheading text-white text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.95] tracking-tight mt-2 sm:mt-4">
          Trive
          <br className="hidden md:block" />
          {" "}To{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            Triumph
          </span>
        </h2>

        <p className="relative z-10 font-body text-white/90 max-w-2xl mx-auto mt-5 sm:mt-7 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          Turnamen esport antar sekolah &amp; kampus terbesar tahun ini.
          Pilih game favoritmu, daftarkan tim, dan rebut jalanmu menuju
          grand final.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 md:gap-6 mt-8 sm:mt-10 px-4 sm:px-0">
          <Link to="/plan" className="btn-gold w-full sm:w-auto min-w-[180px] sm:min-w-[190px] text-base md:text-lg py-3">
            Lihat Kompetisi
          </Link>

          <Link to="/register" className="btn-outline w-full sm:w-auto min-w-[180px] sm:min-w-[190px] text-base md:text-lg py-3">
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}