"use client"
import TitleCollection from "../../components/TitleCollection";
import { PhotoCard } from "../../components/PhotoCard";
import TripGallery from "../../components/TripGallery";
import { useLanguage } from "@/src/context/LanguageContext"

const TripU = ({ children }: { children: React.ReactNode }) => (
    <u className="decoration-[#C2F148] underline underline-offset-4 decoration-2 italic px-1">
        {children}
    </u>
);

export default function ConsciousTrip() {
    const { t } = useLanguage(); 

    return (
        <>

        <div className="w-full flex flex-col items-center">

            <div className="relative z-10 py-10 px-10"></div>

            <div className="group relative z-20 inline-block p-2 -mb-22 md:-mb-26">
                <TitleCollection 
                    src="/collections/conscioustrip/03conscioustrip.png"
                    alt="CONSCIOUS_TRIP"
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
                    <b><u className="decoration-[#C2F148] ...">{t.collections.conscious.title}</u></b>
                    {" "}
                    {t.collections.conscious.desc.split(/(Rat Brain|Eyes)/g).map((part, i) => (
                        ["Rat Brain", "Eyes"].includes(part) ? (
                            <TripU key={i}>{part}</TripU>
                        ) : (
                            part
                        )
                    ))}
                    <br /><br />
                    {t.collections.conscious.specs}
                    <br />
                    {t.collections.conscious.mat1}
                    <br />
                    {t.collections.conscious.mat2}
                    <br />
                    {t.collections.conscious.mat3}
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">

                <PhotoCard 
                    src="/collections/conscioustrip/eyes_hoodie_back.jpg" 
                    alt="Eyes - hoodie back" 
                    width={400} 
                    height={600} />

                <PhotoCard 
                    src="/collections/conscioustrip/eyes_hoodie_front.jpg" 
                    alt="Eyes - hoodie front" 
                    width={400} 
                    height={300} />

                <PhotoCard 
                    src="/collections/conscioustrip/eyes_tshirt_back.jpg" 
                    alt="Eyes - tshirt back" 
                    width={400} 
                    height={600} />

                <PhotoCard 
                    src="/collections/conscioustrip/eyes_tshirt_front.jpg" 
                    alt="Eyes - tshirt front" 
                    width={400} 
                    height={500} />

                <PhotoCard 
                    src="/collections/conscioustrip/eyes_zip_sleeve.png" 
                    alt="Eyes - zip sleeve" 
                    width={400} 
                    height={550} />

                <PhotoCard 
                    src="/collections/conscioustrip/eyes_zip.jpg" 
                    alt="Eyes - zip" 
                    width={400} 
                    height={450} />

                <PhotoCard 
                    src="/collections/conscioustrip/rat_hoodie_back.jpg" 
                    alt="Rat Brain - hoodie back" 
                    width={400} 
                    height={600} />

                <PhotoCard 
                    src="/collections/conscioustrip/rat_hoodie_front.jpg" 
                    alt="Rat Brain - hoodie front" 
                    width={400} 
                    height={200} />

                <PhotoCard 
                    src="/collections/conscioustrip/rat_tshirt_back.jpg" 
                    alt="Rat Brain - tshirt back" 
                    width={400} 
                    height={600} />

                <PhotoCard 
                    src="/collections/conscioustrip/rat_tshirt_front.jpg" 
                    alt="Rat Brain - tshirt front" 
                    width={400} 
                    height={500} />

                <PhotoCard 
                    src="/collections/conscioustrip/rat_zip.jpg" 
                    alt="Rat Brain - zip" 
                    width={400} 
                    height={500} />
                
            </div>
        </div>

        <TripGallery />

        </>
    )
}