"use client";
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Works', href: '/works' },
    { name: 'Our Services', href: '/services' },
    { name: 'Buy Laptops', href: '/shop' },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden w-full">

        {/* LOGICTECH MASTER HEADER - ARCHITECTURAL LOCK VERSION */}
        <header
          className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
              ? 'h-28 bg-[#050505]/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]'
              : 'h-40 bg-transparent'
            }`}
        >
          <div className="max-w-[1600px] mx-auto px-10 h-full flex items-center justify-between">

            {/* BRAND CONTAINER */}
            <div className="flex items-center shrink-0">
              <Link href="/" className="flex items-center group">

                {/* LOGO + BRAND NAME (TIGHT LOCKUP) */}
                <div className="flex items-center gap-[2px] leading-none">

                  {/* LOGO */}
                  <div className="relative flex items-center justify-center w-24 h-24 md:w-44 md:h-44 transition-all duration-700 group-hover:scale-105">
                    <Image
                      src="/logo.png"
                      alt="LogicTech Logo"
                      width={800}
                      height={800}
                      className="object-contain logo-rendering brightness-125 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                      unoptimized
                      priority
                    />
                  </div>

                  {/* BRAND NAME */}
                  <span className="font-black text-2xl md:text-4xl tracking-tighter uppercase text-white leading-none whitespace-nowrap">
                    LOGIC<span className="text-[#dc2626]">TECH</span>
                  </span>

                </div>
              </Link>
            </div>

            {/* NAVIGATION CONTAINER */}
            <div className="hidden lg:flex items-center gap-10">

              {/* NAV LINKS */}
              <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group relative text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-500"
                  >
                    <span
                      className={`relative z-10 block transition-transform duration-500 group-hover:-translate-y-1 ${pathname === link.href
                          ? 'text-[#dc2626]'
                          : 'text-white/50 hover:text-white'
                        }`}
                    >
                      {link.name}
                    </span>

                    <span
                      className={`absolute -bottom-4 left-0 h-[2px] bg-[#dc2626] transition-all duration-500 ${pathname === link.href
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                        }`}
                    ></span>
                  </Link>
                ))}
              </div>

              {/* CONTACT BUTTON */}
              <div>
                <Link
                  href="/contact"
                  className="bg-[#dc2626] text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(220,38,38,0.4)] transition-all duration-500 hover:scale-105 hover:bg-white hover:text-[#050505] active:scale-95"
                >
                  Contact
                </Link>
              </div>

            </div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* MASTER FOOTER - CONSISTENT BRANDING */}
        <footer className="bg-[#050505] pt-32 pb-12 text-white px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="space-y-8">
              <h3 className="text-4xl font-black tracking-tighter uppercase text-white leading-none">
                LOGIC<span className="text-[#dc2626]">TECH</span>
              </h3>
              <p className="text-white/60 font-medium italic text-lg leading-relaxed max-w-xs">
                Building the architecture of tomorrow's digital brands. Simple, Smart, and Powerful.
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-[#dc2626] font-black uppercase text-[10px] tracking-[0.5em]">Navigation</h4>
              <ul className="space-y-4 text-white/60 text-[11px] font-black uppercase tracking-widest">
                {navLinks.map(link => (
                  <li key={link.name} className="hover:text-[#dc2626] transition-colors">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[#dc2626] font-black uppercase text-[10px] tracking-[0.5em]">Social Hub</h4>
              <div className="flex flex-wrap gap-4">
                {['Instagram', 'LinkedIn', 'Tiktok'].map(p => (
                  <div key={p} className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:bg-[#dc2626] transition-all cursor-pointer">
                    <span className="font-black text-[9px] uppercase tracking-[0.2em]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/60 uppercase tracking-[0.5em] font-bold">
              © 2026 LOGICTECH GLOBAL ARCHITECTURE. DESIGNED FOR EXCELLENCE.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}