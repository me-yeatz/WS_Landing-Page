import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  CheckCircle2,
  FlaskConical,
  Globe,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
  Award,
  Clock,
  Quote,
  X,
  CreditCard
} from "lucide-react";
import { useState, FormEvent } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const benefits = [
  {
    title: "Regulatory Affairs for Health Supplements",
    benefit: "Master the rules and get products to market faster without the legal headaches.",
    icon: ShieldCheck,
    color: "bg-brand-light text-brand border-brand/10",
    image: "/Health Suppliment.png",
    oldPrice: "75.00",
    newPrice: "60.00",
    highlightPrefix: "text-red-600",
    paymentLink: "https://rzp.io/rzp/GinAOgyk"
  },
  {
    title: "Global Halal\nCompliance",
    benefit: "Unlock the massive global Halal market by mastering the true meaning of compliance.",
    icon: Globe,
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image: "/Halal & Haram.png",
    oldPrice: "65.00",
    newPrice: "50.00",
    highlightPrefix: "text-red-600",
    paymentLink: "https://rzp.io/rzp/Ph7h1Ju"
  },
  {
    title: "Profitable Product Formulation",
    benefit: "Turn your lab ideas into profitable, best-selling products that consumers actually love.",
    icon: FlaskConical,
    color: "bg-cyan-50 text-cyan-700 border-cyan-100",
    image: "/Formulating For Sucess.png",
    oldPrice: "75.00",
    newPrice: "60.00",
    highlightPrefix: "text-red-600"
  },
  {
    title: "Sustainable\nInnovation",
    benefit: "Lead the industry with high-performance waterless products that define the future of beauty.",
    icon: Sparkles,
    color: "bg-sky-50 text-sky-700 border-sky-100",
    image: "/Art of Waterless.png",
    oldPrice: "75.00",
    newPrice: "60.00",
    highlightPrefix: "text-red-600"
  },
  {
    title: "Regulatory Affairs for Cosmetics",
    benefit: "Simplify complex cosmetic notifications and ensure your brand stays 100% compliant and safe.",
    icon: BookOpen,
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    image: "/Cosmetics.png",
    oldPrice: "75.00",
    newPrice: "60.00",
    highlightPrefix: "text-red-600"
  },
  {
    title: "Halal Certification\nRoadmap",
    benefit: "Navigate the entire Halal certification journey with ease, from initial concept to the retail shelf.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-700 border-blue-100",
    image: "/Decoding Halal.png",
    oldPrice: "75.00",
    newPrice: "60.00",
    highlightPrefix: "text-red-600"
  }
];

