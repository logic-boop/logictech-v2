"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Our Works', href: '/works' },
        { name: 'Our Services', href: '/services' },
        { name: 'Buy Laptops', href: '/shop' },
    ];

    return (
        <>
            {/* ✅ FIXED: header z-index increased */}
            <header className={`fixed top-0 w-full z-[200] transition-all duration-700 ${scrolled
                ? 'h-20 md:h-28 bg-[#050505]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
                : 'h-24 md:h-40 bg-transparent'
                }`}>
                <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-full flex items-center justify-between relative">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center group shrink-0 relative z-[210]">
                        <div className="flex items-center gap-0 leading-none">
                            <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-36 lg:h-36 flex items-center justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="LOGICTECH"
                                    width={800}
                                    height={800}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="font-black text-lg sm:text-xl lg:text-4xl uppercase text-white">
                                LOGIC<span className="text-[#dc2626]">TECH</span>
                            </span>
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden xl:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-[0.4em]">
                                <span className={pathname === link.href ? 'text-[#dc2626]' : 'text-white/50 hover:text-white'}>
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-[#dc2626] text-white px-8 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.2em]"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* ✅ FIXED: proper z-index for button */}
                    <button
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        className="xl:hidden relative z-[300] w-12 h-12 flex flex-col justify-center items-end gap-1.5 focus:outline-none"
                    >
                        <span className={`h-[3px] transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 translate-y-[9px] bg-[#dc2626]' : 'w-8 bg-white'}`} />
                        <span className={`h-[3px] transition-all duration-300 ${isMenuOpen ? 'opacity-0 w-0 bg-[#dc2626]' : 'w-6 bg-white'}`} />
                        <span className={`h-[3px] transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-[9px] bg-[#dc2626]' : 'w-8 bg-white'}`} />
                    </button>
                </div>
            </header>

            {/* ✅ FIXED: overlay now BELOW header */}
            <div className={`fixed inset-0 bg-[#050505] z-[140] flex flex-col items-center justify-center transition-all duration-700 xl:hidden overflow-y-auto ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col items-center gap-8 p-10">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl md:text-4xl font-black uppercase tracking-widest transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${pathname === link.href ? 'text-[#dc2626]' : 'text-white'}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-6 bg-[#dc2626] text-white px-14 py-6 rounded-full font-black uppercase text-xs"
                    >
                        Contact Now
                    </Link>
                </div>
            </div>
        </>
    );
}