import Image from "next/image";
import { PhotoCard } from "@/app/components/PhotoCard";
import TripGallery from "@/app/components/TripGallery";

export default function ConsciousTrip() {
    return (
        <>

        <div className="w-full flex flex-col items-center">

            <div className="relative z-10 py-10 px-10"></div>

            <div className="group relative z-20 inline-block -mb-18 md:-mb-22">
                <Image 
                    src="/collections/conscioustrip/03conscioustrip.png"
                    alt="etichetta CONSCIOUS_TRIP"
                    width={400}
                    height={250}
                    className="
                            grayscale brightness-75 constrast-150
                            transition-all    
                            duration-500
                            group-hover:grayscale-0
                            group-hover:brightness-100 
                            group-hover:contrast-100
                            group-hover:scale-105"/>
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
                    <b><u className="decoration-[#C2F148] underline underline-offset-4 decoration-2">Conscious Trip</u></b> è la 
                    terza tappa del viaggio Lemon Trip: dopo l’acidità istintiva della prima fase (“Acid Lemonade”) 
                    e la miscela mentale della seconda (“Brain Cocktail”), nasce una consapevolezza più profonda. Parla del momento 
                    in cui il viaggio cambia tono e diventa introspezione — un&apos;estetica che porta in superficie ciò che stava sotto 
                    tutto il tempo. Le grafiche <i><u className="decoration-[#C2F148] underline underline-offset-4 decoration-2">Rat Brain</u> ed <u className="decoration-[#C2F148] underline underline-offset-4 decoration-2">Eyes</u></i> (insieme 
                    alle loro versioni rivisitate del logo) rappresentano due modi diversi di attraversare questa presa di coscienza. 
                    <br />
                    Entrambe le grafiche con i relativi loghi sono state stampate su:
                    <br />
                    · <b>Felpa con/senza zip</b> - materiali: 80% cotone 20% poliestere riciclato.
                    <br />
                    · <b>T-Shirt</b> - materiali: 100% cotone (50% cotone riciclato - 50% cotone).
                    <br />
                    Stampa grande sulla schiena e logo classico sul petto (lato sinistro).

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