import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";

const groups = [
  {
    number: "01",
    title: "Pelajar SMA/SMK",
    desc: "Terbuka untuk siswa aktif jenjang SMA/SMK/sederajat se-Indonesia, dibuktikan dengan kartu pelajar.",
  },
  {
    number: "02",
    title: "Mahasiswa",
    desc: "Terbuka untuk mahasiswa aktif dari seluruh universitas & politeknik, dibuktikan dengan KTM.",
  },
  {
    number: "03",
    title: "Komunitas Umum",
    desc: "Tim komunitas atau klub esport kampus juga dipersilakan mendaftar selama memenuhi syarat usia.",
  },
];

export default function WhoCanJoin() {
  return (
    <section
      id="who-can-join"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:px-8 md:py-24"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 md:mb-14"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-gold-300/70">
              Eligibility
            </p>

            <h2 className="heading-hero text-3xl text-gold-300 md:text-5xl">
              WHO CAN JOIN?
            </h2>
          </div>

        </div>

        <div className="mt-5 h-px w-full bg-gradient-to-r from-gold-300/60 via-white/10 to-transparent" />
      </motion.div>

      {/* Cards */}
      <div className="grid gap-px overflow-hidden border border-gold-300/20 bg-gold-300/20 md:grid-cols-3">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            className="group relative min-h-[300px] overflow-hidden bg-navy-900 px-6 py-7 transition-colors duration-300 hover:bg-[#0a2443] md:px-8 md:py-9"
          >
            {/* Big number */}
            <span className="pointer-events-none absolute -right-2 -top-8 text-[130px] font-black leading-none text-white/[0.025] transition-all duration-500 group-hover:text-gold-300/[0.06] md:text-[150px]">
              {group.number}
            </span>

            {/* Icon */}
            <div className="relative z-10 flex h-11 w-11 items-center justify-center border border-gold-300/30 text-gold-300 transition-all duration-300 group-hover:border-gold-300 group-hover:bg-gold-300 group-hover:text-navy-900">
              <Users className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-12">
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
                CATEGORY {group.number}
              </p>

              <h3 className="max-w-[220px] text-xl font-black uppercase leading-tight tracking-tight text-white md:text-2xl">
                {group.title}
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/50">
                {group.desc}
              </p>
            </div>

            {/* Bottom action */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/10 px-6 py-4 md:px-8">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-gold-300">
                Eligible Participant
              </span>

              <ArrowUpRight
                className="h-4 w-4 text-gold-300 opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
              />
            </div>

            {/* Active accent */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gold-300 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-6 flex items-center gap-3"
      >
        <span className="h-px w-8 bg-gold-300/50" />
      </motion.div>
    </section>
  );
}