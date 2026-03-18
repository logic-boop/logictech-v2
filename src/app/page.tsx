"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const activities = [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426"
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

      {/* 1. HERO SLIDER - Adjusted Padding for the New Large Header */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        {activities.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 z-0 transition-opacity duration-[1500ms] ease-in-out ${activeSlide === i ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_30%,_rgba(0,0,0,0.8)_100%)] z-10"></div>
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <img
              src={img}
              className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
              alt="LogicTech Visuals"
            />
          </div>
        ))}

        {/* Hero Content - pt-32 on mobile to clear the larger Logo/Header */}
        <div className="relative z-20 text-center px-6 pt-40 md:pt-48 pb-20">
          <h4 className="reveal reveal-up text-[#dc2626] font-black uppercase tracking-[0.6em] md:tracking-[0.8em] text-[10px] md:text-[13px] mb-6 md:mb-10">
            Global Standard Architecture
          </h4>
          <h1 className="reveal reveal-up delay-100 text-5xl md:text-[9rem] font-black text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">
            Build Your <br /> <span className="text-[#dc2626] italic">Future</span>
          </h1>
          <p className="reveal reveal-up delay-200 text-white text-base md:text-2xl max-w-3xl mx-auto mb-12 md:mb-16 font-light italic">
            "Simple, Smart, and Powerful." We handle the hard engineering so you can grow your brand.
          </p>
          <div className="reveal reveal-up delay-300 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link href="/works" className="bg-[#dc2626] text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-[#0f172a] transition-all shadow-2xl hover:scale-105">
              Explore Projects
            </Link>
            <Link href="/contact" className="border-2 border-white/20 text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-[#0f172a] transition-all backdrop-blur-md">
              Start Building
            </Link>
          </div>
        </div>

        {/* Dash Indicators */}
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
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal reveal-left space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">
              Smart AI <br /> <span className="text-[#dc2626]">Automation</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed border-l-4 md:border-l-8 border-[#dc2626] pl-6 md:pl-8">
              Stop doing boring work. We build smart computer tools that handle your daily tasks automatically.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-black text-[#dc2626] text-xl md:text-2xl">10X</h4>
                <p className="text-[10px] uppercase font-bold text-gray-400">Faster Work</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-black text-[#dc2626] text-xl md:text-2xl">24/7</h4>
                <p className="text-[10px] uppercase font-bold text-gray-400">Always Running</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-right rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="smartAIAutomation.webp" className="w-full h-auto object-cover" alt="AI Tech" />
          </div>
        </div>
      </section>

      {/* 3. 3D BRANDING - Optimized Grid for Mobile */}
      <section className="py-24 md:py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16 md:mb-20">
          <h4 className="reveal reveal-up text-[#dc2626] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Creative Lab</h4>
          <h2 className="reveal reveal-up delay-100 text-5xl md:text-8xl font-black text-[#0f172a] uppercase tracking-tighter">Identity <span className="text-gray-400 italic">Redefined</span></h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            { title: "3D Graphics", img: "3D.avif" },
            { title: "Logo Design", img: "logodesign3.avif" },
            { title: "Game Assets", img: "gameasset.avif" }
          ].map((item, i) => (
            <div key={i} className="reveal reveal-up group relative aspect-[4/5] md:aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl" style={{ transitionDelay: `${i * 150}ms` }}>
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90"></div>
              <h3 className="absolute bottom-8 left-8 md:bottom-10 md:left-10 text-white font-black text-2xl uppercase tracking-tighter">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREMIUM LAPTOP SHOP */}
      <section className="py-24 md:py-32 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal reveal-left order-2 lg:order-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026" className="w-full h-full object-cover" alt="Laptops" />
          </div>
          <div className="reveal reveal-right order-1 lg:order-2 space-y-6 md:space-y-8 text-left lg:pl-10">
            <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">
              High-Speed <br /> <span className="text-[#dc2626]">Hardware</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed italic">Tested by developers, trusted by engineers.</p>
            <Link href="/shop" className="inline-block bg-[#0f172a] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#dc2626] transition-all">
              Browse Laptop Shop →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. APP ENGINEERING */}
      <section className="py-24 md:py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="reveal reveal-left space-y-8 md:space-y-10">
            <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">Mobile App & Web <br /> <span className="text-[#dc2626]">Engineering</span></h2>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              We build clean, fast, and secure websites & apps using modern technology stack.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map((tech) => (
                <span key={tech} className="px-5 py-2 bg-white rounded-full text-[9px] font-bold text-[#0f172a] shadow-sm border border-gray-100 uppercase tracking-widest">{tech}</span>
              ))}
            </div>
          </div>
          <div className="reveal reveal-right relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070" className="w-full h-full object-cover" alt="App Development" />
          </div>
        </div>
      </section>

      {/* 6. BRAND STRATEGY */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="reveal reveal-up text-5xl md:text-8xl font-black text-[#0f172a] uppercase tracking-tighter mb-8 md:mb-12">Growth <span className="text-gray-300 italic">Strategy</span></h2>
          <div className="reveal reveal-up delay-100 max-w-5xl rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl mb-12 md:mb-16">
            <img src="growth4.jpg" className="w-full h-full object-cover" alt="Strategy" />
          </div>
          <p className="reveal reveal-up delay-200 text-xl md:text-3xl text-gray-700 font-light max-w-3xl italic leading-relaxed">
            "We build the digital future of your brand."
          </p>
        </div>
      </section>

      {/* 7. WHY LOGICTECH - Tesla Style Dark Section */}
      <section className="py-24 md:py-32 px-6 bg-[#050505] rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-5xl mx-auto text-center space-y-12 md:space-y-16">
          <h2 className="reveal reveal-up text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">Why LogicTech?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            <div className="reveal reveal-up delay-100 p-8 md:p-12 bg-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/10 hover:border-[#dc2626]/50 transition-colors group">
              <h4 className="text-[#dc2626] font-black text-2xl uppercase mb-4 italic group-hover:translate-x-2 transition-transform">No Confusion</h4>
              <p className="text-white/70 text-lg font-light leading-relaxed">Simple words and clear steps. We strip away the hidden technical jargon so you stay in control.</p>
            </div>
            <div className="reveal reveal-up delay-200 p-8 md:p-12 bg-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/10 hover:border-[#dc2626]/50 transition-colors group">
              <h4 className="text-[#dc2626] font-black text-2xl uppercase mb-4 italic group-hover:translate-x-2 transition-transform">Total Power</h4>
              <p className="text-white/70 text-lg font-light leading-relaxed">From the first logo to a global-scale application, we utilize the most advanced tech stack available.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-up { transform: translateY(40px); }
        .reveal-left { transform: translateX(-40px); }
        .reveal-right { transform: translateX(40px); }
        .reveal-visible { opacity: 1; transform: translate(0); }
      `}</style>
    </main>
  );
}