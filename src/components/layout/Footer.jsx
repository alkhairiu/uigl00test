import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">

      {/* =========================================================
          MAIN FOOTER
          ========================================================= */}
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">

        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr] md:gap-x-10">

          {/* =====================================================
              BRAND
              ===================================================== */}
          <div>

            {/* LOGO */}
            <Link
              to="/"
              className="mb-5 flex items-center gap-3"
            >
              <img
                src="/vite.svg"
                alt="UI Games League"
                className="h-11 w-11 object-contain"
              />

              <span className="font-heading text-xl tracking-wide text-gold-300 md:text-2xl">
                UI GAMES LEAGUE
              </span>
            </Link>

            {/* DESCRIPTION */}
            <p className="max-w-md font-body text-sm leading-6 text-white/60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Consequatur quia placeat blanditiis perferendis, vero possimus, vel magnam consectetur accusantium
               reprehenderit debitis numquam, corrupti nihil eos minima quibusdam voluptatem. Dolore, amet!
            </p>

            {/* DECORATIVE LINE */}
            <div className="mt-7 flex items-center gap-3">
              <div className="h-px w-16 bg-gold-300/50" />
              <div className="h-1.5 w-1.5 rotate-45 bg-gold-300" />
            </div>

          </div>


          {/* =====================================================
              NAVIGATION
              ===================================================== */}
          <div>

            <h3 className="mb-5 font-body text-sm font-bold uppercase tracking-[0.15em] text-gold-300">
              Navigasi
            </h3>

            <ul className="space-y-4 font-body text-sm text-white/60">

              <li>
                <Link
                  to="/"
                  className="group flex items-center gap-2 transition-colors duration-200 hover:text-gold-300"
                >
                  <span className="h-px w-0 bg-gold-300 transition-all duration-200 group-hover:w-4" />
                  Beranda
                </Link>
              </li>

              <li>
                <Link
                  to="/plan"
                  className="group flex items-center gap-2 transition-colors duration-200 hover:text-gold-300"
                >
                  <span className="h-px w-0 bg-gold-300 transition-all duration-200 group-hover:w-4" />
                  Pilih Kompetisi
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="group flex items-center gap-2 transition-colors duration-200 hover:text-gold-300"
                >
                  <span className="h-px w-0 bg-gold-300 transition-all duration-200 group-hover:w-4" />
                  Register
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================================
              NAVIGATION 2
              ===================================================== */}
          <div>

            <h3 className="mb-5 font-body text-sm font-bold uppercase tracking-[0.15em] text-gold-300">
              Sponsored by
            </h3>

            <ul className="space-y-4 font-body text-sm text-white/60">

              <li>
                <Link
                  to="/#about"
                  className="group flex items-center gap-2 transition-colors duration-200 hover:text-gold-300"
                >
                  <span className="h-px w-0 bg-gold-300 transition-all duration-200 group-hover:w-4" />
                  Lorem ipsum
                </Link>
              </li>

              <li>
                <Link
                  to="/#timeline"
                  className="group flex items-center gap-2 transition-colors duration-200 hover:text-gold-300"
                >
                  <span className="h-px w-0 bg-gold-300 transition-all duration-200 group-hover:w-4" />
                  Lorem Ipsum
                </Link>
              </li>

              <li>
                <Link
                  to="/plan"
                  className="group flex items-center gap-2 transition-colors duration-200 hover:text-gold-300"
                >
                  <span className="h-px w-0 bg-gold-300 transition-all duration-200 group-hover:w-4" />
                  Lorem ipsum
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================================
              CONTACT
              ===================================================== */}
          <div>

            <h3 className="mb-5 font-body text-sm font-bold uppercase tracking-[0.15em] text-gold-300">
              Kontak
            </h3>

            <div className="font-body text-sm text-white/60">

              <a
                href="https://instagram.com/uigamesleague"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 transition-colors duration-200 hover:text-gold-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-300/30 transition-all duration-200 group-hover:border-gold-300 group-hover:bg-gold-300/10">
                  <span className="text-xs font-bold">
                    IG
                  </span>
                </span>

                <span>
                  @uigamesleague
                </span>
              </a>

            </div>

            {/* CONTACT DECORATION */}
            <div className="mt-7">
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-white/30">
                Follow the journey
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                <span className="h-px w-12 bg-gold-300/30" />
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          COPYRIGHT
          ========================================================= */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">

          <p className="font-body text-xs text-white/35">
            © {new Date().getFullYear()} ARENA Esports Championship.
          </p>

          <p className="font-body text-[10px] text-white/25">
            All game logos belong to their respective owners.
          </p>

        </div>

      </div>

    </footer>
  );
}