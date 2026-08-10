import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-center gap-10 mb-8">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`font-heading text-lg md:text-xl tracking-wide pb-2 border-b-2 transition-colors ${
              active === i
                ? "text-gold-300 border-gold-400"
                : "text-white/50 border-transparent hover:text-white/80"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
