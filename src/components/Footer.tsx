"use client";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#050505] pt-32 pb-12 text-white px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
                <div className="space-y-8 text-center md:text-left">
                    <h3 className="text-4xl font-black tracking-tighter uppercase text-white">LOGICTECH</h3>
                    <p className="text-white/40 font-medium italic text-lg leading-relaxed max-w-xs mx-auto md:mx-0">
                        Building the architecture of tomorrow's digital brands.
                    </p>
                </div>

                <div className="space-y-8 text-center md:text-left">
                    <h4 className="text-[#dc2626] font-black uppercase text-[10px] tracking-[0.5em]">Navigation</h4>
                    <ul className="space-y-4 text-white/60 text-[11px] font-black uppercase tracking-widest">
                        {['Home', 'About', 'Works', 'Services', 'Shop'].map(item => (
                            <li key={item} className="hover:text-[#dc2626] transition-colors">
                                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-8 text-center md:text-left">
                    <h4 className="text-[#dc2626] font-black uppercase text-[10px] tracking-[0.5em]">Social Hub</h4>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                            <div key={social} className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:bg-[#dc2626] transition-all cursor-pointer">
                                <span className="font-black text-[9px] uppercase tracking-[0.2em]">{social}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 text-center">
                <p className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-bold">
                    © 2026 LOGICTECH GLOBAL ARCHITECTURE.
                </p>
            </div>
        </footer>
    );
}