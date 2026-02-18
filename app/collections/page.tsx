import BentoCollection from "../components/BentoCollection";
import Image from "next/image";
import Link from "next/link";

export const acidCollection = [
  { id: 1, src: "/collections/acidlemonade/cyber.png", title: "Cyber" },
  { id: 2, src: "/collections/acidlemonade/zombie.png", title: "Zombie" },
  { id: 3, src: "/collections/acidlemonade/moon.png", title: "Moon" },
];

export const brainCollection = [
  { id: 1, src: "/collections/braincocktail/tshirt_front.png", title: "Logo" },
  { id: 2, src: "/collections/braincocktail/wildsoul_hoodie_back.png", title: "Wild Soul" },
  { id: 3, src: "/collections/braincocktail/tribal_tshirt_back.png", title: "Tribal" },
];

export const tripCollection = [
  { id: 1, src: "/collections/conscioustrip/eyes_hoodie_back.jpg", title: "Eyes" },
  { id: 2, src: "/collections/conscioustrip/rat_tshirt_front.jpg", title: "Rat Brain" },
  { id: 3, src: "/collections/conscioustrip/eyes_tshirt_front.jpg", title: "Eyes Logo" },
];

export default function Collections() {
    return (
        <>
   
        <div className="min-h-screen hero-pattern">
            
            <div className="relative z-10 py-10 px-10">

                <div className="flex flex-col lg:flex-row justify-center items-start gap-4 w-full px-2">

                <section className="w-full lg:w-1/2 overflow-hidden">
                    <div className="w-full flex justify-center items-center py-4">
                        <Link href="/collections/acid-lemonade" className="group relative inline-block">
                            <Image 
                                src="/collections/acidlemonade/01acidlemonade.png"
                                alt="scopri la collezione ACID_LEMONADE"
                                width={350}
                                height={200}
                                className="
                                    grayscale brightness-75 contrast-150
                                    transition-all    
                                    duration-500    
                                    group-hover:grayscale-0
                                    group-hover:brightness-100 
                                    group-hover:contrast-100
                                    group-hover:scale-105" />
                        </Link>
                    </div>
                    <BentoCollection 
                        items={acidCollection} 
                        collectionTitle="Acid Lemonade" 
                        totalItems={15}
                        />
                </section>

                <section className="w-full lg:w-1/2 overflow-hidden">
                    <div className="w-full flex justify-center items-center py-4">
                        <Link href="/collections/brain-cocktail" className="group relative inline-block">
                            <Image 
                                src="/collections/braincocktail/02braincocktail.png"
                                alt="scopri la collezione BRAIN_COCKTAIL"
                                width={350}
                                height={200}
                                className="
                                    grayscale brightness-75 contrast-150 
                                    transition-all    
                                    duration-500    
                                    group-hover:grayscale-0 
                                    group-hover:brightness-100 
                                    group-hover:contrast-100
                                    group-hover:scale-105"/>
                        </Link>
                    </div>
                    <BentoCollection 
                        items={brainCollection} 
                        collectionTitle="Brain Cocktail" 
                        totalItems={12} 
                        />
                </section>

                <section className="w-full lg:w-1/2 overflow-hidden">
                    <div className="w-full flex justify-center items-center py-4">
                        <Link href="/collections/conscious-trip" className="group relative inline-block">
                            <Image 
                                src="/collections/conscioustrip/03conscioustrip.png"
                                alt="scopri la collezione CONSCIOUS_TRIP"
                                width={350}
                                height={200}
                                className="
                                    grayscale brightness-75 constrast-150
                                    transition-all    
                                    duration-500
                                    group-hover:grayscale-0
                                    group-hover:brightness-100 
                                    group-hover:contrast-100
                                    group-hover:scale-105"/>
                        </Link>
                    </div>
                    <BentoCollection 
                        items={tripCollection} 
                        collectionTitle="Conscious Trip" 
                        totalItems={12} 
                        />
                </section>
                </div>
            </div>
        </div>

        </>
    )
}