import { Link } from "react-router-dom";
import { FlameLogo } from "../../assets/icons/GameIcons.jsx";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-400/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <FlameLogo className="w-8 h-8" />
            <span className="font-heading text-xl text-white tracking-wide">ARENA</span>
          </div>
          <p className="font-body text-sm text-white/60 max-w-sm leading-relaxed">
            Wadah kompetisi esport antar sekolah &amp; kampus. Satu panggung untuk Mobile
            Legends, PUBG Mobile, Valorant, dan eFootball — dari babak penyisihan sampai
            grand final.
          </p>
        </div>

        <div>
          <h3 className="font-body font-bold text-gold-300 text-sm uppercase tracking-wider mb-3">
            Navigasi
          </h3>
          <ul className="space-y-2 font-body text-sm text-white/70">
            <li><Link className="hover:text-gold-300 transition-colors" to="/">Beranda</Link></li>
            <li><Link className="hover:text-gold-300 transition-colors" to="/plan">Pilih Kompetisi</Link></li>
            <li><Link className="hover:text-gold-300 transition-colors" to="/register">Register</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-body font-bold text-gold-300 text-sm uppercase tracking-wider mb-3">
            Kontak
          </h3>
          <ul className="space-y-2 font-body text-sm text-white/70">
            <li>halo@arena-esports.id</li>
            <li>+62 812-3456-7890</li>
            <li>Instagram @arena.esports</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-6 md:px-8 py-5 text-xs text-white/40 font-body">
          © {new Date().getFullYear()} ARENA Esports Championship. Semua logo game adalah
          milik pemegang hak masing-masing dan hanya digunakan sebagai referensi kategori
          lomba.
        </p>
      </div>
    </footer>
  );
}
