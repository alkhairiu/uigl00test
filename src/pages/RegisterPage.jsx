import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  Phone,
  ShieldCheck,
  Trophy,
  User,
  Users,
} from "lucide-react";

const games = [
  {
    id: "pes",
    name: "eFootball",
    image: "/efootball.svg",
    members: 2,
  },
  {
    id: "pubg",
    name: "PUBG Mobile",
    image: "/pubg-mobile.svg",
    members: 4,
  },
  {
    id: "ml",
    name: "Mobile Legends",
    image: "/mobile-legends.svg",
    members: 5,
  },
  {
    id: "valo",
    name: "Valorant",
    image: "/valorant.svg",
    members: 5,
  },
];

/* =========================================================
   BACKGROUND
========================================================= */

function StarField() {
  const stars = Array.from({ length: 80 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: index % 14 === 0 ? 3 : index % 5 === 0 ? 2 : 1,
            height: index % 14 === 0 ? 3 : index % 5 === 0 ? 2 : 1,
            left: `${(index * 17.3) % 100}%`,
            top: `${(index * 12.8) % 75}%`,
          }}
          animate={{
            opacity: [0.08, 0.75, 0.08],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2.5 + (index % 4),
            delay: (index % 10) * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function FeaturedStars() {
  return (
    <>
      <motion.div
        animate={{
          rotate: [0, 90, 180],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[10%] top-[12%] h-6 w-6"
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -90, -180],
          opacity: [0.15, 0.7, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[12%] top-[19%] h-5 w-5"
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-100" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue-100" />
      </motion.div>
    </>
  );
}

function AmbientBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(46,120,181,.35),transparent_42%),linear-gradient(180deg,#06172d_0%,#0b3157_55%,#061a30_100%)]" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.17, 0.08],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[2%] h-[550px] w-[760px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-150px] top-[30%] h-[380px] w-[380px] rounded-full bg-blue-500/[0.05] blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-150px] top-[42%] h-[400px] w-[400px] rounded-full bg-gold-300/[0.035] blur-[130px]"
      />
    </>
  );
}

function OceanBackground() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[22%] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b466c]/40 via-[#093657]/75 to-[#051a2d]" />

      <div className="absolute left-0 right-0 top-0 h-px bg-blue-100/20" />

      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scaleX: [0.9, 1.05, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-0 h-8 w-[65%] -translate-x-1/2 rounded-full bg-cyan-200/10 blur-2xl"
      />

      <motion.div
        animate={{ x: [0, -70, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute left-[-10%] right-[-10%] top-[30%] h-px bg-white/[0.07]"
      />

      <motion.div
        animate={{ x: [-50, 50, -50] }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute left-[-10%] right-[-10%] top-[55%] h-px bg-white/[0.045]"
      />
    </div>
  );
}

/* =========================================================
   FIELD
========================================================= */

function FormField({ label, error, icon: Icon, children }) {
  return (
    <div className="mb-5">
      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#062B4F]">
        {Icon && <Icon className="h-4 w-4 text-[#062B4F]/50" />}
        {label}
      </label>

      {children}

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 rounded-lg bg-red-950/10 px-3 py-2 text-xs text-red-900"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

function inputClass(error) {
  return `
    w-full
    rounded-xl
    border
    px-4
    py-3
    text-sm
    text-[#062B4F]
    placeholder:text-[#062B4F]/35
    outline-none
    transition-all
    ${
      error
        ? "border-red-700 bg-red-50/20"
        : "border-[#062B4F]/15 bg-white/20"
    }
    focus:border-[#062B4F]/40
    focus:bg-white/30
  `;
}

/* =========================================================
   GAME CARD
========================================================= */

function GameCard({
  game,
  active,
  position,
  onClick,
}) {
  const styles = {
    center: {
      transform: "translate(-50%, -50%) translateX(0) scale(1)",
      opacity: 1,
      zIndex: 30,
    },
    left: {
      transform:
        "translate(-50%, -50%) translateX(-380px) scale(.82)",
      opacity: 0.58,
      zIndex: 20,
    },
    right: {
      transform:
        "translate(-50%, -50%) translateX(380px) scale(.82)",
      opacity: 0.58,
      zIndex: 20,
    },
    far: {
      transform:
        "translate(-50%, -50%) translateX(0) scale(.65)",
      opacity: 0,
      zIndex: 1,
    },
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={styles[position]}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute left-1/2 top-1/2 flex h-[240px] w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden rounded-[28px] px-6 text-center md:h-[270px] md:w-[390px]"
      style={{
        background: active
          ? "linear-gradient(135deg,#FFD45A,#F4BB31,#D99400)"
          : "linear-gradient(135deg,#B98612,#855F08)",
        border: active
          ? "1px solid rgba(255,240,170,.8)"
          : "1px solid rgba(255,255,255,.1)",
        boxShadow: active
          ? "0 28px 70px rgba(0,0,0,.32)"
          : "0 12px 30px rgba(0,0,0,.18)",
      }}
    >
      {active && (
        <motion.div
          animate={{ x: ["-120%", "140%"] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute inset-y-0 left-0 w-1/3 skew-x-[-20deg] bg-white/15"
        />
      )}

      <motion.div
        animate={{
          y: active ? [0, -5, 0] : 0,
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="relative z-10"
      >
        <img
          src={game.image}
          alt={game.name}
          className={`object-contain ${
            active
              ? "h-24 w-24 md:h-28 md:w-28"
              : "h-20 w-20"
          }`}
        />
      </motion.div>

      <h3
        className={`relative z-10 font-heading font-bold ${
          active
            ? "mt-4 text-2xl text-[#062B4F] md:text-3xl"
            : "mt-4 text-xl text-white"
        }`}
      >
        {game.name}
      </h3>

      <p
        className={`relative z-10 mt-1 text-xs ${
          active
            ? "text-[#062B4F]/60"
            : "text-white/55"
        }`}
      >
        {game.members} pemain
      </p>

      {active && (
        <div className="relative z-10 mt-4 rounded-full bg-[#062B4F]/10 px-4 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#062B4F]/60">
          Selected
        </div>
      )}
    </motion.button>
  );
}

/* =========================================================
   REGISTER PAGE
========================================================= */

export default function RegisterPage() {
  const [selectedGame, setSelectedGame] = useState("ml");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    teamName: "",
    school: "",
    captainName: "",
    captainEmail: "",
    captainWhatsapp: "",
    members: [
      { name: "", email: "" },
      { name: "", email: "" },
      { name: "", email: "" },
      { name: "", email: "" },
    ],
  });

  const [errors, setErrors] = useState({});

  const currentGame =
    games.find((game) => game.id === selectedGame) || games[2];

  const currentIndex = games.findIndex(
    (game) => game.id === selectedGame
  );

  const changeGame = (gameId) => {
    const game = games.find((item) => item.id === gameId);

    if (!game) return;

    setSelectedGame(gameId);

    setForm((prev) => ({
      ...prev,
      members: Array.from(
        { length: game.members },
        (_, index) => ({
          name: prev.members[index]?.name || "",
          email: prev.members[index]?.email || "",
        })
      ),
    }));

    setErrors({});
  };

  const nextGame = () => {
    const nextIndex = (currentIndex + 1) % games.length;
    changeGame(games[nextIndex].id);
  };

  const previousGame = () => {
    const previousIndex =
      (currentIndex - 1 + games.length) % games.length;

    changeGame(games[previousIndex].id);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  const handleMemberChange = (index, field) => (e) => {
    setForm((prev) => {
      const members = [...prev.members];

      members[index] = {
        ...members[index],
        [field]: e.target.value,
      };

      return {
        ...prev,
        members,
      };
    });

    setErrors((prev) => ({
      ...prev,
      [`member-${index}-${field}`]: undefined,
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.teamName.trim()) {
      nextErrors.teamName = "Nama tim wajib diisi.";
    }

    if (!form.school.trim()) {
      nextErrors.school =
        "Sekolah atau kampus wajib diisi.";
    }

    if (!form.captainName.trim()) {
      nextErrors.captainName =
        "Nama ketua tim wajib diisi.";
    }

    if (!form.captainEmail.trim()) {
      nextErrors.captainEmail =
        "Email ketua tim wajib diisi.";
    } else if (
      !/\S+@\S+\.\S+/.test(form.captainEmail)
    ) {
      nextErrors.captainEmail =
        "Format email tidak valid.";
    }

    if (!form.captainWhatsapp.trim()) {
      nextErrors.captainWhatsapp =
        "Nomor WhatsApp wajib diisi.";
    }

    form.members
      .slice(0, currentGame.members)
      .forEach((member, index) => {
        if (!member.name.trim()) {
          nextErrors[`member-${index}-name`] =
            `Nama anggota ${index + 1} wajib diisi.`;
        }

        if (!member.email.trim()) {
          nextErrors[`member-${index}-email`] =
            `Email anggota ${index + 1} wajib diisi.`;
        } else if (!/\S+@\S+\.\S+/.test(member.email)) {
          nextErrors[`member-${index}-email`] =
            "Format email tidak valid.";
        }
      });

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getPosition = (index) => {
    let diff = index - currentIndex;

    if (diff > 2) diff -= games.length;
    if (diff < -2) diff += games.length;

    if (diff === 0) return "center";
    if (diff === -1) return "left";
    if (diff === 1) return "right";

    return "far";
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06192f] px-4 pb-24 pt-28 md:px-8 md:pt-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <AmbientBackground />
        <StarField />
        <FeaturedStars />
        <OceanBackground />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_32%,rgba(0,5,12,.28)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-gold-300/70">
            UI GAMES LEAGUE 2026
          </p>

          <h1 className="heading-hero mt-3 text-4xl text-white md:text-6xl">
            REGISTER
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45">
            Step into the arena. Pilih game, bentuk tim, dan
            siapkan dirimu untuk kompetisi.
          </p>
        </motion.header>

        {/* =====================================================
            STEP NAVIGATION
        ===================================================== */}

        <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-300 text-[9px] font-black text-[#062B4F]">
              01
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gold-300">
              Choose Game
            </span>
          </div>

          <span className="h-px w-12 bg-white/10" />

          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[9px] font-black text-white/30">
              02
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">
              Team Data
            </span>
          </div>
        </div>

        {/* =====================================================
            GAME SELECTOR
        ===================================================== */}

        <section className="mt-12">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-300/70">
                Step 01
              </p>

              <h2 className="mt-1 text-xl font-black text-white md:text-2xl">
                Choose Your Game
              </h2>
            </div>

            <span className="text-[9px] font-bold tracking-[0.2em] text-white/25">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(games.length).padStart(2, "0")}
            </span>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] backdrop-blur-sm">
            <div className="relative h-[300px] md:h-[340px]">
              <button
                type="button"
                onClick={previousGame}
                aria-label="Game sebelumnya"
                className="absolute left-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold-300/40 bg-[#06192f]/80 text-gold-300 backdrop-blur transition hover:scale-110 md:left-5 md:h-12 md:w-12"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={nextGame}
                aria-label="Game berikutnya"
                className="absolute right-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold-300/40 bg-[#06192f]/80 text-gold-300 backdrop-blur transition hover:scale-110 md:right-5 md:h-12 md:w-12"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              {games.map((game, index) => (
                <GameCard
                  key={game.id}
                  game={game}
                  active={index === currentIndex}
                  position={getPosition(index)}
                  onClick={() => changeGame(game.id)}
                />
              ))}
            </div>

            {/* dots */}
            <div className="flex justify-center gap-2 pb-5">
              {games.map((game) => (
                <button
                  key={game.id}
                  type="button"
                  onClick={() => changeGame(game.id)}
                  aria-label={`Pilih ${game.name}`}
                  className={`h-1.5 rounded-full transition-all ${
                    selectedGame === game.id
                      ? "w-8 bg-gold-300"
                      : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FORM
        ===================================================== */}

        <section className="mx-auto mt-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-300/70">
              Step 02
            </p>

            <h2 className="heading-hero mt-2 text-3xl text-white md:text-5xl">
              TEAM REGISTRATION
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/40">
              Lengkapi informasi untuk{" "}
              <span className="font-bold text-gold-300">
                {currentGame.name}
              </span>
              .
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[28px] border border-gold-300/40 bg-gradient-to-br from-[#d8b64e] to-[#a37e20] px-6 py-14 text-center shadow-[0_25px_70px_rgba(0,0,0,.25)]"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#062B4F] text-gold-300">
                  <Check className="h-9 w-9" />
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#062B4F]">
                  Pendaftaran Berhasil
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#062B4F]/70">
                  Data tim untuk{" "}
                  <strong>{currentGame.name}</strong>{" "}
                  berhasil dikirim.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full bg-[#062B4F] px-7 py-3 text-sm font-bold text-gold-300 transition hover:-translate-y-0.5"
                >
                  Kembali
                </button>
              </motion.div>
            ) : (
              <motion.form
                key={selectedGame}
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-[28px] border border-gold-300/40 bg-gradient-to-br from-[#d6b34a] to-[#9d7b23] shadow-[0_25px_70px_rgba(0,0,0,.25)]"
              >
                {/* selected game */}
                <div className="border-b border-[#062B4F]/10 bg-[#062B4F]/[0.05] px-5 py-5 md:px-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#062B4F]/45">
                        Selected Competition
                      </p>

                      <h3 className="mt-1 text-xl font-black text-[#062B4F]">
                        {currentGame.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-[#062B4F] px-4 py-2 text-[10px] font-bold text-gold-300">
                      <Users className="h-3.5 w-3.5" />
                      {currentGame.members} Members
                    </div>
                  </div>
                </div>

                <div className="px-5 py-7 md:px-8 md:py-9">
                  {/* TEAM */}
                  <div className="mb-8">
                    <div className="mb-5 border-b border-[#062B4F]/10 pb-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#062B4F]/40">
                        Section 01
                      </p>

                      <h3 className="mt-1 text-xl font-black text-[#062B4F]">
                        Team Information
                      </h3>
                    </div>

                    <FormField
                      label="Nama Tim"
                      error={errors.teamName}
                      icon={Trophy}
                    >
                      <input
                        type="text"
                        value={form.teamName}
                        onChange={handleChange("teamName")}
                        placeholder="Masukkan nama tim"
                        className={inputClass(
                          errors.teamName
                        )}
                      />
                    </FormField>

                    <FormField
                      label="Sekolah atau Kampus"
                      error={errors.school}
                      icon={ShieldCheck}
                    >
                      <input
                        type="text"
                        value={form.school}
                        onChange={handleChange("school")}
                        placeholder="Nama sekolah atau kampus"
                        className={inputClass(errors.school)}
                      />
                    </FormField>
                  </div>

                  {/* CAPTAIN */}
                  <div className="mb-8 border-t border-[#062B4F]/10 pt-7">
                    <div className="mb-5 border-b border-[#062B4F]/10 pb-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#062B4F]/40">
                        Section 02
                      </p>

                      <h3 className="mt-1 text-xl font-black text-[#062B4F]">
                        Captain Information
                      </h3>
                    </div>

                    <FormField
                      label="Nama Ketua Tim"
                      error={errors.captainName}
                      icon={User}
                    >
                      <input
                        type="text"
                        value={form.captainName}
                        onChange={handleChange(
                          "captainName"
                        )}
                        placeholder="Nama lengkap ketua"
                        className={inputClass(
                          errors.captainName
                        )}
                      />
                    </FormField>

                    <FormField
                      label="Email Ketua Tim"
                      error={errors.captainEmail}
                      icon={Mail}
                    >
                      <input
                        type="email"
                        value={form.captainEmail}
                        onChange={handleChange(
                          "captainEmail"
                        )}
                        placeholder="nama@email.com"
                        className={inputClass(
                          errors.captainEmail
                        )}
                      />
                    </FormField>

                    <FormField
                      label="Nomor WhatsApp"
                      error={errors.captainWhatsapp}
                      icon={Phone}
                    >
                      <input
                        type="tel"
                        value={form.captainWhatsapp}
                        onChange={handleChange(
                          "captainWhatsapp"
                        )}
                        placeholder="08xxxxxxxxxx"
                        className={inputClass(
                          errors.captainWhatsapp
                        )}
                      />
                    </FormField>
                  </div>

                  {/* MEMBERS */}
                  <div className="border-t border-[#062B4F]/10 pt-7">
                    <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#062B4F]/10 pb-4">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#062B4F]/40">
                          Section 03
                        </p>

                        <h3 className="mt-1 text-xl font-black text-[#062B4F]">
                          Team Members
                        </h3>
                      </div>

                      <span className="rounded-full bg-[#062B4F]/10 px-3 py-1.5 text-[10px] font-bold text-[#062B4F]/60">
                        {currentGame.members} members
                      </span>
                    </div>

                    {form.members
                      .slice(0, currentGame.members)
                      .map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.05,
                          }}
                          className="mb-5 rounded-2xl border border-[#062B4F]/10 bg-[#062B4F]/[0.04] p-4 md:p-5"
                        >
                          <div className="mb-4 flex items-center justify-between">
                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#062B4F]/35">
                                Member
                              </p>

                              <h4 className="mt-1 text-sm font-black text-[#062B4F]">
                                Anggota {index + 1}
                              </h4>
                            </div>

                            <span className="text-[9px] font-bold text-[#062B4F]/35">
                              {String(index + 1).padStart(
                                2,
                                "0"
                              )}{" "}
                              /{" "}
                              {String(
                                currentGame.members
                              ).padStart(2, "0")}
                            </span>
                          </div>

                          <FormField
                            label={`Nama Anggota ${
                              index + 1
                            }`}
                            error={
                              errors[
                                `member-${index}-name`
                              ]
                            }
                          >
                            <input
                              type="text"
                              value={member.name}
                              onChange={handleMemberChange(
                                index,
                                "name"
                              )}
                              placeholder="Nama lengkap"
                              className={inputClass(
                                errors[
                                  `member-${index}-name`
                                ]
                              )}
                            />
                          </FormField>

                          <FormField
                            label={`Email Anggota ${
                              index + 1
                            }`}
                            error={
                              errors[
                                `member-${index}-email`
                              ]
                            }
                          >
                            <input
                              type="email"
                              value={member.email}
                              onChange={handleMemberChange(
                                index,
                                "email"
                              )}
                              placeholder="nama@email.com"
                              className={inputClass(
                                errors[
                                  `member-${index}-email`
                                ]
                              )}
                            />
                          </FormField>
                        </motion.div>
                      ))}
                  </div>

                  {/* SUBMIT */}
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#062B4F] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-gold-300 shadow-[0_12px_30px_rgba(0,0,0,.18)] transition-all hover:bg-[#0a3a60]"
                  >
                    Submit Registration
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}