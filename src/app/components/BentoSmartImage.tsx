//FOTO BENTO SMART

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BentoSmartImage({ src, alt }: { src: string; alt: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //solo su mobile (sotto i 768px) attiviamo lo scroll reveal
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        //quando l'immagine è verso il centro (circa 40% visibile)
        setIsFocused(entry.isIntersecting);
      },
      { 
        threshold: 0.5, //si attiva quando il 50% dell'immagine è visibile
        rootMargin: "-10% 0px -10% 0px" //stringe l'area di attivazione al centro
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className="relative w-full h-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-700
          /* DESKTOP: hover classico */
          md:opacity-40 md:grayscale md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:scale-105
          
          /* MOBILE: gestito dallo stato js */
          ${isFocused 
            ? "opacity-100 grayscale-0 scale-105" 
            : "opacity-40 grayscale scale-100"
          }
        `}
      />
    </div>
  );
}