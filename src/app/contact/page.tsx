"use client";
import React, { useEffect, useState } from 'react';

export default function ContactPage() {
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
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] w-full overflow-x-hidden`}>

            {/* 1. HERO - INDUSTRIAL HEADER */}
            <section className="relative pt-40 md:pt-64 pb-20 md:pb-32 px-6 overflow-hidden border-b border-white/5">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-8 reveal reveal-up">
                        <div className="w-12 h-[1px] bg-[#dc2626]"></div>
                        <h4 className="text-[#dc2626] font-black uppercase tracking-[0.5em] text-[10px]">Communication Protocol</h4>
                    </div>
                    {/* Added responsive text sizes and break-words to prevent overflow */}
                    <h1 className="reveal reveal-up delay-100 text-5xl sm:text-7xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-12 break-words">
                        Order our <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Services</span>
                    </h1>
                </div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </section>

            {/* 2. CONTACT FORM & INFO - CLEAN WHITE SECTION */}
            <section className="py-20 md:py-32 px-6 bg-white rounded-t-[3rem] md:rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                    {/* LEFT SIDE: INITIATION FORM */}
                    <div className="reveal reveal-left space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">Fill the <br /> <span className="text-[#dc2626]">Form</span></h2>
                            <p className="text-gray-400 font-medium italic text-sm md:text-base">"Define your project or request our specialized services."</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#dc2626]">Full Name</label>
                                    <input type="text" placeholder="Architect Name" className="w-full bg-transparent border-b-2 border-gray-200 focus:border-[#dc2626] outline-none py-4 transition-all font-bold text-[#0f172a] placeholder:text-gray-300" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#dc2626]">Email Address</label>
                                    <input type="email" placeholder="email@domain.com" className="w-full bg-transparent border-b-2 border-gray-200 focus:border-[#dc2626] outline-none py-4 transition-all font-bold text-[#0f172a] placeholder:text-gray-300" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#dc2626]">Request Category</label>
                                <select className="w-full bg-transparent border-b-2 border-gray-200 focus:border-[#dc2626] outline-none py-4 transition-all font-bold text-[#0f172a] appearance-none cursor-pointer">
                                    <option>Website/Mobile App</option>
                                    <option>Hardware (Laptops/Desktops)</option>
                                    <option>AI Automation Integration</option>
                                    <option>3D & Logo Design</option>
                                    <option>Branding</option>
                                    <option>General Support / Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#dc2626]">Service Brief</label>
                                <textarea rows={4} placeholder="How can LogicTech accelerate your brand?" className="w-full bg-transparent border-b-2 border-gray-200 focus:border-[#dc2626] outline-none py-4 transition-all font-bold text-[#0f172a] resize-none placeholder:text-gray-300"></textarea>
                            </div>

                            <button className="w-full md:w-auto bg-[#0f172a] text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#dc2626] transition-all shadow-xl hover:scale-105 active:scale-95">
                                Send Protocol →
                            </button>
                        </form>
                    </div>

                    {/* RIGHT SIDE: TECHNICAL SPECS & LOCATIONS */}
                    <div className="reveal reveal-right space-y-12 md:space-y-16">
                        <div className="bg-[#050505] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] text-white space-y-12">
                            <div className="space-y-4">
                                <h4 className="text-[#dc2626] font-black uppercase tracking-[0.4em] text-[10px]">Headquarters</h4>
                                <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Ibadan, Nigeria</p>
                                <p className="text-white/40 font-medium italic text-sm">Operating at Global Standard.</p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[#dc2626] font-black uppercase tracking-[0.4em] text-[10px]">Technical Support</h4>
                                <p className="text-lg md:text-xl font-bold break-all">logictech2026@gmail.com</p>
                                <p className="text-lg md:text-xl font-bold">+234 706 315 3233</p>
                            </div>

                            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-6">
                                <a href="https://www.linkedin.com/in/afolabi-olubode-710803187/" className="text-white/40 hover:text-[#dc2626] transition-colors font-black text-[10px] uppercase tracking-widest">LinkedIn</a>
                                <a href="https://github.com/logic-boop" className="text-white/40 hover:text-[#dc2626] transition-colors font-black text-[10px] uppercase tracking-widest">GitHub</a>
                                <a href="https://x.com/O87807Olubode" className="text-white/40 hover:text-[#dc2626] transition-colors font-black text-[10px] uppercase tracking-widest">X</a>
                            </div>
                        </div>

                        {/* Image aspect-ratio fix for mobile */}
                        <div className="relative aspect-[16/9] md:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-black/5">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                                className="w-full h-full object-cover"
                                alt="LogicTech Studio"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FINAL FOOTER SECTION */}
            <section className="py-20 md:py-32 px-6 text-center text-white/20">
                <p className="font-black uppercase tracking-[1em] text-[8px] md:text-[10px]">LogicTech Design & AI © 2026</p>
            </section>

            <style jsx>{`
                .reveal { opacity: 0; transform: translateY(30px); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                .reveal-up { transform: translateY(30px); }
                .reveal-left { transform: translateX(-40px); }
                .reveal-right { transform: translateX(40px); }
                @media (max-width: 768px) {
                    .reveal-left, .reveal-right { transform: translateY(30px); }
                }
            `}</style>
        </main>
    );
}