export default function App() {
  // Registration Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCombo, setSelectedCombo] = useState<any>(null);
  const [guestData, setGuestData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const openModal = (combo: any) => {
    setSelectedCombo(combo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCombo(null);
    setGuestData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-slate-900 selection:bg-brand-light selection:text-brand">
      {/* Refined Header */}
      <header className="border-b border-line bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
          <a href="/" aria-label="WS ReguLab Solutions Home">
            <img
              src="/Logo Green.png"
              alt="WS ReguLab Solutions"
              className="w-96 h-auto object-contain"
            />
          </a>
        </div>
      </header>

      {/* Hero Section - Editorial Split */}
      <section className="relative overflow-hidden bg-[#0A1613] border-b border-[#0A1613] lg:border-none">

        {/* Soft Mesh Gradient Glows */}
        <div className="absolute top-0 right-0 -mr-[10%] -mt-[10%] w-[500px] h-[500px] sm:w-[70vw] sm:h-[70vw] rounded-full bg-[#154634] blur-[90px] sm:blur-[140px] opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-[10%] -mb-[10%] w-[400px] h-[400px] sm:w-[60vw] sm:h-[60vw] rounded-full bg-[#0E2E23] blur-[80px] sm:blur-[130px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[40vw] sm:h-[40vw] rounded-full bg-[#0E2721] blur-[60px] sm:blur-[100px] opacity-50 pointer-events-none" />

        {/* Subtle Dot Pattern Overlay for Texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
        />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-6 py-20 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl w-full"
            >
              <div className="mb-10 inline-flex items-center justify-center gap-4 w-full">
                <div className="h-px w-12 bg-white/30" />
                <span className="small-caps text-white/50">Pendaftaran Ambilan Terhad</span>
                <div className="h-px w-12 bg-white/30" />
              </div>

              <h2 className="text-5xl font-serif font-bold tracking-tight text-white sm:text-7xl leading-[1.1] mx-auto">
                Kuasai <span className="italic text-yellow-400">Realiti Industri</span> Sebenar: <br />
                <span className="text-2xl sm:text-4xl block mt-6 font-sans font-medium text-slate-200">
                  Mantapkan Teori dan Kemahiran Praktikal Anda Untuk Menjadi Rebutan Majikan dan Pelanggan!
                </span>
              </h2>

              <p className="mt-12 text-xl leading-relaxed text-slate-200 font-bold max-w-2xl mx-auto">
                Jangan risau, kembangkan ilmu dan kemahiran anda bersama kami melalui <span className="text-yellow-400">Kelas Eksklusif</span>. Daftar sekarang! <br className="hidden sm:block" />
                <span className="inline-block mt-4 px-6 py-2 border border-yellow-400/30 rounded-full text-yellow-400 italic text-sm">
                  Pendaftaran Dibuka, Slot Terhad.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section - Refined Grid */}
      <section className="px-6 py-40 bg-paper relative">
        <div className="mx-auto max-w-7xl flex flex-col items-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-brand shadow-xl shadow-brand/10 mb-12 border border-brand/10">
            <Users className="h-10 w-10" />
          </div>

          <h3 className="text-5xl sm:text-7xl font-serif font-bold text-ink leading-[1.05] tracking-tight mb-24 text-center">
            Siapa yang <span className="italic text-brand text-6xl sm:text-7xl">Patut Sertai</span> <br className="hidden sm:block" />
            Kelas Ini?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {[
              "Industry Practitioners",
              "Formulators & R&D teams",
              "QA/QC & Production teams",
              "Regulatory & Technical teams",
              "Brand owners & homegrown brands",
              "Fresh Graduates & students"
            ].map((audience, idx) => (
              <div key={idx} className="group p-8 bg-white border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-brand group-hover:text-white" />
                  </div>
                  <span className="text-xl sm:text-2xl text-ink font-serif font-bold leading-tight tracking-tight">
                    {audience}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 w-full relative p-10 sm:p-24 bg-[#0A1613] text-center shadow-[0_30px_100px_rgba(0,0,0,0.7)] overflow-hidden border border-[#154634]">
            {/* Mesh Gradient Glows - Matching Hero */}
            <div className="absolute top-0 right-0 -mr-[10%] -mt-[10%] w-[300px] h-[300px] rounded-full bg-[#154634] blur-[80px] opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-[10%] -mb-[10%] w-[250px] h-[250px] rounded-full bg-[#0E2E23] blur-[70px] opacity-50 pointer-events-none" />

            {/* Subtle Dot Pattern - Matching Hero */}
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
            />

            <div className="relative z-10 text-white text-left max-w-4xl mx-auto">
              <h4 className="text-3xl sm:text-5xl font-serif font-bold mb-12 text-center text-amber-500 italic">
                Masalah Yang Ramai Hadapi:
              </h4>
              <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                  <span className="text-amber-500 text-3xl shrink-0 leading-none mt-1 group-hover:scale-125 transition-transform duration-300">•</span>
                  <p className="text-xl sm:text-2xl font-light leading-relaxed opacity-90 transition-opacity group-hover:opacity-100"><span className="font-bold text-white border-b border-amber-500/30">Graduan:</span> Terlalu banyak teori, tetapi kurang pengalaman praktikal yang dicari-cari oleh majikan?</p>
                </div>
                <div className="flex gap-6 items-start group">
                  <span className="text-amber-500 text-3xl shrink-0 leading-none mt-1 group-hover:scale-125 transition-transform duration-300">•</span>
                  <p className="text-xl sm:text-2xl font-light leading-relaxed opacity-90 transition-opacity group-hover:opacity-100"><span className="font-bold text-white border-b border-amber-500/30">Founder/Pemilik Jenama:</span> Ada ilmu bisnes, tetapi tiada kemahiran teknikal untuk hasilkan produk yang betul-betul menarik pelanggan?</p>
                </div>
                <div className="flex gap-6 items-start group">
                  <span className="text-amber-500 text-3xl shrink-0 leading-none mt-1 group-hover:scale-125 transition-transform duration-300">•</span>
                  <p className="text-xl sm:text-2xl font-light leading-relaxed opacity-90 transition-opacity group-hover:opacity-100"><span className="font-bold text-white border-b border-amber-500/30">Pekerja Industri:</span> Rasa stuck dan perlukan kemahiran nilai tambah (added value) untuk naik pangkat atau kembangkan kerjaya?</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Promo Combo Section - High Impact Cards */}
      <section className="px-6 py-40 bg-paper relative">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-24">
            <p className="small-caps text-red-600 mb-6 font-bold tracking-[0.2em]">Koleksi Eksklusif</p>
            <h2 className="text-5xl font-serif font-bold tracking-tight text-ink sm:text-8xl">
              PROMO <span className="italic text-red-600">COMBO PACKAGE</span>
            </h2>
            <div className="mt-8 h-px w-24 bg-red-600/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "COMBO A",
                courses: ["Regulatory Affairs", "Lab Bench to Best Seller"],
                oldPrice: "155.00",
                newPrice: "120.00",
                image: "/Combo A.png"
              },
              {
                name: "COMBO B",
                courses: ["Regulatory Affairs", "Lab Bench to Best Seller"],
                oldPrice: "155.00",
                newPrice: "120.00",
                image: "/Combo B.png"
              },
              {
                name: "COMBO C",
                courses: ["Regulatory Affairs", "Waterless Foundation"],
                oldPrice: "155.00",
                newPrice: "120.00",
                image: "/Combo C.png"
              },
              {
                name: "COMBO D",
                courses: ["Regulatory Affairs", "Waterless Foundation"],
                oldPrice: "155.00",
                newPrice: "120.00",
                image: "/Combo D.png"
              },
              {
                name: "COMBO E",
                courses: ["Waterless Foundation", "Lab Bench to Best Seller"],
                oldPrice: "155.00",
                newPrice: "120.00",
                image: "/Combo E.png"
              }
            ].map((combo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-10 bg-white border border-line hover:border-red-600/20 hover:shadow-[0_40px_80px_-15px_rgba(220,38,38,0.1)] transition-all duration-500 relative flex flex-col h-full"
              >
                <div className="mb-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 bg-red-50 px-5 py-2">
                    {combo.name}
                  </span>
                </div>

                <div className="flex-grow space-y-6 mb-12">
                  {combo.courses.map((course, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      {i > 0 && <span className="text-red-600 font-bold text-4xl shrink-0 -mt-2">+</span>}
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-ink leading-tight tracking-tight">
                        {course}
                      </h4>
                    </div>
                  ))}
                </div>

                {combo.image && (
                  <div className="-mx-10 mb-10 overflow-hidden border-y border-line bg-paper">
                    <img
                      src={combo.image}
                      alt={combo.name}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}

                <div className="mt-16 pt-10 border-t border-line">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">Registration Fees</p>
                  <div className="flex flex-col gap-1 mb-10">
                    <span className="text-sm sm:text-lg text-slate-400 line-through font-light italic">RM {combo.oldPrice}</span>
                    <span className="text-2xl sm:text-4xl font-serif font-bold text-red-600">RM {combo.newPrice}</span>
                  </div>

                  <button
                    onClick={() => openModal(combo)}
                    className="w-full bg-red-600 py-4 sm:py-6 text-xs sm:text-sm font-bold text-white uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-xl shadow-red-600/10"
                  >
                    Daftar Sekarang
                  </button>
                </div>

                {/* Visual Anchor */}
                <div className="absolute bottom-8 right-8 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                  <Sparkles className="h-24 w-24 text-red-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Benefits Section - Editorial Grid */}
      <section className="px-6 py-40 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
            <p className="small-caps text-brand mb-6">Kurikulum Berimpak Tinggi</p>
            <h2 className="text-5xl font-serif font-bold tracking-tight text-ink sm:text-7xl">
              Kemahiran Yang Menjamin <br />
              <span className="italic">Masa Depan</span> Anda!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col p-12 border-r border-b border-line hover:bg-paper transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-6xl font-serif font-bold">0{index + 1}</span>
                </div>

                <div className={cn("mb-12 flex h-16 w-16 items-center justify-center rounded-full border shadow-sm", item.color)}>
                  <item.icon className="h-8 w-8" />
                </div>

                <h3 className="whitespace-pre-line text-2xl font-serif font-bold text-ink group-hover:text-brand transition-colors leading-tight mb-8">
                  {item.title}
                </h3>

                {item.image && (
                  <div className="-mx-8 mb-8 overflow-hidden rounded-md border border-line shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 scale-100 origin-center"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <p className="text-lg leading-relaxed text-slate-500 font-light italic mb-8">
                    "{item.benefit}"
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-line">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 line-through">RM {item.oldPrice}</span>
                      <span className={cn("text-xl font-bold", item.highlightPrefix || "text-brand")}>RM {item.newPrice}</span>
                    </div>
                    <button 
                      onClick={() => openModal(item)}
                      className="bg-brand py-3 px-6 text-xs font-bold text-white uppercase tracking-widest hover:bg-ink transition-colors"
                    >
                      Daftar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Luxury Dark */}
      <section className="px-6 py-40 bg-ink text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,93,93,0.3),transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-32 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="small-caps text-teal-400 mb-8">Pilihan Utama Industri</p>
              <h2 className="text-5xl font-serif font-bold tracking-tight sm:text-7xl leading-[1.1]">
                Mengapa WS ReguLab Solutions (Training) Menjadi <span className="italic text-yellow-400">Pilihan Utama Industri?</span>
              </h2>
              <p className="mt-10 text-xl text-teal-100/60 font-light leading-relaxed max-w-xl">
                Kami bukan sekadar pusat latihan yang menawarkan kelas pada harga berpatutan; kami adalah rakan strategik kerjaya dan syarikat anda dengan rekod pengajar yang terbukti pakar dalam bidang masing-masing.
              </p>

              <div className="mt-20 space-y-12">
                <div className="space-y-6 group">
                  <div className="h-12 w-12 rounded-full border border-teal-400/30 flex items-center justify-center group-hover:bg-teal-400 group-hover:text-black transition-all">
                    <Award className="h-6 w-6 text-teal-400 group-hover:text-inherit" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white uppercase tracking-tight">Kepakaran Yang Dipercayai</h4>
                  <p className="text-teal-100/40 font-light leading-relaxed">Diajar terus oleh pakar industri yang masih aktif di lapangan.</p>
                </div>

                <div className="space-y-6 group">
                  <div className="h-12 w-12 rounded-full border border-teal-400/30 flex items-center justify-center group-hover:bg-teal-400 group-hover:text-black transition-all">
                    <Users className="h-6 w-6 text-teal-400 group-hover:text-inherit" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white uppercase tracking-tight">Bimbingan Pasca-Latihan</h4>
                  <p className="text-teal-100/40 font-light leading-relaxed">Rangkaian sokongan berterusan. Anda akan terus dibimbing bersama rakan industri walaupun selepas kelas tamat.</p>
                </div>

                <div className="space-y-6 group">
                  <div className="h-12 w-12 rounded-full border border-teal-400/30 flex items-center justify-center group-hover:bg-teal-400 group-hover:text-black transition-all">
                    <BookOpen className="h-6 w-6 text-teal-400 group-hover:text-inherit" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white uppercase tracking-tight">Kajian Kes Sebenar <span className="text-sm font-sans font-normal opacity-60 block mt-1">(Real Case Studies)</span></h4>
                  <p className="text-teal-100/40 font-light leading-relaxed">Belajar daripada kajian kes sebenar dan mahal nilainya, dikongsikan secara eksklusif oleh pakar industri.</p>
                </div>
              </div>
            </div>

            <div className="relative mt-16 lg:mt-0">
              {/* Fix Mobile GPU Blur Bug */}
              <div className="absolute -inset-4 sm:-inset-20 bg-brand/30 blur-[60px] sm:blur-[120px] rounded-full pointer-events-none" />

              <div className="relative bg-white/5 backdrop-blur-2xl rounded-none p-8 sm:p-16 border border-white/10 shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  <div className="text-[7rem] sm:text-[10rem] font-serif font-bold text-white leading-none mb-4">98<span className="text-3xl sm:text-4xl align-top mt-4 sm:mt-8 inline-block">%</span></div>
                  <p className="small-caps text-teal-400 mb-8 sm:mb-12">Jaminan Pengalaman dan Pengetahuan Baru Berimpak Tinggi</p>
                  <div className="h-px w-24 bg-teal-400/30 mb-12" />
                  <p className="text-2xl text-teal-100/80 font-serif italic leading-relaxed">
                    "Trusted. Proven. Clarity. Kami menyediakan anda untuk dunia industri yang sebenar dengan standard tertinggi."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet - Refined Editorial */}
      <section className="px-6 py-40 bg-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 -skew-x-12 translate-x-1/2" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 mb-12">
              <div className="h-px w-8 bg-brand" />
              <span className="small-caps text-brand">Proses Transformasi Kerjaya.</span>
              <div className="h-px w-8 bg-brand" />
            </div>
            <h2 className="text-5xl font-serif font-bold tracking-tight text-ink sm:text-8xl mb-12">
              Cara Untuk Mendaftar <span className="italic">Kelas Pilihan Anda:</span>
            </h2>
            <div className="mt-24 max-w-4xl mx-auto flex flex-col gap-16 text-left">
              {[
                {
                  num: "01",
                  title: "Semakan Kelas Pilihan & Jadual Waktu",
                  desc: "Buat semakan dan pilih kategori kelas serta tetapkan jadual waktu yang sesuai dengan kelapangan anda."
                },
                {
                  num: "02",
                  title: "Lengkapkan Butiran Pendaftaran",
                  desc: "Isi borang pendaftaran dengan maklumat diri yang tepat berserta bayaran."
                },
                {
                  num: "03",
                  title: "Proses Pengesahan Pendaftaran",
                  desc: "Maklumat butiran dan bayaran disemak sebelum didaftarkan di dalam sistem. Anda akan menerima e-mel pengesahan dan pautan grup WhatsApp."
                },
                {
                  num: "04",
                  title: "Anda Terima Pengesahan & Mula Belajar",
                  desc: "Selesai! Anda akan menerima e-mel pengesahan pendaftaran berserta maklumat penting seperti pautan grup WhatsApp, pautan kelas (jika kelas dalam talian), dan jadual rasmi untuk mula belajar."
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-row gap-4 sm:gap-14 items-start group">
                  <span className="text-5xl sm:text-[8rem] font-serif font-bold text-slate-100/50 leading-none sm:-mt-4 transition-colors duration-500 group-hover:text-brand/10 w-14 sm:w-32 shrink-0">
                    {step.num}
                  </span>
                  <div className="flex-1 max-w-lg pt-1 sm:pt-2">
                    <h4 className="text-xl sm:text-4xl font-serif font-bold text-ink mb-2 sm:mb-6 tracking-tight">{step.title}</h4>
                    <p className="text-base sm:text-xl text-slate-500 leading-relaxed font-light">{step.desc}</p>
                  </div>
                  <div className="hidden lg:block flex-1 pt-6">
                    <div className="w-full h-[1px] bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Refined Footer */}
      {/* WhatsApp Support Section */}
      <section className="px-6 py-20 bg-ink relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-8 tracking-tight">
              For Query or team support <span className="italic text-teal-400">through whatsapp:</span>
            </h4>
            
            <a 
              href="https://wa.me/60185708401" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 transition-transform hover:scale-110 active:scale-95 duration-300"
            >
              <div className="h-20 w-20 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(37,211,102,0.4)] group-hover:shadow-[0_0_60px_rgba(37,211,102,0.6)] transition-all">
                <svg className="h-10 w-10 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span className="text-teal-400 font-bold tracking-widest uppercase text-xs">Chat with Support</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-line px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="mb-6">
                <img
                  src="/Logo Green.png"
                  alt="WS ReguLab Solutions"
                  className="w-80 h-auto object-contain object-left"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:gap-12">
              <div className="space-y-6">
                <h5 className="small-caps text-ink">Hubungi Kami</h5>
                <div className="flex flex-col gap-4 text-sm text-slate-500 font-light">
                  <a href="https://www.kkmhalalconsultant.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors break-all sm:break-normal">www.kkmhalalconsultant.com</a>
                  <a href="tel:+60185708401" className="hover:text-brand transition-colors">+60 185708401</a>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="small-caps text-ink">Ikuti Kami</h5>
                <div className="flex gap-8 text-slate-300">
                  <a href="https://www.facebook.com/wsregulab/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.495 4.375-4.495 1.244 0 2.315.093 2.626.134v3.044h-1.802c-1.412 0-1.686.671-1.686 1.656v2.17h3.37l-.439 3.403h-2.931v8.74h6.183c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z" /></svg>
                  </a>
                  <a href="https://www.instagram.com/ws.regulab" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>
                  <a href="https://www.threads.com/@ws.regulab" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <span className="sr-only">Threads</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.735,7.575C12.895,7.215,10.605,7.395,9.085,8.195C8.015,8.765,7.025,9.665,6.585,10.635C6.105,11.755,6.015,13.295,6.465,14.525C6.915,15.755,8.025,16.895,9.195,17.475C10.455,18.115,12.005,18.185,13.435,17.755C14.715,17.375,15.825,16.295,16.515,15.015C17.155,13.825,17.305,12.015,16.895,10.665C16.485,9.335,15.425,8.175,14.635,7.185C14.005,6.395,13.125,5.655,12.185,5.195C10.665,4.455,8.515,4.325,6.865,4.725C5.105,5.165,3.615,6.525,2.695,8.085C1.845,9.525,1.215,11.135,1.065,12.835C0.915,14.485,1.265,16.475,2.025,17.965C2.885,19.645,4.465,21.055,6.175,21.825C7.945,22.615,10.035,22.845,11.965,22.665C13.675,22.505,15.355,21.905,16.815,21.025C18.235,20.175,19.525,18.915,20.405,17.445C21.365,15.845,21.905,13.685,21.845,11.835C21.785,9.915,20.895,8.105,19.725,6.685C18.575,5.325,17.065,4.245,15.445,3.525C13.625,2.715,11.335,2.445,9.355,2.795C7.305,3.155,5.335,4.215,3.955,5.695L5.435,7.175C6.465,6.115,7.915,5.335,9.415,5.085C10.875,4.835,12.565,5.035,13.915,5.635C15.115,6.175,16.235,6.975,17.085,7.985C17.955,9.025,18.595,10.365,18.645,11.785C18.695,13.155,18.295,14.745,17.585,15.935C16.925,17.035,15.965,17.965,14.905,18.595C13.805,19.245,12.555,19.685,11.295,19.805C9.865,19.935,8.285,19.725,6.975,19.115C5.685,18.515,4.505,17.465,3.875,16.215C3.315,15.095,3.065,13.615,3.175,12.385C3.295,11.125,3.765,9.925,4.405,8.855C5.085,7.695,6.185,6.675,7.495,6.345C8.715,6.045,10.305,6.155,11.395,6.695C12.115,7.065,12.795,7.605,13.255,8.225L14.735,7.575ZM11.195,15.825C9.895,15.545,9.225,14.305,9.155,13.065C9.095,11.835,9.665,10.605,10.835,10.155C11.665,9.845,12.755,9.965,13.435,10.495C14.165,11.055,14.535,11.965,14.495,12.875C14.455,13.785,13.875,14.695,13.115,15.195C12.565,15.555,11.875,15.955,11.195,15.825Z" /></svg>
                  </a>
                </div>
              </div>

              <div className="space-y-6 hidden sm:block">
                <h5 className="small-caps text-ink">Lokasi</h5>
                <p className="text-sm text-slate-500 font-light">Kuala Lumpur, Malaysia</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-8">
            <p className="small-caps opacity-50">
              &copy; {new Date().getFullYear()} WS Regulab Solutions.
            </p>
            <p className="small-caps opacity-50">
              Professional Regulatory & Formulation Training.
            </p>
          </div>
        </div>
      </footer>
      {/* Guest Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-brand p-8 text-white relative">
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <h3 className="text-3xl font-serif font-bold mb-2">Guest Details</h3>
                <p className="text-sm text-white/70">
                  {selectedCombo?.name || "Enrollment"} - {selectedCombo?.courses?.join(" + ") || selectedCombo?.title}
                </p>
              </div>

              {/* Modal Form */}
              <div className="p-8 space-y-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-paper border border-line p-5 rounded-2xl outline-none focus:border-brand transition-all text-lg font-light"
                    value={guestData.name}
                    onChange={(e) => setGuestData({ ...guestData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full bg-paper border border-line p-5 rounded-2xl outline-none focus:border-brand transition-all text-lg font-light"
                    value={guestData.email}
                    onChange={(e) => setGuestData({ ...guestData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+60 12 345 6789"
                    className="w-full bg-paper border border-line p-5 rounded-2xl outline-none focus:border-brand transition-all text-lg font-light"
                    value={guestData.phone}
                    onChange={(e) => setGuestData({ ...guestData, phone: e.target.value })}
                  />
                </div>

                <a
                  href={selectedCombo?.paymentLink || "#"}
                  target={selectedCombo?.paymentLink ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-full bg-brand py-6 text-white font-bold rounded-2xl shadow-xl shadow-brand/20 hover:bg-brand-dark transition-all flex items-center justify-center gap-4 text-lg mt-4"
                >
                  Proceed to Payment
                  <CreditCard className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
