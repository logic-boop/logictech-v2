"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    const serviceList = [
        {
            title: "Web & Mobile Apps",
            desc: "We build fast, clean, and secure software. From simple websites to complex mobile apps, we handle the code so you can handle the business.",
            features: ["Next.js & React Native", "Cloud Hosting", "Database Setup", "Fast Performance"],
            img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974"
        },
        {
            title: "AI Automation",
            desc: "We build smart tools that think for you. We automate your boring, repetitive tasks using AI so you can save hours of work every single day.",
            features: ["Smart Workflow Triggers", "Neural Core Logic", "Auto-Responding Systems", "Data Processing"],
            img: "ai-automation.avif"
        },
        {
            title: "3D & Brand Design",
            desc: "We create identities that people remember. High-end 3D logos, social media graphics, and full brand books that make you look like a pro.",
            features: ["3D Logo Design", "Visual Architecture", "Social Media Kits", "Brand Strategy"],
            img: "3Danimation.avif"
        }
    ];

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505]`}>

            {/* 1. HERO - Adjusted pt-72 for large Header Clearance */}
            <section className="relative pt-72 pb-32 px-6 overflow-hidden border-b border-white/5">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-8 reveal reveal-up">
                        <div className="w-12 h-[1px] bg-[#dc2626]"></div>
                        <h4 className="text-[#dc2626] font-black uppercase tracking-[0.5em] text-[10px]">Technical Capabilities</h4>
                    </div>
                    <h1 className="reveal reveal-up delay-100 text-6xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-12">
                        Our <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Services</span>
                    </h1>
                </div>
                {/* Abstract Background Grid */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </section>

            {/* 2. SERVICES - ALTERNATING OFFSET CARDS */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto space-y-48 md:space-y-64">
                    {serviceList.map((service, i) => (
                        <div
                            key={i}
                            className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 md:gap-20 items-start reveal reveal-up`}
                        >
                            {/* Visual Side */}
                            <div className="relative flex-1 group w-full">
                                <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-[8rem] md:text-[12rem] font-black text-white/5 leading-none z-0 select-none">0{i + 1}</div>
                                <div className="relative z-10 rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>
                                {/* Technical Accent */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 border-r-2 border-b-2 border-[#dc2626] rounded-br-2xl md:rounded-br-[2.5rem]"></div>
                            </div>

                            {/* Info Side */}
                            <div className="flex-1 space-y-8 md:space-y-10 pt-6 md:pt-12">
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight">
                                        {service.title}
                                    </h2>
                                    <div className="h-1.5 w-16 md:w-20 bg-[#dc2626]"></div>
                                </div>

                                <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed max-w-xl italic">
                                    {service.desc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    {service.features.map((f, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-white/80 group">
                                            <div className="w-1.5 h-1.5 bg-[#dc2626] rotate-45 group-hover:scale-150 group-hover:rotate-90 transition-all duration-300"></div>
                                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. THE "PROCESS" - WHITE CONTRAST SECTION */}
            <section className="py-24 md:py-40 px-6 bg-white rounded-t-[3rem] md:rounded-t-[5rem] text-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/5 pb-12 gap-6">
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Workflow</h2>
                        <p className="text-left md:text-right text-[10px] font-black uppercase tracking-[0.4em] text-black/30">Efficiency <br className="hidden md:block" /> Protocol</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 border border-black/5 divide-y md:divide-y-0 md:divide-x divide-black/5 overflow-hidden rounded-[2rem]">
                        {[
                            { t: "1. Strategy", d: "Deep dive into your business metrics and growth targets." },
                            { t: "2. Build", d: "High-velocity development using the LogicTech stack." },
                            { t: "3. Launch", d: "Deployment and continuous optimization for performance." }
                        ].map((step, i) => (
                            <div key={i} className="reveal reveal-up p-10 md:p-12 hover:bg-gray-50 transition-colors group">
                                <h4 className="text-[#dc2626] font-black text-3xl md:text-4xl mb-6 tracking-tighter group-hover:-translate-y-1 transition-transform">{step.t}</h4>
                                <p className="text-gray-600 font-bold leading-relaxed italic pr-4 md:pr-8 border-l-2 border-black/5 pl-6">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FINAL CTA */}
            <section className="py-32 md:py-64 px-6 text-center">
                <div className="reveal reveal-up max-w-4xl mx-auto space-y-12 md:space-y-16">
                    <h2 className="text-6xl md:text-[12rem] font-black text-white uppercase tracking-tighter leading-none">
                        Execute <br /> <span className="text-[#dc2626]">Now</span>
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-black px-12 md:px-20 py-6 md:py-8 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#dc2626] hover:text-white transition-all shadow-3xl hover:scale-105"
                    >
                        Request our services
                    </Link>
                </div>
            </section>

            <style jsx>{`
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                .reveal-up { transform: translateY(40px); }
            `}</style>
        </main>
    );
}