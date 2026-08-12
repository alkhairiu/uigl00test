import { Link } from "react-router-dom";

const stats = [
  {
    label: "Peserta Terdaftar",
    value: "1.200+",
  },
  {
    label: "Total Hadiah",
    value: "Rp 53 Juta",
  },
  {
    label: "Kategori Game",
    value: "4",
  },
];

export default function Hero() {
  return (
    <section
      className="
        w-full
        max-w-[1500px]
        mx-auto
        px-6
        md:px-10
        lg:px-16
        pt-20
        md:pt-40
        pb-20
        md:pb-40
        text-center
      "
    >
      {/* =========================
          SEASON
      ========================== */}
    

      {/* =========================
          HERO TITLE
      ========================== */}
      <h2
        className="
          font-subheading
          text-white
          text-3xl
          md:text-6xl
          lg:text-8xl
          leading-[0.95]
          tracking-tight
          mt-5
        "
      >
        Trive
        <br className="hidden md:block" />
        To{" "}
        <span className="text-gold-300">
          Triumph
        </span>
      </h2>

      {/* =========================
          DESCRIPTION
      ========================== */}
      <p
        className="
          font-body
          text-white/70
          max-w-3xl
          mx-auto
          mt-7
          text-base
          md:text-lg
          leading-relaxed
        "
      >
        Turnamen esport antar sekolah &amp; kampus terbesar tahun ini.
        Pilih game favoritmu, daftarkan tim, dan rebut jalanmu menuju
        grand final.
      </p>

      {/* =========================
          CTA BUTTONS
      ========================== */}
      <div
        className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-4
          md:gap-6
          mt-9
        "
      >
        <Link
          to="/plan"
          className="
            btn-gold
            min-w-[190px]
            text-base
            md:text-lg
          "
        >
          Lihat Kompetisi
        </Link>

        <Link
          to="/register"
          className="
            btn-outline
            min-w-[190px]
            text-base
            md:text-lg
          "
        >
          Daftar Sekarang
        </Link>
      </div>

      {/* =========================
          STATISTICS
      ========================== */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
          md:gap-8
          mt-16
          md:mt-20
        "
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="
              card-glow
              w-full
              min-h-[150px]
              md:min-h-[175px]
              flex
              flex-col
              items-center
              justify-center
              px-6
              py-8
              md:py-10
            "
          >
            <p
              className="
                font-heading
                text-3xl
                md:text-4xl
                lg:text-5xl
                text-navy-900
              "
            >
              {s.value}
            </p>

            <p
              className="
                font-body
                text-sm
                md:text-base
                text-navy-900/70
                mt-2
              "
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}