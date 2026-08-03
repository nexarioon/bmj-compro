import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Building } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/mockData";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = ["Semua", "Jalan Tol & Nasional", "Jalan Industri", "Jalan Lingkungan / Perumahan"];

  const filteredProjects = selectedCategory === "Semua"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <>
      <SEO
        title="Portfolio Proyek Pengaspalan & Konstruksi"
        description="Jelajahi daftar proyek konstruksi aspal jalan raya, perumahan, dan jalan industri yang telah diselesaikan oleh PT. Budi Mulya Jaya."
      />

      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80')` }}></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <div className="inline-flex px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider">
            Portofolio Kontraktor
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Rekam Jejak Pekerjaan Kami
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Menampilkan hasil karya pengaspalan dan rehabilitasi jalan terbaik di berbagai wilayah Jawa Barat dan sekitarnya.
          </p>
        </div>
      </section>

      {/* Filtering Tab & Project Catalog */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center border-b border-border pb-6">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="font-bold text-xs sm:text-sm cursor-pointer"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid Catalog */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-sm">Tidak ada proyek dalam kategori ini.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-card border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="relative h-56 bg-zinc-800">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      {project.status}
                    </span>
                  </div>

                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex gap-2 items-center text-xs text-muted-foreground">
                        <Building className="size-3.5 text-primary shrink-0" />
                        <span>Klien: {project.client}</span>
                      </div>
                      <h4 className="font-bold text-lg text-foreground tracking-tight line-clamp-2 uppercase">
                        {project.title}
                      </h4>
                    </div>

                    <div className="border-t border-border pt-4 space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="size-3.5 text-zinc-400 shrink-0" />
                        <span>{project.location}, {project.province}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="size-3.5 text-zinc-400 shrink-0" />
                        <span>Tahun Anggaran: {project.year}</span>
                      </div>
                    </div>

                    <Link to={`/proyek/${project.slug}`} className="block pt-2">
                      <Button variant="outline" className="w-full text-xs font-bold flex justify-between items-center group">
                        Spesifikasi Lengkap
                        <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
