import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Pendaftaran Dibuka",
    desc: "1 – 20 September 2026",
  },
  {
    number: "02",
    title: "Verifikasi Tim",
    desc: "21 – 23 September 2026",
  },
  {
    number: "03",
    title: "Technical Meeting",
    desc: "24 September 2026",
  },
  {
    number: "04",
    title: "Babak Penyisihan",
    desc: "26 – 30 September 2026",
  },
  {
    number: "05",
    title: "Grand Final",
    desc: "4 Oktober 2026",
  },
];

export default function TimelineSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="timeline"
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-hidden px-6 py-16 md:px-8 md:py-24"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/[0.035] blur-[120px]" />

      <div className="relative z-10">
        {/* =================================================
            HEADER
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.35em] text-gold-300/70">
                Schedule
              </p>

              <h2 className="heading-hero text-3xl text-gold-300 md:text-5xl">
                TIMELINE
              </h2>
            </div>

            <div className="hidden text-right md:block">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                ROAD TO
              </p>

              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-gold-300/70">
                GRAND FINAL
              </p>
            </div>
          </div>

          <div className="mt-5 h-px bg-gradient-to-r from-gold-300/60 via-white/10 to-transparent" />
        </motion.div>

        {/* =================================================
            DESKTOP
        ================================================= */}
        <div className="hidden md:block">
          <div className="relative px-3">
            {/* base line */}
            <div className="absolute left-[5%] right-[5%] top-[120px] h-px bg-white/10" />

            {/* progress */}
            <motion.div
              animate={{
                width: `${5 + activeStep * 22.5}%`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="absolute left-[5%] top-[120px] h-[2px] bg-gradient-to-r from-gold-500 via-gold-300 to-yellow-200"
            />

            <div className="grid grid-cols-5">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPassed = index <= activeStep;

                return (
                  <div
                    key={step.title}
                    className="relative flex flex-col items-center"
                  >
                    {/* ================================
                        TOP LABEL
                    ================================= */}
                    <div className="h-[105px] w-full text-center">
                      <motion.div
                        animate={{
                          y: isActive ? -4 : 0,
                          opacity: isActive ? 1 : 0.75,
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        <p
                          className={`text-[9px] font-bold uppercase tracking-[0.28em] ${
                            isActive
                              ? "text-gold-300"
                              : "text-white/30"
                          }`}
                        >
                          STEP {step.number}
                        </p>

                        <h3
                          className={`mx-auto mt-3 max-w-[150px] text-sm font-black uppercase leading-tight ${
                            isActive
                              ? "text-white"
                              : "text-white/55"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </motion.div>
                    </div>

                    {/* ================================
                        NODE
                    ================================= */}
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      onMouseEnter={() => setActiveStep(index)}
                      aria-label={`Pilih ${step.title}`}
                      className="relative z-20 flex h-12 w-12 items-center justify-center"
                    >
                      {/* outer ring */}
                      <motion.span
                        animate={{
                          scale: isActive ? 1 : 0.7,
                          opacity: isActive ? 1 : 0,
                        }}
                        className="absolute inset-0 rounded-full border border-gold-300/30"
                      />

                      {/* diamond */}
                      <motion.span
                        animate={{
                          scale: isActive ? 1.12 : 1,
                          rotate: 45,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                          damping: 18,
                        }}
                        className={`relative flex h-7 w-7 items-center justify-center border ${
                          isPassed
                            ? "border-gold-300 bg-gold-300 shadow-[0_0_22px_rgba(230,185,72,.25)]"
                            : "border-white/20 bg-[#08213d]"
                        }`}
                      >
                        <span className="-rotate-45 text-[7px] font-black text-[#071a31]">
                          {index + 1}
                        </span>
                      </motion.span>
                    </button>

                    {/* ================================
                        DATE
                    ================================= */}
                    <div className="mt-5 text-center">
                      <div
                        className={`inline-flex items-center gap-2 text-[10px] ${
                          isActive
                            ? "text-gold-300"
                            : "text-white/30"
                        }`}
                      >
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>{step.desc}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active information */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mx-auto mt-12 max-w-lg text-center"
            >
              <div className="border border-white/10 bg-[#071a31]/80 px-6 py-5 backdrop-blur-sm">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-300/60">
                  STAGE
                </p>

                <h3 className="mt-2 text-xl font-black uppercase text-white">
                  {steps[activeStep].title}
                </h3>

                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/40">
                  <CalendarDays className="h-3.5 w-3.5 text-gold-300" />
                  {steps[activeStep].desc}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =================================================
            MOBILE
        ================================================= */}
        <div className="md:hidden">
          <div className="relative">
            {/* vertical line */}
            <div className="absolute bottom-6 left-[15px] top-6 w-px bg-white/10" />

            <motion.div
              animate={{
                height: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
              transition={{
                duration: 0.4,
              }}
              className="absolute left-[15px] top-6 w-[2px] bg-gradient-to-b from-gold-500 via-gold-300 to-transparent"
            />

            <div className="space-y-5">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPassed = index <= activeStep;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="relative flex gap-5"
                  >
                    {/* node */}
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center"
                    >
                      <span
                        className={`flex h-6 w-6 rotate-45 items-center justify-center border ${
                          isPassed
                            ? "border-gold-300 bg-gold-300"
                            : "border-white/20 bg-[#08213d]"
                        }`}
                      >
                        <span className="-rotate-45 text-[7px] font-black text-[#071a31]">
                          {index + 1}
                        </span>
                      </span>
                    </button>

                    {/* content */}
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`group flex-1 border p-5 text-left transition-all duration-300 ${
                        isActive
                          ? "border-gold-300/40 bg-[#0a2443]"
                          : "border-white/10 bg-[#071a31]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className={`text-[8px] font-bold uppercase tracking-[0.3em] ${
                              isActive
                                ? "text-gold-300"
                                : "text-white/25"
                            }`}
                          >
                            STEP {step.number}
                          </p>

                          <h3
                            className={`mt-2 text-base font-black uppercase leading-tight ${
                              isActive
                                ? "text-white"
                                : "text-white/70"
                            }`}
                          >
                            {step.title}
                          </h3>
                        </div>

                        <ChevronRight
                          className={`mt-1 h-4 w-4 shrink-0 transition-transform ${
                            isActive
                              ? "translate-x-1 text-gold-300"
                              : "text-white/20"
                          }`}
                        />
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-xs">
                        <CalendarDays
                          className={`h-3.5 w-3.5 ${
                            isActive
                              ? "text-gold-300"
                              : "text-white/25"
                          }`}
                        />

                        <span
                          className={
                            isActive
                              ? "text-white/60"
                              : "text-white/30"
                          }
                        >
                          {step.desc}
                        </span>
                      </div>

                      <div
                        className={`mt-4 h-[2px] bg-gold-300 transition-all duration-300 ${
                          isActive ? "w-12" : "w-0"
                        }`}
                      />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}