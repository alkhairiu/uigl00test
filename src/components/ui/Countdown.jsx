import { useEffect, useState } from "react";

function getTimeLeft(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    finished: diff <= 0,
  };
}

/** Kotak angka countdown, dipakai berulang di bawah */
function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gold-gradient shadow-gold flex items-center justify-center">
        <span className="font-heading text-2xl md:text-3xl text-navy-900 tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-body text-xs md:text-sm text-white/70">{label}</span>
    </div>
  );
}

export default function Countdown({ targetDate, showSeconds = true }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (time.finished) {
    return (
      <p className="font-body font-semibold text-gold-300 text-center">
        Pendaftaran sudah ditutup.
      </p>
    );
  }

  return (
    <div className="flex items-start justify-center gap-3 md:gap-5">
      <TimeBox value={time.days} label="Days" />
      <TimeBox value={time.hours} label="Hour" />
      <TimeBox value={time.minutes} label="Minute" />
      {showSeconds && <TimeBox value={time.seconds} label="Second" />}
    </div>
  );
}
