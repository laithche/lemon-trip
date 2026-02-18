"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface AcidCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function PhotoCard({ src, alt, width, height }: AcidCardProps) {
  const [isFocused, setIsFocused] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //solo su mobile (sotto i 768px) attiviamo lo scroll reveal
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        //si attiva quando l'immagine è ben visibile nel viewport
        setIsFocused(entry.isIntersecting);
      },
      { 
        threshold: 0.4, //si accende quando il 40% è visibile
        rootMargin: "-5% 0px -5% 0px" 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={elementRef}
      className="group relative w-full overflow-hidden rounded-sm border border-white/10 bg-zinc-900 mb-4 break-inside-avoid"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          w-full h-auto block transition-all duration-700 ease-in-out
          
          /* STATO BASE / DESKTOP HOVER */
          md:grayscale md:brightness-75 md:contrast-125
          md:group-hover:grayscale-0 md:group-hover:brightness-100 md:group-hover:contrast-100 md:group-hover:scale-105

          /* MOBILE REVEAL: Gestito da JS */
          ${isFocused 
            ? "grayscale-0 brightness-100 contrast-100 scale-105" 
            : "grayscale brightness-75 contrast-125 scale-100"
          }
        `}
      />
      
      {/* overlay Grana */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.20] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* titolo alt: su mobile appare insieme al colore */}
      <div className={`
        absolute bottom-4 left-4 z-20 transition-opacity duration-300
        md:opacity-0 md:group-hover:opacity-100
        ${isFocused ? "opacity-100" : "opacity-0"}
      `}>
        <span className="bg-yellow-400 text-black font-mono text-xs px-2 py-1 uppercase font-bold">
          {alt}
        </span>
      </div>
    </div>
  );
}