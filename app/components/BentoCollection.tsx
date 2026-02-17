"use client";
import Image from "next/image";
import Link from "next/link";

interface BentoItem {
  id: number;
  src: string;
  title: string;
  size?: "large" | "tall" | "wide" | "small";
}

interface BentoProps {
  items: BentoItem[];
  collectionTitle: string;
  totalItems?: number; // quanti capi ci sono in totale
}

export default function BentoCollection({ items, collectionTitle, totalItems = 0 }: BentoProps) {
  // solo i primi 4 per la bento preview
  const previewItems = items.slice(0, 3);
  const remainingCount = totalItems > 3 ? totalItems - 3 : 0;
  // collezione specifica
  const collectionSlug = collectionTitle.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full mb-10">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 max-w-7xl mx-auto">
        {previewItems.map((item, index) => {
          const size = item.size || (index % 3 === 0 ? "large" : index % 2 === 0 ? "small" : "tall");
          const isLast = index === previewItems.length - 1 && remainingCount > 0;

          return (
            <Link 
              href={`/collections/${collectionTitle.toLowerCase().replace(/\s+/g, '-')}`}
              key={item.id}
              className={`
                relative group overflow-hidden bg-zinc-900 border border-white/5 rounded-sm
                ${size === "large" ? "col-span-1 md:col-span-2 row-span-2 h-[350px] md:h-[600px]" : ""}
                ${size === "tall" ? "col-span-1 row-span-2 h-[350px] md:h-[500px]" : ""}
                ${size === "small" ? "col-span-1 h-[171px] md:h-[294px]" : ""}
                ${size === "wide" ? "col-span-2 h-[171px] md:h-[294px]" : ""}
              `}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover opacity-40 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert group-hover:scale-105"
              />

              {/* counter nell'ultima card */}
              {isLast && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-40 flex flex-col items-center justify-center border-2 border-dashed border-white/20 group-hover:bg-transparent transition-all duration-500">
                    <span className="font-mono text-4xl text-white font-black group-hover:text-black transition-colors duration-500">
                    +{remainingCount}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 mt-2 group-hover:text-black font-bold transition-colors duration-500">
                    [ SCOPRI ]
                    </span>
                </div>
            )}

              {/* titolo foto in basso */}
              <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <h3 className="font-mono text-[11px] text-white uppercase font-bold tracking-widest opacity-80 group-hover:opacity-100">
                  {item.title}
                </h3>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          );
        })}
      </div>

      <Link 
            href={`/collections/${collectionSlug}`}
            className="mx-auto block w-[93%] max-w-5xl overflow-hidden whitespace-nowrap border-y border-white/5 py-3 mb-6 group bg-black/30 hover:bg-yellow-400/50 transition-colors duration-300">
            <div className="animate-marquee-custom">
                {[...Array(15)].map((_, i) => (
                <span key={i} className="font-mono text-[12px] text-black mx-2 uppercase font-bold group-hover:text-black">
                    EXPLORE_{collectionTitle.replace(/\s+/g, '_')}_ARCHIVE // CLICK_TO_ENTER // 
                </span>
                ))}
            </div>
            {/* blocco duplicato per loop */}
            <div className="animate-marquee-custom">
                {[...Array(15)].map((_, i) => (
                <span key={i} className="font-mono text-[12px] text-black mx-2 uppercase font-bold group-hover:text-black">
                    EXPLORE_{collectionTitle.replace(/\s+/g, '_')}_ARCHIVE // CLICK_TO_ENTER // 
                </span>
                ))}
            </div>
        </Link>

    </div>
  );
}