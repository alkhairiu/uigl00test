const contributors = [
  { name: "Alpha Squad", role: "Semifinalist", points: 320 },
  { name: "Nightfall Esports", role: "Quarterfinalist", points: 260 },
  { name: "Ghost Protocol", role: "Quarterfinalist", points: 245 },
  { name: "Solar Flare", role: "Round of 16", points: 190 },
];

export default function TeamContribution() {
  return (
    <div>
      <h3 className="heading-hero text-xl md:text-2xl text-gold-300 mb-6">Tim Contribution</h3>
      <div className="flex flex-col gap-3">
        {contributors.map((c, i) => (
          <div
            key={c.name}
            className="card-glow flex items-center justify-between px-5 py-3.5 text-navy-900"
          >
            <div className="flex items-center gap-3">
              <span className="font-heading text-sm w-6 text-center">{i + 1}</span>
              <div>
                <p className="font-body font-bold text-sm">{c.name}</p>
                <p className="font-body text-xs text-navy-900/70">{c.role}</p>
              </div>
            </div>
            <span className="font-body font-bold text-sm">{c.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}
