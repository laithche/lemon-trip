import Image from "next/image";
import Link from "next/link";
import { AcidCard } from "@/app/components/AcidCard";

export default function AcidLemonade() {
    return (
        <>

        <div className="w-full flex justify-start px-4 mt-2">
            <Link href="/collections" className="bg-zinc-50 group flex items-center gap-2 font-mono text-xs text-zinc-900 hover:text-yellow-500 transition-colors">
                <span className="text-lg group-hover:translate-x-1 transition-transform"> ← </span>
                <span>[ TORNA_ALLE_COLLEZIONI ]</span>
            </Link>
        </div>

        <div className="w-full flex flex-col items-center">
            <div className="group relative z-20 overflow-hidden inline-block -mb-18 md:-mb-22">
                <Image 
                    src="/collections/acidlemonade/01acidlemonade.png"
                    alt="scopri la collezione CONSCIOUS_TRIP"
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
                    <b>Acid Lemonade</b> è l’impatto iniziale del viaggio Lemon Trip: una scossa fisica, sporca e primitiva 
                    dove l’estetica non cerca equilibrio ma intensità. Nasce da un’epoca spezzata, è una goccia di limone su 
                    una ferita aperta che non si chiude ma brucia abbastanza da costringerti a muoverti. Le sei grafiche di 
                    questa fase (<i>Cyber, Piercing, Zombie, Moon, Bones</i> e <i>Nun</i>) condensano quell’impatto: 
                    volti inquieti, corpi modificati, simboli velenosi e figure sacre deformate. Un immaginario fatto di 
                    maschere, insetti, ossa e carne che si scioglie — un linguaggio visivo ruvido, nato per dare forma al caos 
                    da cui parte.
                    <br />
                    Tutte e sei le grafiche di questa collezione sono state stampate solo su <b>T-Shirt</b> - materiali: 
                    100% cotone (50% cotone riciclato - 50% cotone) - con stampa davanti e logo classico dietro.
                </p>
            </div>
        </div>
        

        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                
                <AcidCard 
                    src="/collections/acidlemonade/cyber.png" 
                    alt="Cyber" 
                    width={400} 
                    height={600} 
                />

                <AcidCard 
                    src="/collections/acidlemonade/piercing.png" 
                    alt="Piercing" 
                    width={400} 
                    height={300} />

                <AcidCard 
                    src="/collections/acidlemonade/zombie.png" 
                    alt="Zombie" 
                    width={400} 
                    height={500} />

                <AcidCard 
                    src="/collections/acidlemonade/bones.png" 
                    alt="Bones" 
                    width={400} 
                    height={550} />

                <AcidCard 
                    src="/collections/acidlemonade/nun.png" 
                    alt="Nun" 
                    width={400} 
                    height={450} />

                <AcidCard 
                    src="/collections/acidlemonade/scolopendra.png" 
                    alt="Moon" 
                    width={400} 
                    height={400} />
                
            </div>
        </div>
        </>
    )
}