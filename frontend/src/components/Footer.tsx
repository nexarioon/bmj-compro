import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-100 border-t border-zinc-900 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Brief */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-primary rounded text-primary-foreground font-black text-xl tracking-tighter">
                BMJ
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-lg leading-tight uppercase text-white">
                  PT. Budi Mulya Jaya
                </span>
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-bold">
                  Road Construction & Contractor
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed pt-2">
              Kontraktor pengaspalan jalan dan infrastruktur terpercaya sejak 2012. Kami berkomitmen memberikan hasil aspal hotmix terbaik, kokoh, dan berstandar nasional untuk sektor publik, komersial, maupun industri.
            </p>
            <div className="text-xs text-zinc-500 font-medium">
              NIB: 1243009XXXXXX <br />
              SBU Konstruksi Jalan Raya & Jembatan
            </div>
          </div>

          {/* Quick Links / Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white mb-6">
              Layanan Utama
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link to="/layanan/pengaspalan-jalan" className="hover:text-primary transition-colors flex items-center gap-1 group">
                  Pengaspalan Jalan Raya
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/layanan/aspal-hotmix" className="hover:text-primary transition-colors flex items-center gap-1 group">
                  Suplai & Gelar Aspal Hotmix
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/layanan/rehabilitasi-pemeliharaan" className="hover:text-primary transition-colors flex items-center gap-1 group">
                  Rehabilitasi & Tambal Sulam
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/layanan/sewa-alat-berat" className="hover:text-primary transition-colors flex items-center gap-1 group">
                  Sewa Alat Berat Konstruksi
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/layanan/marka-jalan" className="hover:text-primary transition-colors flex items-center gap-1 group">
                  Pengecatan Marka Jalan
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Pages */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white mb-6">
              Perusahaan
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link to="/tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/proyek" className="hover:text-white transition-colors">
                  Portfolio Proyek
                </Link>
              </li>
              <li>
                <Link to="/alat-berat" className="hover:text-white transition-colors">
                  Armada Alat Berat
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="hover:text-white transition-colors">
                  Galeri Konstruksi
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-white transition-colors">
                  Hubungi Kontak
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-zinc-600 hover:text-zinc-400 transition-colors text-xs">
                  CMS Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Contact Details */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white mb-6">
              Kontak Utama
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-primary mt-0.5" />
                <span>
                  <strong>Kantor Pusat:</strong><br />
                  Jl. Jenderal Sudirman No. 88, Sudirman Central Business District, Jakarta Selatan, 12190
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <span>+62 (21) 5088-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" />
                <span>info@budimulyajaya.co.id</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="size-4 shrink-0 text-primary mt-0.5" />
                <span>
                  Senin - Sabtu: 08.00 - 17.00 WIB<br />
                  Minggu & Hari Libur: Layanan Darurat
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-900 my-8"></div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© {currentYear} PT. Budi Mulya Jaya. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
            <a href="#" className="hover:underline">Mitra K3 Nasional</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
