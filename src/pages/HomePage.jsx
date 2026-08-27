import { motion } from "framer-motion";

import Hero from "../components/sections/Hero.jsx";
import AboutUs from "../components/sections/AboutUs.jsx";
import CompetitionTypes from "../components/sections/CompetitionTypes.jsx";
import WhoCanJoin from "../components/sections/WhoCanJoin.jsx";
import TimelineSection from "../components/sections/TimelineSection.jsx";
import RegisterBefore from "../components/sections/RegisterBefore.jsx";
import Sponsors from "../components/sections/Sponsors.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import CTASection from "../components/sections/CTASection.jsx";

const NEXT_DEADLINE = "2026-09-20T23:59:00";

/* =====================================================
   STARS
===================================================== */

function StarField() {
  const stars = Array.from({ length: 90 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width:
              index % 15 === 0
                ? "3px"
                : index % 6 === 0
                  ? "2px"
                  : "1px",
            height:
              index % 15 === 0
                ? "3px"
                : index % 6 === 0
                  ? "2px"
                  : "1px",
            left: `${(index * 17.37) % 100}%`,
            top: `${(index * 11.83) % 70}%`,
          }}
          animate={{
            opacity:
              index % 15 === 0
                ? [0.2, 1, 0.2]
                : [0.1, 0.65, 0.1],
            scale:
              index % 15 === 0
                ? [1, 1.5, 1]
                : [1, 1.25, 1],
          }}
          transition={{
            duration: 2.5 + (index % 4),
            delay: (index % 10) * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* =====================================================
   DECORATIVE STARS
===================================================== */

function FeaturedStars() {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0.25, 0.9, 0.25],
          rotate: [0, 90, 180],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-[12%] top-[10%] h-7 w-7"
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/80" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/80" />
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.2, 0.75, 0.2],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute right-[13%] top-[17%] h-5 w-5"
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-100/80" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue-100/80" />
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.15, 0.6, 0.15],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute left-[30%] top-[24%] h-2 w-2 rounded-full bg-gold-200"
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.5, 0.15],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1,
        }}
        className="pointer-events-none absolute right-[29%] top-[30%] h-2 w-2 rounded-full bg-blue-100"
      />
    </>
  );
}

/* =====================================================
   MOON / SKY HALO
===================================================== */

function MoonGlow() {
  return (
    <>
      <div className="pointer-events-none absolute right-[7%] top-[7%] h-[180px] w-[180px] rounded-full bg-blue-200/[0.045] blur-3xl" />

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[10%] top-[10%] h-20 w-20 rounded-full border border-white/[0.08] bg-blue-100/[0.04]"
      />

      <div className="pointer-events-none absolute right-[calc(10%+28px)] top-[calc(10%+28px)] h-16 w-16 rounded-full bg-blue-100/[0.08] blur-xl" />
    </>
  );
}

/* =====================================================
   AMBIENT GLOW
===================================================== */

function AmbientGlow() {
  return (
    <>
      {/* Main blue atmosphere */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.17, 0.08],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[7%]
          h-[550px]
          w-[760px]
          -translate-x-1/2
          rounded-full
          bg-blue-400/10
          blur-[150px]
        "
      />

      {/* Left atmosphere */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[25%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[130px]
        "
      />

      {/* Gold atmosphere */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 35, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[38%]
          h-[440px]
          w-[440px]
          rounded-full
          bg-gold-300/[0.035]
          blur-[140px]
        "
      />
    </>
  );
}

/* =====================================================
   LIGHT TRAILS
===================================================== */

function LightTrails() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      <motion.div
        animate={{
          x: ["-20%", "120%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[-30%] top-[28%] h-px w-[260px] rotate-[7deg] bg-gradient-to-r from-transparent via-blue-200/40 to-transparent"
      />

      <motion.div
        animate={{
          x: ["110%", "-30%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[-30%] top-[44%] h-px w-[220px] -rotate-[8deg] bg-gradient-to-r from-transparent via-gold-200/30 to-transparent"
      />

      <motion.div
        animate={{
          x: ["-30%", "120%"],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
        className="absolute left-[-30%] top-[60%] h-px w-[180px] rotate-[4deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </div>
  );
}

/* =====================================================
   OCEAN / HORIZON
===================================================== */

function OceanBackground() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[24%] overflow-hidden">
      {/* ocean */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b476d]/55 via-[#093758]/80 to-[#061b2f]" />

      {/* horizon */}
      <div className="absolute left-0 right-0 top-0 h-px bg-blue-100/20" />

      {/* horizon glow */}
      <motion.div
        animate={{
          opacity: [0.1, 0.28, 0.1],
          scaleX: [0.88, 1.05, 0.88],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-0
          h-10
          w-[70%]
          -translate-x-1/2
          rounded-full
          bg-cyan-200/10
          blur-2xl
        "
      />

      {/* waves */}
      <motion.div
        animate={{
          x: [0, -70, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] right-[-10%] top-[28%] h-px bg-white/[0.07]"
      />

      <motion.div
        animate={{
          x: [-50, 50, -50],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] right-[-10%] top-[52%] h-px bg-white/[0.055]"
      />

      <motion.div
        animate={{
          x: [40, -40, 40],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] right-[-10%] top-[73%] h-px bg-white/[0.04]"
      />

      {/* water texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 13px,
              rgba(255,255,255,.4) 14px,
              transparent 15px
            )
          `,
        }}
      />

      {/* reflection */}
      <motion.div
        animate={{
          opacity: [0.05, 0.14, 0.05],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-[12%] left-1/2 h-16 w-[45%] -translate-x-1/2 rounded-full bg-blue-200/[0.06] blur-2xl"
      />
    </div>
  );
}

/* =====================================================
   SECTION DIVIDER
===================================================== */

function SectionDivider() {
  return (
    <div className="relative mx-auto my-1 h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent">
      <motion.div
        animate={{
          opacity: [0.2, 0.65, 0.2],
          scale: [0.8, 1.1, 0.8],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-gold-300"
      />
    </div>
  );
}

/* =====================================================
   BACKGROUND VIGNETTE
===================================================== */

function Vignette() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_32%,rgba(0,5,12,.28)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020b17]/30 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#041526]/50 to-transparent" />
    </>
  );
}

/* =====================================================
   HOME PAGE
===================================================== */

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0C1E42] via-[#143B73] to-[#1C539E]">
        {/* =================================================
            GLOBAL BACKGROUND
        ================================================= */}

        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Base atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071a32]/35 via-[#0a3158]/15 to-[#061b30]/40" />

          <StarField />
          <FeaturedStars />
          <MoonGlow />
          <AmbientGlow />
          <LightTrails />
          <OceanBackground />
          <Vignette />
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative z-10">
          {/* HERO */}
          <Hero />

          <SectionDivider />

          {/* ABOUT US */}
          <section id="about">
            <AboutUs />
          </section>

          <SectionDivider />

          {/* COMPETITION */}
          <CompetitionTypes />

          <SectionDivider />

          {/* WHO CAN JOIN */}
          <WhoCanJoin />

          <SectionDivider />

          {/* TIMELINE */}
          <section id="timeline">
            <TimelineSection />
          </section>

          <SectionDivider />

          {/* SPONSORS */}
          <Sponsors />

          <SectionDivider />

          {/* FAQ */}
          <FAQSection />

          {/* CTA */}
          <CTASection />
        </div>
      </section>
    </>
  );
}