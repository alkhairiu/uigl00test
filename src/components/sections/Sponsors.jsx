const sponsors = ["NovaTech", "ByteFuel", "Ignite Gear", "Skyline Net", "Warpspeed", "Circuit+"];

export default function Sponsors() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-14">
      <div className="flex flex-col items-center gap-2 mb-8 text-center">
        <span className="eyebrow">Sponsored By</span>
      </div>
      <div className="panel-gold px-8 py-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {sponsors.map((s) => (
          <span key={s} className="font-heading text-navy-900/70 text-lg md:text-xl tracking-wide">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
