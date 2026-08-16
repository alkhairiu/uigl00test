import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

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


const LOGO_SRC = "/vite.svg";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Keyframes lokal khusus section ini — tidak menyentuh tailwind.config
function HeroStyles() {
  return (
    <style>{`
      @keyframes hero-float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }
      @keyframes hero-pulse-glow {
        0%, 100% { opacity: 0.5; filter: drop-shadow(0 0 6px rgba(226,177,68,0.35)); }
        50% { opacity: 1; filter: drop-shadow(0 0 26px rgba(226,177,68,0.85)); }
      }
      @keyframes hero-shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes hero-rise {
        from { opacity: 0; transform: translateY(22px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes hero-pop {
        from { opacity: 0; transform: scale(0.85) translateY(14px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
      }
      @keyframes hero-bounce-y {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(6px); }
      }
      @keyframes ember-rise {
        0% { transform: translateY(0) scale(0.6); opacity: 0; }
        15% { opacity: 1; }
        90% { opacity: 0.4; }
        100% { transform: translateY(-170px) scale(1); opacity: 0; }
      }
      .hero-rise { opacity: 0; animation: hero-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      .hero-pop { opacity: 0; animation: hero-pop 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      .hero-float { animation: hero-float 5s ease-in-out infinite; }
      .hero-pulse-glow { animation: hero-pulse-glow 2.6s ease-in-out infinite; }
      .hero-shimmer-text { background-size: 200% auto; animation: hero-shimmer 3.5s linear infinite; }
      .hero-scroll-cue { animation: hero-bounce-y 1.8s ease-in-out infinite; }
      .hero-ember { position: absolute; bottom: 12%; border-radius: 9999px; animation-name: ember-rise; animation-timing-function: ease-out; animation-iteration-count: infinite; }
      @media (prefers-reduced-motion: reduce) {
        .hero-rise, .hero-pop, .hero-float, .hero-pulse-glow, .hero-shimmer-text, .hero-scroll-cue, .hero-ember {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
      }
    `}</style>
  );
}

