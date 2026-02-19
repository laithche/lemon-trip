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
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFocused(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className="inline-block p-2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          transition-all duration-500 ease-in-out
          w-[280px] md:w-[400px] h-auto
          
          /* DESKTOP HOVER */
          md:grayscale md:brightness-75 md:contrast-150
          md:group-hover:grayscale-0 md:group-hover:brightness-100 md:group-hover:contrast-100 md:group-hover:scale-105

          /* MOBILE REVEAL */
          ${isFocused 
            ? "grayscale-0 brightness-100 contrast-100 scale-105" 
            : "grayscale brightness-75 contrast-150 scale-100"
          }
        `}
      />
    </div>
  );
}