import { Link } from "react-router-dom";

const stats = [
  { label: "Peserta Terdaftar", value: "1.200+" },
  { label: "Total Hadiah", value: "Rp 53 Juta" },
  { label: "Kategori Game", value: "4" },
];

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-8 text-center">
      <span className="eyebrow">Season 2026</span>
      <h1 className="font-bold font-serif text-4xl md:text-6xl leading-tight mt-3">
        Buktikan Timmu Layak
        <br className="hidden md:block" /> Jadi <span className="text-gold-300">Juara Arena</span>
      </h1>
      <p className="font-body text-white/70 max-w-xl mx-auto mt-5 text-sm md:text-base">
        Turnamen esport antar sekolah &amp; kampus terbesar tahun ini. Pilih game favoritmu,
        daftarkan tim, dan rebut jalanmu menuju grand final.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <Link to="/plan" className="btn-gold">Lihat Kompetisi</Link>
        <Link to="/register" className="btn-outline">Daftar Sekarang</Link>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-6 mt-14">
        {stats.map((s) => (
          <div key={s.label} className="card-glow px-3 py-6 md:py-8">
            <p className="font-heading text-2xl md:text-3xl text-navy-900">{s.value}</p>
            <p className="font-body text-xs md:text-sm text-navy-900/70 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
