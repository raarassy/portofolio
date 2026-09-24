import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  ChevronRight, 
  Sparkles,
  Briefcase,
  GraduationCap,
  User,
  Wrench,
  ChevronLeft,
  Heart,
  Moon,
  Star
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const email = "rasyidahdinanti@students.unnes.ac.id";

  // State untuk Carousel Sertifikat Dicoding (6 Gambar)
  const [dicodingCertIndex, setDicodingCertIndex] = useState(0);

  // State untuk Carousel Sertifikat Hima Ilkom (2 Gambar)
  const [himaCertIndex, setHimaCertIndex] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#E3F2FD', '#EBD6FB', '#898AC4', '#021A54']
    });

    setTimeout(() => setCopied(false), 2500);
  };

  // Data 6 Sertifikat Dicoding
  const dicodingCertificates = [
    { title: "Sertifikat Dicoding 1", image: "/sertif_dicoding_datscien.jpg" },
    { title: "Sertifikat Dicoding 2", image: "/sertif_dicoding_pemroC.jpg" },
    { title: "Sertifikat Dicoding 3", image: "/sertif_dicoding_python.jpg" },
    { title: "Sertifikat Dicoding 4", image: "/sertif_dicoding_sql.jpg" },
    { title: "Sertifikat Dicoding 5", image: "/sertif_dicoding_softdev.jpg" },
    { title: "Sertifikat Dicoding 6", image: "/sertif_dicoding_ai.jpg" }
  ];

  const nextDicodingCert = () => {
    setDicodingCertIndex((prev) => (prev + 1) % dicodingCertificates.length);
  };

  const prevDicodingCert = () => {
    setDicodingCertIndex((prev) => (prev - 1 + dicodingCertificates.length) % dicodingCertificates.length);
  };

  // Data 2 Sertifikat Hima Ilkom
  const himaCertificates = [
    { title: "Sertifikat Hima - Studi Banding", image: "/sertif_hima_stuban.jpg" },
    { title: "Sertifikat Hima - Lentera Kasih", image: "/sertif_hima_lentera.jpg" }
  ];

  const nextHimaCert = () => {
    setHimaCertIndex((prev) => (prev + 1) % himaCertificates.length);
  };

  const prevHimaCert = () => {
    setHimaCertIndex((prev) => (prev - 1 + himaCertificates.length) % himaCertificates.length);
  };

  // Data Proyek
  const projects = [
    {
      title: "Project 1 - UI Design Web Registrasi",
      desc: "Perancangan antarmuka website registrasi mata kuliah yang dibuat untuk memudahkan mahasiswa dalam melihat dan memilih mata kuliah yang akan diambil dengan tampilan yang sederhana dan mudah digunakan.",
      tools: "Tools: Figma",
      image: "https://raarassy.github.io/html-css-cv/ansi1.png",
      link: "https://www.figma.com/design/CLM7AFUqk5NVsRZswFSrys/UAS-ANSI_Kelompok-4?nodeid=0-1&t=E6ebdcyiBGcYdXAr-1"
    },
    {
      title: "Project 2 - Proyek High-Fidelity DiGym Quest",
      desc: "Perancangan high-fidelity UI aplikasi olahraga berbasis RPG dengan fitur daily quest, boss battle, leveling system, dan progress tracker.",
      tools: "Tools: Figma",
      image: "https://raarassy.github.io/html-css-cv/imk.png",
      link: "https://www.figma.com/design/nzM9JAjo7aShx5AsMYi8Lc/Wireframe-for-Kelompok-17_Kelompok-10?node-id=0-1&p=f&t=JWXAFWAsrIrWctiI-0"
    },
    {
      title: "Project 3 - ArtCraftory E-Commerce Kerajinan Tangan",
      desc: "ArtCraftory adalah platform e-commerce berbasis web yang berfokus pada kurasi dan penjualan produk kerajinan tangan ramah lingkungan (sustainable crafts).",
      tools: "Tools: WordPress, Elementor, WooCommerce, Hostinger",
      image: "https://raarassy.github.io/html-css-cv/sim.png",
      link: "#"
    },
    {
      title: "Project 4 - Aplikasi ToDo List",
      desc: "Aplikasi manajemen tugas harian berbasis desktop yang dikembangkan menggunakan Python dan pustaka Tkinter GUI. Fitur utama mencakup CRUD tugas, pengingat, dan kategori tugas.",
      tools: "Tools: Python, Tkinter, GUI Desktop",
      image: "https://raarassy.github.io/html-css-cv/bapro.png",
      link: "https://github.com/raarassy/ToDoList_BAPRO"
    },
    {
      title: "Project 5 - Sistem Manajemen Layanan Kesehatan",
      desc: "Sistem informasi berbasis web untuk mengintegrasikan administrasi layanan kesehatan, mulai dari konsultasi dokter, stok obat, hingga pengelolaan kegiatan dan permintaan donor darah secara terpusat.",
      tools: "Tools: PHP, MySQL, Bootstrap 4.6, HTML/CSS",
      image: "https://raarassy.github.io/html-css-cv/sbd.png",
      link: "https://github.com/raarassy/Project-_SBD_Kelompok8_Layanan_Kesehatan"
    },
    {
      title: "Project 6 - Deteksi Risiko Anemia Berbasis Data Mining",
      desc: "Penerapan algoritma machine learning untuk deteksi dini risiko penyakit anemia melalui perbandingan model Naive Bayes, Decision Tree, dan Random Forest.",
      tools: "Tools: Python, Colab, Pandas, Matplotlib, Seaborn, Scikit-learn, Streamlit",
      image: "https://raarassy.github.io/html-css-cv/datmin.png",
      link: "https://colab.research.google.com/drive/1r8LMxmhm8x_6hxo0LSq7UU4eqSZU9fXY?usp=sharing#scrollTo=t6ckeuGmGqYZ"
    },
    {
      title: "Project 7 - Platform E-Commerce Thrifting",
      desc: "Platform e-commerce thrifting berbasis web yang memfasilitasi transaksi jual-beli barang bekas layak pakai (preloved) secara terstruktur dan aman.",
      tools: "Tools: Figma, MySQL, PHP, Laravel, HTML, CSS, JavaScript, Blade Templating, Bootstrap",
      image: "https://raarassy.github.io/html-css-cv/rpl.png",
      link: "#"
    }
  ];

  const softSkills = ["Communication", "Adaptability", "Teamwork", "Problem Solving", "Analytical Ability"];
  const technicalSkills = ["Microsoft Office", "HTML CSS", "Figma", "Python", "MySQL"];

  return (
    <div className="min-h-screen bg-[#E3F2FD] text-[#021A54] relative overflow-hidden">
      
      {/* 🌟 ANIMASI BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Polkadot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `radial-gradient(#898AC4 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>

        {/* Aura Glowing Blobs Bergerak */}
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#EBD6FB] rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#898AC4]/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-[#EBD6FB]/60 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#E3F2FD]/90 backdrop-blur-md border-b border-[#898AC4]/20 transition-all">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-extrabold text-xl tracking-tight text-[#021A54]">
            Putri Rasyidah Dinanti
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#021A54]/80">
            <a href="#about" className="hover:text-[#898AC4] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#898AC4] transition-colors">Skills</a>
            <a href="#experience" className="hover:text-[#898AC4] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#898AC4] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#898AC4] transition-colors">Contact</a>
          </nav>
          <a 
            href="#contact" 
            className="text-xs font-bold px-4 py-2 rounded-full bg-[#EBD6FB] text-[#021A54] border border-[#898AC4]/30 hover:bg-[#898AC4] hover:text-white transition-all shadow-sm"
          >
            Lets Talk
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative z-10 pt-36 pb-16 md:pt-40 md:pb-24 max-w-5xl mx-auto px-6">
        
        {/* 🌟 KELOMPOK IKON ANEKA BENTUK (BINTANG, BULAN, LOVE, SPARKLE + 3 SPAN) */}
        {/* Kelompok Kanan Atas */}
        <div className="absolute top-20 right-4 md:right-10 flex items-center gap-2.5 opacity-90 animate-bounce pointer-events-none">
          <Star className="w-5 h-5 text-[#898AC4] fill-[#898AC4]/30" />
          <Moon className="w-5 h-5 text-[#898AC4] fill-[#898AC4]/20" />
          <Heart className="w-4 h-4 text-[#898AC4] fill-[#898AC4]/40" />
          <Sparkles className="w-5 h-5 text-[#898AC4]" />
          
          {/* 3 Span Dots di Kanan */}
          <span className="w-2 h-2 rounded-full bg-[#898AC4]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#898AC4]/70"></span>
          <span className="w-1 h-1 rounded-full bg-[#898AC4]/40"></span>
        </div>

        {/* Kelompok Kiri Atas */}
        <div className="absolute top-20 left-4 md:left-10 flex items-center gap-2.5 opacity-80 animate-bounce pointer-events-none">
          {/* 3 Span Dots di Kiri */}
          <span className="w-1 h-1 rounded-full bg-[#898AC4]/40"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#898AC4]/70"></span>
          <span className="w-2 h-2 rounded-full bg-[#898AC4]"></span>
          
          <Sparkles className="w-5 h-5 text-[#898AC4]" />
          <Heart className="w-4 h-4 text-[#898AC4] fill-[#898AC4]/30" />
          <Moon className="w-5 h-5 text-[#898AC4] fill-[#898AC4]/20" />
          <Star className="w-5 h-5 text-[#898AC4] fill-[#898AC4]/30" />
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-between">
          <div className="space-y-4 max-w-xl text-center md:text-left animate-fade-in">
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#021A54] leading-tight tracking-tight">
              Hi, I'm Raras!
            </h1>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#898AC4]/30 text-xs font-bold text-[#021A54] shadow-sm">
              Information Systems Student
            </div>
            
            <p className="text-base font-medium text-[#021A54]/80 leading-relaxed">
              Mahasiswa semester 5 Prodi Sistem Informasi di Universitas Negeri Semarang. Memiliki ketertarikan dalam dunia Teknologi Informasi, terutama dalam bidang Data Analyst, UI/UX Design, dan Pengembangan Web
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-2xl bg-[#021A54] text-white text-xs font-bold hover:bg-[#898AC4] hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-2"
              >
                Lihat Portfolio <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* FRAME FOTO PROFIL DENGAN SPARKLE KANAN ATAS DAN KIRI BAWAH */}
          <div className="relative animate-pop-in">
            
            {/* Sparkle Melayang di KANAN ATAS Frame Foto */}
            <div className="absolute -top-4 -right-4 z-20 text-[#898AC4] animate-bounce">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/>
              </svg>
            </div>

            {/* Sparkle Melayang di KIRI BAWAH Frame Foto */}
            <div className="absolute -bottom-4 -left-4 z-20 text-[#898AC4] animate-bounce">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/>
              </svg>
            </div>

            <div className="absolute -inset-3 bg-[#EBD6FB] rounded-3xl rotate-3 border-2 border-[#898AC4]/30 shadow-md"></div>
            <div className="absolute -inset-3 bg-white/90 rounded-3xl -rotate-2 border border-[#898AC4]/20"></div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white p-2">
              <img 
                src="/ras_tobys3.jpeg" 
                alt="Foto Raras" 
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG SAYA & STEPS PENDIDIKAN */}
      <section id="about" className="relative z-10 py-16 bg-white/70 backdrop-blur-sm border-y border-[#898AC4]/20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-start">
          
          {/* Kolom Kiri: Tentang Saya */}
          <div className="md:col-span-7 p-7 rounded-3xl bg-white border border-[#898AC4]/20 shadow-sm hover:border-[#898AC4]/50 transition-all space-y-4">
            <h2 className="text-xl font-extrabold text-[#021A54] flex items-center gap-2.5">
              <User className="text-[#898AC4] w-5 h-5" /> Tentang Saya
            </h2>
            <p className="text-sm font-medium text-[#021A54]/80 leading-relaxed">
              Saya seorang mahasiswa Sistem Informasi di Universitas Negeri Semarang yang memiliki passion di bidang IT. Saya memiliki pengalaman kerja nyata melalui program <strong className="text-[#021A54]">Quality Assurance Internship di PT. Anggada Duta Wisesa</strong>, di mana saya terbiasa melakukan testing aplikasi, investigasi bug, dan penyusunan dokumentasi teknis.
            </p>
            <p className="text-sm font-medium text-[#021A54]/80 leading-relaxed">
              Selain itu, saya aktif berorganisasi di <strong className="text-[#021A54]">Hima Ilkom UNNES</strong> sebagai Wakil Koordinator Divisi Sosial Masyarakat, serta berpengalaman menjadi koordinator & panitia di berbagai kepanitiaan.
            </p>
          </div>

          {/* Kolom Kanan: Step Pendidikan Timeline */}
          <div className="md:col-span-5 p-7 rounded-3xl bg-[#EBD6FB]/30 border border-[#898AC4]/20 shadow-sm space-y-4">
            <h2 className="text-xl font-extrabold text-[#021A54] flex items-center gap-2.5 mb-2">
              <GraduationCap className="text-[#898AC4] w-5 h-5" /> Pendidikan
            </h2>

            {/* Steps Vertical Timeline */}
            <div className="relative pl-6 space-y-6 border-l-2 border-[#898AC4]/40 ml-2">
              
              {/* Step 2: UNNES */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#021A54] border-2 border-white ring-4 ring-[#EBD6FB]"></span>
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#021A54] text-white">
                  2024 – Sekarang
                </span>
                <h3 className="text-sm font-bold text-[#021A54] mt-1">Universitas Negeri Semarang</h3>
                <p className="text-xs font-semibold text-[#898AC4]">S1 Sistem Informasi</p>
              </div>

              {/* Step 1: SMKN 26 Jakarta */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#898AC4] border-2 border-white"></span>
                <span className="text-[11px] font-bold text-[#898AC4]">
                  2020 – 2024
                </span>
                <h3 className="text-sm font-bold text-[#021A54] mt-1">SMKN 26 Jakarta</h3>
                <p className="text-xs font-medium text-[#021A54]/75">
                  Sistem Informatika, Jaringan, dan Aplikasi (SIJA)
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-extrabold text-[#021A54] mb-8 text-center flex items-center justify-center gap-2">
          <Wrench className="text-[#898AC4] w-6 h-6" /> Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-[#898AC4]/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-base font-bold text-[#021A54] mb-4 border-b border-[#E3F2FD] pb-2">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 rounded-2xl bg-[#E3F2FD] text-[#021A54] text-xs font-bold border border-[#898AC4]/20 hover:bg-[#898AC4] hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#898AC4]/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-base font-bold text-[#021A54] mb-4 border-b border-[#E3F2FD] pb-2">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((s, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 rounded-2xl bg-[#EBD6FB]/60 text-[#021A54] text-xs font-bold border border-[#898AC4]/20 hover:bg-[#021A54] hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & CERTIFICATES */}
      <section id="experience" className="relative z-10 py-16 bg-white/70 backdrop-blur-sm border-y border-[#898AC4]/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-[#021A54] mb-2 flex items-center gap-2">
            <Briefcase className="text-[#898AC4] w-6 h-6" /> Experience & Certificates
          </h2>

          <div className="space-y-8">
            
            {/* 1. QA Internship ADW */}
            <div className="p-7 rounded-3xl bg-white border border-[#898AC4]/20 shadow-sm hover:border-[#898AC4]/50 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <strong className="text-base font-bold text-[#021A54]">
                  Quality Assurance Internship - PT. Anggada Duta Wisesa
                </strong>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EBD6FB] text-[#021A54]">
                  MAY ‘23 – MAR '24
                </span>
              </div>
              <ul className="mt-2 space-y-1 list-disc list-inside text-xs font-medium text-[#021A54]/80">
                <li>Manual Application Testing</li>
                <li>Creating a Testing Result Report</li>
                <li>Participate in Creating Application User Manual</li>
                <li>Developer Collaboration & Bug Investigation</li>
              </ul>
            </div>

            {/* 2. RevoU & Dicoding Courses Grid */}
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              
              {/* RevoU */}
              <div className="p-6 rounded-3xl bg-white border border-[#898AC4]/20 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <strong className="text-sm font-bold text-[#021A54]">RevoU Mini Course - Data Analytics</strong>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBD6FB] text-[#021A54]">OKT ‘24</span>
                  </div>
                  <p className="text-xs font-medium text-[#021A54]/80 leading-relaxed">
                    Mempelajari dasar bidang Data Analytics langsung dari para expert industri.
                  </p>
                </div>

                <div className="group relative rounded-2xl overflow-hidden border border-[#898AC4]/20 bg-[#E3F2FD]/30 p-2 shadow-sm hover:shadow-md transition-all cursor-pointer max-w-[85%] mx-auto w-full">
                  <img 
                    src="/sertif_revou.jpg" 
                    alt="Sertifikat RevoU Data Analytics" 
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Dicoding Certifications Carousel */}
              <div className="p-6 rounded-3xl bg-white border border-[#898AC4]/20 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <strong className="text-sm font-bold text-[#021A54]">Dicoding Academy Certifications</strong>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBD6FB] text-[#021A54]">2024 – 2025</span>
                  </div>
                  <p className="text-xs font-medium text-[#021A54]/80 leading-relaxed">
                    Menyelesaikan berbagai sertifikasi kelas pemrograman & IT dasar secara intensif di Dicoding Academy.
                  </p>
                </div>

                <div className="group relative rounded-2xl overflow-hidden border border-[#898AC4]/20 bg-[#E3F2FD]/30 p-2 shadow-sm hover:shadow-md transition-all cursor-pointer max-w-[85%] mx-auto w-full">
                  <img 
                    src={dicodingCertificates[dicodingCertIndex].image} 
                    alt={dicodingCertificates[dicodingCertIndex].title} 
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-102 transition-transform duration-300"
                  />

                  {/* Navigasi Panah < 1/6 > Melayang */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#898AC4]/30 shadow-md">
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevDicodingCert(); }}
                      className="p-1 rounded-full hover:bg-[#898AC4] hover:text-white text-[#021A54] transition-colors"
                      title="Sertifikat Sebelumnya"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-extrabold text-[#021A54]">
                      {dicodingCertIndex + 1} / {dicodingCertificates.length}
                    </span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextDicodingCert(); }}
                      className="p-1 rounded-full hover:bg-[#898AC4] hover:text-white text-[#021A54] transition-colors"
                      title="Sertifikat Selanjutnya"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* 3. Volunteer Grid */}
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              
              {/* Volunteer Lentera Kasih */}
              <div className="p-6 rounded-3xl bg-white border border-[#898AC4]/20 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <strong className="text-sm font-bold text-[#021A54]">Volunteer Lentera Kasih 2025</strong>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBD6FB] text-[#021A54]">JUN '25</span>
                  </div>
                  <p className="text-xs font-medium text-[#021A54]/80 leading-relaxed">
                    Terlibat aktif sebagai Sie. Acara dalam program kerja bakti sosial anak panti asuhan.
                  </p>
                </div>

                <div className="group relative rounded-2xl overflow-hidden border border-[#898AC4]/20 bg-[#E3F2FD]/30 p-2 shadow-sm hover:shadow-md transition-all cursor-pointer max-w-[85%] mx-auto w-full">
                  <img 
                    src="/sertif_mvp_lentera.jpg" 
                    alt="Sertifikat Volunteer Lentera Kasih" 
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Volunteer Interface */}
              <div className="p-6 rounded-3xl bg-white border border-[#898AC4]/20 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <strong className="text-sm font-bold text-[#021A54]">Volunteer Interface 2025</strong>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBD6FB] text-[#021A54]">JUL – SEP '25</span>
                  </div>
                  <p className="text-xs font-medium text-[#021A54]/80 leading-relaxed">
                    Terlibat aktif sebagai Sie. Acara dalam rangkaian kegiatan OSPEK mahasiswa baru.
                  </p>
                </div>

                <div className="group relative rounded-2xl overflow-hidden border border-[#898AC4]/20 bg-[#E3F2FD]/30 p-2 shadow-sm hover:shadow-md transition-all cursor-pointer max-w-[85%] mx-auto w-full">
                  <img 
                    src="/sertif_mvp_interface.jpg" 
                    alt="Sertifikat Volunteer Interface" 
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>

            {/* 4. Hima Ilkom UNNES Carousel */}
            <div className="p-7 rounded-3xl bg-white border border-[#898AC4]/20 shadow-sm grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <strong className="text-base font-bold text-[#021A54]">
                    Hima Ilkom UNNES - Kabinet Astasae
                  </strong>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EBD6FB] text-[#021A54]">
                    PRESENT
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#898AC4]">
                  Wakil Koordinator Divisi Sosial Masyarakat
                </p>
                <ul className="space-y-1 list-disc list-inside text-xs font-medium text-[#021A54]/80">
                  <li>Program Kerja Studi Banding - Sie. Bendahara</li>
                  <li>Program Kerja Lentera Kasih - Sie. Acara</li>
                  <li>Program Kerja Interface - Sie. Konsumsi</li>
                  <li>Program Kerja Ilkom Mengajar - Sie. Bendahara</li>
                </ul>
              </div>

              <div className="md:col-span-5">
                <div className="group relative rounded-2xl overflow-hidden border border-[#898AC4]/20 bg-[#E3F2FD]/30 p-2 shadow-sm hover:shadow-md transition-all cursor-pointer w-full">
                  <img 
                    src={himaCertificates[himaCertIndex].image} 
                    alt={himaCertificates[himaCertIndex].title} 
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-102 transition-transform duration-300"
                  />

                  {/* Navigasi Panah < 1/2 > Melayang */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#898AC4]/30 shadow-md">
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevHimaCert(); }}
                      className="p-1 rounded-full hover:bg-[#898AC4] hover:text-white text-[#021A54] transition-colors"
                      title="Sertifikat Sebelumnya"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-extrabold text-[#021A54]">
                      {himaCertIndex + 1} / {himaCertificates.length}
                    </span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextHimaCert(); }}
                      className="p-1 rounded-full hover:bg-[#898AC4] hover:text-white text-[#021A54] transition-colors"
                      title="Sertifikat Selanjutnya"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROYEK PORTOFOLIO */}
      <section id="projects" className="relative z-10 py-16 max-w-5xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-[#021A54]">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div 
              key={idx} 
              className="group rounded-3xl bg-white border border-[#898AC4]/20 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-[#E3F2FD]/50">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {p.link !== "#" && (
                    <a 
                      href={p.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-[#021A54] hover:bg-[#021A54] hover:text-white transition-all shadow-md"
                      title="Open Project Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-sm font-bold text-[#021A54] mb-2 group-hover:text-[#898AC4] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-medium text-[#021A54]/75 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#E3F2FD]">
                <span className="text-[11px] font-bold text-[#898AC4]">
                  {p.tools}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAK */}
      <section id="contact" className="relative z-10 py-16 bg-[#EBD6FB]/30 backdrop-blur-sm border-t border-[#898AC4]/20">

        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-[#021A54] mb-2">Let’s Connect!</h2>
          <p className="text-xs font-medium text-[#021A54]/80 mb-6">
            Ada yang ingin ditanyakan atau ingin berkolaborasi? Hubungi saya melalui kontak di bawah ini.
          </p>

          <div className="inline-flex items-center gap-2 p-2 px-4 rounded-2xl bg-white border border-[#898AC4]/30 shadow-sm mb-6">
            <Mail className="w-4 h-4 text-[#898AC4]" />
            <span className="text-xs font-bold text-[#021A54]">{email}</span>
            <button 
              onClick={handleCopyEmail}
              className="p-1.5 rounded-xl bg-[#E3F2FD] hover:bg-[#898AC4] text-[#021A54] hover:text-white transition-colors ml-2"
              title="Copy Email"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* SOSMED BUTTONS */}
          <div className="flex justify-center items-center gap-3">
            {/* GitHub */}
            <a 
              href="https://github.com/raarassy" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 rounded-full bg-white border border-[#898AC4]/30 text-[#021A54] hover:bg-[#021A54] hover:text-white transition-all text-xs font-bold flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg> 
              GitHub
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/putri-rasyi" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 rounded-full bg-white border border-[#898AC4]/30 text-[#021A54] hover:bg-[#0077B5] hover:text-white transition-all text-xs font-bold flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg> 
              LinkedIn
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/raarassy_" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 rounded-full bg-white border border-[#898AC4]/30 text-[#021A54] hover:bg-[#E4405F] hover:text-white transition-all text-xs font-bold flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg> 
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-6 text-center text-xs font-semibold text-[#021A54]/60">
        <p>© 2026 Putri Rasyidah Dinanti - Portofolio</p>
      </footer>
    </div>
  );
}