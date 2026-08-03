import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Briefcase, Ruler, DollarSign, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/mockData";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[70svh] flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-foreground">Proyek Tidak Ditemukan</h1>
        <p className="text-muted-foreground text-sm">Halaman detail proyek yang Anda cari tidak tersedia.</p>
        <Link to="/proyek">
          <Button className="font-bold">Kembali ke Daftar Proyek</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={project.title}
        description={`Studi kasus pengerjaan pengaspalan jalan: ${project.title}. Lokasi di ${project.location}, ${project.province}. Klien: ${project.client}.`}
        image={project.imageUrl}
      />

      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply" style={{ backgroundImage: `url('${project.imageUrl}')` }}></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-4">
          <Link to="/proyek" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-amber-500 hover:text-amber-400">
            <ArrowLeft className="size-4" /> Kembali ke Proyek
          </Link>
          <span className="inline-block bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded">
            {project.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white max-w-4xl leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Column - Details, Challenge, Solution (Span 8) */}
            <div className="lg:col-span-8 space-y-12">
              <div className="relative h-[450px] w-full rounded-2xl overflow-hidden bg-zinc-800 shadow-sm">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              </div>

              {/* Case Study Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                {/* Challenge */}
                <div className="space-y-4 p-6 bg-red-50/50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-2xl">
                  <h3 className="font-bold text-lg text-red-700 dark:text-red-400 uppercase tracking-tight flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center bg-red-100 dark:bg-red-900/30 rounded-full text-xs font-black">!</span>
                    Tantangan Proyek
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.challenges}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-4 p-6 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl">
                  <h3 className="font-bold text-lg text-emerald-700 dark:text-emerald-400 uppercase tracking-tight flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-xs font-black">✓</span>
                    Solusi Teknis
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.solutions}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Specifications Card (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-card border rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground border-b border-border pb-4">
                  Spesifikasi Proyek
                </h3>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Briefcase className="size-4 text-zinc-400" /> Klien
                    </span>
                    <strong className="text-foreground text-right">{project.client}</strong>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <MapPin className="size-4 text-zinc-400" /> Lokasi
                    </span>
                    <strong className="text-foreground text-right">{project.location}, {project.province}</strong>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Calendar className="size-4 text-zinc-400" /> Tahun
                    </span>
                    <strong className="text-foreground">{project.year}</strong>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Ruler className="size-4 text-zinc-400" /> Luas Area
                    </span>
                    <strong className="text-foreground">{project.area}</strong>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Clock className="size-4 text-zinc-400" /> Durasi
                    </span>
                    <strong className="text-foreground">{project.duration}</strong>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <DollarSign className="size-4 text-zinc-400" /> Nilai Proyek
                    </span>
                    <strong className="text-primary font-bold">{project.value}</strong>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-zinc-400" /> Status
                    </span>
                    <span className="inline-block bg-emerald-500/10 text-emerald-500 text-xs font-bold px-2 py-0.5 rounded">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Box */}
              <div className="bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 border border-zinc-900">
                <h4 className="font-bold text-sm uppercase tracking-wider text-white">Butuh Hasil Jalan Serupa?</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Kami siap melakukan survei lokasi dan menghitung Rencana Anggaran Biaya (RAB) pengaspalan dengan spesifikasi persis seperti proyek ini.
                </p>
                <Link to="/kontak?ref=project-inquiry" className="block pt-2">
                  <Button className="w-full font-bold bg-primary text-black hover:bg-primary/95">
                    Hubungi Estimator Kami
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
