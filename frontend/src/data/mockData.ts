export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  scope: string[];
  process: string[];
  imageUrl: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  province: string;
  year: number;
  client: string;
  status: "Selesai" | "Dalam Proses" | "Perencanaan";
  value: string;
  area: string;
  duration: string;
  imageUrl: string;
  challenges: string;
  solutions: string;
}

export interface Equipment {
  id: string;
  name: string;
  type: string;
  capacity: string;
  usage: string;
  imageUrl: string;
  specifications: Record<string, string>;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  number: string;
  year: string;
  imageUrl: string;
}

export const servicesData: Service[] = [
  {
    id: "s1",
    slug: "pengaspalan-jalan",
    title: "Pekerjaan Aspal Hotmix Jalan Raya",
    shortDesc: "Konstruksi jalan aspal baru menggunakan aspal hotmix berstandar Bina Marga untuk jalan nasional, provinsi, maupun jalan kota.",
    description: "PT. Budi Mulya Jaya menyediakan jasa pengaspalan jalan dengan aspal hotmix berkualitas tinggi untuk berbagai tingkat beban lalu lintas. Kami menggunakan material aspal yang diproduksi oleh Asphalt Mixing Plant (AMP) berteknologi modern untuk memastikan campuran aspal homogen dan tahan lama terhadap perubahan cuaca ekstrem di Indonesia.",
    benefits: [
      "Ketahanan jalan maksimum terhadap deformasi dan retak akibat beban berat",
      "Permukaan aspal rata dan memiliki daya cengkeram (skid resistance) tinggi untuk keselamatan berkendara",
      "Proses pengerjaan cepat menggunakan armada finisher otomatis modern",
      "Didukung oleh tenaga ahli pengaspalan berpengalaman lebih dari 10 tahun"
    ],
    scope: [
      "Survey lokasi, pemetaan elevasi dan desain geometrik jalan",
      "Pembersihan lahan dan persiapan subgrade (tanah dasar)",
      "Pemasangan lapisan pondasi agregat kelas A dan kelas B",
      "Penyemprotan Prime Coat (lapis resap pengikat) atau Tack Coat (lapis perekat)",
      "Penghamparan aspal hotmix (lapisan ATB, Binder Course, dan Wearing Course)",
      "Pemadatan akhir menggunakan Tandem Roller dan Pneumatic Tire Roller (PTR)"
    ],
    process: [
      "Tahap Persiapan & Uji Tanah Dasar",
      "Tahap Penghamparan Agregat Pondasi",
      "Tahap Spraying Lapis Perekat Aspal Emulsi",
      "Tahap Penghamparan Aspal Hotmix Utama",
      "Tahap Pemadatan & Finishing Elevasi",
      "Tahap Inspeksi Uji Kepadatan (Core Drill)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "s2",
    slug: "rehabilitasi-pemeliharaan",
    title: "Rehabilitasi & Pemeliharaan Jalan (Overlay)",
    shortDesc: "Perbaikan kerusakan jalan aspal (tambal sulam / patch) dan pelapisan ulang aspal (overlay) untuk memulihkan kekuatan struktur jalan.",
    description: "Kami menyediakan solusi pemeliharaan berkala untuk jalan yang mengalami kerusakan seperti lubang, retak buaya, maupun gelombang. Melalui metode cold milling (pengelupasan lapisan aspal rusak) and overlay (pelapisan ulang), kami memperpanjang umur pakai jalan dengan efisiensi biaya yang tinggi.",
    benefits: [
      "Mengembalikan kenyamanan berkendara dengan cepat",
      "Mencegah kerusakan struktur jalan yang lebih parah akibat genangan air",
      "Menghemat biaya investasi dibanding konstruksi ulang jalan total",
      "Menggunakan alat Cold Milling Wirtgen untuk hasil kupasan yang presisi"
    ],
    scope: [
      "Deteksi visual kerusakan dan pengukuran area rusak",
      "Pengelupasan aspal lama menggunakan Cold Milling Machine",
      "Pembersihan debu sisa kupasan dengan air compressor",
      "Penyemprotan lapis pengikat Tack Coat dosis tinggi",
      "Penambalan area lubang dalam (patching)",
      "Pelapisan ulang (overlay) dengan aspal hotmix aspal halus (Fine Grade / Wearing Course)"
    ],
    process: [
      "Identifikasi Lokasi Kerusakan",
      "Milling / Pengelupasan Aspal Rusak",
      "Pembersihan & Spraying Tack Coat",
      "Patching & Levelling Lubang",
      "Penghamparan Lapis Ulang (Overlay)",
      "Pemadatan menggunakan Tandem & Pneumatic Rollers"
    ],
    imageUrl: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "s3",
    slug: "jalan-kawasan-industri",
    title: "Konstruksi Jalan Kawasan Industri & Pabrik",
    shortDesc: "Pembangunan jalan aspal dengan daya dukung tonase tinggi yang dirancang khusus untuk dilalui truk kontainer dan alat berat pabrik.",
    description: "Jalan di kawasan industri memerlukan spesifikasi khusus karena menanggung beban statis dan dinamis dari kendaraan berat beroda banyak (truk tronton, trailer, container). Kami merancang tebal perkerasan jalan industri dengan base course yang solid dan aspal hotmix modifikasi polimer guna meminimalisir risiko jalan amblas.",
    benefits: [
      "Mampu menahan beban lalu lintas logistik berat hingga MST 10-12 Ton",
      "Ketahanan tinggi terhadap tumpahan oli dan bahan kimia operasional pabrik",
      "Desain drainase jalan terintegrasi untuk mencegah genangan air merusak aspal",
      "Durabilitas jangka panjang dengan perawatan minimal"
    ],
    scope: [
      "Analisis lalu lintas harian rata-rata beban berat (LHR)",
      "Pekerjaan tanah (cut & fill) dengan pemadatan subgrade tinggi",
      "Konstruksi base course agregat tebal dengan semen/CTB (Cement Treated Base)",
      "Penghamparan lapis aspal Asphalt Concrete Base (AC-Base) tebal",
      "Penghamparan lapis permukaan AC-WC dengan aspal modifikasi elastomer",
      "Pekerjaan pelengkap saluran air samping (U-Ditch Beton)"
    ],
    process: [
      "Analisis Beban Kendaraan & Perencanaan Tebal Aspal",
      "Pekerjaan Cut & Fill Tanah Dasar",
      "Pemasangan Pondasi Semen Treated Base (CTB)",
      "Penyemprotan Prime Coat Pengikat",
      "Penghamparan 2 Lapisan Hotmix Tebal",
      "Pemadatan Maksimal dengan Heavy Rollers"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "s4",
    slug: "sewa-alat-berat",
    title: "Penyewaan Alat Berat Konstruksi Jalan",
    shortDesc: "Sewa armada lengkap alat berat pengaspalan jalan dengan operator berpengalaman dan jaminan performa mesin prima.",
    description: "PT. Budi Mulya Jaya menyewakan alat berat khusus pekerjaan jalan untuk kontraktor lain maupun proyek swasta. Seluruh armada kami dirawat berkala sesuai standar manufaktur untuk memastikan produktivitas maksimal di lapangan tanpa kendala breakdown.",
    benefits: [
      "Armada alat berat terawat, prima, siap kerja 24/7",
      "Disertai operator bersertifikasi resmi (SIO) dan berpengalaman luas",
      "Tarif sewa kompetitif dengan opsi harian, mingguan, atau bulanan",
      "Layanan servis darurat di lapangan oleh mekanik standby kami"
    ],
    scope: [
      "Penyediaan unit Asphalt Finisher berbagai kapasitas lebar hampar",
      "Penyediaan Tandem Roller dan Vibratory Roller dengan gaya kompaksi tinggi",
      "Penyediaan Pneumatic Tire Roller (PTR) untuk pemadatan aspal elastis",
      "Penyediaan Motor Grader dan Wheel Loader untuk leveling agregat",
      "Penyediaan Excavator dan Dump Truck armada angkut tanah/agregat",
      "Mobilisasi dan demobilisasi alat berat ke lokasi proyek seluruh Jawa Barat & sekitarnya"
    ],
    process: [
      "Pemilihan Unit Sesuai Kebutuhan Proyek",
      "Negosiasi & Kontrak Sewa Alat",
      "Pemeriksaan Kesiapan Unit (Pre-delivery Inspector)",
      "Mobilisasi Alat Berat dengan Self-Loader/Trailer",
      "Operasional Unit di Lapangan oleh Operator",
      "Demobilisasi & Serah Terima Pengembalian Unit"
    ],
    imageUrl: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80"
  }
];

export const projectsData: Project[] = [
  {
    id: "p1",
    slug: "jalan-tol-jakarta-cikampek-overlay",
    title: "Pelapisan Ulang (Overlay) Jalan Tol Jakarta - Cikampek KM 28 - KM 35",
    category: "Jalan Tol & Nasional",
    location: "Cikarang - Karawang",
    province: "Jawa Barat",
    year: 2025,
    client: "PT Jasa Marga (Persero) Tbk",
    status: "Selesai",
    value: "Rp 18.500.000.000",
    area: "42.000 m2",
    duration: "45 Hari Kalender",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    challenges: "Pengerjaan pelapisan ulang aspal harus dilakukan pada malam hari (window time pukul 22.00 - 04.00 WIB) dengan volume arus lalu lintas tol yang sangat padat. Tingkat elevasi jalan tol harus benar-benar mulus tanpa sambungan kasar yang dapat membahayakan kendaraan berkecepatan tinggi.",
    solutions: "Kami mengerahkan 2 unit Cold Milling Machine Wirtgen berkapasitas tinggi untuk kupasan aspal cepat, diikuti langsung dengan 2 unit Asphalt Finisher otomatis. Kami menggunakan tipe aspal AC-WC modifikasi polimer SBS yang cepat mengeras sehingga jalan tol dapat langsung dibuka untuk lalu lintas umum tepat pukul 05.00 WIB setiap paginya.",
  },
  {
    id: "p2",
    slug: "akses-logistik-jababeka-phase-4",
    title: "Konstruksi Jalan Utama Logistik Akses Jababeka Phase 4",
    category: "Jalan Industri",
    location: "Kawasan Industri Jababeka, Cikarang",
    province: "Jawa Barat",
    year: 2024,
    client: "PT Jababeka Infrastruktur",
    status: "Selesai",
    value: "Rp 12.800.000.000",
    area: "28.500 m2",
    duration: "60 Hari Kalender",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    challenges: "Struktur tanah dasar (subgrade) di area tersebut merupakan tanah lempung ekspansif dengan daya dukung rendah (CBR < 3%), padahal jalan tersebut akan dilalui oleh ratusan truk logistik container bermuatan penuh setiap harinya.",
    solutions: "Kami melakukan stabilisasi tanah dasar menggunakan semen pengikat (soil cement stabilization) sedalam 30 cm, dilanjutkan dengan pemasangan Geotextile Woven berkekuatan tarik tinggi. Di atasnya dipasang lapis Pondasi Agregat Kelas A tebal 20 cm, Cement Treated Base (CTB) tebal 15 cm, dan aspal hotmix 3 lapis (ATB 6cm, AC-BC 5cm, AC-WC 4cm) dengan total tebal aspal 15 cm.",
  },
  {
    id: "p3",
    slug: "perumahan-permata-hijau-residence",
    title: "Pengaspalan Jalan Lingkungan Perumahan Permata Hijau",
    category: "Jalan Lingkungan / Perumahan",
    location: "Bekasi",
    province: "Jawa Barat",
    year: 2025,
    client: "PT Agung Podomoro Land Tbk",
    status: "Selesai",
    value: "Rp 4.200.000.000",
    area: "11.200 m2",
    duration: "20 Hari Kalender",
    imageUrl: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80",
    challenges: "Lebar jalan lingkungan perumahan sempit (lebar rata-rata 4.5 meter) dengan lekukan tajam dan banyak instalasi utilitas (manhole sewer, tiang listrik). Kami harus menjaga agar proses pengaspalan tidak merusak saluran air perumahan yang telah terpasang.",
    solutions: "Kami menggunakan Asphalt Finisher ukuran compact dengan bantuan pemadatan manual di bagian pinggir dekat saluran air menggunakan Baby Roller dan Stamper Kodok. Elevasi jalan diatur miring 2% ke arah saluran air kiri dan kanan (crown) untuk memastikan kelancaran aliran air hujan.",
  }
];

export const equipmentData: Equipment[] = [
  {
    id: "eq1",
    name: "Asphalt Finisher Vögele Super 1800-3",
    type: "Penghampar Aspal",
    capacity: "Hingga 700 Ton/Jam",
    usage: "Digunakan untuk menghamparkan material aspal hotmix secara rata dengan ketebalan dan lebar elevasi aspal yang presisi tinggi secara otomatis.",
    imageUrl: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Lebar Hamparan Maksimum": "10 Meter",
      "Ketebalan Hamparan Maksimum": "30 cm",
      "Kecepatan Kerja": "Hingga 24 m/menit",
      "Sistem Sensor": "Screed Heating & Automatic Grade Control Sensors"
    }
  },
  {
    id: "eq2",
    name: "Hamm Tandem Roller HD 90 VT",
    type: "Penggilas Aspal",
    capacity: "Berat Operasional 9.2 Ton",
    usage: "Digunakan untuk pemadatan awal dan pemadatan antara pada lapisan aspal hotmix. Dilengkapi dengan getaran (vibrasi) dan roda karet di bagian belakang untuk menutup celah pori aspal.",
    imageUrl: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Lebar Drum Pemadat": "1.68 Meter",
      "Kombinasi Pemadat": "Drum Baja Vibrasi depan, 4 Ban Karet belakang",
      "Kekuatan Getar (Vibrasi)": "Dual frekuensi 42/50 Hz",
      "Kapasitas Tangki Air": "700 Liter (untuk penyiraman drum agar aspal tidak lengket)"
    }
  },
  {
    id: "eq3",
    name: "Caterpillar Motor Grader 120 GC",
    type: "Leveling & Pembentukan Jalan",
    capacity: "Daya Mesin 171 HP",
    usage: "Digunakan untuk memotong, meratakan, dan membentuk permukaan tanah dasar (subgrade) serta lapis pondasi agregat kelas A/B sebelum diaspal.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    specifications: {
      "Lebar Pisau (Moldboard)": "3.7 Meter",
      "Kapasitas Angkat Pisau": "Peralatan Hidrolik Presisi Tinggi",
      "Berat Unit": "16.1 Ton",
      "Transmisi": "Powershift 6 Kecepatan Maju / 3 Mundur"
    }
  }
];

