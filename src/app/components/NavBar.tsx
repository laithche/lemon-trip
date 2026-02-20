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
    <nav className="sticky top-0 z-100 w-full">
      <div className="relative w-full h-24 md:h-30 bg-zinc-900 border-b border-white/10 flex items-center justify-center">
        
        <NoiseOverlay />

        <div className="absolute inset-0 z-60 pointer-events-none opacity-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />
        
        {/* layout desktop */}
        <div className="hidden md:flex w-full items-center justify-center gap-24 font-mono text-[11px] uppercase tracking-[0.3em]">
          <Link 
            href="/" 
            className="text-zinc-100 hover:text-[#C2F148] transition-colors shrink-0">
            <span className="text-[#C2F148]">{"//"}</span>
            HOME
          </Link>

          <div className="shrink-0">
            <Image
              src="/icon.svg"
              width={95}
              height={95}
              alt="logo Lemon Trip"
              className="brightness-110" />
          </div>

          {/* sezione collezioni */}
          <div className="relative" ref={collRef}>
            {pathname.split('/').length > 2 && pathname.includes('/collections/') ? (
              /* dentro una collezione specifica -> MOSTRA DROPDOWN */
              <>
                <button 
                  onClick={() => setIsCollOpen(!isCollOpen)}
                  className="flex items-center gap-2 text-[#C2F148] transition-colors font-bold">
                  <span className="text-[#C2F148]">{"//"}</span>
                  {t.nav.collections}
                  <ChevronDown size={12} className={`transition-transform duration-300 ${isCollOpen ? "rotate-180" : ""}`} />
                </button>

                {isCollOpen && (
                  <div className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/10 p-1 flex flex-col min-w-50 shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-130">
                    <Link 
                      href="/collections"
                      onClick={() => setIsCollOpen(false)}
                      className="text-[9px] text-center py-3 border-b border-white/5 text-zinc-500 hover:text-white transition-colors">
                      [ {t.nav.viewAll} ]
                    </Link>
                    {collections.map((col) => (
                      <Link
                        key={col.slug}
                        href={col.slug}
                        onClick={() => setIsCollOpen(false)}
                        className={`text-[9px] text-center py-4 tracking-[0.2em] transition-all hover:bg-white/5 ${pathname === col.slug ? "text-[#C2F148] bg-white/5" : "text-zinc-400"}`}>
                        {col.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* dentro collections -> niente dropdown */
              <Link 
                href="/collections" 
                className={`text-zinc-100 hover:text-[#C2F148] transition-colors shrink-0 ${pathname === '/collections' ? 'text-[#C2F148]' : ''}`}>
                <span className="text-[#C2F148]">{"//"}</span>
                {t.nav.collections}
              </Link>
            )}
          </div>

          {/* selettore lingua desktop */}
          <div className="absolute right-10" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 hover:text-[#C2F148] transition-all border border-white/10 px-3 py-1.5 rounded-sm bg-black/40">
              {currentLang}
              <ChevronDown size={12} className={`transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} />
            </button>

            {isLangOpen && (
              <div className="absolute top-full mt-2 right-0 bg-zinc-900 border border-white/10 p-1 flex flex-col min-w-[80px] shadow-2xl z-[120]">
                {languagesList.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`text-[10px] text-center py-2 transition-colors hover:bg-white/5 ${language === l.code ? "text-[#C2F148] font-bold" : "text-zinc-500"}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* layout mobile */}
        <div className="flex md:hidden w-full items-center justify-between">

          <button onClick={() => setIsOpen(true)} className="text-[#C2F148]">
            <Menu size={28} strokeWidth={1.5} />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Image 
              src="/icon.svg" 
              width={90} 
              height={90} 
              alt="logo Lemon Trip" />
          </div>

          <div className="w-7" /> 
        </div>

        {/* sidebar */}
        <div className={`fixed inset-0 z-110 bg-black/95 backdrop-blur-md transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-[#C2F148]" >
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* link sidebar */}
          <div className="flex flex-col h-full items-center justify-center gap-12 font-mono text-2xl tracking-[0.2em]">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 active:text-[#C2F148]">
              HOME
            </Link>

            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => setShowCollections(!showCollections)}
                className={`text-2xl flex items-center gap-2 ${pathname.includes("/collections") ? "text-zinc-100" : "text-zinc-500"}`}>
                {t.nav.collections}
                <span className={`text-xs transition-transform duration-300 ${showCollections ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {/* menu tendina collezioni */}
              <div className={`flex flex-col items-center gap-5 overflow-hidden transition-all duration-500 ${showCollections ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                
                <Link 
                  href="/collections"
                  onClick={() => setIsOpen(false)}
                  className={`text-[13px] tracking-[0.3em] ${pathname === "/collections" ? "text-[#C2F148] pointer-events-none" : "text-zinc-400"}`}>
                  [ {t.nav.viewAll} ]
                </Link>

                {/* mappa delle collezioni */}
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
            </div>
            
            {/* selettore lingua sidebar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 font-mono text-xs px-10">
              {languagesList.map((l, index) => (
                <div key={l.code} className="flex items-center gap-3">
                  <button 
                    onClick={() => {
                      setLanguage(l.code);
                    }}
                    className={`transition-all hover:text-[#C2F148] ${language === l.code ? "text-[#C2F148] font-bold" : "text-zinc-500"}`}
                  >
                    {l.label}
                  </button>
                  {index < languagesList.length - 1 && <span className="text-zinc-800">/</span>}
                </div>
              ))}
            </div>
                        
            <div className="absolute bottom-10 text-[10px] text-zinc-700 tracking-[0.5em] uppercase">
              Lemon Trip // 2026
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}