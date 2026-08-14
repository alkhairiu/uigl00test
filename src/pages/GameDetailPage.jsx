import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Trophy,
  Users,
  Swords,
} from "lucide-react";

import { getGameBySlug } from "../data/games.js";
import { iconMap } from "../assets/icons/GameIcons.jsx";
import Countdown from "../components/ui/Countdown.jsx";
import TimelineSection from "../components/sections/TimelineSection.jsx";

const summaryCards = [
  {
    label: "Format",
    key: "format",
    icon: Swords,
  },
  {
    label: "Kuota Slot",
    key: "slots",
    icon: Users,
  },
  {
    label: "Total Hadiah",
    key: "prizePool",
    icon: Trophy,
  },
];

/* =====================================================
   BACKGROUND
===================================================== */

function Stars() {
  const stars = Array.from({ length: 55 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: index % 12 === 0 ? 3 : 1.5,
            height: index % 12 === 0 ? 3 : 1.5,
            left: `${(index * 19.1) % 100}%`,
            top: `${(index * 13.2) % 70}%`,
          }}
          animate={{
            opacity: [0.08, 0.65, 0.08],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 2.5 + (index % 4),
            repeat: Infinity,
            delay: index * 0.04,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function BackgroundAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(42,116,176,.35),transparent_42%),linear-gradient(180deg,#06172d_0%,#0a3157_55%,#061a30_100%)]" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.07, 0.15, 0.07],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="absolute left-[-150px] top-[30%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.05] blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute right-[-150px] top-[40%] h-[370px] w-[370px] rounded-full bg-gold-300/[0.035] blur-[125px]"
      />

      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-b from-[#0b466c]/20 via-[#093657]/65 to-[#061a2f]" />

      <div className="absolute bottom-[20%] left-0 right-0 h-px bg-blue-100/15" />
    </>
  );
}

/* =====================================================
   HERO
===================================================== */

function GameHero({ game, Icon }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden border border-gold-300/20 bg-[#071a31]/80 backdrop-blur-sm"
    >
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

      <div className="grid md:grid-cols-[1.3fr_.7fr]">
        {/* Text */}
        <div className="relative p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gold-300/20 bg-gold-300/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.25em] text-gold-300">
              Season 2026
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
              Competition
            </span>
          </div>

          <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.35em] text-gold-300/65">
            GAME DETAIL
          </p>

          <h1 className="heading-hero mt-2 text-4xl uppercase leading-none text-white md:text-6xl">
            {game.name}
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
            {game.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-300 px-6 py-3 text-sm font-bold text-[#062B4F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-200"
            >
              Register Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/70 transition-colors hover:border-gold-300/40 hover:text-gold-300"
            >
              Guidebook
            </button>
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden border-t border-white/10 bg-gradient-to-br from-gold-300/[0.08] to-transparent md:min-h-0 md:border-l md:border-t-0">
          <motion.div
            animate={{
              y: [0, -7, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-40 w-40 items-center justify-center rounded-full border border-gold-300/20 bg-gold-300/[0.04] shadow-[0_0_60px_rgba(230,185,72,.08)]"
          >
            <div className="absolute inset-5 rounded-full border border-gold-300/10" />

            <Icon className="h-16 w-16 text-gold-300" />
          </motion.div>

          <span className="absolute bottom-7 text-[8px] font-bold uppercase tracking-[0.3em] text-gold-300/50">
            ENTER THE ARENA
          </span>
        </div>
      </div>
    </motion.section>
  );
}

/* =====================================================
   COUNTDOWN
===================================================== */

function RegisterCountdown({ deadline }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mt-10 overflow-hidden border border-gold-300/25 bg-gold-300/[0.95] px-6 py-7 md:px-10"
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-[#062B4F]/20" />

      <div className="mb-5 flex items-center justify-center gap-3">
        <CalendarDays className="h-4 w-4 text-[#062B4F]/65" />

        <h3 className="text-sm font-black uppercase tracking-[0.12em] text-[#062B4F] md:text-base">
          Register Before
        </h3>
      </div>

      <Countdown targetDate={deadline} showSeconds={false} />
    </motion.section>
  );
}

/* =====================================================
   SUMMARY
===================================================== */

function SummarySection({ game }) {
  return (
    <section className="mt-14">
      <div className="mb-6 text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-300/65">
          Competition Info
        </p>

        <h2 className="mt-1 text-2xl font-black text-white">
          Summary
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden border border-white/10 bg-[#071a31]/80 p-5 text-center backdrop-blur-sm"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center border border-gold-300/20 bg-gold-300/[0.05] text-gold-300">
                <Icon className="h-5 w-5" />
              </div>

              <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.28em] text-white/25">
                {card.label}
              </p>

              <p className="mt-2 text-xl font-black text-white">
                {game[card.key]}
              </p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-300 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function GameDetailPage() {
  const { slug } = useParams();
  const game = getGameBySlug(slug);

  if (!game) {
    return <Navigate to="/plan" replace />;
  }

  const Icon = iconMap[game.accentIcon];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06192f] px-6 py-14 md:px-8 md:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <BackgroundAtmosphere />
        <Stars />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,5,12,.3)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <GameHero game={game} Icon={Icon} />

        <RegisterCountdown deadline={game.registerDeadline} />

        <SummarySection game={game} />

        <section className="mt-14">
          <TimelineSection />
        </section>
      </div>
    </main>
  );
}