import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  MapPin,
  Check,
  ShieldCheck,
  Truck,
  Award,
  HardHat,
  HelpCircle,
  PhoneCall,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  servicesData,
  projectsData,
  equipmentData,
  faqsData,
} from "@/data/mockData";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFaqToggle = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Mimic API post
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setInquiryForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1200);
  };

  const processes = [
    {
      step: "01",
      title: "Survei & Analisis Geometrik",
      desc: "Kami menganalisis elevasi tanah dasar, beban lalu lintas, dan merancang spesifikasi aspal yang tepat.",
    },
    {
      step: "02",
      title: "Persiapan Subgrade & Subbase",
      desc: "Pembersihan lahan, pemadatan tanah dasar, dan pemasangan agregat batu pecah lapis pondasi atas.",
    },
    {
      step: "03",
      title: "Spraying Asphalt Emulsion",
      desc: "Penyemprotan prime/tack coat cair secara merata menggunakan unit Asphalt Distributor otomatis.",
    },
    {
      step: "04",
      title: "Penghamparan & Pemadatan",
      desc: "Gelar aspal hotmix segar dari AMP menggunakan Asphalt Finisher dan dipadatkan dengan Tandem Roller.",
    },
  ];

  const differentiators = [
    {
      title: "Jaminan Kualitas Material & AMP Resmi",
      desc: "Kami bekerjasama langsung dengan Asphalt Mixing Plant (AMP) berlisensi uji lab nasional untuk menjamin aspal yang digelar selalu baru, bersih, dan sesuai formula.",
      icon: ShieldCheck,
    },
    {
      title: "Armada Alat Berat Milik Sendiri",
      desc: "Kontrol jadwal proyek terjamin karena kami memiliki armada alat berat lengkap mulai dari finisher, tandem roller, grader, hingga cold milling tanpa ketergantungan pihak ketiga.",
      icon: Truck,
    },
    {
      title: "Tenaga Ahli & K3 Bersertifikasi",
      desc: "Seluruh tim konstruksi kami dibekali sertifikasi K3 Konstruksi sipil nasional. Kami mengutamakan nol kecelakaan kerja (Zero Accident) dan presisi tinggi di lapangan.",
      icon: HardHat,
    },
    {
      title: "Legalitas Badan Usaha SBU Resmi",
      desc: "PT. Budi Mulya Jaya merupakan kontraktor berbadan hukum resmi dengan NIB, NPWP, SBU Konstruksi Jalan Raya aktif, siap mengikuti lelang tender BUMN/Swasta skala besar.",
      icon: Award,
    },
  ];

  return (
    <>
      <SEO
        title="Kontraktor Pengaspalan & Konstruksi Jalan Terpercaya"
        description="PT. Budi Mulya Jaya adalah kontraktor konstruksi jalan nasional, provinsi, perumahan, dan kawasan industri bersertifikat SBU & ISO. Hubungi kami untuk penawaran aspal hotmix premium."
      />

      {/* 1. Hero Banner */}
      <section className="relative min-h-[90svh] flex items-center bg-zinc-950 text-white overflow-hidden">
        {/* Ambient Dark Overlay with Asphalt Texture */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"></div>

        {/* Safety Stripe Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase">
              Membangun Infrastruktur <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
                Jalan Kokoh & Tahan Lama
              </span>
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl leading-relaxed">
              PT. Budi Mulya Jaya menghadirkan solusi konstruksi pengaspalan
              jalan raya, kawasan industri, dan pelapisan ulang aspal (overlay)
              dengan presisi teknis tinggi, armada alat berat mandiri, serta
              garansi kualitas bersertifikat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/kontak?ref=quotation">
                <Button
                  size="lg"
                  className="w-full sm:w-auto font-bold bg-amber-500 text-black hover:bg-amber-400 cursor-pointer shadow-lg shadow-amber-500/10"
                >
                  Dapatkan Penawaran Harga
                </Button>
              </Link>
              <Link to="/proyek">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-bold border-zinc-500 bg-transparent text-zinc-100 hover:bg-zinc-100 hover:text-zinc-950 hover:border-zinc-100 cursor-pointer transition-colors"
                >
                  Lihat Portofolio Proyek
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Overview & 3. Statistics */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
                Tentang PT. Budi Mulya Jaya
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-foreground uppercase">
                Kontraktor Infrastruktur Jalan Profesional Sejak 2012
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Berbekal pengalaman bertahun-tahun dalam industri konstruksi
                sipil, kami telah tumbuh menjadi salah satu perusahaan
                pengaspalan jalan terkemuka di Indonesia. Kami bangga dapat
                melayani proyek-proyek vital mulai dari perbaikan jalan tol
                nasional, akses jalan logistik pabrik manufaktur raksasa, hingga
                jalan lingkungan perumahan eksklusif.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kami percaya bahwa kualitas jalan yang prima merupakan kunci
                utama pertumbuhan ekonomi dan logistik daerah. Oleh karena itu,
                kami tidak pernah berkompromi terhadap standar ketebalan,
                gradasi batuan agregat, dan suhu aspal hotmix saat penghamparan.
              </p>
              <div className="pt-4">
                <Link
                  to="/tentang"
                  className="text-primary font-bold inline-flex items-center gap-1.5 group hover:underline"
                >
                  Pelajari Selengkapnya Tentang Kami
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-card border rounded-xl p-6 shadow-sm flex flex-col justify-between h-40">
                <TrendingUp className="size-8 text-primary" />
                <div>
                  <div className="text-3xl font-black tracking-tight text-foreground">
                    14+ Tahun
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold">
                    Pengalaman Industri
                  </div>
                </div>
              </div>
              <div className="bg-card border rounded-xl p-6 shadow-sm flex flex-col justify-between h-40">
                <CheckCircle2 className="size-8 text-primary" />
                <div>
                  <div className="text-3xl font-black tracking-tight text-foreground">
                    380+ Proyek
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold">
                    Terselesaikan Sempurna
                  </div>
                </div>
              </div>
              <div className="bg-card border rounded-xl p-6 shadow-sm flex flex-col justify-between h-40">
                <Users className="size-8 text-primary" />
                <div>
                  <div className="text-3xl font-black tracking-tight text-foreground">
                    120+ Klien
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold">
                    Swasta & BUMN Puas
                  </div>
                </div>
              </div>
              <div className="bg-card border rounded-xl p-6 shadow-sm flex flex-col justify-between h-40">
                <MapPin className="size-8 text-primary" />
                <div>
                  <div className="text-3xl font-black tracking-tight text-foreground">
                    1,200+ KM
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold">
                    Jalan Aspal Terbangun
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Services */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
              Layanan Kami
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground uppercase">
              Solusi Konstruksi Jalan Terintegrasi
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Kami melayani seluruh rangkaian pengerjaan jalan, mulai dari
              perencanaan tanah dasar hingga pelapisan aspal dan penyelesaian
              marka jalan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="bg-card border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 bg-zinc-800">
                  <img
                    src={svc.imageUrl}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg text-foreground tracking-tight line-clamp-2">
                      {svc.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {svc.shortDesc}
                    </p>
                  </div>
                  <Link to={`/layanan/${svc.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full text-xs font-bold flex items-center justify-between group"
                    >
                      Selengkapnya
                      <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Projects */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
                Portfolio Pekerjaan
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-foreground uppercase">
                Proyek Unggulan Terbaru
              </h3>
              <p className="text-muted-foreground">
                Inilah bukti komitmen kami dalam membangun jalan berkualitas
                tinggi yang menunjang operasional nasional dan komersial klien
                kami.
              </p>
            </div>
            <Link to="/proyek">
              <Button className="font-bold flex gap-2 shrink-0">
                Lihat Semua Proyek
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group relative bg-zinc-950 text-white rounded-xl overflow-hidden shadow-md h-96 flex flex-col justify-end"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.imageUrl}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
                <div className="relative p-6 space-y-4 z-10">
                  <div className="flex gap-2">
                    <span className="bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    <span className="bg-zinc-800 text-zinc-200 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                      {project.location}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold tracking-tight line-clamp-2">
                    {project.title}
                  </h4>
                  <div className="border-t border-zinc-800 pt-3 flex justify-between text-xs text-zinc-400">
                    <span>Klien: {project.client}</span>
                    <span>Tahun: {project.year}</span>
                  </div>
                  <Link to={`/proyek/${project.slug}`} className="block">
                    <Button
                      variant="link"
                      className="text-primary font-bold p-0 text-xs flex gap-1 items-center hover:no-underline"
                    >
                      Detail Selengkapnya
                      <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Construction Process */}
      <section className="py-20 bg-zinc-950 text-white border-y border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
              Prosedur Kualitas Kerja
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-white">
              Metode Pengaspalan Standar Nasional
            </h3>
            <p className="text-zinc-400">
              Setiap langkah pengerjaan dipantau ketat oleh Quality Control
              untuk meminimalkan deviasi elevasi jalan dan menjamin durabilitas
              jangka panjang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((proc, idx) => (
              <div
                key={idx}
                className="relative space-y-4 p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
              >
                <div className="text-4xl font-black text-primary/30 tracking-tight">
                  {proc.step}
                </div>
                <h4 className="text-lg font-bold tracking-tight text-white uppercase">
                  {proc.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Heavy Equipment Showcase */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
                Fasilitas Mesin Utama
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-foreground uppercase">
                Armada Alat Berat Khusus
              </h3>
              <p className="text-muted-foreground">
                Dukungan teknologi alat berat mutakhir yang menjamin kerataan
                (smoothness) aspal maksimal dan ketepatan target penyelesaian.
              </p>
            </div>
            <Link to="/alat-berat">
              <Button className="font-bold flex gap-2 shrink-0">
                Lihat Armada Alat Berat
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {equipmentData.map((eq) => (
              <div
                key={eq.id}
                className="bg-card border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div className="relative h-48 bg-zinc-800">
                  <img
                    src={eq.imageUrl}
                    alt={eq.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-muted text-muted-foreground rounded">
                      {eq.type}
                    </span>
                    <h4 className="font-bold text-lg text-foreground tracking-tight">
                      {eq.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {eq.usage}
                    </p>
                  </div>
                  <div className="border-t border-border pt-4 text-xs text-muted-foreground">
                    <strong>Kapasitas:</strong> {eq.capacity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Choose PT. Budi Mulya Jaya */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
              Kelebihan Perusahaan
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground uppercase">
              Komitmen Terhadap Mutu & Keamanan Jalan
            </h3>
            <p className="text-muted-foreground">
              Mengapa puluhan developer perumahan, kawasan industri, dan lembaga
              pemerintah mempercayakan pekerjaan pengaspalan jalan mereka kepada
              kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 bg-card border rounded-xl shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-primary/10 rounded-lg text-primary shrink-0">
                  <diff.icon className="size-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-foreground uppercase tracking-tight">
                    {diff.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Company Certifications */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
              Sertifikasi & Kepatuhan Legal
            </h2>
            <h3 className="text-2xl font-extrabold tracking-tight uppercase">
              Kompetensi Resmi Terakreditasi
            </h3>
            <p className="text-sm text-muted-foreground">
              PT. Budi Mulya Jaya senantiasa patuh pada regulasi kelayakan usaha
              konstruksi sipil jalan di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-card border rounded-xl">
              <Check className="size-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground">
                SBU Konstruksi Aktif
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Sertifikat Badan Usaha Bidang Jalan Raya dari LPJK
              </p>
            </div>
            <div className="p-6 bg-card border rounded-xl">
              <Check className="size-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground">ISO 9001 & 45001</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Sistem Manajemen Mutu dan Keselamatan K3
              </p>
            </div>
            <div className="p-6 bg-card border rounded-xl">
              <Check className="size-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground">IUJK / NIB Lengkap</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Izin Usaha Jasa Konstruksi nasional terdaftar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Client Logos & 10. Industries We Serve */}
      <section className="py-16 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
              Sektor Usaha Klien
            </h2>
            <h3 className="text-2xl font-bold uppercase">
              Melayani Sektor Publik & Swasta
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
            <span className="font-black text-xl tracking-wider text-zinc-500 uppercase">
              JASA MARGA
            </span>
            <span className="font-black text-xl tracking-wider text-zinc-500 uppercase">
              JABABEKA
            </span>
            <span className="font-black text-xl tracking-wider text-zinc-500 uppercase">
              WASKITA
            </span>
            <span className="font-black text-xl tracking-wider text-zinc-500 uppercase">
              LIPPO GROUP
            </span>
            <span className="font-black text-xl tracking-wider text-zinc-500 uppercase">
              SINAR MAS
            </span>
            <span className="font-black text-xl tracking-wider text-zinc-500 uppercase">
              ADHI KARYA
            </span>
          </div>
        </div>
      </section>

      {/* 14. Frequently Asked Questions */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <HelpCircle className="size-10 text-primary mx-auto" />
            <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
              Tanya Jawab Umum
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-foreground uppercase">
              Pertanyaan yang Sering Diajukan
            </h3>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card border rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => handleFaqToggle(idx)}
                  className="w-full text-left p-6 font-bold flex items-center justify-between text-foreground hover:bg-muted/50 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-primary text-xl">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border bg-muted/10 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Request Consultation CTA (Quotation inquiry form) */}
      <section
        id="konsultasi"
        className="py-20 bg-muted/30 border-t border-border"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-zinc-950 text-white rounded-2xl overflow-hidden shadow-xl border border-zinc-900">
            {/* CTA Left */}
            <div
              className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-cover bg-center relative"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80')`,
              }}
            >
              <div className="absolute inset-0 bg-zinc-950/80"></div>
              <div className="relative space-y-6 z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center bg-primary rounded-xl text-black">
                  <PhoneCall className="size-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none text-white">
                  Konsultasikan <br />
                  Kebutuhan Jalan Anda
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Dapatkan estimasi biaya pengaspalan jalan dengan Rencana
                  Anggaran Biaya (RAB) terperinci dan peninjauan lokasi gratis.
                </p>
              </div>
              <div className="relative z-10 pt-8 text-xs text-zinc-400 space-y-2 border-t border-zinc-800">
                <p>
                  <strong>Hotline 24/7 Darurat:</strong> +62 811-XXXX-XXXX
                </p>
                <p>
                  <strong>Email Penawaran:</strong> sales@budimulyajaya.co.id
                </p>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 z-10">
              <h4 className="text-xl font-bold uppercase tracking-tight text-white">
                Formulir Permintaan Estimasi Biaya
              </h4>

              {submitted ? (
                <div className="bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 p-6 rounded-xl space-y-2">
                  <h5 className="font-bold">Formulir Berhasil Terkirim!</h5>
                  <p className="text-xs leading-relaxed">
                    Terima kasih telah menghubungi kami. Estimator profesional
                    kami akan meninjau permintaan Anda dan menghubungi Anda
                    kembali dalam kurun waktu 1x24 jam.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.name}
                        onChange={(e) =>
                          setInquiryForm({
                            ...inquiryForm,
                            name: e.target.value,
                          })
                        }
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary"
                        placeholder="Contoh: Budi Susanto"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Nomor Telepon/WA
                      </label>
                      <input
                        type="tel"
                        required
                        value={inquiryForm.phone}
                        onChange={(e) =>
                          setInquiryForm({
                            ...inquiryForm,
                            phone: e.target.value,
                          })
                        }
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary"
                        placeholder="Contoh: 081234567890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Email Perusahaan
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryForm.email}
                        onChange={(e) =>
                          setInquiryForm({
                            ...inquiryForm,
                            email: e.target.value,
                          })
                        }
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary"
                        placeholder="Contoh: budi@perusahaan.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Kategori Pekerjaan
                      </label>
                      <select
                        required
                        value={inquiryForm.service}
                        onChange={(e) =>
                          setInquiryForm({
                            ...inquiryForm,
                            service: e.target.value,
                          })
                        }
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary"
                      >
                        <option value="">-- Pilih Layanan --</option>
                        <option value="pengaspalan">
                          Pengaspalan Aspal Hotmix
                        </option>
                        <option value="overlay">
                          Rehabilitasi & Pemeliharaan (Overlay)
                        </option>
                        <option value="industri">
                          Konstruksi Jalan Industri
                        </option>
                        <option value="marka">Pengecatan Marka Jalan</option>
                        <option value="rental">
                          Sewa Alat Berat Konstruksi
                        </option>
                        <option value="lainnya">
                          Lainnya / Konsultasi Sipil
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Deskripsi Singkat Pekerjaan
                    </label>
                    <textarea
                      required
                      value={inquiryForm.message}
                      onChange={(e) =>
                        setInquiryForm({
                          ...inquiryForm,
                          message: e.target.value,
                        })
                      }
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white h-24 resize-none focus:outline-none focus:border-primary"
                      placeholder="Jelaskan kebutuhan pengaspalan Anda (contoh: perkiraan panjang jalan, lokasi jalan, kondisi saat ini)..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full font-bold bg-primary text-black hover:bg-primary/90 flex gap-2 justify-center py-5 cursor-pointer"
                  >
                    {submitting
                      ? "Mengirim Permintaan..."
                      : "Kirim Formulir Estimasi"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
