<<<<<<< HEAD
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { games } from "../data/games.js";
import { iconMap } from "../assets/icons/GameIcons.jsx";

function Stars() {
  const stars = Array.from({ length: 35 });
=======
import { motion } from "framer-motion";
import {
  CalendarDays,
  Crown,
  Swords,
  Trophy,
  Users,
} from "lucide-react";

import Tabs from "../components/ui/Tabs.jsx";
import TeamContribution from "../components/sections/TeamContribution.jsx";
import Bracket from "../components/sections/Bracket.jsx";
import PlayerGrid from "../components/sections/PlayerGrid.jsx";

/* =====================================================
   MATCH DATA
===================================================== */

const matches = [
  {
    stage: "Quarterfinal",
    teamA: "Alpha Squad",
    teamB: "Iron Wolves",
    score: "2 - 0",
    date: "26 Sep",
    status: "Finished",
  },
  {
    stage: "Quarterfinal",
    teamA: "Nightfall Esports",
    teamB: "Crimson Tide",
    score: "2 - 1",
    date: "26 Sep",
    status: "Finished",
  },
  {
    stage: "Semifinal",
    teamA: "Alpha Squad",
    teamB: "Nightfall Esports",
    score: "VS",
    date: "28 Sep",
    status: "Upcoming",
  },
  {
    stage: "Grand Final",
    teamA: "TBD",
    teamB: "TBD",
    score: "VS",
    date: "4 Oct",
    status: "Upcoming",
  },
];

/* =====================================================
   BACKGROUND
===================================================== */

function Stars() {
  const stars = Array.from({ length: 60 });
>>>>>>> e9f84d250a051d7e1931d73d5a6b75fa4eb594e0

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, index) => (
<<<<<<< HEAD
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          style={{
            left: `${(index * 19) % 100}%`,
            top: `${(index * 13) % 70}%`,
=======
        <motion.span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: index % 12 === 0 ? 3 : 1.5,
            height: index % 12 === 0 ? 3 : 1.5,
            left: `${(index * 18.4) % 100}%`,
            top: `${(index * 13.1) % 70}%`,
          }}
          animate={{
            opacity: [0.08, 0.6, 0.08],
          }}
          transition={{
            duration: 2.5 + (index % 4),
            repeat: Infinity,
            delay: index * 0.04,
>>>>>>> e9f84d250a051d7e1931d73d5a6b75fa4eb594e0
          }}
        />
      ))}
    </div>
  );
}