export const certificatesData: Certificate[] = [
  {
    id: "c1",
    title: "Sertifikat Badan Usaha (SBU) Jasa Konstruksi",
    issuer: "Lembaga Pengembangan Jasa Konstruksi (LPJK)",
    number: "Reg: 0092379/LPJK/2023",
    year: "2023 - 2026",
    imageUrl: "/certs/sbu.jpg"
  },
  {
    id: "c2",
    title: "ISO 9001:2015 - Sistem Manajemen Mutu Konstruksi",
    issuer: "TUV SUD Indonesia",
    number: "Cert No: ISO-9001-BMJ-22",
    year: "2024 - 2027",
    imageUrl: "/certs/iso-9001.jpg"
  },
  {
    id: "c3",
    title: "ISO 45001:2018 - Sistem Manajemen K3 Konstruksi",
    issuer: "IAS Accredited Certified Bodies",
    number: "Cert No: ISO-45001-BMJ-23",
    year: "2024 - 2027",
    imageUrl: "/certs/iso-45001.jpg"
  }
];

export const faqsData = [
  {
    question: "Berapa minimal volume pengerjaan jalan aspal yang dapat dilayani oleh PT. Budi Mulya Jaya?",
    answer: "Kami melayani berbagai skala proyek. Untuk proyek jalan aspal lingkungan, area parkir ruko/pabrik, minimal luas pengerjaan adalah 200 m2. Sedangkan untuk jalan raya besar, proyek nasional, dan jalan kawasan industri, tidak ada batasan luas pengerjaan maksimum."
  },
  {
    question: "Apakah PT. Budi Mulya Jaya melayani survei lokasi secara gratis?",
    answer: "Ya, kami memberikan layanan survei lokasi secara gratis dan penyusunan Rencana Anggaran Biaya (RAB) pengaspalan tanpa dipungut biaya untuk wilayah Jabodetabek, Karawang, Purwakarta, dan Bandung."
  },
  {
    question: "Berapa lama masa garansi pekerjaan jalan aspal yang diberikan?",
    answer: "Kualitas adalah prioritas utama kami. PT. Budi Mulya Jaya memberikan garansi tertulis selama 6 hingga 12 bulan (tergantung jenis ketebalan aspal dan kondisi drainase lokasi) setelah serah terima pekerjaan selesai (BAST)."
  },
  {
    question: "Apakah aspal hotmix diproduksi secara mandiri?",
    answer: "Kami bekerjasama dengan Asphalt Mixing Plant (AMP) terdekat di lokasi proyek untuk mensuplai material aspal hotmix segar. Material kami telah lolos uji laboratorium (Job Mix Formula) dan bersertifikasi kualitas Bina Marga."
  }
];
