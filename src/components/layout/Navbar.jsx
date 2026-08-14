import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "#about", label: "About Us" },
  { to: "#timeline", label: "Timeline" },
  { to: "/plan", label: "Competition" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* =========================
     Detect Scroll
  ========================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================
     Close Mobile Menu
  ========================= */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* =========================
     Handle Hash
  ========================= */
  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const scrollToSection = () => {
      const element = document.querySelector(location.hash);

      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const timer = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  /* =========================
     Scroll Navigation
  ========================= */
  const handleScroll = (id) => {
    setOpen(false);

    if (location.pathname === "/") {
      const element = document.querySelector(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      window.history.replaceState(null, "", `/${id}`);

      return;
    }

    navigate(`/${id}`);
  };

  /* =========================
     Active State
  ========================= */
  const isActive = (link) => {
    if (link.to.startsWith("#")) {
      return location.hash === link.to;
    }

    return location.pathname === link.to;
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] px-4 pt-3 md:px-8 md:pt-4">
      <motion.nav
        animate={{
          y: scrolled ? 0 : 3,
          scale: scrolled ? 0.985 : 1,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className={`
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          rounded-full
          border
          px-4
          py-2.5
          transition-all
          duration-300
          md:px-5
          ${
            scrolled
              ? "border-gold-300/30 bg-[#071a31]/85 shadow-[0_10px_35px_rgba(0,0,0,.22)] backdrop-blur-xl"
              : "border-gold-300/40 bg-gold-300 shadow-[0_8px_25px_rgba(0,0,0,.15)]"
          }
        `}
      >
        {/* =========================
            LOGO
        ========================= */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          aria-label="UI Games League Home"
          className="group flex items-center gap-2.5"
        >
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-navy-900/20 bg-white/10 md:h-10 md:w-10">
            <img
              src="/vite.svg"
              alt="UI Games League Logo"
              className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 md:h-8 md:w-8"
            />
          </div>

          <span
            className={`
              hidden
              text-lg
              leading-none
              transition-colors
              sm:block
              md:text-xl
              ${
                scrolled
                  ? "text-gold-300"
                  : "text-navy-900"
              }
            `}
            style={{ fontFamily: "Lucidity" }}
          >
            UI Games League
          </span>
        </Link>

        {/* =========================
            DESKTOP MENU
        ========================= */}
        <ul
          className={`
            hidden
            items-center
            gap-1
            md:flex
            ${
              scrolled
                ? "text-white/70"
                : "text-navy-900"
            }
          `}
        >
          {links.map((link) => {
            const active = isActive(link);

            return (
              <li key={link.label}>
                {link.to.startsWith("#") ? (
                  <button
                    type="button"
                    onClick={() => handleScroll(link.to)}
                    className={`
                      relative
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      transition-colors
                      duration-300
                      ${
                        active
                          ? scrolled
                            ? "text-gold-300"
                            : "text-navy-900"
                          : scrolled
                            ? "hover:text-gold-300"
                            : "hover:text-navy-700"
                      }
                    `}
                  >
                    {link.label}

                    <motion.span
                      initial={false}
                      animate={{
                        width: active ? "18px" : "0px",
                        opacity: active ? 1 : 0,
                      }}
                      className="absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gold-300"
                    />
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className={`
                      relative
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      transition-colors
                      duration-300
                      ${
                        active
                          ? scrolled
                            ? "text-gold-300"
                            : "text-navy-900"
                          : scrolled
                            ? "hover:text-gold-300"
                            : "hover:text-navy-700"
                      }
                    `}
                  >
                    {link.label}

                    <motion.span
                      initial={false}
                      animate={{
                        width: active ? "18px" : "0px",
                        opacity: active ? 1 : 0,
                      }}
                      className="absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gold-300"
                    />
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* =========================
            REGISTER DESKTOP
        ========================= */}
        <div className="hidden md:block">
          <Link
            to="/register"
            className="
              group
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-navy-900
              px-5
              py-2.5
              text-sm
              font-bold
              text-gold-300
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-navy-800
              hover:shadow-[0_8px_25px_rgba(0,0,0,.25)]
            "
          >
            Register
          </Link>
        </div>

        {/* =========================
            MOBILE BUTTON
        ========================= */}
        <button
          type="button"
          className={`
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            transition-colors
            md:hidden
            ${
              scrolled
                ? "text-gold-300 hover:bg-white/5"
                : "text-navy-900 hover:bg-black/5"
            }
          `}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </motion.nav>

      {/* =========================
          MOBILE MENU
      ========================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              mx-auto
              mt-2
              max-w-6xl
              overflow-hidden
              rounded-2xl
              border
              border-gold-300/20
              bg-[#071a31]/95
              p-3
              shadow-[0_15px_40px_rgba(0,0,0,.3)]
              backdrop-blur-xl
              md:hidden
            "
          >
            <ul className="space-y-1">
              {links.map((link) => {
                const active = isActive(link);

                return (
                  <li key={link.label}>
                    {link.to.startsWith("#") ? (
                      <button
                        type="button"
                        onClick={() => handleScroll(link.to)}
                        className={`
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3
                          text-left
                          text-sm
                          font-semibold
                          transition-colors
                          ${
                            active
                              ? "bg-gold-300/10 text-gold-300"
                              : "text-white/70 hover:bg-white/5 hover:text-gold-300"
                          }
                        `}
                      >
                        {link.label}

                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            active
                              ? "bg-gold-300"
                              : "bg-white/10"
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={link.to}
                        className={`
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3
                          text-sm
                          font-semibold
                          transition-colors
                          ${
                            active
                              ? "bg-gold-300/10 text-gold-300"
                              : "text-white/70 hover:bg-white/5 hover:text-gold-300"
                          }
                        `}
                      >
                        {link.label}

                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            active
                              ? "bg-gold-300"
                              : "bg-white/10"
                          }`}
                        />
                      </Link>
                    )}
                  </li>
                );
              })}

              <li className="pt-2">
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-gold-300
                    px-4
                    py-3
                    text-sm
                    font-black
                    text-navy-900
                    transition-all
                    duration-300
                    hover:bg-gold-200
                  "
                >
                  Register
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}