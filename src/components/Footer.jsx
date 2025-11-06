import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} X DKV 1. Semua hak cipta.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-white">Beranda</a>
          <a href="#ornamen" className="hover:text-white">Ornamen</a>
          <a href="#about" className="hover:text-white">Tentang</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
