"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // NEW: Ultra-clean, high-resolution tech assets
  const activities = [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070", // Clean Hardware/Server
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072", // Abstract Digital/AI Network
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070", // High-end Engineering Lab
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426"  // Clean Data/Web Interface
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % activities.length);
    }, 6000);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => clearInterval(timer);
  }, [activities.length]);

  return (
    <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-white`}>

      {/* 1. HERO SLIDER - Tesla-Standard Fade Architecture */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        {activities.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 z-0 transition-opacity duration-[1500ms] ease-in-out ${activeSlide === i ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
          >
            {/* Deep Vignette for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_30%,_rgba(0,0,0,0.7)_100%)] z-10"></div>
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <img
              src={img}
              className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
              alt="LogicTech Visuals"
            />
          </div>
        ))}

        {/* Text content remains fixed and crisp */}
        <div className="relative z-20 text-center px-6 pt-48 pb-20">
          <h4 className="reveal reveal-up text-[#dc2626] font-black uppercase tracking-[0.8em] text-[13px] mb-10">Global Standard Architecture</h4>
          <h1 className="reveal reveal-up delay-100 text-6xl md:text-[9rem] font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
            Build Your <br /> <span className="text-[#dc2626] italic">Future</span>
          </h1>
          <p className="reveal reveal-up delay-200 text-white/100 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light italic">
            "Simple, Smart, and Powerful." We handle the hard engineering so you can grow your brand.
          </p>
          <div className="reveal reveal-up delay-300 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/works" className="bg-[#dc2626] text-white px-14 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#0f172a] transition-all shadow-2xl hover:scale-105">
              Explore Projects
            </Link>
            <Link href="/contact" className="border-2 border-white/20 text-white px-14 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#0f172a] transition-all backdrop-blur-md">
              Start Building
            </Link>
          </div>
        </div>

        {/* Dash Indicators - Classic Premium Slider UI */}
        <div className="absolute bottom-10 z-30 flex gap-3">
          {activities.map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-500 rounded-full ${activeSlide === i ? 'w-12 bg-[#dc2626]' : 'w-6 bg-white/20'}`}
            ></div>
          ))}
        </div>
      </section>

      {/* 2. AI SOLUTIONS */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal reveal-left space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">
              Smart AI <br /> <span className="text-[#dc2626]">Automation</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed border-l-8 border-[#dc2626] pl-8">
              Stop doing boring work. We build smart computer tools that handle your daily tasks automatically.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-black text-[#dc2626] text-xl">10X</h4>
                <p className="text-[10px] uppercase font-bold text-gray-500">Faster Work</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-black text-[#dc2626] text-xl">24/7</h4>
                <p className="text-[10px] uppercase font-bold text-gray-500">Always Running</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-right rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="smartAIAutomation.webp" className="w-full h-full object-cover" alt="AI Tech" />
          </div>
        </div>
      </section>

      {/* 3. 3D BRANDING */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-20">
          <h4 className="reveal reveal-up text-[#dc2626] font-black uppercase tracking-[0.4em] text-xs mb-4">Creative Lab</h4>
          <h2 className="reveal reveal-up delay-100 text-5xl md:text-8xl font-black text-[#0f172a] uppercase tracking-tighter">Identity <span className="text-gray-400 italic">Redefined</span></h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "3D Graphics", img: "3D.avif" },
            { title: "Logo Design", img: "logodesign3.avif" },
            { title: "Game Assets", img: "gameasset.avif" }
          ].map((item, i) => (
            <div key={i} className="reveal reveal-up group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl" style={{ transitionDelay: `${i * 150}ms` }}>
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-80"></div>
              <h3 className="absolute bottom-10 left-10 text-white font-black text-2xl uppercase tracking-tighter">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREMIUM LAPTOP SHOP */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal reveal-left order-2 lg:order-1 rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026" className="w-full h-full object-cover" alt="Laptops" />
          </div>
          <div className="reveal reveal-right order-1 lg:order-2 space-y-8 text-right lg:text-left lg:pl-10">
            <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">
              High-Speed <br /> <span className="text-[#dc2626]">Hardware</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed italic">Tested by developers, trusted by engineers.</p>
            <Link href="/shop" className="inline-block bg-[#0f172a] text-white px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#dc2626] transition-all">
              Browse Laptop Shop →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. APP ENGINEERING */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal reveal-left space-y-10">
            <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">Mobile App & Websites <br /> <span className="text-[#dc2626]">Development</span></h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We build clean, fast, and secure websites & apps using modern technology.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Next.js', 'TypeScript', 'React Native', 'Node.js'].map((tech) => (
                <span key={tech} className="px-6 py-2 bg-white rounded-full text-[10px] font-bold text-[#0f172a] shadow-sm uppercase tracking-widest">{tech}</span>
              ))}
            </div>
          </div>
          <div className="reveal reveal-right relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070" className="w-full h-full object-cover" alt="App Development" />
          </div>
        </div>
      </section>

      {/* 6. BRAND STRATEGY */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="reveal reveal-up text-5xl md:text-8xl font-black text-[#0f172a] uppercase tracking-tighter mb-10">Brand <span className="text-gray-400 italic">Design</span></h2>
          <div className="reveal reveal-up delay-100 max-w-4xl rounded-[4rem] overflow-hidden shadow-2xl mb-16">
            <img src="growth4.jpg" className="w-full h-full object-cover" alt="Strategy" />
          </div>
          <p className="reveal reveal-up delay-200 text-2xl text-gray-600 font-light max-w-2xl italic leading-relaxed">
            "We build the digital future of your brand."
          </p>
        </div>
      </section>

      {/* 7. WHY LOGICTECH */}
      <section className="py-32 px-6 bg-[#0f172a] rounded-t-[5rem]">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="reveal reveal-up text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="reveal reveal-up delay-100 p-10 bg-white/5 rounded-[3rem] border border-white/10">
              <h4 className="text-[#dc2626] font-black text-2xl uppercase mb-4 italic">No Confusion</h4>
              <p className="text-white/100 text-lg font-light">Simple words and clear steps. No hidden technical jargon.</p>
            </div>
            <div className="reveal reveal-up delay-200 p-10 bg-white/5 rounded-[3rem] border border-white/10">
              <h4 className="text-[#dc2626] font-black text-2xl uppercase mb-4 italic">Total Power</h4>
              <p className="text-white/100 text-lg font-light">From first logo to biggest app, we use the best tech in the world.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-up { transform: translateY(60px); }
        .reveal-left { transform: translateX(-60px); }
        .reveal-right { transform: translateX(60px); }
        .reveal-visible { opacity: 1; transform: translate(0); }
      `}</style>
    </main>
  );
}