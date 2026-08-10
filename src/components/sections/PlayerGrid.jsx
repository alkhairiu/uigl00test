const players = [
  { name: "Rangga \"Blaze\" P.", team: "Alpha Squad", role: "Jungler" },
  { name: "Dinda \"Frost\" K.", team: "Nightfall Esports", role: "Mid Laner" },
  { name: "Fajar \"Reap\" S.", team: "Ghost Protocol", role: "Marksman" },
  { name: "Vina \"Echo\" L.", team: "Solar Flare", role: "Support" },
  { name: "Bima \"Rook\" A.", team: "Alpha Squad", role: "Tank" },
  { name: "Sasa \"Nova\" R.", team: "Ghost Protocol", role: "Explainer" },
];

export default function PlayerGrid() {
  return (
    <div>
      <h3 className="heading-hero text-xl md:text-2xl text-gold-300 mb-6 text-center">Player</h3>
      <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
        {players.map((p) => (
          <div key={p.name} className="card-glow p-5 aspect-[4/5] flex flex-col justify-end text-navy-900">
            <p className="font-body font-bold text-sm leading-tight">{p.name}</p>
            <p className="font-body text-xs text-navy-900/70">{p.role}</p>
            <p className="font-body text-[11px] text-navy-900/60 mt-0.5">{p.team}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
