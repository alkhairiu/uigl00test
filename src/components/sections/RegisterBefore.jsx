import Countdown from "../ui/Countdown.jsx";

export default function RegisterBefore({ targetDate }) {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-8 py-6">
      <div className="rounded-xl2 bg-gold-200/90 border border-gold-500/40 px-6 md:px-10 py-8 shadow-gold">
        <h3 className="font-heading text-center text-navy-900 text-lg md:text-xl tracking-wide mb-6">
          Register Before
        </h3>
        <Countdown targetDate={targetDate} />
      </div>
    </section>
  );
}