// Latar bintang + nebula, sedikit parallax mengikuti kursor di seluruh section
function BackgroundStars({ offsetX, offsetY }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90 transition-transform duration-300 ease-out"
      style={{ transform: `translate(${offsetX * 8}px, ${offsetY * 8}px)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="nebula-glow" cx="50%" cy="10%" r="70%">
          <stop offset="0%" stopColor="#3B5BA8" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#16264F" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#050e24" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#nebula-glow)" />

      <g fill="url(#star-glow)">
        <path d="M 150 80 Q 150 100 130 100 Q 150 100 150 120 Q 150 100 170 100 Q 150 100 150 80 Z" className="animate-pulse" />
        <path d="M 950 90 Q 950 105 935 105 Q 950 105 950 120 Q 950 105 965 105 Q 950 105 950 90 Z" className="animate-pulse" />
        <path d="M 300 400 Q 300 415 285 415 Q 300 415 300 430 Q 300 415 315 415 Q 300 415 300 400 Z" />
        <path d="M 1200 300 Q 1200 320 1180 320 Q 1200 320 1200 340 Q 1200 320 1220 320 Q 1200 320 1200 300 Z" className="animate-pulse" />
      </g>

      <g fill="#FFFFFF">
        <circle cx="6%" cy="18%" r="1.5" opacity="0.8" />
        <circle cx="12%" cy="60%" r="1" opacity="0.4" />
        <circle cx="20%" cy="38%" r="1" opacity="0.5" />
        <circle cx="28%" cy="12%" r="2" opacity="0.9" />
        <circle cx="34%" cy="75%" r="1" opacity="0.3" />
        <circle cx="42%" cy="25%" r="1.2" opacity="0.7" />
        <circle cx="60%" cy="15%" r="1.5" opacity="0.6" />
        <circle cx="68%" cy="70%" r="1.2" opacity="0.4" />
        <circle cx="76%" cy="35%" r="1.5" opacity="0.6" />
        <circle cx="90%" cy="22%" r="2.5" opacity="0.9" />
        <circle cx="86%" cy="55%" r="1.5" opacity="0.7" />
        <circle cx="94%" cy="82%" r="1" opacity="0.4" />
      </g>
    </svg>
  );
}

// Pembatas diagonal ala "papan skor" antar dua kolom, hanya tampil di desktop
function DiagonalDivider() {
  return (
    <div className="hidden lg:block absolute inset-y-[6%] left-1/2 w-px z-10 pointer-events-none">
      <div className="absolute inset-0 -translate-x-1/2 skew-x-[-8deg] w-[3px] bg-gradient-to-b from-transparent via-amber-300/80 to-transparent" />
      <div className="absolute inset-0 -translate-x-1/2 skew-x-[-8deg] w-3 blur-md bg-gradient-to-b from-transparent via-amber-400/30 to-transparent" />
      <div className="hero-pulse-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-gradient-to-br from-[#FFF2B2] via-[#E2B144] to-[#8A6419]" />
    </div>
  );
}

// Percikan api mengambang di sekitar logo — jumlahnya bertambah saat logo disentuh kursor


// Panggung logo: tilt 3D mengikuti kursor + lingkaran cahaya berdenyut + percikan api
function LogoStage() {
  const wrapperRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [ignited, setIgnited] = useState(false);
  const reduced = useMemo(prefersReducedMotion, []);

  const handleMove = (e) => {
    if (reduced) return;
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -14, y: px * 16 });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIgnited(false);
  };

  return (
    <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px]">
    

      {/* Cincin cahaya berdenyut di belakang logo */}
      <div
        className="hero-pulse-glow absolute inset-6 sm:inset-8 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(226,177,68,0.35) 0%, rgba(59,91,168,0.15) 55%, transparent 75%)" }}
      />

      <div style={{ perspective: "900px" }} className="absolute inset-0 hero-float">
        <div
          ref={wrapperRef}
          onMouseMove={handleMove}
          onMouseEnter={() => !reduced && setIgnited(true)}
          onMouseLeave={handleLeave}
          className="relative w-full h-full flex items-center justify-center cursor-pointer transition-transform duration-200 ease-out"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          <img
            src={LOGO_SRC}
            alt="Lambang UI Games League 2026"
            className="w-[100%] h-[100%] object-contain select-none pointer-events-none drop-shadow-[0_0_28px_rgba(226,177,68,0.45)]"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}



function parseStat(raw) {
  const match = raw.match(/\d[\d.]*/);
  if (!match) return { prefix: raw, number: null, suffix: "" };
  const numStr = match[0];
  const idx = raw.indexOf(numStr);
  return {
    prefix: raw.slice(0, idx),
    number: parseInt(numStr.replace(/\./g, ""), 10),
    suffix: raw.slice(idx + numStr.length),
  };
}

function AnimatedStat({ label, value, delay }) {
  const { prefix, number, suffix } = parseStat(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (number === null) return;
    if (prefersReducedMotion()) {
      setDisplay(number);
      return;
    }
    let raf;
    const duration = 1400;
    const startTime = performance.now() + delay;

    const tick = (now) => {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(number * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [number, delay]);

  return (
    <div
      className="hero-rise flex flex-col items-center px-6 sm:px-8 first:pl-0 last:pr-0 group"
      style={{ animationDelay: `${0.9 + delay / 1000}s` }}
    >
      <span className="font-subheading text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 text-xl sm:text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110">
        {prefix}
        {number !== null ? display.toLocaleString("id-ID") : ""}
        {suffix}
      </span>
      <span className="font-sans text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.15em] mt-1 text-center">
        {label}
      </span>
    </div>
  );
}

// Garis energi tipis dengan percikan berjalan, di bawah baris statistik

// Tombol "magnetic" — sedikit menarik ke arah kursor + spotlight mengikuti kursor
function MagneticButton({ to, variant, children }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const moveX = ((relX - rect.width / 2) / (rect.width / 2)) * 6;
    const moveY = ((relY - rect.height / 2) / (rect.height / 2)) * 6;
    setStyle({ transform: `translate(${moveX}px, ${moveY}px)` });
    setSpot({ x: (relX / rect.width) * 100, y: (relY / rect.height) * 100 });
  };

  return (
    <Link
      ref={ref}
      to={to}
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle({ transform: "translate(0px, 0px)" })}
      style={style}
      className={`relative overflow-hidden transition-transform duration-200 ease-out w-full sm:w-auto min-w-[180px] sm:min-w-[190px] text-base md:text-lg py-3 ${
        variant === "gold" ? "btn-gold" : "btn-outline"
      }`}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(120px circle at ${spot.x}% ${spot.y}%, rgba(255,242,178,0.35), transparent 70%)` }}
      />
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setParallax({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const scrollToNext = () => {
    const el = sectionRef.current;
    const next = el?.nextElementSibling;
    if (next) next.scrollIntoView({ behavior: "smooth" });
    else window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 pt-16 sm:pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden"
    >
      <HeroStyles />
      <BackgroundStars offsetX={parallax.x} offsetY={parallax.y} />
      <DiagonalDivider />

      {mounted && (
        <div className="pt-10 relative z-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-16 xl:gap-24 lg:min-h-[520px]">
          {/* Kolom konten */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2
              className="hero-rise font-subheading text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mt-5 sm:mt-7"
              style={{ animationDelay: "0.3s" }}
            >
              Thrive To{" "}
              <span className="hero-shimmer-text text-transparent bg-clip-text bg-[linear-gradient(90deg,#FDE68A,#F59E0B,#FDE68A,#F59E0B)]">
                Triumph
              </span>
            </h2>

            <div
              className="hero-rise flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-5 mt-8"
              style={{ animationDelay: "0.6s" }}
            >
              <MagneticButton to="/plan" variant="gold">
                Lihat Kompetisi
              </MagneticButton>
              <MagneticButton to="/register" variant="outline">
                Daftar Sekarang
              </MagneticButton>
            </div>
          </div>

          {/* Kolom visual — logo interaktif */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-center">
            <div className="hero-pop" style={{ animationDelay: "0.2s" }}>
              <LogoStage />
            </div>
          </div>
        </div>
      )}

      {/* Papan skor statistik */}
      <div className="relative z-20 mt-14 md:mt-20">
        <p className="hero-rise text-center text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-5" style={{ animationDelay: "0.8s" }}>
          Statistik Turnamen
        </p>
        <div className="flex flex-wrap items-center justify-center divide-x divide-amber-400/20">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} label={stat.label} value={stat.value} delay={i * 150} />
          ))}
        </div>
        
      </div>

      <button
        onClick={scrollToNext}
        aria-label="Gulir ke bawah"
        className="hero-scroll-cue absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-amber-300/70 hover:text-amber-200 transition-colors"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}