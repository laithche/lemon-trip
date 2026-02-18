import Image from "next/image";
import Link from "next/link";
import { PhotoCard } from "@/app/components/PhotoCard";
import BrainGallery from "@/app/components/BrainGallery";

export default function BrainCocktail() {
    return (
        <>
        
        <div className="w-full flex flex-col items-center">

            <div className="relative z-10 py-10 px-10"></div>
            
            <div className="group relative z-20 inline-block -mb-15 md:-mb-19">
                <Image 
                    src="/collections/braincocktail/02braincocktail.png"
                    alt="etichetta BRAIN_COCKTAIL"
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
                    <b><u className="decoration-[#FEBADC] underline underline-offset-4 decoration-2">Brain Cocktail</u></b> è 
                    un caos creativo che non cerca ordine ma libertà. E’ la seconda tappa del viaggio Lemon Trip: 
                    il momento in cui l’istinto grezzo della prima fase (“Acid Lemonade”) si mescola con immagini, pensieri e 
                    simboli che iniziano a prendere forma. Questa fase del viaggio parla di spirito nomade, una vita selvaggia 
                    scandita da ritmi tribali e visioni distorte, e lo fa con quattro grafiche inedite: <i><u className="decoration-[#FEBADC] underline underline-offset-4 decoration-2">
                    Caravan Life</u>, <u className="decoration-[#FEBADC] underline underline-offset-4 decoration-2">Wild Soul</u>, <u className="decoration-[#FEBADC] underline underline-offset-4 decoration-2">
                    Tribal</u></i> e <i><u className="decoration-[#FEBADC] underline underline-offset-4 decoration-2">Acid</u></i>. 
                    <br />
                    Tutte e quattro le grafiche sono state stampate su:
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
                    src="/collections/braincocktail/acid_hoodie_back.png" 
                    alt="ACID - hoodie back" 
                    width={400} 
                    height={600} />

                <PhotoCard 
                    src="/collections/braincocktail/acid_tshirt_back.png" 
                    alt="ACID - tshirt back" 
                    width={400} 
                    height={300} />

                <PhotoCard 
                    src="/collections/braincocktail/caravanlife_hoodie_back.png" 
                    alt="CARAVAN LIFE - hoodie back" 
                    width={400} 
                    height={600} />

                <PhotoCard 
                    src="/collections/braincocktail/hoodie_front.png" 
                    alt="Logo - hoodie front" 
                    width={400} 
                    height={550} />

                <PhotoCard 
                    src="/collections/braincocktail/caravanlife_tshirt_back.png" 
                    alt="CARAVAN LIFE - tshirt back" 
                    width={400} 
                    height={500} />

                <PhotoCard 
                    src="/collections/braincocktail/tribal_hoodie_back.png" 
                    alt="TRIBAL - hoodie back" 
                    width={400} 
                    height={450} />

                <PhotoCard 
                    src="/collections/braincocktail/tribal_tshirt_back.png" 
                    alt="TRIBAL - tshirt back" 
                    width={400} 
                    height={400} />

                <PhotoCard 
                    src="/collections/braincocktail/wildsoul_tshirt_back.png" 
                    alt="WILD SOUL - tshirt back" 
                    width={400} 
                    height={500} />
                
                <PhotoCard 
                    src="/collections/braincocktail/tshirt_front.png" 
                    alt="Logo - tshirt front" 
                    width={400} 
                    height={400} />

                <PhotoCard 
                    src="/collections/braincocktail/zip_front.png" 
                    alt="Logo - zip front" 
                    width={400} 
                    height={550} />

                <PhotoCard 
                    src="/collections/braincocktail/wildsoul_hoodie_back.png" 
                    alt="WILD SOUL - hoodie back" 
                    width={400} 
                    height={450} />

                
            </div>
        </div>

        <BrainGallery />
        
        </>
    )
}