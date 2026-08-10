import Accordion from "../ui/Accordion.jsx";

const faqs = [
  {
    question: "Apakah pendaftaran berbayar?",
    answer:
      "Ya, setiap tim dikenakan biaya pendaftaran yang besarannya berbeda tiap kategori game. Rincian biaya ada di halaman detail masing-masing game.",
  },
  {
    question: "Berapa jumlah pemain per tim?",
    answer:
      "Tergantung game: 5 pemain untuk Mobile Legends & Valorant, 4 pemain untuk PUBG Mobile, dan 1 pemain untuk eFootball. Cadangan disarankan 1–2 orang.",
  },
  {
    question: "Apakah bisa daftar lebih dari satu kategori?",
    answer:
      "Bisa. Satu tim/individu boleh mendaftar di lebih dari satu kategori game selama tidak bentrok jadwal pertandingan.",
  },
  {
    question: "Bagaimana jika terjadi cheating saat pertandingan?",
    answer:
      "Tim yang terbukti curang akan didiskualifikasi langsung oleh panitia berdasarkan hasil investigasi admin turnamen.",
  },
  {
    question: "Kapan jadwal pertandingan diumumkan?",
    answer:
      "Jadwal lengkap diumumkan saat Technical Meeting, H-2 sebelum babak penyisihan dimulai, melalui grup resmi tiap tim.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-8 py-14">
      <div className="flex flex-col items-center gap-2 mb-8 text-center">
        <span className="eyebrow">Frequently Asked Question</span>
      </div>
      <Accordion items={faqs} />
    </section>
  );
}
