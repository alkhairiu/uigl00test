export default function AboutUs() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-8 py-16 scroll-mt-24">
      <div className="flex flex-col items-center gap-2 mb-8 text-center">
        <h2 className="heading-hero text-2xl md:text-3xl text-gold-300">About Us</h2>
      </div>
      <div className="panel-gold px-6 md:px-10 py-8 md:py-10 max-w-4xl mx-auto">
        <p className="font-body text-navy-900/90 text-sm md:text-base leading-relaxed text-center">
          ARENA adalah kompetisi esport tahunan yang mempertemukan pelajar dan mahasiswa dari
          berbagai sekolah dan kampus untuk bertanding di empat kategori game populer. Lebih
          dari sekadar turnamen, ARENA adalah ruang untuk membangun kerja sama tim, mengasah
          strategi, dan membentuk komunitas esport yang sehat dan kompetitif.
        </p>
      </div>
    </section>
  );
}
