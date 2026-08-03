import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  FolderKanban,
  Briefcase,
  Wrench,
  Inbox,
  Plus,
  Trash,
  Edit3,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { servicesData, projectsData, equipmentData } from "@/data/mockData";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<
    "inquiries" | "projects" | "services" | "equipment"
  >("inquiries");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [projectsList, setProjectsList] = useState(projectsData);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/login");
    }

    // Set mock incoming inquiries
    setInquiries([
      {
        id: "inq1",
        name: "Hendra Wijaya",
        email: "hendra@agungpodomoro.com",
        phone: "08119088716",
        service: "pengaspalan",
        message:
          "Membutuhkan penawaran aspal hotmix untuk jalan lingkungan perumahan cluster baru seluas 3.500 m2 di daerah Karawang.",
        timestamp: "2026-08-03 09:12",
      },
      {
        id: "inq2",
        name: "Suryo Utomo",
        email: "suryo.u@jasamarga.co.id",
        phone: "08128899120",
        service: "overlay",
        message:
          "Permintaan survei dan estimasi overlay jalan tol KM 42 Cikampek.",
        timestamp: "2026-08-02 14:45",
      },
    ]);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  const deleteProject = (id: string) => {
    setProjectsList(projectsList.filter((p) => p.id !== id));
  };

  return (
    <>
      <SEO
        title="Dashboard CMS Admin"
        description="Dashboard pengelola konten untuk website PT. Budi Mulya Jaya."
      />

      <div className="min-h-screen bg-muted/20 pb-20">
        {/* Dashboard Subheader */}
        <section className="bg-zinc-950 text-white py-12 border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h1 className="text-2xl font-black uppercase tracking-tight">
                CMS Admin Panel
              </h1>
              <p className="text-xs text-zinc-400">
                Selamat datang, Administrator. Kelola konten dan prospek
                penawaran website.
              </p>
            </div>
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="font-bold flex gap-2 cursor-pointer"
            >
              <LogOut className="size-4" /> Keluar
            </Button>
          </div>
        </section>

        {/* Dashboard Layout Container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-3 bg-card border rounded-2xl p-4 shadow-sm space-y-1">
              <button
                onClick={() => setActiveTab("inquiries")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                  activeTab === "inquiries"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Inbox className="size-4" /> Kotak Masuk Prospek
                </span>
                <span className="bg-zinc-900/10 text-[10px] font-black px-2 py-0.5 rounded-full">
                  {inquiries.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("projects")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                  activeTab === "projects"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <FolderKanban className="size-4" /> Kelola Proyek Portfolio
              </button>

              <button
                onClick={() => setActiveTab("services")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                  activeTab === "services"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Briefcase className="size-4" /> Kelola Jasa / Layanan
              </button>

              <button
                onClick={() => setActiveTab("equipment")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                  activeTab === "equipment"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Wrench className="size-4" /> Kelola Armada Alat Berat
              </button>
            </div>

            {/* Right Display Area */}
            <div className="lg:col-span-9 bg-card border rounded-2xl p-6 sm:p-8 shadow-sm min-h-[400px]">
              {/* inquiries Panel */}
              {activeTab === "inquiries" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <h2 className="text-xl font-bold uppercase tracking-tight text-foreground">
                      Permintaan Quotation Masuk
                    </h2>
                    <span className="text-xs text-muted-foreground">
                      Menampilkan 2 pesan terbaru
                    </span>
                  </div>

                  <div className="space-y-4">
                    {inquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className="p-6 bg-muted/20 border rounded-xl space-y-4 shadow-sm"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <span className="font-bold text-foreground text-sm uppercase">
                            {inq.name}
                          </span>
                          <span className="text-zinc-500 font-medium">
                            {inq.timestamp}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-muted-foreground">
                          <div>
                            <strong>Email:</strong> {inq.email}
                          </div>
                          <div>
                            <strong>Telepon/WA:</strong> {inq.phone}
                          </div>
                          <div>
                            <strong>Layanan:</strong>{" "}
                            <span className="bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded">
                              {inq.service}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed bg-background p-4 rounded-lg border">
                          {inq.message}
                        </p>

                        <div className="flex justify-end gap-2">
                          <a href={`mailto:${inq.email}`}>
                            <Button size="xs" className="font-bold text-xs">
                              Balas via Email
                            </Button>
                          </a>
                          <a
                            href={`https://wa.me/62${inq.phone.substring(1)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              size="xs"
                              variant="outline"
                              className="font-bold text-xs"
                            >
                              Hubungi via WA
                            </Button>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* projects Panel */}
              {activeTab === "projects" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <h2 className="text-xl font-bold uppercase tracking-tight text-foreground">
                      Daftar Proyek Portfolio
                    </h2>
                    <Button
                      size="sm"
                      className="font-bold flex gap-1.5 items-center"
                    >
                      <Plus className="size-4" /> Tambah Proyek Baru
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {projectsList.map((proj) => (
                      <div
                        key={proj.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/10 border rounded-xl gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={proj.imageUrl}
                            alt={proj.title}
                            className="h-12 w-12 rounded object-cover bg-zinc-800"
                          />
                          <div>
                            <h4 className="font-bold text-sm text-foreground uppercase tracking-tight line-clamp-1">
                              {proj.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {proj.location} • {proj.province} • {proj.year}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            size="xs"
                            variant="outline"
                            className="font-bold text-xs flex gap-1 items-center"
                          >
                            <Edit3 className="size-3.5" /> Edit
                          </Button>
                          <Button
                            size="xs"
                            variant="destructive"
                            onClick={() => deleteProject(proj.id)}
                            className="font-bold text-xs flex gap-1 items-center"
                          >
                            <Trash className="size-3.5" /> Hapus
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* services Panel */}
              {activeTab === "services" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <h2 className="text-xl font-bold uppercase tracking-tight text-foreground">
                      Daftar Jasa & Layanan
                    </h2>
                    <Button
                      size="sm"
                      className="font-bold flex gap-1.5 items-center"
                    >
                      <Plus className="size-4" /> Tambah Layanan
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {servicesData.map((svc) => (
                      <div
                        key={svc.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/10 border rounded-xl gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={svc.imageUrl}
                            alt={svc.title}
                            className="h-12 w-12 rounded object-cover bg-zinc-800"
                          />
                          <div>
                            <h4 className="font-bold text-sm text-foreground uppercase tracking-tight">
                              {svc.title}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {svc.shortDesc}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            size="xs"
                            variant="outline"
                            className="font-bold text-xs flex gap-1 items-center"
                          >
                            <Edit3 className="size-3.5" /> Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* equipment Panel */}
              {activeTab === "equipment" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <h2 className="text-xl font-bold uppercase tracking-tight text-foreground">
                      Daftar Armada Alat Berat
                    </h2>
                    <Button
                      size="sm"
                      className="font-bold flex gap-1.5 items-center"
                    >
                      <Plus className="size-4" /> Tambah Alat Berat
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {equipmentData.map((eq) => (
                      <div
                        key={eq.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/10 border rounded-xl gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={eq.imageUrl}
                            alt={eq.name}
                            className="h-12 w-12 rounded object-cover bg-zinc-800"
                          />
                          <div>
                            <h4 className="font-bold text-sm text-foreground uppercase tracking-tight">
                              {eq.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {eq.type} • {eq.capacity}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            size="xs"
                            variant="outline"
                            className="font-bold text-xs flex gap-1 items-center"
                          >
                            <Edit3 className="size-3.5" /> Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
