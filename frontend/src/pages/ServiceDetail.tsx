import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Play, PhoneCall } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/mockData";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[70svh] flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-foreground">Layanan Tidak Ditemukan</h1>
        <p className="text-muted-foreground text-sm">Halaman layanan yang Anda cari tidak tersedia atau telah dipindahkan.</p>
        <Link to="/layanan">
          <Button className="font-bold">Kembali ke Daftar Layanan</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDesc}
        image={service.imageUrl}
      />

      {/* Back navigation & Header */}
      <section className="bg-zinc-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply" style={{ backgroundImage: `url('${service.imageUrl}')` }}></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-4">
          <Link to="/layanan" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-amber-500 hover:text-amber-400">
            <ArrowLeft className="size-4" /> Kembali ke Layanan
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white max-w-4xl">
            {service.title}
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Content (Grid Span 8) */}
            <div className="lg:col-span-8 space-y-12">
              <div className="relative h-[450px] w-full rounded-2xl overflow-hidden bg-zinc-800 shadow-sm">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Deskripsi Pekerjaan</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>

              {/* Scope of Work */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Rincian Cakupan & Scope Pekerjaan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.scope.map((scp, idx) => (
                    <div key={idx} className="p-4 bg-card border rounded-xl shadow-sm flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-primary/10 rounded text-primary text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{scp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Step by Step */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Alur & Metodologi Kerja</h3>
                <div className="relative border-l border-border pl-6 ml-3 space-y-8">
                  {service.process.map((prc, idx) => (
                    <div key={idx} className="relative">
                      {/* Step Indicator Dot */}
                      <span className="absolute -left-[35px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-black">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-foreground uppercase tracking-tight mb-1">{prc}</h4>
                      <p className="text-xs text-muted-foreground">
                        Diimplementasikan sesuai instruksi teknis K3 dan diawasi oleh site supervisor kami.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (Grid Span 4) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Benefits Box */}
              <div className="bg-card border rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground">Mengapa Memilih Kami?</h3>
                <div className="space-y-4">
                  {service.benefits.map((bnf, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="size-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{bnf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation / CTA Box */}
              <div className="bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 border border-zinc-900">
                <h3 className="font-bold text-lg uppercase tracking-tight text-white">Butuh Penawaran Harga?</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Hubungi divisi penjualan kami untuk menjadwalkan kunjungan tim lapangan ke lokasi proyek Anda. Kami akan buatkan RAB resmi secara gratis.
                </p>
                <div className="space-y-3 pt-2">
                  <a href="/kontak?ref=quotation" className="block">
                    <Button className="w-full font-bold bg-primary text-black hover:bg-primary/95 flex gap-2 justify-center py-5">
                      <Play className="size-4 shrink-0 fill-current" /> Hubungi Sekarang
                    </Button>
                  </a>
                  <a href="https://wa.me/62811XXXXXXXX" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full font-bold border-zinc-800 hover:bg-zinc-900 text-white flex gap-2 justify-center py-5">
                      <PhoneCall className="size-4 shrink-0" /> Chat WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