<<<<<<< HEAD
export default function ChoosePlanPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#06182d] via-[#0a3158] to-[#061a2f] px-6 py-16 md:px-8 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <Stars />

        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-400/[0.08] blur-[100px]" />

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06192f] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-300/70">
            Season 2026
          </span>

          <h1 className="heading-hero mt-3 text-3xl text-white md:text-5xl">
            CHOOSE YOUR GAME
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/45">
            Pilih kategori game yang ingin kamu ikuti dan lihat detail
            kompetisinya.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6">
          {games.map((game, index) => {
            const Icon = iconMap[game.accentIcon];

            return (
              <motion.div
                key={game.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={`/game/${game.slug}`}
                  className="
                    group
                    relative
                    flex
                    min-h-[190px]
                    flex-col
                    justify-between
                    overflow-hidden
                    border
                    border-gold-300/20
                    bg-[#071a31]/80
                    p-5
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-gold-300/50
                    hover:bg-[#0a2443]
                    hover:shadow-[0_15px_40px_rgba(0,0,0,.2)]
                    md:min-h-[220px]
                    md:p-6
                  "
                >
                  {/* number */}
                  <span className="absolute right-2 top-[-12px] text-7xl font-black text-white/[0.03]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* icon */}
                  <div className="flex h-11 w-11 items-center justify-center border border-gold-300/25 bg-gold-300/10 text-gold-300 transition-all duration-300 group-hover:bg-gold-300 group-hover:text-[#062B4F]">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* content */}
                  <div className="relative z-10 mt-8">
                    <h2 className="text-lg font-black uppercase text-white transition-colors group-hover:text-gold-300 md:text-xl">
                      {game.name}
                    </h2>

                    <p className="mt-2 text-xs leading-5 text-white/40">
                      {game.tagline}
                    </p>
                  </div>

                  {/* footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                      View Details
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-gold-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
=======
function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="absolute left-[-150px] top-[35%] h-[320px] w-[320px] rounded-full bg-blue-500/[0.05] blur-[110px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute right-[-150px] top-[45%] h-[350px] w-[350px] rounded-full bg-gold-300/[0.03] blur-[120px]"
      />
    </>
  );
}

/* =====================================================
   HERO
===================================================== */

function CompetitionHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden border-b border-white/10 pb-8"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-300/70" />

            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-gold-300/70">
              Competition
            </span>
          </div>

          <h1 className="heading-hero text-4xl uppercase leading-none text-white md:text-6xl">
            Mobile Legends
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">
            Pantau perjalanan kompetisi Mobile Legends menuju
            pertandingan terakhir.
          </p>
        </div>

        <div className="flex gap-3">
          <MiniStat
            icon={Swords}
            label="Format"
            value="5v5"
          />

          <MiniStat
            icon={Users}
            label="Roster"
            value="4 + 1"
          />

          <MiniStat
            icon={Crown}
            label="Stage"
            value="SF"
          />
        </div>
      </div>
    </motion.section>
  );
}

function MiniStat({ icon: Icon, label, value }) {
  return (
    <div className="min-w-[85px] border border-white/10 bg-white/[0.025] px-4 py-3 text-center">
      <Icon className="mx-auto h-4 w-4 text-gold-300" />

      <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/25">
        {label}
      </p>

      <p className="mt-1 text-sm font-black text-white">
        {value}
      </p>
    </div>
  );
}

/* =====================================================
   OVERVIEW
===================================================== */

function OverviewContent() {
  return (
    <div className="space-y-12">
      {/* Section heading */}
      <SectionHeader
        eyebrow="Tournament Path"
        title="Bracket"
      />

      <Bracket />

      <SectionHeader
        eyebrow="Performance"
        title="Team Contribution"
      />

      <TeamContribution />
    </div>
  );
}

/* =====================================================
   MATCHES
===================================================== */

function MatchesContent() {
  return (
    <div className="mx-auto max-w-4xl">
      <SectionHeader
        eyebrow="Schedule"
        title="Match Center"
      />

      <div className="mt-7 space-y-3">
        {matches.map((match, index) => (
          <MatchRow
            key={`${match.stage}-${index}`}
            match={match}
            index={index}
          />
        ))}
>>>>>>> e9f84d250a051d7e1931d73d5a6b75fa4eb594e0
      </div>
    </main>
  );
<<<<<<< HEAD
=======
}

function MatchRow({ match, index }) {
  const finished = match.status === "Finished";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
      }}
      className="group relative overflow-hidden border border-white/10 bg-[#071a31]/75 px-5 py-5 backdrop-blur-sm transition-all duration-300 hover:border-gold-300/25"
    >
      {/* accent */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] ${
          finished
            ? "w-full bg-white/10"
            : "w-1/3 bg-gold-300 group-hover:w-full"
        } transition-all duration-300`}
      />

      <div className="grid items-center gap-5 md:grid-cols-[130px_1fr_80px_110px]">
        {/* stage */}
        <div>
          <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-gold-300/65">
            {match.stage}
          </p>

          <div className="mt-2 flex items-center gap-1.5 text-[9px] text-white/25">
            <CalendarDays className="h-3 w-3" />
            {match.date}
          </div>
        </div>

        {/* teams */}
        <div className="flex items-center gap-3">
          <span className="truncate text-sm font-bold text-white">
            {match.teamA}
          </span>

          <span className="text-[9px] uppercase tracking-wider text-white/20">
            vs
          </span>

          <span className="truncate text-sm font-bold text-white">
            {match.teamB}
          </span>
        </div>

        {/* score */}
        <div className="flex h-10 items-center justify-center border border-gold-300/15 bg-gold-300/[0.03]">
          <span
            className={`text-sm font-black ${
              finished
                ? "text-gold-300"
                : "text-white/40"
            }`}
          >
            {match.score}
          </span>
        </div>

        {/* status */}
        <div className="text-right">
          <span
            className={`inline-flex rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] ${
              finished
                ? "bg-white/[0.05] text-white/25"
                : "bg-gold-300/10 text-gold-300"
            }`}
          >
            {match.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* =====================================================
   SECTION HEADER
===================================================== */

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="flex items-end gap-5">
      <div className="shrink-0">
        <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-gold-300/65">
          {eyebrow}
        </p>

        <h2 className="mt-1 text-2xl font-black text-white md:text-3xl">
          {title}
        </h2>
      </div>

      <div className="mb-1 h-px flex-1 bg-gradient-to-r from-gold-300/25 to-transparent" />
    </div>
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function CompetitionPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06192f] px-6 py-16 md:px-8 md:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06172d] via-[#0a3157] to-[#061a2f]" />

        <Stars />
        <BackgroundGlow />

        <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-gradient-to-t from-[#041727] to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_32%,rgba(0,5,12,.3)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Hero */}
        <CompetitionHero />

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="mt-8"
        >
          <Tabs
            tabs={[
              {
                label: "Overview",
                content: <OverviewContent />,
              },
              {
                label: "Matches",
                content: <MatchesContent />,
              },
            ]}
          />
        </motion.div>

        {/* Players */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <SectionHeader
            eyebrow="Current Lineup"
            title="Player Roster"
          />

          <div className="mt-7">
            <PlayerGrid />
          </div>
        </motion.section>
      </div>
    </main>
  );
>>>>>>> e9f84d250a051d7e1931d73d5a6b75fa4eb594e0
}