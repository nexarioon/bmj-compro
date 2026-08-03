import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  id: string;
  category: "Proyek Selesai" | "Alat Berat" | "Drone" | "Pekerja & K3";
  title: string;
  imageUrl: string;
}

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState<string>("Semua");

  const categories = ["Semua", "Proyek Selesai", "Alat Berat", "Drone", "Pekerja & K3"];

  const items: GalleryItem[] = [
    {
      id: "g1",
      category: "Proyek Selesai",
      title: "Finishing Jalan Tol Jakarta-Cikampek KM 30",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g2",
      category: "Alat Berat",
      title: "Asphalt Finisher Vögele Menggelar Aspal Hotmix",
      imageUrl: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g3",
      category: "Pekerja & K3",
      title: "Tim Sipil Memantau Kepadatan Suhu Aspal",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g4",
      category: "Drone",
      title: "Foto Udara Akses Logistik Pabrik Cikarang",
      imageUrl: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g5",
      category: "Proyek Selesai",
      title: "Marka Jalan Rapi pada Proyek Perumahan",
      imageUrl: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g6",
      category: "Alat Berat",
      title: "Hamm Tandem Roller Melakukan Pemadatan Lapis Awal",
      imageUrl: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80",
    }
  ];

  const filteredItems = selectedCat === "Semua"
    ? items
    : items.filter((item) => item.category === selectedCat);

  return (
    <>
      <SEO
        title="Galeri Dokumentasi Konstruksi Jalan"
        description="Dokumentasi foto udara drone, armada alat berat, pengerjaan aspal lapangan, dan pelaksanaan K3 oleh tim PT. Budi Mulya Jaya."
      />

      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80')` }}></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <div className="inline-flex px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider">
            Dokumentasi Visual Proyek
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Galeri Konstruksi
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Menampilkan potret aksi di lapangan, detail presisi pengerjaan sipil, dan armada alat berat kami.
          </p>
        </div>
      </section>

      {/* Gallery Catalog */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center border-b border-border pb-6">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCat === cat ? "default" : "outline"}
                onClick={() => setSelectedCat(cat)}
                className="font-bold text-xs sm:text-sm cursor-pointer"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative bg-zinc-900 rounded-xl overflow-hidden shadow-sm h-72">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="space-y-1">
                    <span className="bg-primary text-primary-foreground text-[9px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h4 className="text-white text-sm font-bold tracking-tight uppercase mt-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
