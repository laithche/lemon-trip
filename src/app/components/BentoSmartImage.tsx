//FOTO BENTO SMART

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BentoSmartImage({ src, alt }: { src: string; alt: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice] = useState(() => {
    if (typeof window !== "undefined") {
      return !window.matchMedia("(hover: hover)").matches;
    }
    return false;
  });

  useEffect(() => {
    //se è un pc si attiva l'hover
    if (!isTouchDevice) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFocused(entry.isIntersecting);
      },
      { 
        threshold: 0.5, 
        rootMargin: "-10% 0px -10% 0px" 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [isTouchDevice]);

  return (
    <div ref={elementRef} className="relative w-full h-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-700
          /* desktop hover */
          ${!isTouchDevice 
            ? "grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" 
            : ""
          }
          /* touch scroll */
          ${isTouchDevice && isFocused 
            ? "grayscale-0 brightness-100 scale-105" 
            : isTouchDevice ? "grayscale brightness-75 scale-100" : ""
          }
        `}
      />
    </div>
  );
}