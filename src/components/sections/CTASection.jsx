import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Trophy,
  Crown,
  Sparkles,
  Swords,
  Shield,
  Star,
} from "lucide-react";

const particles = [
  { left: "8%", top: "22%", size: 4, delay: 0 },
  { left: "15%", top: "68%", size: 3, delay: 0.8 },
  { left: "24%", top: "35%", size: 5, delay: 1.2 },
  { left: "76%", top: "27%", size: 4, delay: 0.4 },
  { left: "84%", top: "65%", size: 3, delay: 1 },
  { left: "91%", top: "38%", size: 5, delay: 1.5 },
  { left: "67%", top: "78%", size: 3, delay: 0.7 },
  { left: "33%", top: "82%", size: 4, delay: 1.8 },
];

export default function CTASection() {
  return (
    <section className="relative mt-10 overflow-hidden bg-[#d9ae42]">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#e7c35f] via-[#d9ae42] to-[#c99c31]" />

      {/* Soft center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[120px]" />

      {/* Dark bottom atmosphere */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-navy-900/10 to-transparent" />

      {/* =========================================================
          DECORATIVE GRID
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,42,77,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(11,42,77,.8) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* =========================================================
          DIAGONAL LINES
      ========================================================= */}

      <div className="pointer-events-none absolute -left-24 top-0 h-full w-[45%] opacity-20">
        <div className="absolute left-10 top-[25%] h-px w-72 rotate-[25deg] bg-navy-900" />
        <div className="absolute left-0 top-[43%] h-px w-96 rotate-[25deg] bg-navy-900" />
        <div className="absolute left-20 top-[62%] h-px w-64 rotate-[25deg] bg-navy-900" />
      </div>

      <div className="pointer-events-none absolute -right-24 top-0 h-full w-[45%] opacity-20">
        <div className="absolute right-10 top-[25%] h-px w-72 -rotate-[25deg] bg-navy-900" />
        <div className="absolute right-0 top-[43%] h-px w-96 -rotate-[25deg] bg-navy-900" />
        <div className="absolute right-20 top-[62%] h-px w-64 -rotate-[25deg] bg-navy-900" />
      </div>

      {/* =========================================================
          CORNER ORNAMENTS
      ========================================================= */}

      <div className="pointer-events-none absolute left-5 top-5 h-24 w-24 border-l border-t border-navy-900/25 md:left-10 md:top-10 md:h-32 md:w-32" />

      <div className="pointer-events-none absolute bottom-5 right-5 h-24 w-24 border-b border-r border-navy-900/25 md:bottom-10 md:right-10 md:h-32 md:w-32" />

      {/* Small corner diamonds */}
      <div className="pointer-events-none absolute left-5 top-5 h-2 w-2 rotate-45 bg-navy-900/40 md:left-10 md:top-10" />

      <div className="pointer-events-none absolute bottom-5 right-5 h-2 w-2 rotate-45 bg-navy-900/40 md:bottom-10 md:right-10" />

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================= */}

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.8, 1.4, 0.8],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[8%] top-1/2 hidden -translate-y-1/2 md:block"
      >
        
      </motion.div>

      

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center md:px-8 md:py-28"
      >

        {/* =======================================================
            TOP ORNAMENT
        ======================================================= */}

        <div className="mb-7 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-navy-900/25 md:w-24" />

          

          <span className="h-px w-16 bg-navy-900/25 md:w-24" />
        </div>

        {/* =======================================================
            LABEL
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          <Sparkles className="h-3 w-3 text-navy-900/50" />

          <p className="font-body text-[9px] font-black uppercase tracking-[0.4em] text-navy-900/55">
            Your Journey Starts Here
          </p>

          <Sparkles className="h-3 w-3 text-navy-900/50" />
        </motion.div>

        {/* =======================================================
            HEADING
        ======================================================= */}

        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="heading-hero mt-5 text-4xl leading-[0.9] text-navy-900 sm:text-5xl md:text-7xl"
        >
          CHOOSE YOUR
          <br />

          <span className="relative inline-block text-navy-800">
            PATH NOW!

            {/* underline ornament */}
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="absolute -bottom-2 left-0 h-[3px] bg-navy-900/30"
            />
          </span>
        </motion.h2>

        {/* =======================================================
            DESCRIPTION
        ======================================================= */}

       

        {/* =======================================================
            CTA BUTTON
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-9"
        >
          <Link
            to="/plan"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-navy-900 px-8 py-4 font-body text-sm font-bold text-gold-300 shadow-[0_12px_35px_rgba(11,42,77,.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800 hover:shadow-[0_18px_45px_rgba(11,42,77,.35)]"
          >
            {/* Button shine */}
            <span className="absolute inset-y-0 -left-20 w-16 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

            <Trophy className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />

            <span className="relative z-10">
              Pilih Kompetisi
            </span>

            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* =======================================================
            BOTTOM ORNAMENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "180px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto mt-12 flex items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-navy-900/20" />

          <Star className="h-3 w-3 fill-navy-900/30 text-navy-900/30" />

          <span className="h-px flex-1 bg-navy-900/20" />
        </motion.div>

      </motion.div>

      {/* =========================================================
          BOTTOM DIAMONDS
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-3">
        <div className="h-3 w-3 rotate-45 bg-navy-900/20" />
        <div className="h-5 w-5 rotate-45 border border-navy-900/25" />
        <div className="h-3 w-3 rotate-45 bg-navy-900/20" />
      </div>

    </section>
  );
}