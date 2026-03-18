"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
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

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-white`}>

            {/* 1. THE HERO - Adjusted pt-48 to pt-56 for Header Clearance */}
            <section className="relative pt-56 pb-24 px-6 bg-[#050505] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden min-h-[85vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                        className="w-full h-full object-cover opacity-30"
                        alt="LogicTech Collaboration"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <h4 className="reveal reveal-up text-[#dc2626] font-black uppercase tracking-[0.6em] md:tracking-[0.8em] text-[10px] md:text-[11px] mb-6 md:mb-8">The Architect</h4>
                    <h1 className="reveal reveal-up delay-100 text-5xl md:text-[9rem] font-black text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-10 md:mb-12">
                        Engineering <br /> <span className="text-[#dc2626] italic">Identity</span>
                    </h1>
                    <p className="reveal reveal-up delay-200 text-white/90 text-lg md:text-2xl max-w-2xl font-light italic leading-relaxed">
                        We don't just build products. We architect the digital backbone of modern brands.
                    </p>
                </div>
            </section>

            {/* 2. THE PHILOSOPHY */}
            <section className="py-24 md:py-40 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div className="reveal reveal-left relative aspect-square rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                            className="w-full h-full object-cover"
                            alt="LogicTech Strategy"
                        />
                    </div>
                    <div className="reveal reveal-right space-y-8 md:space-y-10">
                        <div className="space-y-4">
                            <h4 className="text-[#dc2626] font-black uppercase tracking-[0.4em] text-[10px]">Simply LogicTech</h4>
                            <h2 className="text-5xl md:text-6xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">
                                Making the <br /> <span className="text-[#dc2626]">Complex Simple</span>
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed border-l-4 md:border-l-8 border-[#dc2626] pl-6 md:pl-10">
                                LogicTech is a technical lab where engineering meets art. We believe technology shouldn't be confusing; it should be an invisible power.
                            </p>
                            <p className="text-lg text-gray-500 font-light md:pl-12">
                                From the first line of code to the final 3D render, we work with you to ensure your brand is fast, secure, and visually stunning. We build the "Logic" so you can focus on the "Vision."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL DNA */}
            <section className="py-24 md:py-40 px-6 bg-gray-50 rounded-[3rem] md:rounded-[5rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <h4 className="reveal reveal-up text-[#dc2626] font-black uppercase tracking-[0.6em] text-[10px] mb-4">Our Core DNA</h4>
                        <h2 className="reveal reveal-up delay-100 text-5xl md:text-8xl font-black text-[#0f172a] uppercase tracking-tighter">What We <span className="text-gray-400 italic">Master</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            {
                                t: "Full Apps",
                                d: "High-speed mobile and web systems built on Next.js and React Native. Clean code for complex ideas.",
                                img: "fullapp.avif"
                            },
                            {
                                t: "Smart AI",
                                d: "Neural automation that handles your repetitive tasks. We build the 'brain' for your digital ecosystem.",
                                img: "smartai.webp"
                            },
                            {
                                t: "3D Design",
                                d: "Industrial-grade 3D identities and logos. We create visuals that carry weight and command respect.",
                                img: "3Ddesign.avif"
                            }
                        ].map((box, i) => (
                            <div key={i} className="reveal reveal-up group bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl hover:bg-[#dc2626] transition-all duration-700 cursor-default">
                                <div className="h-48 md:h-56 w-full rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-10">
                                    <img src={box.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={box.t} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#0f172a] group-hover:text-white mb-4 transition-colors">{box.t}</h3>
                                <p className="text-gray-500 group-hover:text-white/90 font-medium italic leading-relaxed transition-colors">{box.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE BLUEPRINT */}
            <section className="py-24 md:py-40 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
                    <div className="flex-1 reveal reveal-left space-y-8">
                        <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tighter leading-tight">
                            A Global <br /> <span className="text-[#dc2626]">Standard</span>
                        </h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="text-[#dc2626] font-black text-2xl mt-1">01</div>
                                <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">We use world-class technologies like Vercel, Next.js, and TypeScript to ensure your project is ready for the global stage.</p>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="text-[#dc2626] font-black text-2xl mt-1">02</div>
                                <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">Every design is tested for performance. We don't just care about looks; we care about speed and security.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 reveal reveal-right rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-[#050505] p-6 md:p-12">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
                            className="w-full h-full object-cover rounded-xl md:rounded-2xl opacity-70"
                            alt="LogicTech Engineering"
                        />
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA */}
            <section className="py-32 md:py-48 px-6 bg-white text-center border-t border-gray-100">
                <div className="reveal reveal-up max-w-4xl mx-auto space-y-10 md:space-y-12">
                    <h2 className="text-6xl md:text-9xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">Let's <br /> <span className="text-[#dc2626]">Execute.</span></h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light italic">Your vision. Our engineering. Pure results.</p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#0f172a] text-white px-12 md:px-16 py-6 md:py-8 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#dc2626] transition-all shadow-xl hover:scale-105"
                    >
                        Start Your Project
                    </Link>
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