// CARD PER LE FOTO DELLE COLLEZIONI

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
  
  // Rilevamento touch sicuro per SSR ed efficiente per React
  const [isTouchDevice] = useState(() => {
    if (typeof window !== "undefined") {
      return !window.matchMedia("(hover: hover)").matches;
    }
    return false;
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isTouchDevice) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFocused(entry.isIntersecting);
      },
      { 
        threshold: 0.4, 
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [isTouchDevice]);

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
          
          /* desktop */
          ${!isTouchDevice 
            ? "grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-105" 
            : ""
          }

          /* touch */
          ${isTouchDevice && isFocused 
            ? "grayscale-0 brightness-100 contrast-100 scale-105" 
            : ""}
          
          ${isTouchDevice && !isFocused 
            ? "grayscale brightness-75 contrast-125 scale-100" 
            : ""}
        `}
      />
      
      {/* overlay grana */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.20] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* titolo alt: basato sul dispositivo e sullo stato */}
      <div className={`
        absolute bottom-4 left-4 z-20 transition-opacity duration-300
        /* desktop -> appare su hover */
        ${!isTouchDevice ? "opacity-0 group-hover:opacity-100" : ""}
        /* touch -> appare quando è a fuoco nello scroll */
        ${isTouchDevice ? (isFocused ? "opacity-100" : "opacity-0") : ""}
      `}>
        <span className="bg-yellow-400 text-black font-mono text-xs px-2 py-1 uppercase font-bold shadow-lg">
          {alt}
        </span>
      </div>
    </div>
  );
}