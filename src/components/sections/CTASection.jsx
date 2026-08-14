import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative mt-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#d9ae42]" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/20 blur-[100px]" />

      {/* Geometric lines */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 opacity-20">
        <div className="absolute left-10 top-1/2 h-px w-40 -rotate-[25deg] bg-navy-900" />
        <div className="absolute left-20 top-[40%] h-px w-24 rotate-[25deg] bg-navy-900" />
      </div>

      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-20">
        <div className="absolute right-10 top-1/2 h-px w-40 rotate-[25deg] bg-navy-900" />
        <div className="absolute right-20 top-[40%] h-px w-24 -rotate-[25deg] bg-navy-900" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center md:px-8 md:py-24"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-300 shadow-lg"
        >
          <Trophy className="h-5 w-5" />
        </motion.div>

        {/* Label */}
        <p className="mt-5 text-[9px] font-black uppercase tracking-[0.35em] text-navy-900/50">
          Your Journey Starts Here
        </p>

        {/* Heading */}
        <h2 className="heading-hero mt-3 text-4xl leading-none text-navy-900 md:text-6xl">
          CHOOSE YOUR
          <br />
          <span className="text-navy-800">PATH NOW!</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl font-body text-sm leading-7 text-navy-900/70 md:text-base">
          Jangan tunggu bracket ditutup. Pilih game, kumpulkan timmu, dan
          amankan slotmu di ARENA 2026 sekarang.
        </p>

        {/* CTA */}
        <Link
          to="/plan"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-navy-900 px-7 py-3.5 font-body text-sm font-bold text-gold-300 shadow-[0_10px_30px_rgba(0,0,0,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800 hover:shadow-[0_15px_40px_rgba(0,0,0,.25)]"
        >
          Pilih Kompetisi

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Bottom line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "90px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-10 h-[2px] bg-navy-900/40"
        />
      </motion.div>
    </section>
  );
}