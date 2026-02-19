// GALLERY DISEGNI IN FONDO ALLA PAGINA

"use client"
import { useState } from "react";
import Image from "next/image";

export default function TripGallery() {

    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const disegni = [
        { id: "01", name: "EYES", src: "/collections/conscioustrip/img/eyes.jpg" },
        { id: "02", name: "LOGO_EYES", src: "/collections/conscioustrip/img/eyelogo.jpg" },
        { id: "03", name: "RAT_BRAIN", src: "/collections/conscioustrip/img/ratbrain.jpg" },
        { id: "04", name: "LOGO_RAT_BRAIN", src: "/collections/conscioustrip/img/ratlogo.jpg" },
    ];

    return (
        <>
        
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {disegni.map((item) => (
                        <div key={item.id} className="group flex flex-col">
                            <div 
                                className="relative aspect-4/5 overflow-hidden border border-white/10 bg-zinc-900 shadow-lg cursor-zoom-in"
                                onClick={() => setSelectedImg(item.src)} //clicca per aprire
                            >
                                <Image 
                                    src={item.src} 
                                    alt={item.name} 
                                    fill
                                    className="object-cover grayscale brightness-75 contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                                />
                        </div>
                        
                        <div className="mt-3 flex flex-col items-center">
                            <span className="mt-2 font-mono text-[10px] tracking-[0.2em] text-zinc-900 uppercase group-hover:text-zinc-600 transition-colors text-center">
                                {"//"} {item.id}_{item.name}
                            </span>
                        </div>
                    </div>
                ))}

            </div>
        </div>

        {/* modal overlay */}
        {selectedImg && (
            <div 
                className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out p-4 md:p-10"
                onClick={() => setSelectedImg(null)} //clicca ovunque per chiudere
                >
                <div className="relative w-full h-full max-w-5xl max-vh-90">
                    <Image 
                        src={selectedImg} 
                        alt="Ingrandimento" 
                        fill
                        className="object-contain" //mantiene le proporzioni senza tagliare
                    />
                    </div>

                    <button className="absolute top-8 right-8 text-[#F3CB5D] font-mono text-xl hover:scale-125 transition-transform">
                        [ X ]
                    </button>
                </div>
            )}

        </>
    )
}