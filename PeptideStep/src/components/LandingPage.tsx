import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Syringe,
  Droplet,
  Calculator,
  Activity,
  ThermometerSnowflake,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  XCircle,
  Check,
} from "lucide-react";

function DosingExample() {
  const [activeTab, setActiveTab] = useState<"retatrutide" | "ghk-cu">("retatrutide");

  return (
    <div className="space-y-4">
      <p className="text-gray-600 font-medium">
        Dosis Anda adalah seberapa banyak peptide yang dibutuhkan tubuh. Kuncinya adalah menarik jumlah cairan yang tepat untuk mencapai dosis tersebut.
      </p>
      <div className="bg-primary text-primary-foreground p-4 sm:p-5 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full blur-xl"></div>
        <p className="font-mono text-[10px] sm:text-sm opacity-80 mb-1 sm:mb-2 uppercase tracking-wide">Rumus Sederhana</p>
        <p className="text-base sm:text-xl md:text-2xl font-bold tracking-tight">
          Jumlah (mL) = Dosis Target ÷ Konsentrasi
        </p>
      </div>
      <div className="bg-white p-5 rounded-xl border border-slate-200 mt-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex gap-2 mb-4 bg-slate-100 p-1.5 rounded-lg border border-slate-200/60">
          <button 
            onClick={() => setActiveTab("retatrutide")}
            className={`flex-1 text-sm font-semibold py-2 px-3 rounded-md transition-all ${activeTab === "retatrutide" ? "bg-white text-blue-600 shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`}
          >
            Retatrutide
          </button>
          <button 
            onClick={() => setActiveTab("ghk-cu")}
            className={`flex-1 text-sm font-semibold py-2 px-3 rounded-md transition-all ${activeTab === "ghk-cu" ? "bg-white text-blue-600 shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`}
          >
            GHK-Cu
          </button>
        </div>
        
        {activeTab === "retatrutide" ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4">
              <div className="py-1 border-b border-slate-200 col-span-2 sm:col-span-1 border-b-transparent">Vial: <strong className="text-slate-900">30mg</strong></div>
              <div className="py-1 border-b border-slate-200 col-span-2 sm:col-span-1 border-b-transparent">Air BAC: <strong className="text-slate-900">3.0mL</strong> (10mg/mL)</div>
              <div className="py-1 col-span-2 text-xs bg-white p-2 rounded border border-slate-100 shadow-sm text-indigo-800">
                1mg = 0.1mL = <strong>10 Unit (pada jarum U-100)</strong>
              </div>
            </div>
            
            <p className="text-slate-800 text-sm font-bold mb-3">Panduan Dosis (Sekali Seminggu):</p>
            <div className="space-y-2.5">
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-blue-900 font-semibold text-sm">Minggu 1–2</p>
                  <p className="text-blue-700 text-xs">Target: 1mg</p>
                </div>
                <div className="bg-white px-3 py-1.5 rounded text-blue-800 font-bold border border-blue-100 text-sm shadow-sm">
                  0.1mL = 10 Unit
                </div>
              </div>
              <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-indigo-900 font-semibold text-sm">Minggu 3–4</p>
                  <p className="text-indigo-700 text-xs">Target: 2mg</p>
                </div>
                <div className="bg-white px-3 py-1.5 rounded text-indigo-800 font-bold border border-indigo-100 text-sm shadow-sm">
                  0.2mL = 20 Unit
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-100 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-purple-900 font-semibold text-sm">Minggu 5–16 <span className="opacity-70 font-normal">(Pemeliharaan)</span></p>
                  <p className="text-purple-700 text-xs">Target: 2mg</p>
                </div>
                <div className="bg-white px-3 py-1.5 rounded text-purple-800 font-bold border border-purple-100 text-sm shadow-sm">
                  0.2mL = 20 Unit
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
              *Catatan: Tidak perlu menaikkan dosis jika dosis yang lebih rendah sudah memberi hasil memuaskan. Anda dapat bertahan di dosis terendah yang nyaman.
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4">
              <div className="py-1 border-b border-slate-200 col-span-2 sm:col-span-1 border-b-transparent">Vial: <strong className="text-slate-900">50mg</strong></div>
              <div className="py-1 border-b border-slate-200 col-span-2 sm:col-span-1 border-b-transparent">Air BAC: <strong className="text-slate-900">3.0mL</strong> (~16.7mg/mL)</div>
              <div className="py-1 col-span-2 text-xs bg-white p-2 rounded border border-slate-100 shadow-sm text-blue-800">
                1mg ≈ 0.06mL = <strong>6 Unit</strong> <br className="sm:hidden" /><span className="hidden sm:inline"> | </span> 2mg ≈ 0.12mL = <strong>12 Unit (pada jarum U-100)</strong>
              </div>
            </div>
            
            <p className="text-slate-800 text-sm font-bold mb-3">Panduan Dosis (5 Hari Pakai / 2 Hari Libur):</p>
            <div className="space-y-2.5">
              <div className="bg-sky-50 border border-sky-100 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sky-900 font-semibold text-sm">Senin – Jumat</p>
                  <p className="text-sky-700 text-xs">Sekali sehari</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sky-800 font-bold mb-1 text-[10px] uppercase tracking-wider">Target: 2mg</span>
                  <div className="bg-white px-3 py-1.5 rounded text-sky-800 font-bold border border-sky-100 text-sm shadow-sm">
                    0.12mL = 12 Unit
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-slate-700 font-semibold text-sm">Sabtu – Minggu</p>
                </div>
                <div className="bg-white px-3 py-1 rounded text-slate-500 font-bold border border-slate-200 text-sm shadow-sm">
                  Libur
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
              *Catatan: Lanjutkan siklus selama 8–12 minggu, lalu diikuti dengan istirahat (libur penuh) selama 30 hari. Protokol ini mengurangi frekuensi injeksi sambil tetap mempertahankan dukungan regeneratif yang tinggi.
            </p>
          </div>
        )}
      </div>
      <div className="bg-amber-50 p-4 rounded-xl border border-amber-200/50 flex gap-3 text-amber-800 items-start shadow-sm mt-4">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" /> 
        <p className="text-sm leading-relaxed">Selalu periksa kembali perhitungan Anda sebelum menyuntik! Gunakan kalkulator online jika ragu, tetapi jangan gunakan untuk penelitian keamanan.</p>
      </div>
    </div>
  );
}

