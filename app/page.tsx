import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer"; // Assicurati che il percorso sia giusto

export default function Landing() {
    return (
        <> 
        <section className="relative w-full min-h-[100dvh] bg-black flex flex-col">

            <Image
                src="/hero.jpg"
                alt="hero lemon trip"
                fill
                className="object-cover"
                priority 
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-10 text-white text-center">
                
                <Image
                    src="/logo.svg"
                    alt="Lemon Trip logo"
                    width={180}
                    height={180}
                    priority
                    className="w-[140px] md:w-[180px] h-auto mb-6" 
                />

                    <p className="font-roboto text-sm md:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                        <b className="text-white">Lemon Trip</b> è un progetto creativo indipendente di abbigliamento 
                        <b className="text-white font-bold"> underground </b> nato nel 2021 in Sardegna.
                        Dal nostro piccolo laboratorio di serigrafia realizziamo magliette e felpe 
                        <i className="text-white italic"> stampate a mano</i>, con grafiche originali ideate da noi: ogni disegno
                        è autoprodotto, unico e <i className="text-white italic">non</i> presente nella grande distribuzione.
                        Lavoriamo in modo totalmente <b className="text-white font-bold">artigianale</b>, dalla creazione del telaio
                        serigrafico alla stampa: ogni capo è stampato singolarmente e può avere piccole variazioni che lo rendono unico.
                    </p>

                <Link href="/collections"
                    className="font-rajdhani mt-10 px-10 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all rounded-sm">
                        Scopri le collezioni
                </Link>
                    
                </div>
            
            <div className="relative z-20 mt-auto w-full">
                    <Footer forceShow={true} />
            </div>

        </section>
        </>
    );
}