import { Link, useParams, Navigate } from "react-router-dom";
import { getGameBySlug } from "../data/games.js";
import { iconMap } from "../assets/icons/GameIcons.jsx";
import Countdown from "../components/ui/Countdown.jsx";
import TimelineSection from "../components/sections/TimelineSection.jsx";

const summaryCards = [
  { label: "Format", key: "format" },
  { label: "Kuota Slot", key: "slots" },
  { label: "Total Hadiah", key: "prizePool" },
];

export default function GameDetailPage() {
  const { slug } = useParams();
  const game = getGameBySlug(slug);

  if (!game) return <Navigate to="/plan" replace />;

  const Icon = iconMap[game.accentIcon];

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 md:py-14">
      {/* Hero card */}
      <div className="panel-gold px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="heading-hero text-2xl md:text-4xl text-navy-900">{game.name}</h1>
          <p className="font-body text-navy-900/80 text-sm md:text-base mt-3 leading-relaxed">
            {game.description}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
            <button type="button" className="btn-outline border-navy-900/40 text-navy-900 hover:bg-navy-900/10">
              Guidebook
            </button>
            <Link to="/register" className="rounded-full bg-navy-900 text-gold-300 font-body font-bold px-6 py-3 shadow-glow-purple hover:bg-navy-800 transition-colors">
              Register
            </Link>
          </div>
        </div>
        <Icon className="w-28 h-28 md:w-36 md:h-36 text-navy-900 shrink-0" />
      </div>

      {/* Register before countdown */}
      <div className="mt-10 rounded-xl2 bg-gold-200/90 border border-gold-500/40 px-6 md:px-10 py-8 shadow-gold">
        <h3 className="font-heading text-center text-navy-900 text-lg md:text-xl tracking-wide mb-6">
          Register Before
        </h3>
        <Countdown targetDate={game.registerDeadline} showSeconds={false} />
      </div>

      {/* Summary */}
      <div className="mt-14">
        <h3 className="heading-hero text-xl md:text-2xl text-gold-300 text-center mb-6">Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {summaryCards.map((c) => (
            <div key={c.key} className="card-glow px-5 py-6 text-navy-900 text-center">
              <p className="font-body text-xs uppercase tracking-wide text-navy-900/60">{c.label}</p>
              <p className="font-heading text-lg md:text-xl mt-1">{game[c.key]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <TimelineSection />
      </div>
    </div>
  );
}
