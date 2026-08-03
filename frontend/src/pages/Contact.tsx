import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  PhoneCall,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref === "quotation") {
      setForm((f) => ({
        ...f,
        service: "pengaspalan",
        message:
          "Halo, saya membutuhkan estimasi biaya penawaran aspal hotmix untuk proyek kami...",
      }));
    } else if (ref === "rental") {
      setForm((f) => ({
        ...f,
        service: "rental",
        message: "Halo, saya ingin menanyakan tarif sewa alat berat untuk...",
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <>
      <SEO
        title="Hubungi Kami - Lokasi Kantor & Permintaan Quotation"
        description="Hubungi tim estimator sipil PT. Budi Mulya Jaya. Dapatkan survei lokasi gratis dan RAB penawaran aspal hotmix terperinci."
      />

      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80')`,
          }}
        ></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <div className="inline-flex px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider">
            Layanan Pelanggan Hubungi Kami
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Hubungi Kontak & Kantor Kami
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Tim estimator kami siap merespons kebutuhan survei lokasi dan
            menghitung anggaran pengaspalan jalan Anda.
          </p>
        </div>
      </section>

      {/* Contact Details Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact details left (Span 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
                  Informasi Kontak
                </h2>
                <h3 className="text-3xl font-extrabold text-foreground uppercase tracking-tight">
                  Saluran Komunikasi Resmi
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Hubungi kantor pusat kami atau kirim pesan instan langsung ke
                  divisi marketing/logistik kami.
                </p>
              </div>

              {/* Grid List */}
              <div className="space-y-6 text-sm">
                <div className="flex gap-4 p-5 bg-card border rounded-xl shadow-sm">
                  <MapPin className="size-6 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground uppercase tracking-tight">
                      Kantor Pusat Jakarta
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Jl. Jenderal Sudirman No. 88, Sudirman Central Business
                      District, Jakarta Selatan, 12190
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-card border rounded-xl shadow-sm">
                  <MapPin className="size-6 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground uppercase tracking-tight">
                      Kantor Operasional Bekasi
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Jl. Raya Industri No. 45, Kawasan Industri Jababeka,
                      Cikarang, Bekasi, Jawa Barat 17530
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-card border rounded-xl shadow-sm">
                  <Phone className="size-6 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground uppercase tracking-tight">
                      Telepon Kantor / Fax
                    </h4>
                    <p className="text-muted-foreground font-semibold">
                      +62 (21) 5088-XXXX
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      +62 (21) 5088-YYYY (Fax)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-card border rounded-xl shadow-sm">
                  <Mail className="size-6 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground uppercase tracking-tight">
                      Email Resmi Penawaran
                    </h4>
                    <p className="text-muted-foreground font-semibold">
                      info@budimulyajaya.co.id
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      sales@budimulyajaya.co.id
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-card border rounded-xl shadow-sm">
                  <Clock className="size-6 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground uppercase tracking-tight">
                      Jam Kerja Operasional
                    </h4>
                    <p className="text-muted-foreground">
                      Senin - Sabtu: 08:00 - 17:00 WIB
                    </p>
                    <p className="text-muted-foreground">
                      Minggu & Hari Libur: Penanganan Darurat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiries form right (Span 7) */}
            <div className="lg:col-span-7 bg-card border rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">
                  Kirim Pesan Penawaran
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Isi detail proyek pengaspalan Anda pada formulir di bawah ini.
                  Sales estimator kami akan menghubungi Anda dalam waktu 24 jam.
                </p>
              </div>

              {sent ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 p-6 rounded-xl space-y-2">
                  <h4 className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="size-5 shrink-0" />
                    Pesan Berhasil Dikirim!
                  </h4>
                  <p className="text-xs leading-relaxed">
                    Estimator kami telah menerima detail informasi Anda. Kami
                    akan segera menghubungi nomor telepon Anda untuk verifikasi
                    kebutuhan survei lokasi.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary"
                        placeholder="Contoh: Budi Susanto"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Nama Perusahaan / Organisasi
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary"
                        placeholder="Contoh: PT. Developer Jaya"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Email Kerja
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary"
                        placeholder="Contoh: sales@perusahaan.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Nomor Telepon/WA Aktif
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary"
                        placeholder="Contoh: 081234567890"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Layanan Yang Dibutuhkan
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">-- Pilih Layanan --</option>
                      <option value="pengaspalan">
                        Jasa Pengaspalan Aspal Hotmix
                      </option>
                      <option value="overlay">
                        Rehabilitasi & Pemeliharaan (Overlay)
                      </option>
                      <option value="industri">
                        Konstruksi Jalan Kawasan Industri
                      </option>
                      <option value="marka">Pengecatan Marka Jalan</option>
                      <option value="rental">Sewa Armada Alat Berat</option>
                      <option value="lainnya">
                        Lainnya / Konsultasi Desain Jalan
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Pesan / Rincian Pekerjaan
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground h-28 resize-none focus:outline-none focus:border-primary"
                      placeholder="Jelaskan kebutuhan pengaspalan Anda..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full font-bold flex gap-2 justify-center py-5 cursor-pointer"
                  >
                    <Send className="size-4 shrink-0" />
                    {loading ? "Mengirim..." : "Kirim Formulir Estimasi"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="h-96 w-full bg-zinc-900 border-t border-border">
        {/* We render a beautiful satellite dark asphalt texture / map banner */}
        <div
          className="h-full w-full relative flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-zinc-950/70"></div>
          <div className="relative text-center space-y-4 z-10 px-4">
            <MapPin className="size-10 text-primary mx-auto" />
            <h4 className="text-white font-bold uppercase tracking-tight text-xl">
              Integrasi Lokasi Google Maps
            </h4>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              Jl. Raya Industri No. 45, Kawasan Industri Jababeka, Cikarang,
              Bekasi. Dekat Gerbang Tol Cikarang Barat.
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                className="font-bold border-zinc-700 hover:bg-zinc-800 text-white flex gap-2 items-center"
              >
                Buka di Google Maps <PhoneCall className="size-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
