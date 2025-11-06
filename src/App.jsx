import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ornaments from './components/Ornaments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Ornaments />
      </main>
      <Footer />
    </div>
  );
}

export default App;
