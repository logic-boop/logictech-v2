"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function WorksPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        setIsLoaded(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, [filter]);

    const projects = [
        {
            title: "Eloi Gospel",
            cat: "web",
            link: "https://eloigospel.org",
            img: "eloi.webp",
            desc: "A full-scale web platform designed for community and spiritual fitness."
        },
        {
            title: "7-Figure Axis",
            cat: "web",
            link: "https://7-figure-axis.vercel.app/",
            img: "7figureaxis.webp",
            desc: "A financial dashboard for tracking growth and money metrics."
        },
        {
            title: "Neural Core",
            cat: "apps",
            link: "https://neural-core-engine.vercel.app/",
            img: "neuralcore.webp",
            desc: "The underlying 'brain' logic for high-performance AI tools."
        },
        {
            title: "Neuralis AI",
            cat: "ai",
            link: "https://neuralis-systems.vercel.app/",
            img: "neuralis.png",
            desc: "A smart automation engine built to handle complex business tasks."
        },
        {
            title: "Aetheris Systems",
            cat: "ai",
            link: "https://aetheris-systems.vercel.app/",
            img: "graphics.avif",
            desc: "Secure technical architecture for integrated digital ecosystems."
        }
    ];

    const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);

    // BRAND ASSET ARRAY - ALL IMAGES
    const brandAssets = [
        { file: "brand1.png" },
        { file: "brand2.png" },
        { file: "brand3.png" },
        { file: "brand4.png" },
        { file: "brand5.jpeg" },
        { file: "brand6.png" },
        { file: "brand7.png" },
        { file: "brand8.png" }
    ];

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505]`}>

            {/* 1. HERO - INDUSTRIAL BLUEPRINT STYLE */}
            <section className="relative pt-64 pb-32 px-6 overflow-hidden border-b border-white/5">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-8 reveal reveal-up">
                        <div className="w-12 h-[1px] bg-[#dc2626]"></div>
                        <h4 className="text-[#dc2626] font-black uppercase tracking-[0.5em] text-[10px]">Project Ledger</h4>
                    </div>
                    <h1 className="reveal reveal-up delay-100 text-7xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
                        Our <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Projects</span>
                    </h1>

                    {/* SIMPLE FILTERS */}
                    <div className="reveal reveal-up delay-200 flex flex-wrap gap-4 mt-12">
                        {['all', 'apps', 'web', 'ai'].map(c => (
                            <button
                                key={c}
                                onClick={() => setFilter(c)}
                                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${filter === c ? 'bg-[#dc2626] border-[#dc2626] text-white' : 'border-white/10 text-white/40 hover:border-white/40'}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </section>

            {/* 2. PROJECT GRID - WHITE SECTION FOR CONTRAST */}
            <section className="py-32 px-6 bg-white rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
                        {filtered.map((project, i) => (
                            <a
                                key={i}
                                href={project.link}
                                target="_blank"
                                className="reveal reveal-up group block space-y-8"
                            >
                                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border border-black/5">
                                    <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[9px] font-black uppercase text-black">
                                        Project 0{i + 1}
                                    </div>
                                    <img
                                        src={project.img}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        alt={project.title}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                                </div>
                                <div className="px-2 space-y-4">
                                    <h3 className="text-4xl font-black uppercase tracking-tighter text-[#0f172a] group-hover:text-[#dc2626] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-gray-500 font-medium italic leading-relaxed max-w-md">
                                        {project.desc}
                                    </p>
                                    <div className="pt-4 flex items-center gap-4 text-[#dc2626] font-black text-[10px] uppercase tracking-widest">
                                        <span>View System</span>
                                        <div className="w-8 h-[1px] bg-[#dc2626]"></div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. LOGO & BRANDING - CLEAN IMAGE GALLERY */}
            <section className="py-40 px-6 bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-12 gap-8">
                        <div>
                            <h4 className="text-[#dc2626] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Visual Engineering</h4>
                            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter">Branding <br /> <span className="text-white/30">Assets</span></h2>
                        </div>
                        <p className="text-white/100 text-right max-w-xs text-sm italic font-light">
                            High-end 3D identities and logos designed for maximum impact across all digital surfaces.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {brandAssets.map((asset, i) => (
                            <div key={i} className="reveal reveal-up aspect-square bg-white/[0.03] border border-white/5 rounded-3xl flex items-center justify-center p-6 hover:border-[#dc2626]/50 transition-all group overflow-hidden">
                                <img
                                    src={`/${asset.file}`}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    alt={`LogicTech Branding Asset ${i + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION - CLEAN WHITE */}
            <section className="py-64 px-6 bg-white text-center rounded-t-[4rem]">
                <div className="reveal reveal-up max-w-4xl mx-auto space-y-12">
                    <h2 className="text-6xl md:text-[10rem] font-black text-[#0f172a] uppercase tracking-tighter leading-none">
                        Next <br /> <span className="text-[#dc2626]">Project?</span>
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#0f172a] text-white px-20 py-8 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#dc2626] transition-all shadow-3xl"
                    >
                        Initiate Partnership
                    </Link>
                </div>
            </section>

            <style jsx>{`
                .reveal { opacity: 0; transform: translateY(40px); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                .reveal-up { transform: translateY(40px); }
            `}</style>
        </main>
    );
}