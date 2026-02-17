import Image from "next/image";

interface AcidCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function AcidCard({ src, alt, width, height }: AcidCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-zinc-900 mb-4 break-inside-avoid">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        className="
          grayscale brightness-75 contrast-125
          transition-all duration-700 ease-in-out
          group-hover:grayscale-0
          group-hover:brightness-100 
          group-hover:contrast-100
          group-hover:scale-105
        "
      />
      
      {/* Overlay Grana */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.20] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}