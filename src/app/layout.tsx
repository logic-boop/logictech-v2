"use client";
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Works', href: '/works' },
    { name: 'Our Services', href: '/services' },
    { name: 'Buy Laptops', href: '/shop' },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-[#050505] text-white antialiased overflow-x-hidden w-full ${isMenuOpen ? 'overflow-hidden' : ''}`}>

        {/* LOGICTECH MASTER HEADER */}
        <header
          className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
            ? 'h-20 md:h-28 bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
            : 'h-24 md:h-36 bg-transparent'
            }`}
        >
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-full flex items-center justify-between relative">

            {/* BRAND CONTAINER */}
            <div className="flex items-center shrink-0 relative z-[110]">
              <Link href="/" className="flex items-center group">
                <div className="flex items-center gap-2 leading-none">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 flex items-center justify-center transition-all duration-700 group-hover:scale-105">
                    <Image
                      src="/logo.png"
                      alt="LOGICTECH"
                      width={600}
                      height={600}
                      className="object-contain brightness-125 contrast-125 scale-125 drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                      unoptimized
                      priority
                    />
                  </div>
                  <span className="font-black text-3xl sm:text-4xl xl:text-4xl tracking-tighter uppercase text-white leading-none -ml-3 sm:-ml-4 xl:-ml-8">
                    LOGIC<span className="text-[#dc2626]">TECH</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden xl:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative text-[11px] font-black uppercase tracking-[0.4em]"
                >
                  <span className={`relative z-10 block transition-transform duration-500 group-hover:-translate-y-1 ${pathname === link.href ? 'text-[#dc2626]' : 'text-white/50 hover:text-white'}`}>
                    {link.name}
                  </span>
                  <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#dc2626] transition-all duration-500 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#dc2626] text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg transition-all duration-500 hover:scale-105 hover:bg-white hover:text-[#050505]"
              >
                Contact
              </Link>
            </nav>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden relative z-[150] w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none group"
              aria-label="Toggle Menu"
            >
              <span className={`block h-[2px] bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'w-8 rotate-45 translate-y-[8px] !bg-[#dc2626]' : 'w-8 group-hover:w-6'}`} />
              <span className={`block h-[2px] bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-0 w-0' : 'w-6'}`} />
              <span className={`block h-[2px] bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-[8px] !bg-[#dc2626]' : 'w-8'}`} />
            </button>

            {/* MOBILE OVERLAY MENU */}
            <div className={`fixed inset-0 bg-[#050505] z-[130] flex flex-col items-center justify-center gap-6 transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] xl:hidden ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-black uppercase tracking-[0.4em] transition-all duration-700 hover:text-[#dc2626] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${pathname === link.href ? 'text-[#dc2626]' : 'text-white'}`}
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className={`mt-8 bg-[#dc2626] text-white px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              >
                Contact Now
              </Link>
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        {/* RESPONSIVE MASTER FOOTER */}
        <footer className="bg-[#050505] pt-24 pb-12 text-white px-6 border-t border-white/5">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">

            {/* BRAND SECTION - Centered on mobile */}
            <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
              <h3 className="text-3xl font-black tracking-tighter uppercase">
                LOGIC<span className="text-[#dc2626]">TECH</span>
              </h3>
              <p className="text-white/50 font-medium text-base leading-relaxed max-w-xs">
                Building the architecture of tomorrow's digital brands. Simple, Smart, and Powerful.
              </p>
            </div>

            {/* NAVIGATION SECTION - Centered on mobile */}
            <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
              <h4 className="text-[#dc2626] font-black uppercase text-[10px] tracking-[0.5em]">Navigation</h4>
              <ul className="space-y-4 text-white/50 text-[11px] font-black uppercase tracking-widest">
                {navLinks.map(link => (
                  <li key={link.name} className="hover:text-white transition-colors cursor-pointer">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOCIAL SECTION - Centered on mobile */}
            <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
              <h4 className="text-[#dc2626] font-black uppercase text-[10px] tracking-[0.5em]">Social Hub</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {[
                  { name: 'WhatsApp', href: 'https://wa.me/message/B4RHGBASNY5RH1' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/afolabi-olubode-710803187/' },
                  { name: 'GitHub', href: 'https://github.com/logic-boop' },
                  { name: 'Discord', href: 'https://discord.com/channels/@me' },
                  { name: 'TikTok', href: 'https://www.tiktok.com/@logictechdesign' },
                  { name: 'Twitter', href: 'https://x.com/O87807Olubode' },
                  { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~0180715041bdb02b94' }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white/5 rounded-full border border-white/10 hover:bg-[#dc2626] hover:border-[#dc2626] transition-all duration-300 cursor-pointer group"
                  >
                    <span className="font-black text-[9px] uppercase tracking-[0.2em] group-hover:text-white">
                      {social.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* COPYRIGHT SECTION */}
          <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-white/5 text-center px-4">
            <p className="text-[9px] text-white/40 uppercase tracking-[0.4em] font-bold leading-loose">
              © 2026 LOGICTECH GLOBAL ARCHITECTURE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}