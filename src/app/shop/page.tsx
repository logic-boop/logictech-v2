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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505]`}>

            {/* 1. HERO - INDUSTRIAL HEADER WITH ULTRA-CLEAN HARDWARE IMAGE */}
            <section className="relative pt-64 pb-32 px-6 overflow-hidden border-b border-white/5">
                {/* Clean Hardware Background Asset */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
                        className="w-full h-full object-cover opacity-20 brightness-110"
                        alt="High-Speed Circuitry"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-8 reveal reveal-up">
                        <div className="w-12 h-[1px] bg-[#dc2626]"></div>
                        <h4 className="text-[#dc2626] font-black uppercase tracking-[0.5em] text-[10px]">Division 03</h4>
                    </div>
                    <h1 className="reveal reveal-up delay-100 text-7xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
                        The <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Hardware</span>
                    </h1>
                </div>
                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </section>

            {/* 2. CATEGORY NAVIGATION */}
            <section className="py-20 px-6 bg-white border-b border-black/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {hardwareCategories.map((cat) => (
                        <Link key={cat.id} href={`#${cat.id}`} className="reveal reveal-up group p-10 bg-gray-50 rounded-[3rem] border border-black/5 hover:bg-[#dc2626] transition-all duration-500">
                            <h4 className="text-[#dc2626] group-hover:text-white font-black uppercase tracking-widest text-[10px] mb-2">{cat.tagline}</h4>
                            <h3 className="text-3xl font-black uppercase tracking-tighter text-[#0f172a] group-hover:text-white">{cat.title} →</h3>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 3. DETAILED INVENTORY SECTIONS */}
            <section className="py-32 px-6 bg-white rounded-b-[5rem]">
                <div className="max-w-7xl mx-auto space-y-64">
                    {hardwareCategories.map((cat, i) => (
                        <div key={cat.id} id={cat.id} className="scroll-mt-32 space-y-16 reveal reveal-up">
                            <div className="flex items-end justify-between border-b border-black/10 pb-8">
                                <h2 className="text-5xl md:text-8xl font-black text-[#0f172a] uppercase tracking-tighter">
                                    {cat.title}
                                </h2>
                                <span className="text-gray-200 font-black text-6xl italic text-right">0{i + 1}</span>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {cat.items.map((item, idx) => (
                                    <div key={idx} className="group relative bg-gray-50 rounded-[3.5rem] overflow-hidden border border-black/5 flex flex-col md:flex-row items-center hover:shadow-2xl transition-all duration-700">
                                        <div className="w-full md:w-1/2 aspect-square overflow-hidden bg-white">
                                            <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.name} />
                                        </div>
                                        <div className="p-10 w-full md:w-1/2 space-y-6">
                                            <div>
                                                <h3 className="text-2xl font-black uppercase tracking-tighter text-[#0f172a] leading-tight">{item.name}</h3>
                                                <p className="text-[#dc2626] font-black text-[10px] uppercase tracking-widest mt-2">{item.price}</p>
                                            </div>
                                            <p className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.2em] pt-4 border-t border-black/5 leading-relaxed">
                                                {item.spec}
                                            </p>
                                            <Link href="/contact" className="inline-block w-full text-center bg-[#0f172a] text-white py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#dc2626] transition-all">
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

            {/* 4. FINAL CTA */}
            <section className="py-64 px-6 text-center">
                <div className="reveal reveal-up max-w-4xl mx-auto space-y-16">
                    <h2 className="text-7xl md:text-[12rem] font-black text-white uppercase tracking-tighter leading-none">
                        Equip <br /> <span className="text-[#dc2626]">Now</span>
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-black px-20 py-8 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#dc2626] hover:text-white transition-all shadow-3xl"
                    >
                        Request Custom Setup
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