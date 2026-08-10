import Tabs from "../components/ui/Tabs.jsx";
import TeamContribution from "../components/sections/TeamContribution.jsx";
import Bracket from "../components/sections/Bracket.jsx";
import PlayerGrid from "../components/sections/PlayerGrid.jsx";

function OverviewContent() {
  return (
    <div className="flex flex-col gap-14">
      <TeamContribution />
      <Bracket />
    </div>
  );
}

function MatchesContent() {
  const matches = [
    { stage: "Quarterfinal", teamA: "Alpha Squad", teamB: "Iron Wolves", score: "2 - 0", date: "26 Sep" },
    { stage: "Quarterfinal", teamA: "Nightfall Esports", teamB: "Crimson Tide", score: "2 - 1", date: "26 Sep" },
    { stage: "Semifinal", teamA: "Alpha Squad", teamB: "Nightfall Esports", score: "vs", date: "28 Sep" },
    { stage: "Grand Final", teamA: "TBD", teamB: "TBD", score: "vs", date: "4 Oct" },
  ];
  return (
    <div className="flex flex-col gap-3 max-w-2xl mx-auto">
      {matches.map((m, i) => (
        <div key={i} className="card-glow flex items-center justify-between px-5 py-4 text-navy-900">
          <div>
            <p className="font-body text-[11px] uppercase tracking-wide text-navy-900/60">{m.stage} · {m.date}</p>
            <p className="font-body font-bold text-sm mt-0.5">{m.teamA} <span className="text-navy-900/50">vs</span> {m.teamB}</p>
          </div>
          <span className="font-heading text-base">{m.score}</span>
        </div>
      ))}
    </div>
  );
}

export default function CompetitionPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <div className="text-center mb-10">
        <span className="eyebrow">Mobile Legends</span>
        <h1 className="heading-hero text-2xl md:text-4xl mt-2">Bracket &amp; Klasemen Tim</h1>
      </div>

      <Tabs
        tabs={[
          { label: "Overview", content: <OverviewContent /> },
          { label: "Matches", content: <MatchesContent /> },
        ]}
      />

      <div className="mt-16">
        <PlayerGrid />
      </div>
    </div>
  );
}
