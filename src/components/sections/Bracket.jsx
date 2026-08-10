const round1 = [
  ["Alpha Squad", "Iron Wolves"],
  ["Nightfall Esports", "Crimson Tide"],
  ["Ghost Protocol", "Blue Phantom"],
  ["Solar Flare", "Void Runners"],
];

function TeamPill({ name }) {
  return (
    <div className="bg-gold-gradient rounded-md px-3 py-1.5 text-center shadow-gold">
      <span className="font-body text-[11px] md:text-xs font-semibold text-navy-900">{name}</span>
    </div>
  );
}

function Matchup({ teams }) {
  return (
    <div className="flex flex-col gap-1 w-36 md:w-44">
      <TeamPill name={teams[0]} />
      <TeamPill name={teams[1]} />
    </div>
  );
}

export default function Bracket() {
  const semis = ["Alpha Squad", "Nightfall Esports", "Ghost Protocol", "Solar Flare"];
  const final = ["Alpha Squad", "Ghost Protocol"];

  return (
    <div>
      <h3 className="heading-hero text-xl md:text-2xl text-gold-300 mb-6">Bracket</h3>
      <div className="rounded-xl2 bg-gold-200/90 border border-gold-500/40 shadow-gold p-4 md:p-8 overflow-x-auto">
        <div className="flex items-center gap-6 md:gap-10 min-w-[720px]">
          {/* Round 1 */}
          <div className="flex flex-col gap-8">
            {round1.map((m, i) => (
              <Matchup key={i} teams={m} />
            ))}
          </div>

          {/* Semifinal */}
          <div className="flex flex-col gap-16 justify-center h-full">
            {[semis[0], semis[1]].map((t, i) => (
              <div key={i} className="w-36 md:w-44">
                <TeamPill name={t} />
              </div>
            ))}
            {[semis[2], semis[3]].map((t, i) => (
              <div key={i} className="w-36 md:w-44">
                <TeamPill name={t} />
              </div>
            ))}
          </div>

          {/* Final */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="w-40 md:w-48">
              <TeamPill name={`Juara: ${final[0]}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
