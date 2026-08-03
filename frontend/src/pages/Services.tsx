import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/mockData";

export default function Services() {
  return (
    <>
      <SEO
        title="Layanan Pengaspalan & Konstruksi Jalan Raya"
        description="Daftar layanan spesialisasi sipil PT. Budi Mulya Jaya meliputi aspal hotmix jalan tol, pengaspalan kawasan industri, marka jalan, dan rental alat berat."
      />

      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80')` }}></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <div className="inline-flex px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider">
            Layanan Spesialisasi Sipil
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Jasa Konstruksi & Pengaspalan Jalan
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Dari pembukaan lahan dasar hingga marka jalan mengkilap, kami menghadirkan pengerjaan aspal hotmix berstandar nasional.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesData.map((svc, idx) => (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-border pb-16 last:border-0 last:pb-0 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image (Grid Span 5) */}
                <div className={`lg:col-span-5 relative h-80 rounded-2xl overflow-hidden bg-zinc-800 ${
                  idx % 2 === 1 ? "lg:order-last" : ""
                }`}>
                  <img src={svc.imageUrl} alt={svc.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground font-black text-sm px-3 py-1 rounded">
                    0{idx + 1}
                  </div>
                </div>

                {/* Content (Grid Span 7) */}
                <div className="lg:col-span-7 space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground uppercase tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {svc.description}
                  </p>

                  {/* Scope checklist */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-foreground">
                      Cakupan Pekerjaan Meliputi:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {svc.scope.slice(0, 4).map((scp, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>{scp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Link to={`/layanan/${svc.slug}`}>
                      <Button className="w-full sm:w-auto font-bold flex gap-2 justify-center">
                        Spesifikasi Lengkap Layanan
                        <ArrowRight className="size-4" />
                      </Button>
                    </Link>
                    <Link to="/kontak?ref=quotation">
                      <Button variant="outline" className="w-full sm:w-auto font-bold">
                        Minta Estimasi Biaya
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC & Assurance Section */}
      <section className="py-20 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
            <div className="flex h-16 w-16 items-center justify-center bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-2xl shrink-0">
              <ShieldAlert className="size-8" />
            </div>
            <div className="space-y-3 flex-grow text-center md:text-left">
              <h4 className="text-xl font-bold uppercase tracking-tight text-white">Butuh Spesifikasi Rekayasa Jalan Khusus?</h4>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                Kami siap merancang formula campuran aspal (Job Mix Formula) dan ketebalan struktural base/subgrade khusus yang disesuaikan dengan kebutuhan lalu lintas beban kendaraan pabrik Anda.
              </p>
            </div>
            <Link to="/kontak" className="shrink-0 w-full md:w-auto">
              <Button className="w-full md:w-auto font-bold bg-amber-500 text-black hover:bg-amber-400">
                Hubungi Engineering Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
