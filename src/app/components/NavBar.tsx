"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/src/context/LanguageContext"
import { Language } from "../translations";

const NoiseOverlay = () => (
  <div 
    className="absolute inset-0 z-50 opacity-[0.25] pointer-events-none mix-blend-overlay"
    style={{ 
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      backgroundSize: '200px 200px'
    }}
  />
);

export default function NavBar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [showCollections, setShowCollections] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); //dropdown lingua
  const langRef = useRef<HTMLDivElement>(null);
  const [isCollOpen, setIsCollOpen] = useState(false); //dropdown collezioni desktop
  const collRef = useRef<HTMLDivElement>(null);

  //dropdown lingua chiuso cliccando fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languagesList = [
    { code: "it" as Language, label: "IT" },
    { code: "en" as Language, label: "EN" },
    { code: "es" as Language, label: "ES" },
    { code: "fr" as Language, label: "FR" }
  ];

  const currentLang = languagesList.find(l => l.code === language)?.label;

  //dropdown desktop idem sopra
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (collRef.current && !collRef.current.contains(event.target as Node)) {
        setIsCollOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const collections = [
    { name: "ACID LEMONADE", slug: "/collections/acid-lemonade" },
    { name: "BRAIN COCKTAIL", slug: "/collections/brain-cocktail" },
    { name: "CONSCIOUS TRIP", slug: "/collections/conscious-trip" },
  ];

  if (pathname === "/") return null;

  return (
    <>
      <nav className="sticky top-0 z-[100] w-full">
        <div className="relative w-full h-24 md:h-30 bg-zinc-900 border-b border-white/10 flex items-center px-6 md:px-12">
          
          <NoiseOverlay />

          <div className="absolute inset-0 z-60 pointer-events-none opacity-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />

          {/* layout desktop */}
          <div className="hidden md:grid grid-cols-3 w-full items-center relative z-10 font-mono text-[11px] uppercase tracking-[0.3em]">
            
            {/* colonna sx */}
            <div className="flex justify-end items-center gap-10">
              <Link 
                href="/" 
                className={`transition-colors shrink-0 ${pathname === '/' ? 'text-[#C2F148]' : 'text-zinc-100 hover:text-[#C2F148]'}`}>
                <span className="text-[#C2F148]">{"//"}</span> HOME
              </Link>

              <Link 
                href="/contact" 
                className={`transition-colors shrink-0 ${pathname === '/contact' ? 'text-[#C2F148]' : 'text-zinc-100 hover:text-[#C2F148]'}`}>
                <span className="text-[#C2F148]">{"//"}</span> {t.contact.title}
              </Link>
            </div>

            {/* colonna centro */}
            <div className="flex justify-center items-center">
              <Link href="/" className="shrink-0">
                <Image
                  src="/icon.svg"
                  width={95}
                  height={95}
                  alt="logo Lemon Trip"
                  className="brightness-110"
                />
              </Link>
            </div>

            {/* colonna dx */}
            <div className="flex justify-between items-center gap-10">

              {/* dropdown collezioni */}
              <div className="relative" ref={collRef}>
                {pathname.includes('/collections/') && pathname.split('/').length > 2 ? (
                  <>
                    <button 
                      onClick={() => setIsCollOpen(!isCollOpen)}
                      className="flex items-center gap-2 text-[#C2F148] font-bold">
                      <span className="text-[#C2F148]">{"//"}</span> {t.nav.collections}
                      <ChevronDown size={12} className={`transition-transform ${isCollOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isCollOpen && (
                      <div className="absolute top-[calc(100%+25px)] right-0 bg-zinc-900 border border-white/10 p-1 flex flex-col min-w-[200px] shadow-2xl z-[130]">
                        <Link href="/collections" className="text-[9px] text-center py-3 border-b border-white/5 text-zinc-500 hover:text-white">[ {t.nav.viewAll} ]</Link>
                        {collections.map((col) => (
                          <Link key={col.slug} href={col.slug} className={`text-[9px] text-center py-4 hover:bg-white/5 ${pathname === col.slug ? "text-[#C2F148]" : "text-zinc-400"}`}>
                            {col.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href="/collections" className={`hover:text-[#C2F148] transition-colors ${pathname === '/collections' ? 'text-[#C2F148]' : 'text-zinc-100'}`}>
                    <span className="text-[#C2F148]">{"//"}</span> {t.nav.collections}
                  </Link>
                )}
              </div>

              {/* selettore lingua */}
              <div className="relative" ref={langRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 text-zinc-400 hover:text-[#C2F148] border border-white/10 px-3 py-1.5 bg-black/40">
                  {currentLang}
                  <ChevronDown size={12} className={`${isLangOpen ? "rotate-180" : ""}`} />
                </button>

                {isLangOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-zinc-900 border border-white/10 p-1 flex flex-col min-w-[80px] shadow-2xl z-[130]">
                    {languagesList.map((l) => (
                      <button key={l.code} onClick={() => { setLanguage(l.code); setIsLangOpen(false); }} className={`text-[10px] py-2 hover:bg-white/5 ${language === l.code ? "text-[#C2F148]" : "text-zinc-500"}`}>
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        {/* layout mobile */}
          <div className="flex md:hidden w-full items-center justify-between relative z-10">
            <button onClick={() => setIsOpen(true)} className="text-[#C2F148]">
              <Menu size={28} />
            </button>

            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <Image 
                src="/icon.svg" 
                width={80} 
                height={80} 
                alt="logo Lemon Trip" />
            </Link>

            <div className="w-7" /> 
          </div>
        </div>
      </nav>

      {/* sidebar mobile */}
      <div className={`fixed inset-0 h-screen w-screen z-[200] bg-black/80 backdrop-blur-xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

          <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none">
            <NoiseOverlay />
          </div>

          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-[#C2F148] z-[210]">
            <X size={32} />
          </button>

          <div className="flex flex-col h-full items-center justify-center gap-8 font-mono uppercase tracking-[0.2em] relative z-10">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)} 
              className={`text-2xl ${pathname === "/" ? "text-[#C2F148]" : "text-zinc-500"}`}>
                <span className="text-[#C2F148]">{"//"}</span> HOME
            </Link>
            
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className={`text-2xl ${pathname === "/contact" ? "text-[#C2F148]" : "text-zinc-500"}`}>
                <span className="text-[#C2F148]">{"//"}</span> {t.contact.title}
            </Link>
              
              <div className="flex flex-col items-center gap-4 py-4">
                <button onClick={() => setShowCollections(!showCollections)} className={`text-2xl flex items-center gap-3 ${pathname.includes("/collections") ? "text-zinc-100" : "text-zinc-500"}`}>
                  <span className="text-[#C2F148]">{"//"}</span> {t.nav.collections}
                  <span className={`text-xs transition-transform ${showCollections ? "rotate-180" : ""}`}>▼</span>
                </button>
                
                <div className={`flex flex-col items-center gap-5 overflow-hidden transition-all duration-500 ${showCollections ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                  
                  <Link 
                    href="/collections"
                    onClick={() => setIsOpen(false)}
                    className={`text-[13px] tracking-[0.3em] ${pathname === "/collections" ? "text-[#C2F148] pointer-events-none" : "text-zinc-400"}`}>
                    [ {t.nav.viewAll} ]
                  </Link>

                  {/* mappa collezioni */}
                  {collections.map((col) => {
                    const isActive = pathname === col.slug;
                    return (
                      <Link
                        key={col.slug}
                        href={col.slug}
                        onClick={(e) => {
                          if (isActive) e.preventDefault(); //disabilita se siamo già lì
                          setIsOpen(false);
                        }}
                        className={`text-[13px] tracking-[0.3em] transition-colors ${
                          isActive 
                            ? "text-[#C2F148] font-bold" //evidenziato e bloccato
                            : "text-zinc-500 active:text-[#C2F148]"
                        }`}>
                        {isActive ? `> ${col.name} <` : col.name}
                      </Link>
                      );
                  })}
                </div>

                <div className="mt-8 flex flex-col items-center gap-4">
                  <span className="text-[9px] text-zinc-600 tracking-[0.4em]">
                    {t.nav.lang}
                  </span>
                  <div className="flex items-center gap-5">
                    {languagesList.map((l) => (
                      <button key={l.code} onClick={() => setLanguage(l.code)} className={`text-sm ${language === l.code ? "text-[#C2F148]" : "text-zinc-600"}`}>
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </>
  );
}