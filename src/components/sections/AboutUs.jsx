import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24"
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          overflow-hidden
          border
          border-gold-300/30
          bg-navy-900
          shadow-[0_20px_60px_rgba(0,0,0,.25)]
        "
      >
        {/* Top line */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

        {/* Corner decorations */}
        <div className="absolute left-0 top-0 h-16 w-16 border-l border-t border-gold-300/40" />
        <div className="absolute bottom-0 right-0 h-16 w-16 border-b border-r border-gold-300/40" />

        <div className="grid md:grid-cols-[38%_62%]">
          {/* LEFT */}
          <div
            className="
              relative
              flex
              min-h-[260px]
              flex-col
              justify-center
              overflow-hidden
              border-b
              border-gold-300/20
              px-7
              py-10
              md:border-b-0
              md:border-r
              md:px-10
              md:py-14
            "
          >
           

            <div className="relative z-10">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-gold-300/70">
                Tentang Kami
              </p>

              <h2 className="heading-hero max-w-xs text-4xl leading-[0.95] text-gold-300 md:text-6xl">
                ABOUT
                <br />
                US
              </h2>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-[2px] w-14 bg-gold-300" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  UI Games League 2026
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center px-7 py-10 md:px-12 md:py-14">
            {/* Decorative vertical line */}
            <div className="absolute bottom-10 left-0 top-10 hidden w-px bg-gradient-to-b from-transparent via-gold-300/30 to-transparent md:block" />

            <div className="relative z-10">
              <p className="font-body text-sm leading-7 text-white/80 md:text-base md:leading-8">
                <span className="font-bold text-gold-300">UI Games League</span> adalah
                kompetisi esport tahunan yang mempertemukan{" "}
                <span className="font-semibold text-white">
                  pelajar dan mahasiswa
                </span>{" "}
                dari berbagai sekolah dan kampus untuk bertanding di empat
                kategori game populer.
              </p>

              <div className="my-6 h-px w-full bg-gradient-to-r from-gold-300/50 via-white/10 to-transparent" />

              <p className="font-body text-sm leading-7 text-white/55 md:text-base md:leading-8">
                Lebih dari sekadar turnamen, UI Games League adalah ruang untuk
                membangun{" "}
                <span className="font-semibold text-gold-300">
                  kerja sama tim
                </span>
                , mengasah{" "}
                <span className="font-semibold text-gold-300">strategi</span>,
                dan membentuk{" "}
                <span className="font-semibold text-gold-300">
                  komunitas esport yang sehat dan kompetitif
                </span>
                .
              </p>

              {/* Bottom accent */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "90px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 h-[2px] bg-gold-300"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}