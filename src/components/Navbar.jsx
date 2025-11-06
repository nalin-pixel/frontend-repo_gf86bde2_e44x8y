import React from 'react';
import { Home, Users, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>X DKV 1</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a href="#home" className="hover:text-white inline-flex items-center gap-2"><Home className="w-4 h-4"/>Beranda</a>
          <a href="#ornamen" className="hover:text-white inline-flex items-center gap-2"><Users className="w-4 h-4"/>Ornamen</a>
          <a href="#about" className="hover:text-white">Tentang</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
