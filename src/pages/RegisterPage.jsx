import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ contact: "", school: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.contact.trim()) next.contact = "Email atau nomor HP wajib diisi.";
    if (!form.school.trim()) next.school = "Sekolah atau kampus wajib diisi.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <section className="max-w-md mx-auto px-6 md:px-8 py-16 md:py-24">
      <h1 className="heading-hero text-3xl md:text-4xl text-center mb-10">
        Register Account
      </h1>

      <div className="panel-gold px-6 md:px-8 py-8 md:py-10">
        {submitted ? (
          <div className="text-center py-6">
            <p className="font-heading text-navy-900 text-lg mb-2">Terima kasih!</p>
            <p className="font-body text-sm text-navy-900/80">
              Data pendaftaranmu sudah kami terima. Cek email/HP kamu untuk langkah
              selanjutnya.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div>
              <label htmlFor="contact" className="block font-body font-semibold text-sm text-white mb-2">
                Email atau Nomor HP
              </label>
              <input
                id="contact"
                type="text"
                value={form.contact}
                onChange={handleChange("contact")}
                placeholder="nama@email.com / 08xxxxxxxxxx"
                className="w-full rounded-xl bg-gold-600/30 border border-gold-400/70 px-4 py-3 font-body text-sm text-white placeholder:text-white/50 outline-none focus:border-white"
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? "contact-error" : undefined}
              />
              {errors.contact && (
                <p id="contact-error" className="text-xs text-red-100 bg-red-900/30 rounded px-2 py-1 mt-1.5">
                  {errors.contact}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="school" className="block font-body font-semibold text-sm text-white mb-2">
                Sekolah atau Kampus
              </label>
              <input
                id="school"
                type="text"
                value={form.school}
                onChange={handleChange("school")}
                placeholder="Nama sekolah/kampus"
                className="w-full rounded-xl bg-gold-600/30 border border-gold-400/70 px-4 py-3 font-body text-sm text-white placeholder:text-white/50 outline-none focus:border-white"
                aria-invalid={Boolean(errors.school)}
                aria-describedby={errors.school ? "school-error" : undefined}
              />
              {errors.school && (
                <p id="school-error" className="text-xs text-red-100 bg-red-900/30 rounded px-2 py-1 mt-1.5">
                  {errors.school}
                </p>
              )}
            </div>

            <button type="submit" className="mt-4 rounded-full bg-gold-gradient text-navy-900 font-body font-bold px-6 py-3.5 shadow-glow-purple border border-accent-purple/60 hover:-translate-y-0.5 transition-transform">
              Daftar Sekarang
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
