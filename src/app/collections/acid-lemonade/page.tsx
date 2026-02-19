"use client"
import TitleCollection from "../../components/TitleCollection";
import { PhotoCard } from "../../components/PhotoCard";
import AcidGallery from "../../components/AcidGallery";
import { useLanguage } from "@/src/context/LanguageContext"

const AcidU = ({ children }: { children: React.ReactNode }) => (
    <u className="decoration-[#F3CB5D] underline underline-offset-4 decoration-2 italic px-1">
        {children}
    </u>
);

export default function AcidLemonade() {
    const { t } = useLanguage();

    return (
        <>

        <div className="w-full flex flex-col items-center">

            <div className="relative z-10 py-10 px-10"></div>
            
            <div className="group relative z-20 inline-block p-2 -mb-22 md:-mb-26">
                <TitleCollection 
                    src="/collections/acidlemonade/01acidlemonade.png"
                    alt="ACID_LEMONADE"
                    width={400}
                    height={250} />
            </div>
        </div>

        <div className="w-full flex justify-center items-center py-10 px-4">
            <div className="relative z-10 max-w-5xl mx-4 p-8 md:p-12 bg-white/80 backdrop-blur-md rounded-sm border border-white/20 shadow-2xl overflow-hidden"> 

                <div className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none animate-grain"
                    style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}>
                </div>
                
                <p className="relative z-10 font-roboto text-base md:text-lg tracking-tight text-zinc-900 leading-relaxed max-w-5xl mx-auto text-center">
                    <b><u className="decoration-[#F3CB5D] underline underline-offset-4 decoration-2">{t.collections.acid.title}</u></b>
                    {" "}
                    {t.collections.acid.desc.split(/(Cyber|Piercing|Zombie|Moon|Bones|Nun)/g).map((part, i) => (
                        ["Cyber", "Piercing", "Zombie", "Moon", "Bones", "Nun"].includes(part) ? (
                        <AcidU key={i}>{part}</AcidU>
                        ) : (
                        part
                        )
                    ))}
                    <br /><br />
                    {t.collections.acid.specs}
                </p>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">

                <PhotoCard 
                    src="/collections/acidlemonade/cyber.png" 
                    alt="Cyber" 
                    width={400} 
                    height={600} />

                <PhotoCard 
                    src="/collections/acidlemonade/piercing.png" 
                    alt="Piercing" 
                    width={400} 
                    height={300} />

                <PhotoCard 
                    src="/collections/acidlemonade/logo.png" 
                    alt="Logo" 
                    width={400} 
                    height={600} />

                <PhotoCard 
                    src="/collections/acidlemonade/zombie.png" 
                    alt="Zombie" 
                    width={400} 
                    height={500} />

                <PhotoCard 
                    src="/collections/acidlemonade/bones.png" 
                    alt="Bones" 
                    width={400} 
                    height={550} />

                <PhotoCard 
                    src="/collections/acidlemonade/nun.png" 
                    alt="Nun" 
                    width={400} 
                    height={450} />

                <PhotoCard 
                    src="/collections/acidlemonade/moon.png" 
                    alt="Moon" 
                    width={400} 
                    height={400} />
                
            </div>
        </div>

        <AcidGallery />
        </>
    )
}