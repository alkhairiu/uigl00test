
import { iconMap } from "../assets/icons/GameIcons.jsx";

function Stars() {
  const stars = Array.from({ length: 35 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          style={{
            left: `${(index * 19) % 100}%`,
            top: `${(index * 13) % 70}%`,
          }}
        />
      ))}
    </div>
  );
}

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
      </div>
    </main>
  );
}