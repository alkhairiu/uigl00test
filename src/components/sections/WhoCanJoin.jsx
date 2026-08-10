const groups = [
  {
    title: "Pelajar SMA/SMK",
    desc: "Terbuka untuk siswa aktif jenjang SMA/SMK/sederajat se-Indonesia, dibuktikan dengan kartu pelajar.",
  },
  {
    title: "Mahasiswa",
    desc: "Terbuka untuk mahasiswa aktif dari seluruh universitas & politeknik, dibuktikan dengan KTM.",
  },
  {
    title: "Komunitas Umum",
    desc: "Tim komunitas atau klub esport kampus juga dipersilakan mendaftar selama memenuhi syarat usia.",
  },
];

export default function WhoCanJoin() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-10">
      <div className="flex flex-col items-center gap-2 mb-8 text-center">
        <h2 className="heading-hero text-2xl md:text-3xl text-gold-300">Who Can Join?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {groups.map((g) => (
          <div key={g.title} className="card-glow px-6 py-7 text-navy-900">
            <h3 className="font-body font-bold text-base mb-2">{g.title}</h3>
            <p className="font-body text-sm text-navy-900/80 leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
