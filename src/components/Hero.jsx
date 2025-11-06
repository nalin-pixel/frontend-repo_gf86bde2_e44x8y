import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FsE0w7v6xyF3k7QO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
          X DKV 1
        </h1>
        <p className="mt-4 text-slate-300 text-lg">
          Website resmi kelas dengan nuansa desain kreatif, menampilkan identitas, karya, dan ornamen khas X DKV 1.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#ornamen" className="px-5 py-2.5 rounded-lg bg-amber-400/90 text-slate-900 font-semibold hover:bg-amber-300 transition">Lihat Ornamen</a>
          <a href="#about" className="px-5 py-2.5 rounded-lg border border-white/20 hover:border-white/40 text-white">Tentang Kelas</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950"></div>
    </section>
  );
};

export default Hero;
