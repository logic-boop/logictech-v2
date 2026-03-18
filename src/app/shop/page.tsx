"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ShopPage() {
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

    const hardwareCategories = [
        {
            id: "laptops",
            title: "Laptops",
            tagline: "Portable Workstations",
            items: [
                { name: "HP EliteBook 840 G3", spec: "i5 | 16GB RAM | 256GB SSD", price: "Refurbished Pro", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070" },
                { name: "MacBook Pro M2", spec: "Apple M2 | 8GB | 256GB SSD", price: "Creative Elite", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026" },
                { name: "Dell XPS 13", spec: "i7 | 16GB RAM | 512GB SSD", price: "Developer Choice", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2032" },
                { name: "Lenovo ThinkPad X1", spec: "i7 | 32GB RAM | 1TB SSD", price: "Executive", img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=2070" }
            ]
        },
        {
            id: "desktops",
            title: "Desktops",
            tagline: "Static Powerhouses",
            items: [
                { name: "Dell OptiPlex 7070", spec: "i7 | 32GB RAM | 1TB SSD", price: "Enterprise", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2032" },
                { name: "HP Z4 Workstation", spec: "Xeon | 64GB RAM | RTX 4000", price: "Engineering", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070" },
                { name: "Apple iMac 24-inch", spec: "M3 | 16GB | 512GB SSD", price: "Design Studio", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070" },
                { name: "LogicTech Custom", spec: "Ryzen 9 | RTX 4080 | 128GB", price: "Infinite", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070" }
            ]
        },
        {
            id: "accessories",
            title: "Accessories",
            tagline: "Interface Tools",
            items: [
                { name: "MX Master 3S", spec: "LogicTech Wireless Mouse", price: "Precision", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2070" },
                { name: "Keychron Q1", spec: "Mechanical Keyboard", price: "Tactile", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070" },
                { name: "Samsung 32\" 4K", spec: "UHD Curved Monitor", price: "Visuals", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070" },
                { name: "Sony WH-1000XM5", spec: "Noise Cancelling Audio", price: "Focus", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070" }
            ]
        }
    ];

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] overflow-x-hidden w-full`}>

            {/* 1. HERO - Adjusted for Mobile Viewport */}
            <section className="relative pt-48 md:pt-72 pb-20 md:pb-32 px-4 md:px-6 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
                        className="w-full h-full object-cover opacity-10 md:opacity-20 brightness-125"
                        alt="High-Speed Circuitry"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-6 md:mb-8 reveal reveal-up">
                        <div className="w-8 md:w-12 h-[1px] bg-[#dc2626]"></div>
                        <h4 className="text-[#dc2626] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[10px]">Division 03</h4>
                    </div>
                    <h1 className="reveal reveal-up delay-100 text-5xl sm:text-6xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-12 break-words">
                        The <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Hardware</span>
                    </h1>
                </div>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </section>

            {/* 2. CATEGORY NAVIGATION - Improved Spacing */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-white border-b border-black/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {hardwareCategories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`#${cat.id}`}
                            className="reveal reveal-up group p-6 md:p-10 bg-gray-50 rounded-[2rem] md:rounded-[3rem] border border-black/5 hover:bg-[#dc2626] transition-all duration-700"
                        >
                            <h4 className="text-[#dc2626] group-hover:text-white/80 font-black uppercase tracking-widest text-[8px] md:text-[9px] mb-2">{cat.tagline}</h4>
                            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-[#0f172a] group-hover:text-white transition-colors">{cat.title} →</h3>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 3. DETAILED INVENTORY SECTIONS - Fixed Overflow and Scaling */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-white rounded-b-[2.5rem] md:rounded-b-[5rem]">
                <div className="max-w-7xl mx-auto space-y-24 md:space-y-64">
                    {hardwareCategories.map((cat, i) => (
                        <div key={cat.id} id={cat.id} className="scroll-mt-32 md:scroll-mt-48 space-y-10 md:space-y-16 reveal reveal-up">
                            <div className="flex items-end justify-between border-b border-black/10 pb-6 md:pb-8">
                                <h2 className="text-4xl md:text-8xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">
                                    {cat.title}
                                </h2>
                                <span className="text-gray-100 font-black text-3xl md:text-7xl italic select-none">0{i + 1}</span>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                                {cat.items.map((item, idx) => (
                                    <div key={idx} className="group relative bg-gray-50 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border border-black/5 flex flex-col md:flex-row items-stretch hover:shadow-2xl transition-all duration-700">
                                        <div className="w-full md:w-1/2 aspect-video md:aspect-square overflow-hidden bg-white shrink-0">
                                            <img src={item.img} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt={item.name} />
                                        </div>
                                        <div className="p-6 md:p-10 w-full flex flex-col justify-between space-y-4 md:space-y-6">
                                            <div>
                                                <h3 className="text-lg md:text-2xl font-black uppercase tracking-tighter text-[#0f172a] leading-tight group-hover:text-[#dc2626] transition-colors">{item.name}</h3>
                                                <p className="text-[#dc2626] font-black text-[9px] md:text-[10px] uppercase tracking-[0.1em] mt-1 italic">{item.price}</p>
                                            </div>
                                            <p className="text-gray-500 font-bold uppercase text-[8px] md:text-[9px] tracking-[0.1em] pt-4 border-t border-black/5 leading-relaxed">
                                                {item.spec}
                                            </p>
                                            <Link href="/contact" className="inline-block w-full text-center bg-[#0f172a] text-white py-3 md:py-4 rounded-full font-black uppercase text-[9px] md:text-[10px] tracking-widest hover:bg-[#dc2626] transition-all">
                                                Inquire Now
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. FINAL CTA - Scaled for Mobile */}
            <section className="py-32 md:py-64 px-4 md:px-6 text-center">
                <div className="reveal reveal-up max-w-4xl mx-auto space-y-10 md:space-y-16">
                    <h2 className="text-5xl sm:text-6xl md:text-[12rem] font-black text-white uppercase tracking-tighter leading-none break-words">
                        Equip <br /> <span className="text-[#dc2626]">Now</span>
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-black px-12 md:px-20 py-5 md:py-8 rounded-full font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] hover:bg-[#dc2626] hover:text-white transition-all shadow-3xl"
                    >
                        Request Custom Setup
                    </Link>
                </div>
            </section>

            <style jsx>{`
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                .reveal-up { transform: translateY(30px); }
                @media (max-width: 768px) {
                    .reveal-up { transform: translateY(20px); }
                }
            `}</style>
        </main>
    );
}