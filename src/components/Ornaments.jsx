import React from 'react';
import { Palette, Sparkles, PenTool, Shapes, Brush } from 'lucide-react';

const ornaments = [
  {
    title: 'Palet Warna Kelas',
    icon: Palette,
    desc: 'Skema warna khas X DKV 1: Amber, Slate, dan Emerald untuk nuansa hangat dan modern.'
  },
  {
    title: 'Motif Garis & Grid',
    icon: Shapes,
    desc: 'Pola garis dan grid halus sebagai dasar komposisi yang rapi dan terstruktur.'
  },
  {
    title: 'Brush Strokes',
    icon: Brush,
    desc: 'Sapuan kuas organik yang menghadirkan energi dan ekspresi visual.'
  },
  {
    title: 'Ikon Kreatif',
    icon: PenTool,
    desc: 'Ikon-ikon sederhana bergaya outline yang mewakili alat desain grafis.'
  }
];

const Ornaments = () => {
  return (
    <section id="ornamen" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_60%)]"/>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Ornamen Khas X DKV 1</h2>
          <p className="text-slate-300 mt-2">Elemen visual yang memperkuat identitas kelas.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ornaments.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl p-5 border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
                <Icon className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="text-slate-300 text-sm mt-1">{desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-amber-300 to-amber-500 transition-all"/>
            </div>
          ))}
        </div>

        <div id="about" className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold">Tentang Kelas</h3>
            <p className="text-slate-300 mt-2">
              X DKV 1 adalah ruang belajar kreatif yang menumbuhkan keterampilan visual, kolaborasi,
              dan apresiasi desain. Kami percaya pada eksplorasi, eksperimen, dan eksekusi yang rapi.
            </p>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Solidaritas dan kerja tim yang kuat</li>
              <li>Project-based learning dan showcase karya</li>
              <li>Identitas visual konsisten di setiap medium</li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[conic-gradient(at_50%_50%,rgba(16,185,129,0.2),transparent_40%,rgba(251,191,36,0.15))]" />
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop"
              alt="Studio Desain"
              className="relative z-10 w-full h-64 object-cover mix-blend-overlay"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ornaments;
