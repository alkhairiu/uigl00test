import { Link } from "react-router-dom";
import { games } from "../../data/games.js";
import { iconMap } from "../../assets/icons/GameIcons.jsx";

export default function CompetitionTypes() {
  return (
    <section
      id="competition"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:px-8 md:py-24"
    >
      {/* Heading */}
      <div className="mb-10 md:mb-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-gold-300/70">
              Competition
            </p>

            <h2 className="heading-hero text-3xl text-gold-300 md:text-5xl">
              JENIS LOMBA
            </h2>
          </div>


        </div>

        <div className="mt-5 h-px w-full bg-gradient-to-r from-gold-300/60 via-white/10 to-transparent" />
      </div>

      {/* Games */}
      <div className="grid grid-cols-2 gap-px overflow-hidden border border-gold-300/20 bg-gold-300/20 md:grid-cols-4">
        {games.map((game, index) => {
          const Icon = iconMap[game.accentIcon];

          return (
            <Link
              key={game.slug}
              to={`/game/${game.slug}`}
              className="
                group
                relative
                min-h-[240px]
                overflow-hidden
                bg-navy-900
                px-5
                py-7
                transition-colors
                duration-300
                hover:bg-[#0b2342]
                md:min-h-[300px]
                md:px-7
                md:py-9
              "
            >
              {/* Number */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -right-2
                  -top-7
                  text-[110px]
                  font-black
                  leading-none
                  text-white/[0.025]
                  transition-colors
                  duration-300
                  group-hover:text-gold-300/[0.06]
                  md:text-[140px]
                "
              >
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-gold-300/30 text-gold-300 transition-all duration-300 group-hover:border-gold-300 group-hover:bg-gold-300 group-hover:text-navy-900">
                <Icon className="h-6 w-6" />
              </div>

              {/* Text */}
              <div className="relative z-10 mt-12">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.28em] text-white/30">
                  TITLE 0{index + 1}
                </p>

                <h3 className="max-w-[170px] text-xl font-black uppercase leading-tight tracking-tight text-white md:text-2xl">
                  {game.name}
                </h3>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-gold-300/60 transition-all duration-300 group-hover:w-14 group-hover:bg-gold-300" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 group-hover:text-gold-300">
                    Lihat Detail
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gold-300 transition-all duration-500 group-hover:w-full" />
            </Link>
          );
        })}
      </div>

    </section>
  );
}