"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function TitleCollection({ src, alt, width, height }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  
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
        threshold: 0.7,
        rootMargin: "-5% 0px -5% 0px" 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [isTouchDevice]);

  return (
    <div ref={elementRef} className="inline-block p-2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          transition-all duration-500 ease-in-out
          w-70 md:w-100 h-auto
          
          /* desktop */
          ${!isTouchDevice 
            ? "grayscale brightness-75 contrast-150 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-105" 
            : ""
          }

          /* touch */
          ${isTouchDevice && isFocused 
            ? "grayscale-0 brightness-100 contrast-100 scale-105" 
            : ""}
          
          ${isTouchDevice && !isFocused 
            ? "grayscale brightness-75 contrast-150 scale-100" 
            : ""}
        `}
      />
    </div>
  );
}