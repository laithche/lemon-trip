import Image from "next/image";
import Link from "next/link";

export default function Landing() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">

            <Image
                src="/hero.jpg"
                alt="hero lemon trip"
                fill
                className="object-cover"
                priority 
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    
                    <Image
                        src="/logo.svg"
                        alt="Lemon Trip logo"
                        width={180}
                        height={180}
                        priority />

                    <p className="font-roboto mt-4 text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                        <b className="text-white">Lemon Trip</b> è un progetto creativo indipendente di abbigliamento 
                        <b className="text-white font-bold"> underground </b> nato nel 2021 in Sardegna.
                        Dal nostro piccolo laboratorio di serigrafia realizziamo magliette e felpe 
                        <i className="text-white italic"> stampate a mano</i>, con grafiche originali ideate da noi: ogni disegno
                        è autoprodotto, unico e <i className="text-white italic">non</i> presente nella grande distribuzione.
                        Lavoriamo in modo totalmente <b className="text-white font-bold">artigianale</b>, dalla creazione del telaio
                        serigrafico alla stampa: ogni capo è stampato singolarmente e può avere piccole variazioni che lo rendono unico.
                    </p>

                <Link href="/collections"
                    className="font-rajdhani mt-8 px-10 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all rounded-sm inline-block">
                        Scopri le nostre collezioni
                </Link>
                    
                </div>
        </section>
    );
}