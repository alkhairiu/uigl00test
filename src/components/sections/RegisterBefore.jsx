import Countdown from "../ui/Countdown.jsx";
import { motion } from "framer-motion";

export default function RegisterBefore({ targetDate }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-8 md:px-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          relative
          overflow-hidden
          border
          border-gold-300/30
          bg-[#071d35]
          px-6
          py-7
          shadow-[0_15px_45px_rgba(0,0,0,.2)]
          md:px-10
          md:py-9
        "
      >
        {/* Top accent */}
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

        {/* Decorative corners */}
        <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-gold-300/40" />
        <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-gold-300/40" />
        <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-gold-300/40" />
        <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-gold-300/40" />

        <div className="relative z-10">
          <div className="mb-5 text-center">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-gold-300/70">
              Registration
            </p>

            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.08em] text-gold-300 md:text-2xl">
              Register Before
            </h3>

            <div className="mx-auto mt-3 h-px w-16 bg-gold-300/50" />
          </div>

          <Countdown targetDate={targetDate} />
        </div>
      </motion.div>
    </section>
  );
}