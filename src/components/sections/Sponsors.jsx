import { motion } from "framer-motion";

const sponsors = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
];

export default function Sponsors() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.35em] text-gold-300/70">
          Partnership
        </p>

        <div className="flex items-center gap-5">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

          <h2 className="heading-hero text-center text-2xl text-gold-300 md:text-4xl">
            SPONSORED BY
          </h2>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </motion.div>

      {/* Sponsor panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          overflow-hidden
          border
          border-gold-300/20
          bg-navy-900
          px-6
          py-8
          md:px-10
          md:py-10
        "
      >
        {/* Accent lines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/20 to-transparent" />

        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-3 md:grid-cols-6 md:divide-y-0">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              whileHover={{ y: -3 }}
              className="group flex min-h-[90px] items-center justify-center px-4"
            >
              <div className="text-center">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                  Sponsor {String(index + 1).padStart(2, "0")}
                </p>

                <span
                  className="
                    mt-2
                    block
                    font-heading
                    text-sm
                    font-bold
                    tracking-wide
                    text-white/55
                    transition-colors
                    duration-300
                    group-hover:text-gold-300
                    md:text-base
                  "
                >
                  {sponsor}
                </span>

                <div className="mx-auto mt-2 h-px w-0 bg-gold-300 transition-all duration-300 group-hover:w-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}