import { Link } from "react-router-dom";
import { games } from "../../data/games.js";
import { iconMap } from "../../assets/icons/GameIcons.jsx";

export default function CompetitionTypes() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-10">
      <div className="flex flex-col items-center gap-2 mb-8 text-center">
        <h2 className="heading-hero text-2xl md:text-3xl text-gold-300">Jenis Lomba</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
        {games.map((game) => {
          const Icon = iconMap[game.accentIcon];
          return (
            <Link
              key={game.slug}
              to={`/game/${game.slug}`}
              className="card-glow flex flex-col items-center justify-center gap-2 py-8 px-4 text-navy-900"
            >
              <Icon className="w-9 h-9 text-navy-900" />
              <span className="font-body font-bold text-sm md:text-base">{game.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
