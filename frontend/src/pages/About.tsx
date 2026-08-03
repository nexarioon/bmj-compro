import SEO from "@/components/SEO";
import {
  Award,
  Check,
  Users,
  Eye,
  Target,
  Compass,
  HardHat,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { certificatesData } from "@/data/mockData";

export default function About() {
  const coreValues = [
    {
      title: "Integritas & Kejujuran",
      desc: "Menyampaikan volume aspal, tebal perkerasan agregat, dan spesifikasi material tepat sesuai kontrak kerja tanpa manipulasi ukuran.",
      icon: Award,
    },
    {
      title: "Mutu Rekayasa Presisi",
      desc: "Setiap hamparan aspal diuji kelayakan kepadatan menggunakan metode core drill dan uji elevasi kerataan air guna mencegah genangan.",
      icon: Target,
    },
    {
      title: "Keselamatan K3 Tinggi",
      desc: "Menerapkan standar ketat Alat Pelindung Diri (APD) lengkap bagi pekerja di lapangan dan rambu-rambu pengaman malam hari.",
      icon: HardHat,
    },
    {
      title: "Tepat Waktu & Komitmen",
      desc: "Menyelesaikan proyek tepat sesuai tenggat waktu yang disepakati untuk menghindari kemacetan dan kerugian operasional klien.",
      icon: Compass,
    },
  ];

  return (
    <>
      <SEO
        title="Tentang Kami - Sejarah, Visi, Misi & Legalitas"
        description="PT. Budi Mulya Jaya adalah kontraktor pengaspalan jalan terpercaya di Indonesia. Berdiri sejak 2012, kami didukung tenaga ahli bersertifikasi SBU & K3 sipil."
      />

      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80')`,
          }}
        ></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <div className="inline-flex px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider">
            Mengenal Lebih Dekat
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Profil PT. Budi Mulya Jaya
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Sejarah panjang dedikasi kami membangun keandalan jalan raya di
            Indonesia dengan mutu rekayasa sipil terbaik.
          </p>
        </div>
      </section>

      {/* Sejarah & Sambutan Direksi */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Sejarah */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
                Sejarah Perusahaan
              </h2>
              <h3 className="text-3xl font-extrabold text-foreground uppercase tracking-tight">
                Membangun Reputasi Dari Pondasi Terbawah
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                PT. Budi Mulya Jaya didirikan di Bekasi pada tahun 2012 sebagai
                penyedia jasa konstruksi aspal skala lokal. Berkat kerja keras,
                transparansi mutu volume aspal, dan ketepatan penyelesaian
                proyek, kami berhasil mendapatkan kepercayaan menangani jalan
                lingkungan perumahan skala menengah.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Seiring waktu berjalan dan pertumbuhan armada alat berat secara
                mandiri, pada tahun 2018 kami naik tingkat menjadi kontraktor
                kualifikasi menengah yang diakui resmi oleh Kementerian
                Pekerjaan Umum untuk berpartisipasi dalam pemeliharaan berkala
                jalan raya kabupaten dan provinsi.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Hingga kini, kami telah merampungkan lebih dari 380 proyek
                pengaspalan, stabilisasi tanah, dan pemeliharaan jalan tol
                nasional. Fokus kami selalu sama: memberikan jalan aspal yang
                awet, rata, aman, dan berdaya tahan tinggi.
              </p>
            </div>

            {/* Sambutan Direktur */}
            <div className="lg:col-span-5 bg-card border rounded-2xl p-8 shadow-sm space-y-6">
              <div className="flex h-12 w-12 items-center justify-center bg-primary/10 rounded-xl text-primary">
                <Users className="size-6" />
              </div>
              <blockquote className="text-muted-foreground leading-relaxed italic text-sm">
                &ldquo;Jalan raya bukan sekadar aspal hitam di atas tanah. Jalan
                raya adalah nadi logistik, transportasi, dan kemakmuran suatu
                bangsa. Kami bangga menjadi bagian dari pembangunan
                infrastruktur nasional dengan menghadirkan jalan aspal hotmix
                terbaik yang menunjang mobilitas jutaan orang setiap
                harinya.&rdquo;
              </blockquote>
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">
                  Budi Santoso, S.T., M.T.
                </div>
                <div className="text-xs text-muted-foreground">
                  Direktur Utama PT. Budi Mulya Jaya
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-card border rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
              <div className="flex h-14 w-14 items-center justify-center bg-primary rounded-2xl text-primary-foreground">
                <Eye className="size-8" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">
                Visi Kami
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi kontraktor spesialis pengaspalan jalan raya dan
                infrastruktur sipil terkemuka di Indonesia yang diakui atas
                keunggulan kualitas teknis, keselamatan kerja maksimal,
                kepatuhan legalitas penuh, serta komitmen durabilitas jangka
                panjang.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-card border rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
              <div className="flex h-14 w-14 items-center justify-center bg-primary rounded-2xl text-primary-foreground">
                <Target className="size-8" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">
                Misi Kami
              </h3>
              <ul className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <li className="flex gap-3">
                  <Check className="size-5 shrink-0 text-primary mt-0.5" />
                  <span>
                    Menghasilkan produk aspal hotmix premium dengan pengawasan
                    kendali mutu ketat pada setiap tahap penghamparan aspal.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="size-5 shrink-0 text-primary mt-0.5" />
                  <span>
                    Mengembangkan keandalan armada alat berat mandiri dan tim
                    sipil profesional bersertifikat keahlian resmi.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="size-5 shrink-0 text-primary mt-0.5" />
                  <span>
                    Mengedepankan efisiensi biaya proyek tanpa pernah
                    mengabaikan spesifikasi ketebalan perkerasan aspal.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="size-5 shrink-0 text-primary mt-0.5" />
                  <span>
                    Menjaga kemitraan berkelanjutan jangka panjang dengan klien
                    melalui layanan garansi pasca-konstruksi terpercaya.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Utama */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
              Budaya Perusahaan
            </h2>
            <h3 className="text-3xl font-extrabold text-foreground uppercase tracking-tight">
              Nilai Integritas Kami
            </h3>
            <p className="text-muted-foreground">
              Empat pilar utama yang menjadi pedoman tim PT. Budi Mulya Jaya di
              lapangan dalam bekerja dan berinteraksi dengan klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-card border rounded-xl shadow-sm space-y-4"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-lg text-primary">
                  <val.icon className="size-5" />
                </div>
                <h4 className="font-bold text-foreground uppercase tracking-tight">
                  {val.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legalitas & Sertifikasi Resmi */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Legal text */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs uppercase tracking-widest text-primary font-bold">
                Izin & Kualifikasi Legal
              </h2>
              <h3 className="text-3xl font-extrabold text-foreground uppercase tracking-tight">
                Kualifikasi Jasa Konstruksi Lengkap
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Kami melengkapi perusahaan dengan seluruh persyaratan legal
                formal yang diatur oleh Undang-Undang Jasa Konstruksi Indonesia.
                Ini memberikan kenyamanan hukum mutlak bagi pejabat pembuat
                komitmen (PPK) pemerintah maupun dewan direksi swasta saat
                berkerjasama dengan kami.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-foreground font-semibold">
                  <FileText className="size-5 text-primary" />
                  <span>NIB (Nomor Induk Berusaha): 1243009XXXXXX</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground font-semibold">
                  <FileText className="size-5 text-primary" />
                  <span>
                    SBU LPJK: Bangunan Sipil Subklasifikasi Jalan Raya
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground font-semibold">
                  <FileText className="size-5 text-primary" />
                  <span>ISO Sertifikasi: ISO 9001 (Mutu) & ISO 45001 (K3)</span>
                </div>
              </div>
            </div>

            {/* Certs List */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="font-bold text-lg text-foreground uppercase tracking-tight">
                Sertifikat Resmi Korporasi
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificatesData.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-6 bg-card border rounded-xl shadow-sm flex items-start gap-4"
                  >
                    <CheckCircle2 className="size-6 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h5 className="font-bold text-sm text-foreground leading-snug">
                        {cert.title}
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        Penerbit: {cert.issuer}
                      </p>
                      <p className="text-[10px] text-zinc-500 font-medium">
                        No: {cert.number}
                      </p>
                      <span className="inline-block text-[9px] uppercase font-extrabold text-primary bg-primary/5 px-2 py-0.5 rounded mt-2">
                        Berlaku: {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
