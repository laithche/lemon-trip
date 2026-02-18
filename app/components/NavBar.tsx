"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NoiseOverlay = () => (
  <div 
    className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none mix-blend-overlay"
    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
  />
);

export default function NavBar() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <nav className="sticky top-0 z-100 w-full">
      <div className="relative w-full h-24 md:h-30 bg-zinc-900 border-b border-white/10 flex items-center justify-center overflow-hidden">
        <NoiseOverlay />
        
        <div className="relative z-10 w-full max-w-7xl px-6 flex items-center justify-center gap-12 md:gap-24 font-mono text-[10px] tracking-[0.3em] uppercase">
          <Link 
            href="/" 
            className="text-zinc-100 hover:text-[#C2F148] transition-colors flex items-center gap-2 group min-w-25"
          >
            <span className="text-[#C2F148]">{"//"}</span>
            HOME
          </Link>

          <div className="shrink-0">
            <Image
              src="/icon.svg"
              width={95}
              height={95}
              alt="logo Lemon Trip"
              className="brightness-110"
            />
          </div>

          <Link 
            href="/collections" 
            className="text-zinc-100 hover:text-[#C2F148] transition-colors flex items-center gap-2 group min-w-25"
          >
            <span className="text-[#C2F148]">{"//"}</span>
            COLLEZIONI
          </Link>
        </div>

        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-size[100%_2px,3px_100%]" />
      </div>
    </nav>
  );
}