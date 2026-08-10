import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="max-w-lg mx-auto px-6 text-center py-24">
      <h1 className="heading-hero text-5xl md:text-6xl text-gold-300">404</h1>
      <p className="font-body text-white/70 mt-3">
        Halaman yang kamu cari tidak ditemukan, mungkin bracket-nya sudah dipindah.
      </p>
      <Link to="/" className="btn-gold mt-8 inline-flex">Kembali ke Beranda</Link>
    </section>
  );
}
