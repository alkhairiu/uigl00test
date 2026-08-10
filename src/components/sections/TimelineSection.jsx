const steps = [
  { title: "Pendaftaran Dibuka", desc: "1 – 20 September 2026" },
  { title: "Verifikasi Tim", desc: "21 – 23 September 2026" },
  { title: "Technical Meeting", desc: "24 September 2026" },
  { title: "Babak Penyisihan", desc: "26 – 30 September 2026" },
  { title: "Grand Final", desc: "4 Oktober 2026" },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="max-w-6xl mx-auto px-6 md:px-8 py-12 scroll-mt-24">
      <div className="flex flex-col items-center gap-2 mb-14 text-center">
        <span className="eyebrow">Timeline</span>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-white/25" />
        <ol className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-10 md:gap-y-0">
          {steps.map((s, i) => {
            const isUp = i % 2 === 0;
            return (
              <li
                key={s.title}
                className={`flex flex-col items-center text-center gap-2 md:justify-end ${
                  isUp ? "md:pb-10" : "md:pt-10 md:self-end"
                }`}
              >
                {isUp && (
                  <div>
                    <p className="font-body font-bold text-sm text-white">{s.title}</p>
                    <p className="font-body text-xs text-white/60">{s.desc}</p>
                  </div>
                )}
                <span className="hidden md:block w-3 h-3 rounded-full bg-gold-400 shrink-0" />
                {!isUp && (
                  <div>
                    <p className="font-body font-bold text-sm text-white">{s.title}</p>
                    <p className="font-body text-xs text-white/60">{s.desc}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
