import SEO from "@/components/SEO";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { equipmentData } from "@/data/mockData";

export default function Equipment() {
  return (
    <>
      <SEO
        title="Armada Alat Berat Pengaspalan Jalan Raya"
        description="Daftar unit armada alat berat khusus konstruksi jalan PT. Budi Mulya Jaya meliputi Asphalt Finisher, Tandem Roller, Motor Grader, dan unit berat lainnya."
      />

      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80')`,
          }}
        ></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <div className="inline-flex px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider">
            Fasilitas Armada Mandiri
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Armada Alat Berat Kami
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Menjamin kelancaran pekerjaan sipil di lapangan tanpa hambatan sewa
            unit eksternal dengan armada terawat berkala.
          </p>
        </div>
      </section>

      {/* Equipment List Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 gap-12">
            {equipmentData.map((eq) => (
              <div
                key={eq.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                {/* Image */}
                <div className="lg:col-span-5 relative h-72 rounded-xl overflow-hidden bg-zinc-800">
                  <img
                    src={eq.imageUrl}
                    alt={eq.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 bg-primary/10 text-primary rounded">
                      {eq.type}
                    </span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">
                      {eq.name}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {eq.usage}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-4 text-xs">
                    <div className="space-y-1">
                      <span className="font-semibold text-zinc-500 block uppercase tracking-wider">
                        Kapasitas Kerja
                      </span>
                      <strong className="text-foreground text-sm">
                        {eq.capacity}
                      </strong>
                    </div>

                    <div className="space-y-2">
                      <span className="font-semibold text-zinc-500 block uppercase tracking-wider">
                        Spesifikasi Unit
                      </span>
                      <div className="space-y-1 text-muted-foreground">
                        {Object.entries(eq.specifications).map(([key, val]) => (
                          <div
                            key={key}
                            className="flex justify-between border-b border-border pb-1 last:border-0 last:pb-0"
                          >
                            <span className="font-medium text-zinc-500">
                              {key}:
                            </span>
                            <span className="font-semibold text-foreground text-right">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dry Run / Rental Info */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="flex h-12 w-12 items-center justify-center bg-primary/10 rounded-xl text-primary mx-auto">
            <Wrench className="size-6" />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold text-foreground uppercase tracking-tight">
              Butuh Sewa Unit Alat Berat?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Seluruh armada alat berat kami dapat disewa secara ritel
              harian/bulanan beserta operator berpengalaman (bersertifikasi SIO
              resmi). Hubungi tim logistics kami untuk penawaran harga
              mobilisasi unit.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a href="/kontak?ref=rental">
              <Button className="font-bold">Minta Penawaran Sewa</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
