import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FlameLogo } from "../../assets/icons/GameIcons.jsx";

const links = [
  { to: "/#about", label: "About Us" },
  { to: "/#timeline", label: "Timeline" },
  { to: "/plan", label: "Competition" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8">
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-full bg-gold-gradient
        px-4 md:px-6 py-2.5 shadow-gold transition-shadow ${scrolled ? "shadow-glow-purple" : ""}`}
      >
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="ARENA — Beranda">
          <FlameLogo className="w-8 h-8 md:w-9 md:h-9" />
          <span className="font-heading text-navy-900 text-lg md:text-xl tracking-wide">ARENA</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-body font-semibold text-navy-900 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <NavLink to={l.to} className="hover:opacity-70 transition-opacity">
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            to="/register"
            className="rounded-full bg-navy-900 text-gold-300 font-body font-bold text-sm px-5 py-2 shadow-glow-purple border border-accent-purple/60 hover:bg-navy-800 transition-colors"
          >
            Register
          </Link>
        </div>

        <button
          className="md:hidden text-navy-900 p-1"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-auto max-w-6xl mt-2 rounded-2xl bg-navy-800 border border-gold-400/30 p-4 font-body">
          <ul className="flex flex-col gap-3 text-gold-200 font-semibold">
            {links.map((l) => (
              <li key={l.label}>
                <NavLink to={l.to} onClick={() => setOpen(false)} className="block py-1">
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="btn-gold w-full mt-1"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
