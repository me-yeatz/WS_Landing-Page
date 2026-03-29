/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  CheckCircle2, 
  FlaskConical, 
  Globe, 
  GraduationCap, 
  ShieldCheck, 
  Sparkles,
  AlertCircle,
  Users,
  Award,
  Clock,
  Send,
  Quote
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
    image: "/Health Suppliment.png"
  },
  {
    title: "Global Halal\nCompliance",
    benefit: "Unlock the massive global Halal market by mastering the true meaning of compliance.",
    icon: Globe,
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image: "/Halal & Haram.png"
  },
  {
    title: "Profitable Product Formulation",
    benefit: "Turn your lab ideas into profitable, best-selling products that consumers actually love.",
    icon: FlaskConical,
    color: "bg-cyan-50 text-cyan-700 border-cyan-100",
    image: "/Formulating For Sucess.png"
  },
  {
    title: "Sustainable\nInnovation",
    benefit: "Lead the industry with high-performance waterless products that define the future of beauty.",
    icon: Sparkles,
    color: "bg-sky-50 text-sky-700 border-sky-100",
    image: "/Art of Waterless.png"
  },
  {
    title: "Regulatory Affairs for Cosmetics",
    benefit: "Simplify complex cosmetic notifications and ensure your brand stays 100% compliant and safe.",
    icon: BookOpen,
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    image: "/Cosmetics.png"
  },
  {
    title: "Halal Certification\nRoadmap",
    benefit: "Navigate the entire Halal certification journey with ease, from initial concept to the retail shelf.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-700 border-blue-100",
    image: "/Decoding Halal.png"
  }
];

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
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
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1 block">Registration Fees</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-400 line-through">RM 65.00</span>
                    <span className="text-xl font-bold text-brand">RM 50.00</span>
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

      {/* Form Section - Minimalist Luxury */}
      <section id="form" className="px-6 py-40 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <p className="small-caps text-brand mb-6">Mula Sekarang</p>
              <h3 className="text-4xl sm:text-6xl font-serif font-bold text-ink mb-10 leading-tight">
                Daftar Sekarang. <span className="italic text-brand block mt-2">Slot Sangat Terhad!</span>
                <span className="block mt-6 text-2xl sm:text-3xl font-sans font-normal text-slate-500">
                  Mulakan Perjalanan Pembelajaran Profesional Anda Hari Ini.
                </span>
              </h3>
              <p className="text-xl text-slate-500 font-light leading-relaxed max-w-md">
                Pakar kami akan menghubungi anda dalam masa 24 jam untuk sesi konsultasi peribadi yang mendalam.
              </p>
              
              <div className="mt-16 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="h-12 w-12 rounded-full bg-brand-light flex items-center justify-center text-brand">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Konsultasi Percuma</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="h-12 w-12 rounded-full bg-brand-light flex items-center justify-center text-brand">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Pelan Kerjaya Peribadi</span>
                </div>
              </div>
            </div>

            <div className="bg-paper p-12 md:p-16 border border-line shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                <Send className="h-64 w-64" />
              </div>
              
              <div className="relative z-10">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h4 className="text-3xl font-serif font-bold text-ink">Permohonan Diterima</h4>
                    <p className="mt-6 text-slate-500 font-light leading-relaxed">Terima kasih kerana memilih WS ReguLab. Sila semak emel anda untuk langkah seterusnya.</p>
                    <button 
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", interest: "" }); }}
                      className="mt-12 small-caps text-brand hover:underline"
                    >
                      Hantar borang lain
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid gap-10 sm:grid-cols-2">
                      <div className="space-y-3">
                        <label htmlFor="name" className="small-caps ml-1">Nama Penuh</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full border-b border-line bg-transparent px-1 py-4 text-ink focus:border-brand transition-all outline-none font-light text-lg"
                          placeholder="Ahmad Bin Ali"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="small-caps ml-1">Alamat Emel</label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full border-b border-line bg-transparent px-1 py-4 text-ink focus:border-brand transition-all outline-none font-light text-lg"
                          placeholder="ahmad@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="phone" className="small-caps ml-1">Nombor Telefon</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full border-b border-line bg-transparent px-1 py-4 text-ink focus:border-brand transition-all outline-none font-light text-lg"
                        placeholder="012-3456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="interest" className="small-caps ml-1">Bidang Minat</label>
                      <select
                        id="interest"
                        required
                        className="w-full border-b border-line bg-transparent px-1 py-4 text-ink focus:border-brand transition-all outline-none appearance-none font-light text-lg cursor-pointer"
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      >
                        <option value="">Sila Pilih...</option>
                        <option value="regulatory">Regulatory Affairs</option>
                        <option value="halal">Halal Compliance</option>
                        <option value="formulation">Product Formulation</option>
                        <option value="internship">Latihan Industri</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand py-8 text-lg font-bold text-white shadow-2xl shadow-brand/20 hover:bg-brand-dark transition-all flex items-center justify-center gap-4 group"
                    >
                      Hantar Permohonan
                      <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">
                      Privasi Anda Adalah Keutamaan Kami
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refined Footer */}
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
              <p className="text-lg text-slate-400 leading-relaxed font-light max-w-sm">
                Penyedia latihan profesional terkemuka dalam bidang Regulatory Affairs dan Sains Formulasi. Trusted. Proven. Clarity.
              </p>
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
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.495 4.375-4.495 1.244 0 2.315.093 2.626.134v3.044h-1.802c-1.412 0-1.686.671-1.686 1.656v2.17h3.37l-.439 3.403h-2.931v8.74h6.183c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/ws.regulab" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://www.threads.com/@ws.regulab" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <span className="sr-only">Threads</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.735,7.575C12.895,7.215,10.605,7.395,9.085,8.195C8.015,8.765,7.025,9.665,6.585,10.635C6.105,11.755,6.015,13.295,6.465,14.525C6.915,15.755,8.025,16.895,9.195,17.475C10.455,18.115,12.005,18.185,13.435,17.755C14.715,17.375,15.825,16.295,16.515,15.015C17.155,13.825,17.305,12.015,16.895,10.665C16.485,9.335,15.425,8.175,14.635,7.185C14.005,6.395,13.125,5.655,12.185,5.195C10.665,4.455,8.515,4.325,6.865,4.725C5.105,5.165,3.615,6.525,2.695,8.085C1.845,9.525,1.215,11.135,1.065,12.835C0.915,14.485,1.265,16.475,2.025,17.965C2.885,19.645,4.465,21.055,6.175,21.825C7.945,22.615,10.035,22.845,11.965,22.665C13.675,22.505,15.355,21.905,16.815,21.025C18.235,20.175,19.525,18.915,20.405,17.445C21.365,15.845,21.905,13.685,21.845,11.835C21.785,9.915,20.895,8.105,19.725,6.685C18.575,5.325,17.065,4.245,15.445,3.525C13.625,2.715,11.335,2.445,9.355,2.795C7.305,3.155,5.335,4.215,3.955,5.695L5.435,7.175C6.465,6.115,7.915,5.335,9.415,5.085C10.875,4.835,12.565,5.035,13.915,5.635C15.115,6.175,16.235,6.975,17.085,7.985C17.955,9.025,18.595,10.365,18.645,11.785C18.695,13.155,18.295,14.745,17.585,15.935C16.925,17.035,15.965,17.965,14.905,18.595C13.805,19.245,12.555,19.685,11.295,19.805C9.865,19.935,8.285,19.725,6.975,19.115C5.685,18.515,4.505,17.465,3.875,16.215C3.315,15.095,3.065,13.615,3.175,12.385C3.295,11.125,3.765,9.925,4.405,8.855C5.085,7.695,6.185,6.675,7.495,6.345C8.715,6.045,10.305,6.155,11.395,6.695C12.115,7.065,12.795,7.605,13.255,8.225L14.735,7.575ZM11.195,15.825C9.895,15.545,9.225,14.305,9.155,13.065C9.095,11.835,9.665,10.605,10.835,10.155C11.665,9.845,12.755,9.965,13.435,10.495C14.165,11.055,14.535,11.965,14.495,12.875C14.455,13.785,13.875,14.695,13.115,15.195C12.565,15.555,11.875,15.955,11.195,15.825Z"/></svg>
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
    </div>
  );
}
