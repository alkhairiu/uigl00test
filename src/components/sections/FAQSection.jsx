import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    question: "Apakah pendaftaran berbayar?",
    answer:
      "Ya, setiap tim dikenakan biaya pendaftaran yang besarannya berbeda tiap kategori game. Rincian biaya tersedia di halaman detail masing-masing game.",
  },
  {
    question: "Berapa jumlah pemain per tim?",
    answer:
      "Tergantung game: 5 pemain untuk Mobile Legends & Valorant, 4 pemain untuk PUBG Mobile, dan 1 pemain untuk eFootball. Cadangan disarankan 1–2 orang.",
  },
  {
    question: "Apakah bisa daftar lebih dari satu kategori?",
    answer:
      "Bisa. Satu tim atau individu boleh mendaftar di lebih dari satu kategori game selama jadwal pertandingan tidak bentrok.",
  },
  {
    question: "Bagaimana jika terjadi cheating saat pertandingan?",
    answer:
      "Tim yang terbukti melakukan pelanggaran atau cheating akan didiskualifikasi berdasarkan hasil investigasi admin dan panitia turnamen.",
  },
  {
    question: "Kapan jadwal pertandingan diumumkan?",
    answer:
      "Jadwal lengkap diumumkan saat Technical Meeting dan akan disampaikan melalui kanal resmi atau grup masing-masing tim.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:px-8 md:py-24"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute right-[10%] top-1/3 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-[100px]" />

      <div className="relative grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-28 md:self-start"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center border border-gold-300/30 bg-gold-300/10 text-gold-300">
            <HelpCircle className="h-5 w-5" />
          </div>

          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-gold-300/70">
            INFORMATION
          </p>

          <h2 className="heading-hero mt-2 text-4xl leading-none text-gold-300 md:text-6xl">
            FAQ
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
            Beberapa informasi yang perlu kamu ketahui sebelum memulai
            perjalanan menuju arena.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-300" />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(faqs.length).padStart(2, "0")}
            </span>
          </div>

          {/* small visual */}
          <div className="mt-10 hidden md:block">
            <div className="border-l border-gold-300/30 pl-5">
              <p className="text-xs font-semibold text-white/60">
                Still have questions?
              </p>

              <p className="mt-1 max-w-xs text-[11px] leading-5 text-white/25">
                Pastikan selalu mengikuti informasi terbaru dari kanal resmi
                penyelenggara.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="border border-gold-300/20 bg-[#071a31]">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`relative border-b border-white/10 last:border-b-0 ${
                    isActive ? "bg-white/[0.025]" : ""
                  }`}
                >
                  {/* active line */}
                  <motion.div
                    animate={{
                      scaleY: isActive ? 1 : 0,
                    }}
                    className="absolute bottom-0 left-0 top-0 w-[3px] origin-top bg-gold-300"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isActive ? -1 : index)
                    }
                    className="flex w-full items-center gap-5 px-5 py-6 text-left md:px-7"
                  >
                    {/* number */}
                    <span
                      className={`text-[10px] font-black tracking-[0.15em] ${
                        isActive
                          ? "text-gold-300"
                          : "text-white/20"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* question */}
                    <span
                      className={`flex-1 text-sm font-bold transition-colors md:text-base ${
                        isActive
                          ? "text-gold-300"
                          : "text-white/75 hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* arrow */}
                    <motion.span
                      animate={{
                        rotate: isActive ? 180 : 0,
                      }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border ${
                        isActive
                          ? "border-gold-300/40 text-gold-300"
                          : "border-white/10 text-white/25"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  {/* answer */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pl-[3.75rem] pr-8 md:px-7 md:pb-7 md:pl-[4.7rem]">
                          <p className="max-w-2xl text-sm leading-7 text-white/45">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* footer CTA */}
          
        </motion.div>
      </div>
    </section>
  );
}