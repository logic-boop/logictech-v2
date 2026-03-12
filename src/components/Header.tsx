"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header({ scrolled }: { scrolled: boolean }) {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Our Works', href: '/works' },
        { name: 'Our Services', href: '/services' },
        { name: 'Buy Laptops', href: '/shop' },
    ];

    return (
        <header className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
                ? 'h-28 bg-[#050505]/98 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]'
                : 'h-40 bg-transparent'
            }`}>
            <div className="max-w-[1600px] mx-auto px-10 h-full flex items-center justify-between">

                {/* THE LOGICTECH BRAND MARK - LOCKED TOGETHER */}
                <Link href="/" className="flex items-center group shrink-0">

                    {/* Logo + Brand Name */}
                    <div className="flex items-center gap-[1px]">

                        {/* ULTRA-MASSIVE LOGO SCALE */}
                        <div className="relative w-20 h-20 md:w-36 md:h-36 flex items-center justify-center transition-all duration-700 group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="LOGICTECH"
                                width={800}
                                height={800}
                                className="object-contain logo-rendering brightness-125 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                                unoptimized
                                priority
                            />
                        </div>

                        {/* Brand Name - Pulled closer to logo */}
                        <span className="font-black text-2xl md:text-4xl tracking-tighter uppercase text-white leading-none whitespace-nowrap -ml-1">
                            LOGIC<span className="text-[#dc2626]">TECH</span>
                        </span>

                    </div>
                </Link>

                {/* NAVIGATION */}
                <nav className="hidden lg:flex items-center gap-14">
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
                        className="bg-[#dc2626] text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(220,38,38,0.4)] transition-all duration-500 hover:scale-105 hover:bg-white hover:text-[#050505] active:scale-95"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}