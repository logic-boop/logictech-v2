"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header({ scrolled }: { scrolled: boolean }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Our Works', href: '/works' },
        { name: 'Our Services', href: '/services' },
        { name: 'Buy Laptops', href: '/shop' },
    ];

    return (
        <header className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
            ? 'h-20 md:h-28 bg-[#050505]/98 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]'
            : 'h-24 md:h-40 bg-transparent'
            }`}>
            <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-full flex items-center justify-between relative">

                {/* THE LOGICTECH BRAND MARK */}
                <Link href="/" className="flex items-center group shrink-0 relative z-[110]">
                    <div className="flex items-center gap-0 leading-none">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-36 lg:h-36 flex items-center justify-center transition-all duration-700 group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="LOGICTECH"
                                width={800}
                                height={800}
                                className="object-contain logo-rendering brightness-125 contrast-125 scale-125 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] m-0 p-0"
                                unoptimized
                                priority
                            />
                        </div>
                        <span className="font-black text-lg sm:text-xl lg:text-4xl tracking-tighter uppercase text-white leading-none whitespace-nowrap -ml-1 lg:-ml-8">
                            LOGIC<span className="text-[#dc2626]">TECH</span>
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden xl:flex items-center gap-10 2xl:gap-14">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="group relative text-[11px] font-black uppercase tracking-[0.4em]">
                            <span className={`transition-all duration-500 block group-hover:-translate-y-1 ${pathname === link.href
                                ? 'text-[#dc2626]'
                                : 'text-white/50 hover:text-white'
                                }`}>
                                {link.name}
                            </span>
                            <span className={`absolute -bottom-4 left-0 h-[2px] bg-[#dc2626] transition-all duration-500 ${pathname === link.href
                                ? 'w-full'
                                : 'w-0 group-hover:w-full'
                                }`}></span>
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-[#dc2626] text-white px-8 2xl:px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(220,38,38,0.4)] transition-all duration-500 hover:scale-105 hover:bg-white hover:text-[#050505] active:scale-95"
                    >
                        Contact
                    </Link>
                </nav>

                {/* MOBILE MENU TOGGLE - FORCED VISIBILITY */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="xl:hidden relative z-[150] w-12 h-12 flex flex-col justify-center items-end gap-1.5 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {/* Upper Bar */}
                    <span className={`block h-[3px] bg-white transition-all duration-500 ease-out ${isMenuOpen ? 'w-8 rotate-45 translate-y-[9px] !bg-[#dc2626]' : 'w-8'
                        }`} />

                    {/* Middle Bar */}
                    <span className={`block h-[3px] bg-white transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-0 w-0' : 'w-6'
                        }`} />

                    {/* Lower Bar */}
                    <span className={`block h-[3px] bg-white transition-all duration-500 ease-out ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-[9px] !bg-[#dc2626]' : 'w-8'
                        }`} />
                </button>

                {/* MOBILE OVERLAY */}
                <div className={`fixed inset-0 bg-[#050505] z-[130] flex flex-col items-center justify-center gap-10 transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] xl:hidden ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl md:text-4xl font-black uppercase tracking-[0.4em] transition-all duration-700 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${pathname === link.href ? 'text-[#dc2626]' : 'text-white'}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className={`mt-6 bg-[#dc2626] text-white px-14 py-6 rounded-full font-black uppercase tracking-widest text-xs transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    >
                        Contact Now
                    </Link>
                </div>
            </div>
        </header>
    );
}