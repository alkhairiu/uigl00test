import { Link } from "react-router-dom";
import { games } from "../data/games.js";
import { iconMap } from "../assets/icons/GameIcons.jsx";

export default function ChoosePlanPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
      <span className="eyebrow">Season 2026</span>
      <h1 className="heading-hero text-3xl md:text-5xl mt-2">Choose Your Plan</h1>
      <p className="font-body text-white/60 mt-3 max-w-md mx-auto text-sm md:text-base">
        Pilih kategori game yang ingin kamu ikuti. Setiap kategori punya jadwal, format,
        dan hadiah tersendiri.
      </p>

      <div className="grid grid-cols-2 gap-5 md:gap-7 mt-12 max-w-2xl mx-auto">
        {games.map((game) => {
          const Icon = iconMap[game.accentIcon];
          return (
            <Link
              key={game.slug}
              to={`/game/${game.slug}`}
              className="card-glow flex flex-col items-center justify-center gap-3 py-12 text-navy-900"
            >
              <Icon className="w-12 h-12 text-navy-900" />
              <div>
                <p className="font-body font-extrabold text-base">{game.name}</p>
                <p className="font-body text-xs text-navy-900/70">{game.tagline}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
