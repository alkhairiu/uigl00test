import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden mt-6">
      <div className="bg-gold-gradient-vertical text-navy-900 px-6 md:px-8 py-20 text-center">
        <h2 className="heading-hero text-3xl md:text-5xl leading-tight">
          Choose Your Path Now!
        </h2>
        <p className="font-body max-w-lg mx-auto mt-4 text-navy-900/80 text-sm md:text-base">
          Jangan tunggu bracket ditutup. Pilih game, kumpulkan timmu, dan amankan slotmu di
          ARENA 2026 sekarang.
        </p>
        <Link
          to="/plan"
          className="inline-flex mt-8 items-center justify-center rounded-full bg-navy-900 text-gold-300 font-body font-bold px-8 py-3.5 shadow-glow-purple hover:bg-navy-800 transition-colors"
        >
          Pilih Kompetisi
        </Link>
      </div>
    </section>
  );
}
