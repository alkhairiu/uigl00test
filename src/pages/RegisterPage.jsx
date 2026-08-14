import { useState } from "react";

const games = [
  {
    id: "pes",
    name: "eFootball",
    image: "../../public/efootball.svg",
    members: 3,
  },
  {
    id: "pubg",
    name: "PUBG Mobile",
    image: "../../public/pubg-mobile.svg",
    members: 3,
  },
  {
    id: "ml",
    name: "Mobile Legends",
    image: "../../public/mobile-legends.svg",
    members: 4,
  },
  {
    id: "valo",
    name: "Valorant",
    image: "../../public/valorant.svg",
    members: 4,
  },
];

export default function RegisterPage() {
  const [selectedGame, setSelectedGame] = useState("ml");

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
  const [submitted, setSubmitted] = useState(false);

  const currentGame =
    games.find((game) => game.id === selectedGame) ||
    games[2];

  const currentIndex = games.findIndex(
    (game) => game.id === selectedGame
  );

  /* ============================================================
     GAME CHANGE
  ============================================================ */

  const changeGame = (gameId) => {
    const game = games.find(
      (item) => item.id === gameId
    );

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
    const nextIndex =
      (currentIndex + 1) % games.length;

    changeGame(games[nextIndex].id);
  };

  const previousGame = () => {
    const previousIndex =
      (currentIndex - 1 + games.length) %
      games.length;

    changeGame(games[previousIndex].id);
  };

  /* ============================================================
     FORM CHANGE
  ============================================================ */

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

  const handleMemberChange =
    (index, field) => (e) => {
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

  /* ============================================================
     VALIDATION
  ============================================================ */

  const validate = () => {
    const nextErrors = {};

    if (!form.teamName.trim()) {
      nextErrors.teamName =
        "Nama tim wajib diisi.";
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
      !/\S+@\S+\.\S+/.test(
        form.captainEmail
      )
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
          nextErrors[
            `member-${index}-name`
          ] = `Nama anggota ${
            index + 1
          } wajib diisi.`;
        }

        if (!member.email.trim()) {
          nextErrors[
            `member-${index}-email`
          ] = `Email anggota ${
            index + 1
          } wajib diisi.`;
        } else if (
          !/\S+@\S+\.\S+/.test(member.email)
        ) {
          nextErrors[
            `member-${index}-email`
          ] = "Format email tidak valid.";
        }
      });

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
    }
  };

  /* ============================================================
     CAROUSEL POSITION
  ============================================================ */

  const getRelativePosition = (index) => {
    let difference =
      index - currentIndex;

    if (difference > 2) {
      difference -= games.length;
    }

    if (difference < -2) {
      difference += games.length;
    }

    return difference;
  };

  return (
    <main
      className="
        min-h-screen
        overflow-x-hidden
        bg-[#062B4F]
        px-4
        pb-20
        pt-32
        md:px-8
        md:pt-36
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* ======================================================
            PILIH GAME
        ====================================================== */}

        <section>

          <h1
            className="
              heading-hero
              text-center
              text-4xl
              leading-tight
              text-white
              md:text-5xl
              lg:text-6xl
            "
          >
            PILIH GAME
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-center
              font-body
              text-sm
              leading-6
              text-white/60
              md:text-base
            "
          >
            Pilih game yang ingin kamu ikuti
            untuk melakukan pendaftaran tim.
          </p>

          {/* ====================================================
              CAROUSEL
          ==================================================== */}

          <div
            className="
              relative
              mx-auto
              mt-12
              h-[330px]
              w-full
              max-w-[1200px]
              md:mt-14
              md:h-[370px]
            "
          >

            {/* LEFT ARROW */}

            <button
              type="button"
              onClick={previousGame}
              aria-label="Game sebelumnya"
              className="
                absolute
                left-1
                top-1/2
                z-[100]
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-2
                border-[#F6C344]
                bg-[#062B4F]
                text-3xl
                leading-none
                text-[#F6C344]
                shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                transition-all
                duration-200
                hover:scale-110
                hover:bg-[#0A3B68]
                active:scale-95
                md:left-4
                md:h-14
                md:w-14
              "
            >
              ‹
            </button>

            {/* RIGHT ARROW */}

            <button
              type="button"
              onClick={nextGame}
              aria-label="Game berikutnya"
              className="
                absolute
                right-1
                top-1/2
                z-[100]
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-2
                border-[#F6C344]
                bg-[#062B4F]
                text-3xl
                leading-none
                text-[#F6C344]
                shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                transition-all
                duration-200
                hover:scale-110
                hover:bg-[#0A3B68]
                active:scale-95
                md:right-4
                md:h-14
                md:w-14
              "
            >
              ›
            </button>

            {/* ==================================================
                CARDS
            ================================================== */}

            <div className="relative h-full w-full">

              {games.map((game, index) => {
                const position =
                  getRelativePosition(index);

                const isCenter =
                  position === 0;

                const isLeft =
                  position === -1;

                const isRight =
                  position === 1;

                let translateX = "0px";

                if (isLeft) {
                  translateX = "-390px";
                }

                if (isRight) {
                  translateX = "390px";
                }

                if (
                  !isCenter &&
                  !isLeft &&
                  !isRight
                ) {
                  translateX =
                    position < 0
                      ? "-800px"
                      : "800px";
                }

                return (
                  <button
                    key={game.id}
                    type="button"
                    onClick={() =>
                      changeGame(game.id)
                    }
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      -translate-x-1/2
                      -translate-y-1/2
                      flex-col
                      items-center
                      justify-center
                      rounded-[30px]
                      transition-all
                      duration-[650ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      focus:outline-none
                    "
                    style={{
                      width: isCenter
                        ? "430px"
                        : "350px",

                      height: isCenter
                        ? "255px"
                        : "210px",

                      transform: `
                        translate(-50%, -50%)
                        translateX(${translateX})
                        scale(${isCenter ? 1 : 0.84})
                      `,

                      opacity:
                        isCenter ||
                        isLeft ||
                        isRight
                          ? 1
                          : 0,

                      zIndex: isCenter
                        ? 30
                        : 10,

                      background: isCenter
                        ? "linear-gradient(135deg, #FFD45A 0%, #F4BB31 50%, #D99400 100%)"
                        : "linear-gradient(135deg, #E1AD2C 0%, #C98E08 100%)",

                      border: isCenter
                        ? "2px solid #FFD45A"
                        : "2px solid #D39A13",

                      boxShadow: isCenter
                        ? "0 25px 55px rgba(0,0,0,0.40)"
                        : "0 14px 35px rgba(0,0,0,0.25)",
                    }}
                  >

                    {/* ==================================================
                        GAME LOGO IMAGE
                    ================================================== */}

                    <div
                      className={`
                        flex
                        items-center
                        justify-center
                        ${
                          isCenter
                            ? "h-[90px] w-[90px] md:h-[100px] md:w-[100px]"
                            : "h-[70px] w-[70px] md:h-[78px] md:w-[78px]"
                        }
                      `}
                    >
                      <img
                        src={game.image}
                        alt={game.name}
                        className="
                          h-full
                          w-full
                          object-contain
                          drop-shadow-md
                          transition-transform
                          duration-500
                        "
                      />
                    </div>

                    {/* ==================================================
                        GAME NAME
                    ================================================== */}

                    <h2
                      className={`
                        font-heading
                        ${
                          isCenter
                            ? "mt-5 text-3xl text-[#062B4F]"
                            : "mt-4 text-xl text-white"
                        }
                      `}
                    >
                      {game.name}
                    </h2>

                    {/* ==================================================
                        SUBTITLE
                    ================================================== */}

                    <p
                      className={`
                        mt-1
                        font-body
                        ${
                          isCenter
                            ? "text-sm text-[#062B4F]/70"
                            : "text-xs text-white/70"
                        }
                      `}
                    >
                      {game.subtitle}
                    </p>

                  </button>
                );
              })}

            </div>
          </div>

          {/* ====================================================
              DOTS
          ==================================================== */}

          <div
            className="
              mt-2
              flex
              justify-center
              gap-2
            "
          >
            {games.map((game) => (
              <button
                key={game.id}
                type="button"
                onClick={() =>
                  changeGame(game.id)
                }
                aria-label={`Pilih ${game.name}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    selectedGame === game.id
                      ? "w-9 bg-[#F6C344]"
                      : "w-2 bg-white/30"
                  }
                `}
              />
            ))}
          </div>

        </section>


        {/* ======================================================
            REGISTER ACCOUNT
        ====================================================== */}

        <section
          className="
            mt-24
            md:mt-28
          "
        >

          <p
            className="
              text-center
              font-body
              text-sm
              text-white/50
            "
          >
            Season 2026
          </p>

          <h2
            className="
              heading-hero
              mt-2
              text-center
              text-4xl
              text-white
              md:text-5xl
            "
          >
            REGISTER ACCOUNT
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-center
              font-body
              text-sm
              leading-6
              text-white/60
            "
          >
            Lengkapi data tim untuk mengikuti
            kompetisi{" "}
            <span className="font-bold text-[#F6C344]">
              {currentGame.name}
            </span>
            .
          </p>

          {/* ====================================================
              FORM
          ==================================================== */}

          <div className="mx-auto mt-10 max-w-2xl">

            {submitted ? (

              <div
                className="
                  rounded-[28px]
                  border-2
                  border-[#E5AA18]
                  bg-gradient-to-br
                  from-[#C5A94E]
                  to-[#967A24]
                  px-6
                  py-14
                  text-center
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-[#062B4F]
                    text-3xl
                    text-[#F6C344]
                  "
                >
                  ✓
                </div>

                <h3
                  className="
                    mt-6
                    font-heading
                    text-2xl
                    text-[#062B4F]
                  "
                >
                  Pendaftaran Berhasil!
                </h3>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-md
                    font-body
                    text-sm
                    leading-6
                    text-[#062B4F]/70
                  "
                >
                  Data tim kamu untuk{" "}
                  <strong>
                    {currentGame.name}
                  </strong>{" "}
                  sudah berhasil dikirim.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSubmitted(false)
                  }
                  className="
                    mt-8
                    rounded-full
                    bg-[#062B4F]
                    px-8
                    py-3
                    font-body
                    text-sm
                    font-bold
                    text-[#F6C344]
                    transition
                    hover:-translate-y-0.5
                  "
                >
                  Kembali
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                noValidate
                className="
                  rounded-[28px]
                  border-2
                  border-[#E5AA18]
                  bg-gradient-to-br
                  from-[#C5A94E]
                  to-[#967A24]
                  px-5
                  py-7
                  md:px-8
                  md:py-9
                "
              >

                {/* ==================================================
                    GAME INFO
                ================================================== */}

                <div
                  className="
                    mb-8
                    rounded-xl
                    border
                    border-[#062B4F]/15
                    bg-[#062B4F]/10
                    px-4
                    py-4
                  "
                >
                  <p
                    className="
                      font-body
                      text-xs
                      uppercase
                      tracking-wider
                      text-[#062B4F]/55
                    "
                  >
                    Game yang dipilih
                  </p>

                  <div
                    className="
                      mt-1
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <h3
                      className="
                        font-heading
                        text-lg
                        text-[#062B4F]
                      "
                    >
                      {currentGame.name}
                    </h3>

                    <span
                      className="
                        rounded-full
                        bg-[#062B4F]
                        px-3
                        py-1
                        font-body
                        text-[11px]
                        font-bold
                        text-[#F6C344]
                      "
                    >
                      1 Ketua +{" "}
                      {currentGame.members} Anggota
                    </span>
                  </div>
                </div>

                {/* ==================================================
                    TEAM
                ================================================== */}

                <FormField
                  label="Nama Tim"
                  error={errors.teamName}
                >
                  <input
                    type="text"
                    value={form.teamName}
                    onChange={handleChange("teamName")}
                    placeholder="Nama tim"
                    className={inputClass(
                      errors.teamName
                    )}
                  />
                </FormField>

                <FormField
                  label="Sekolah atau Kampus"
                  error={errors.school}
                >
                  <input
                    type="text"
                    value={form.school}
                    onChange={handleChange("school")}
                    placeholder="Nama sekolah/kampus"
                    className={inputClass(
                      errors.school
                    )}
                  />
                </FormField>

                {/* ==================================================
                    CAPTAIN
                ================================================== */}

                <div
                  className="
                    my-8
                    border-t
                    border-[#062B4F]/15
                    pt-7
                  "
                >
                  <h3
                    className="
                      font-heading
                      text-xl
                      text-[#062B4F]
                    "
                  >
                    Ketua Tim
                  </h3>

                  <p
                    className="
                      mt-1
                      font-body
                      text-xs
                      text-[#062B4F]/60
                    "
                  >
                    Data ketua tim sebagai
                    kontak utama.
                  </p>
                </div>

                <FormField
                  label="Nama Ketua Tim"
                  error={errors.captainName}
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
                  label="Nomor WhatsApp Ketua Tim"
                  error={errors.captainWhatsapp}
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

                {/* ==================================================
                    MEMBERS
                ================================================== */}

                <div
                  className="
                    my-8
                    border-t
                    border-[#062B4F]/15
                    pt-7
                  "
                >
                  <h3
                    className="
                      font-heading
                      text-xl
                      text-[#062B4F]
                    "
                  >
                    Anggota Tim
                  </h3>

                  <p
                    className="
                      mt-1
                      font-body
                      text-xs
                      text-[#062B4F]/60
                    "
                  >
                    {currentGame.name} membutuhkan{" "}
                    {currentGame.members} anggota.
                  </p>
                </div>

                {form.members
                  .slice(0, currentGame.members)
                  .map((member, index) => (
                    <div
                      key={index}
                      className="
                        mb-6
                        rounded-xl
                        border
                        border-[#062B4F]/10
                        bg-[#062B4F]/5
                        p-4
                        md:p-5
                      "
                    >
                      <div
                        className="
                          mb-4
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <h4
                          className="
                            font-heading
                            text-base
                            text-[#062B4F]
                          "
                        >
                          Anggota {index + 1}
                        </h4>

                        <span
                          className="
                            font-body
                            text-xs
                            text-[#062B4F]/50
                          "
                        >
                          {index + 1}/
                          {currentGame.members}
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
                          placeholder={`Nama anggota ${
                            index + 1
                          }`}
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
                    </div>
                  ))}

                {/* ==================================================
                    SUBMIT
                ================================================== */}

                <button
                  type="submit"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-[#8A5B00]
                    bg-gradient-to-b
                    from-[#FFD45A]
                    via-[#F3B51F]
                    to-[#D99400]
                    px-6
                    py-4
                    font-body
                    text-sm
                    font-bold
                    text-[#062B4F]
                    shadow-lg
                    transition-all
                    hover:-translate-y-0.5
                    hover:brightness-105
                  "
                >
                  DAFTAR SEKARANG
                </button>

              </form>
            )}

          </div>
        </section>
      </div>
    </main>
  );
}


/* ==============================================================
   FORM FIELD
============================================================== */

function FormField({
  label,
  error,
  children,
}) {
  return (
    <div className="mb-5">
      <label
        className="
          mb-2
          block
          font-body
          text-sm
          font-semibold
          text-[#062B4F]
        "
      >
        {label}
      </label>

      {children}

      {error && (
        <p
          className="
            mt-1.5
            rounded-md
            bg-red-900/20
            px-2
            py-1
            font-body
            text-xs
            text-red-900
          "
        >
          {error}
        </p>
      )}
    </div>
  );
}


/* ==============================================================
   INPUT STYLE
============================================================== */

function inputClass(error) {
  return `
    w-full
    rounded-xl
    border
    px-4
    py-3
    font-body
    text-sm
    text-[#062B4F]
    placeholder:text-[#062B4F]/40
    outline-none
    transition

    ${
      error
        ? "border-red-700 bg-red-100/20"
        : "border-[#E5AA18]/80 bg-[#D8B84F]/30"
    }

    focus:border-[#062B4F]
    focus:bg-[#E5B92F]/20
  `;
}