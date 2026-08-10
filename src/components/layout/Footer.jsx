import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">

      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

          {/* BRAND */}
          <div className="md:col-span-1">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 mb-5"
            >
              <img
                src="/vite.svg"
                alt="ARENA Logo"
                className="w-11 h-11 object-contain"
              />

              <span className="font-body text-2xl font-medium tracking-wide text-white">
                ARENA
              </span>
            </Link>

            {/* DESCRIPTION */}
            <p className="font-body text-sm leading-6 text-white/70 max-w-md">
              Wadah kompetisi esport antar sekolah & kampus. Satu panggung
              untuk Mobile Legends, PUBG Mobile, Valorant, dan eFootball —
              dari babak penyisihan sampai grand final.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-body font-bold text-gold-300 text-sm uppercase tracking-wider mb-4">
              Navigasi
            </h3>

            <ul className="space-y-3 font-body text-sm text-white/70">
              <li>
                <Link
                  className="hover:text-gold-300 transition-colors"
                  to="/"
                >
                  Beranda
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-gold-300 transition-colors"
                  to="/plan"
                >
                  Pilih Kompetisi
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-gold-300 transition-colors"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-body font-bold text-gold-300 text-sm uppercase tracking-wider mb-4">
              Kontak
            </h3>

            <ul className="space-y-3 font-body text-sm text-white/70">
              <li>
                halo@arena-esports.id
              </li>

              <li>
                +62 812-3456-7890
              </li>

              <li>
                Instagram @arena.esports
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-6 md:px-8 py-5 text-xs text-white/40 font-body">
          © {new Date().getFullYear()} ARENA Esports Championship. Semua
          logo game adalah milik pemegang hak masing-masing dan hanya
          digunakan sebagai referensi kategori lomba.
        </p>
      </div>

    </footer>
  );
}