const steps = [
  {
    id: 1,
    title: "Reconstitution (Melarutkan)",
    icon: <Syringe className="w-6 h-6 text-indigo-500" />,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 font-medium">
          Peptide dikirim dalam bentuk bubuk agar tetap stabil. Sebelum digunakan, Anda perlu mencampurnya dengan Bacteriostatic Water (BAC water / Air Bakteriostatik).
        </p>
        <div className="bg-indigo-50 p-4 rounded-xl flex items-start gap-3 border border-indigo-100 shadow-sm">
          <Droplet className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
          <p className="text-sm text-indigo-900 leading-relaxed">
            <strong>Contoh:</strong> Suntikkan sejumlah BAC water pilihan Anda (biasanya 1mL / 100 unit / 1cc) ke dalam botol (vial) peptide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 shadow-sm">
            <h4 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5" /> Lakukan
            </h4>
            <ul className="text-sm text-green-900 space-y-2">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /> Gulingkan atau putar perlahan vial di tangan.</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /> Tunggu sampai larut sepenuhnya sebelum dipakai.</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100 shadow-sm">
            <h4 className="font-semibold text-red-800 flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5" /> Jangan
            </h4>
            <ul className="text-sm text-red-900 space-y-2">
              <li className="flex items-start gap-2"><span className="text-red-600 font-bold">•</span> JANGAN mengocok dengan keras.</li>
              <li className="flex items-start gap-2"><span className="text-red-600 font-bold">•</span> JANGAN mencampur (reconstitute) dua kali.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Concentration (Konsentrasi)",
    icon: <Droplet className="w-6 h-6 text-blue-500" />,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 font-medium">
          Konsentrasi adalah seberapa banyak peptide aktif di dalam cairan. Bayangkan seperti kopi:
        </p>
        <div className="flex flex-col gap-3 my-5">
          <div className="bg-white p-4 rounded-xl flex justify-between items-center border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-700 to-blue-900"></div>
            <span className="font-semibold text-slate-800 pl-4">Sedikit Air</span>
            <span className="text-slate-500 text-sm font-medium bg-slate-50 px-3 py-1 rounded-full">= Dosis lebih kuat per unit</span>
          </div>
          <div className="bg-white p-4 rounded-xl flex justify-between items-center border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
             <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-200 to-blue-400"></div>
            <span className="font-semibold text-slate-800 pl-4">Banyak Air</span>
            <span className="text-slate-500 text-sm font-medium bg-slate-50 px-3 py-1 rounded-full">= Encer per unit</span>
          </div>
        </div>
        <div className="bg-blue-50 p-4 sm:p-5 rounded-xl border border-blue-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
          <h4 className="font-semibold text-blue-900 mb-2 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">Contoh Perhitungan</h4>
          <p className="text-blue-800 leading-relaxed text-sm sm:text-base">
            10mg Peptide + 1mL BAC Water = <strong className="text-blue-900 bg-white/60 px-2 py-0.5 rounded inline-block mt-1 sm:inline sm:mt-0">10mg/mL Konsentrasi.</strong>
            <br className="my-2" />
            <span className="opacity-90">Artinya setiap 1mL cairan mengandung 10mg peptide.</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Dosing (Menentukan Dosis)",
    icon: <Calculator className="w-6 h-6 text-purple-500" />,
    content: <DosingExample />,
  },
  {
    id: 4,
    title: "Administration (Cara Suntik)",
    icon: <Activity className="w-6 h-6 text-rose-500" />,
    content: (
      <div className="space-y-4">
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-6 bg-white flex justify-center p-2">
          <img src="/subq.png" alt="Subcutaneous Injection" className="w-full max-w-sm h-auto object-contain mix-blend-multiply" />
        </div>
        <p className="text-gray-600 font-medium leading-relaxed">
          Peptide tidak terserap dengan baik jika ditelan. Mereka harus disuntikkan, biasanya ke jaringan lemak (Subkutan / SubQ) demi kenyamanan dan keamanan terbaik.
        </p>
        <h4 className="font-semibold text-slate-800 mt-8 mb-4">Area Suntik Terbaik (SubQ):</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border-2 border-slate-100/80 rounded-2xl p-5 text-center shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:border-blue-500 transition-colors cursor-default overflow-hidden flex flex-col">
            <div className="mb-3 -mx-5 -mt-5">
              <img src="/perut.png" alt="Suntik di Perut" className="w-full h-28 object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center mx-auto mb-3 -mt-8 relative z-10 border-4 border-white shadow-sm">
              <span className="text-rose-600 font-bold text-lg">1</span>
            </div>
            <span className="font-semibold text-slate-800 block mb-1">Perut</span>
            <span className="text-xs text-slate-500 leading-snug block">Cubit lemak di sekitar pusar</span>
          </div>
          <div className="bg-white border-2 border-slate-100/80 rounded-2xl p-5 text-center shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:border-blue-500 transition-colors cursor-default overflow-hidden flex flex-col">
            <div className="mb-3 -mx-5 -mt-5">
              <img src="/bokong.png" alt="Suntik di Bokong" className="w-full h-28 object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center mx-auto mb-3 -mt-8 relative z-10 border-4 border-white shadow-sm">
              <span className="text-rose-600 font-bold text-lg">2</span>
            </div>
            <span className="font-semibold text-slate-800 block mb-1">Bokong</span>
            <span className="text-xs text-slate-500 leading-snug block">Bagian atas luar</span>
          </div>
        </div>
        <div className="bg-cyan-50/50 p-5 rounded-2xl mt-6 border border-cyan-100 text-sm text-cyan-900 shadow-sm flex gap-3 items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"><Check className="w-4 h-4 text-cyan-600"/></div>
            <p>Suntikan SubQ menggunakan jarum insulin yang mungil. Sangat aman, ramah pemula, dan biasanya tidak sakit sama sekali!</p>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Storage (Penyimpanan)",
    icon: <ThermometerSnowflake className="w-6 h-6 text-cyan-500" />,
    content: (
      <div className="space-y-5">
        <p className="text-gray-600 font-medium">
          Menjaga peptide tetap segar sangat penting agar mereka tetap efektif.
        </p>
          <div className="bg-slate-50 rounded-2xl p-1 border border-slate-200/80 shadow-sm flex flex-col">
          <div className="p-4 sm:p-5">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100">
               <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300"></span> Sebelum Dicampur (Bubuk)
            </span>
            <p className="text-slate-800 font-medium text-sm sm:text-base">Simpan di tempat sejuk dan gelap atau di dalam kulkas.</p>
          </div>
          <div className="border-t border-slate-200/80 mx-4 sm:mx-5"></div>
          <div className="p-4 sm:p-5">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2 bg-cyan-50 px-2 py-1 rounded-md shadow-sm border border-cyan-100">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400"></span> Setelah Dicampur (Cairan)
            </span>
            <p className="text-slate-800 font-medium text-base sm:text-lg">Harus disimpan di kulkas (2–8°C).</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
               <div className="flex-1 bg-white p-3 rounded-xl border border-red-100 shadow-sm flex items-center gap-2 text-sm text-red-700 font-medium"><XCircle className="w-4 h-4"/> JANGAN dibekukan</div>
               <div className="flex-1 bg-white p-3 rounded-xl border border-red-100 shadow-sm flex items-center gap-2 text-sm text-red-700 font-medium"><XCircle className="w-4 h-4"/> Hindari panas & sinar matahari</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 border-l-4 border-blue-500 rounded-r-xl shadow-sm flex items-center justify-between">
          <span className="font-semibold text-slate-800">Masa Simpan:</span>
          <span className="bg-slate-100 px-3 py-1 rounded-full text-sm font-medium text-slate-600">4–6 minggu setelah dicampur</span>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Daftar Perlengkapan",
    icon: <CheckCircle2 className="w-6 h-6 text-cyan-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 font-medium text-lg">
          Pastikan Anda memiliki semua perlengkapan berikut sebelum memulai persiapan atau penyuntikan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {[
            { name: "Vial Peptide", desc: "Bubuk pilihan Anda" },
            { name: "BAC Water", desc: "Air Bakteriostatik untuk campuran" },
            { name: "Jarum Insulin", desc: "Biasanya U-100 (1mL/1cc)" },
            { name: "Kapas Alkohol", desc: "Untuk mengusap vial & kulit" },
          ].map((item, idx) => (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              key={idx} 
              className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:border-cyan-500 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-slate-800 block leading-tight">{item.name}</span>
                <span className="text-xs text-slate-500">{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4 items-center bg-blue-50/50 p-5 rounded-2xl">
           <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600"><AlertTriangle className="w-6 h-6"/></div>
           <p className="text-sm font-medium text-blue-900 leading-relaxed">
             <strong>Utamakan Kebersihan:</strong> Selalu cuci tangan, usap tutup vial dengan alkohol sebelum menarik, dan gunakan jarum steril yang baru setiap kali.
           </p>
        </div>
      </div>
    ),
  }
];

export default function LandingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
    document.getElementById("guide-section")?.scrollIntoView({ behavior: 'smooth' });
  };
  const nextStep = () => {
    setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1));
    document.getElementById("guide-section")?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans pb-24 text-slate-800 selection:bg-accent/20">
      {/* Hero Section */}
      <header className="bg-primary text-primary-foreground min-h-[100svh] flex flex-col justify-center py-12 sm:py-20 px-4 sm:px-6 text-center shadow-xl relative overflow-hidden rounded-b-[2.5rem] mb-10 sm:mb-12">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400 opacity-20 rounded-full blur-[60px] sm:blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-600 opacity-20 rounded-full blur-[40px] sm:blur-[60px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/95 backdrop-blur-sm mb-6 sm:mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 rounded-3xl overflow-hidden w-24 h-24 md:w-36 md:h-36 flex items-center justify-center">
              <img src="/logo.png" alt="Synapse Labs" className="w-full h-full object-cover scale-[1.35] translate-y-1" />
            </div>
            
            <span className="inline-block py-1 sm:py-1.5 px-3 sm:px-4 rounded-full bg-white/10 text-white font-medium text-[10px] sm:text-xs mb-6 sm:mb-8 border border-white/20 backdrop-blur-md shadow-sm uppercase tracking-widest">
              Hanya untuk Tujuan Edukasi
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-[1.2] sm:leading-[1.1]">
              Panduan Pemula <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Penggunaan Peptide</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Instruksi langkah demi langkah yang ringkas untuk membantu Anda memahami persiapan, dosis, dan penggunaan yang aman tanpa istilah sains yang rumit.
            </p>
            <button 
              onClick={() => document.getElementById("guide-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3.5 sm:py-4 px-8 sm:px-10 text-base sm:text-lg rounded-full shadow-[0_8px_30px_rgba(2,132,199,0.4)] hover:shadow-[0_8px_40px_rgba(2,132,199,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 mx-auto w-full sm:w-auto justify-center max-w-xs"
            >
              Mulai Panduan <ChevronRight className="w-5 h-5"/>
            </button>
          </motion.div>
        </div>
      </header>

      {/* Main Guide Section */}
      <main id="guide-section" className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
        
        {/* Progress Tracker */}
        <div className="mb-10 sticky top-4 z-40 bg-background/80 backdrop-blur-xl pt-4 pb-6 border-b border-slate-200 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] mx-[-1rem] px-[1rem] sm:mx-0 sm:px-0 sm:bg-transparent sm:backdrop-blur-none sm:shadow-none sm:border-none sm:top-0">
          <div className="flex justify-between items-end mb-3 px-1">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Langkah {currentStep + 1} dari {steps.length}
            </span>
            <span className="text-xs font-bold text-white bg-blue-500 px-3 py-1 rounded-full shadow-sm border border-blue-400/50">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Selesai
            </span>
          </div>
          <div className="h-2.5 bg-slate-200/70 rounded-full overflow-hidden flex shadow-inner relative">
            {steps.map((_, idx) => (
               <div 
                 key={idx} 
                 className={`h-full flex-1 border-r border-background/40 transition-all duration-500 ease-out z-10 ${
                   idx <= currentStep ? "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(2,132,199,0.5)]" : "bg-transparent"
                 }`}
               />
             ))}
          </div>
        </div>

        {/* Step Content Card */}
        <div className="bg-white rounded-3xl sm:rounded-[2rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] border border-slate-100/50 overflow-hidden relative min-h-[400px] sm:min-h-[450px]">
          {/* Card header decorative background */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-slate-50 border-b border-slate-100 pointer-events-none"></div>
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 sm:p-10 pt-6 sm:pt-12"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6 sm:mb-8 text-center sm:text-left">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mx-auto sm:mx-0 bg-white flex items-center justify-center text-primary shadow-lg border border-slate-100 flex-shrink-0 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 scale-[0.85] sm:scale-100">{steps[currentStep].icon}</div>
                  </div>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                     <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-1 block">Langkah {steps[currentStep].id}</span>
                     <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                       {steps[currentStep].title}
                     </h2>
                  </div>
                </div>
                
                <div className="text-slate-700 text-base sm:text-lg">
                  {steps[currentStep].content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center mt-8 sm:mt-10 gap-3 sm:gap-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex-1 flex justify-center items-center gap-2 py-3.5 sm:py-4 px-6 rounded-2xl font-bold uppercase tracking-wide text-xs sm:text-sm transition-all duration-300 w-full ${
              currentStep === 0
                ? "bg-slate-50 text-slate-300 cursor-not-allowed border border-slate-100"
                : "bg-white border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-sm hover:shadow"
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 -ml-1" />
            Sebelumnya
          </button>
          
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`flex-1 flex justify-center items-center gap-2 py-3.5 sm:py-4 px-6 rounded-2xl font-bold uppercase tracking-wide text-xs sm:text-sm transition-all duration-300 shadow-lg w-full ${
              currentStep === steps.length - 1
                ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none border border-slate-200"
                : "bg-primary text-white hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5"
            }`}
          >
            Selanjutnya
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 -mr-1" />
          </button>
        </div>
        
        {/* Completion State */}
        <AnimatePresence>
          {currentStep === steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-100 border border-blue-200/50 p-8 sm:p-10 rounded-[2rem] text-center shadow-xl shadow-blue-900/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 blur-3xl rounded-full"></div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-cyan-100">
                  <CheckCircle2 className="w-10 h-10 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-extrabold text-blue-950 mb-3 tracking-tight">Semua Sudah Siap!</h3>
                <p className="text-blue-800 text-base font-medium max-w-md mx-auto leading-relaxed">
                  Anda telah menyelesaikan panduan pemula ini. Selalu utamakan keselamatan, kebersihan, dan penyimpanan yang tepat. Semoga berhasil!
                </p>
                <button onClick={() => { setCurrentStep(0); document.getElementById("guide-section")?.scrollIntoView({ behavior: 'smooth' }); }} className="mt-8 bg-white/60 hover:bg-white text-blue-800 font-bold py-2 px-6 rounded-full text-sm transition-all border border-blue-200 shadow-sm">
                   Ulangi Panduan
                </button>
              </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
