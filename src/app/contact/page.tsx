"use client";
import React, { useEffect, useState } from 'react';
import { sendLeadEmail } from "./actions";

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, []);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        const result = await sendLeadEmail(formData);
        setIsSubmitting(false);

        if (result.success) {
            setIsSuccess(true);
        } else {
            alert("Transmission failed. Please check your connection.");
        }
    }

    return (
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#050505] w-full overflow-x-hidden`}>

            {/* 1. HERO - BOLD & WELCOMING */}
            <section className="relative pt-48 md:pt-64 pb-20 md:pb-32 px-6 overflow-hidden border-b border-white/5">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-8 reveal reveal-up">
                        <div className="w-12 h-[1px] bg-[#dc2626]"></div>
                        <h4 className="text-[#dc2626] font-black uppercase tracking-[0.5em] text-[10px]">Ready to build?</h4>
                    </div>
                    <h1 className="reveal reveal-up delay-100 text-5xl sm:text-7xl md:text-[9rem] lg:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-12 break-words">
                        Reach Out <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>To Us</span>
                    </h1>
                    <p className="text-white/50 max-w-xl font-medium text-lg reveal reveal-up delay-200">
                        We're excited to hear your ideas! Fill out the form below and let's turn your vision into a digital masterpiece.
                    </p>
                </div>
            </section>

            {/* 2. FORM SECTION */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-white rounded-t-[3rem] md:rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                    <div className="reveal reveal-left space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tighter leading-none">Start Your <br /> <span className="text-[#dc2626]">Journey</span></h2>
                            <p className="text-gray-400 font-medium text-sm md:text-base italic">"Your next big project starts with a single message."</p>
                        </div>

                        {isSuccess ? (
                            <div className="bg-green-50 border-2 border-green-500 p-10 rounded-[2.5rem] text-center md:text-left space-y-4 shadow-2xl shadow-green-100">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto md:mx-0">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-green-800 font-black uppercase tracking-widest text-xl">We Got It!</h3>
                                <p className="text-green-600 font-bold">Your request is in our hands. We'll reach out to you via email very soon!</p>
                                <button onClick={() => setIsSuccess(false)} className="text-[#0f172a] font-black uppercase tracking-widest text-[10px] underline hover:text-[#dc2626]">Send another request</button>
                            </div>
                        ) : (
                            <form action={handleSubmit} className="space-y-8 md:space-y-10 p-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Name Field */}
                                    <div className="group space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#dc2626] group-focus-within:text-[#0f172a] transition-colors">Your Name</label>
                                        <div className="relative">
                                            <input name="name" required type="text" placeholder="e.g. John Doe" className="w-full bg-[#f8fafc] border-2 border-gray-100 rounded-2xl focus:border-[#dc2626] focus:bg-white outline-none px-6 py-5 transition-all font-bold text-[#0f172a] placeholder:text-gray-300" />
                                        </div>
                                    </div>
                                    {/* Email Field */}
                                    <div className="group space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#dc2626] group-focus-within:text-[#0f172a] transition-colors">Email Address</label>
                                        <div className="relative">
                                            <input name="email" required type="email" placeholder="john@example.com" className="w-full bg-[#f8fafc] border-2 border-gray-100 rounded-2xl focus:border-[#dc2626] focus:bg-white outline-none px-6 py-5 transition-all font-bold text-[#0f172a] placeholder:text-gray-300" />
                                        </div>
                                    </div>
                                </div>

                                {/* Category Selection */}
                                <div className="group space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#dc2626] group-focus-within:text-[#0f172a] transition-colors">What are we building today?</label>
                                    <div className="relative">
                                        <select name="category" className="w-full bg-[#f8fafc] border-2 border-gray-100 rounded-2xl focus:border-[#dc2626] focus:bg-white outline-none px-6 py-5 transition-all font-bold text-[#0f172a] appearance-none cursor-pointer">
                                            <option>Website or Mobile App</option>
                                            <option>High-End Laptops or Desktops</option>
                                            <option>AI automation for my business</option>
                                            <option>Graphic Design & Branding</option>
                                            <option>I just have a question!</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#dc2626] font-bold">▼</div>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="group space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#dc2626] group-focus-within:text-[#0f172a] transition-colors">The Details</label>
                                    <div className="relative">
                                        <textarea name="message" required rows={5} placeholder="Tell us everything! The more details, the better..." className="w-full bg-[#f8fafc] border-2 border-gray-100 rounded-3xl focus:border-[#dc2626] focus:bg-white outline-none px-6 py-5 transition-all font-bold text-[#0f172a] resize-none placeholder:text-gray-300"></textarea>
                                    </div>
                                </div>

                                <button 
                                    disabled={isSubmitting} 
                                    type="submit" 
                                    className="w-full md:w-auto bg-[#0f172a] text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#dc2626] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-gray-200 flex items-center justify-center gap-3 group"
                                >
                                    {isSubmitting ? 'Transmitting...' : 'Send Message'}
                                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </form>
                        )}
                    </div>

                    {/* RIGHT SIDE: CONTACT INFO BOX */}
                    <div className="reveal reveal-right space-y-12">
                        <div className="bg-[#050505] p-10 md:p-14 rounded-[3rem] text-white space-y-12 shadow-2xl border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626] opacity-10 blur-[60px]"></div>
                            
                            <div className="space-y-4 relative">
                                <h4 className="text-[#dc2626] font-black uppercase tracking-[0.4em] text-[10px]">Direct Office</h4>
                                <p className="text-3xl font-black uppercase tracking-tighter">Ibadan, Nigeria</p>
                                <p className="text-white/40 text-sm font-medium italic">Available for remote work worldwide.</p>
                            </div>

                            <div className="space-y-6 relative">
                                <h4 className="text-[#dc2626] font-black uppercase tracking-[0.4em] text-[10px]">Contact Channels</h4>
                                <div className="space-y-2">
                                    <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Email</p>
                                    <p className="text-lg md:text-xl font-black text-white hover:text-[#dc2626] transition-colors cursor-pointer">logictech2026@gmail.com</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Direct Line</p>
                                    <p className="text-lg md:text-xl font-black text-white">+234 706 315 3233</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-[#dc2626] font-black uppercase tracking-widest text-[10px] mb-4">Support Hours</p>
                                <p className="text-white/60 font-bold text-sm uppercase">Mon — Fri: 9am - 6pm</p>
                                <p className="text-white/60 font-bold text-sm uppercase">Sat: 10am - 4pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-20 text-center text-white/10">
                <p className="font-black uppercase tracking-[1em] text-[8px]">LogicTech Design & Development © 2026</p>
            </footer>

            <style jsx>{`
                .reveal { opacity: 0; transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                .reveal-visible { opacity: 1; transform: translate(0); }
                .reveal-up { transform: translateY(40px); }
                .reveal-left { transform: translateX(-50px); }
                .reveal-right { transform: translateX(50px); }
                @media (max-width: 1024px) {
                    .reveal-left, .reveal-right { transform: translateY(40px); }
                }
            `}</style>
        </main>
    );
}