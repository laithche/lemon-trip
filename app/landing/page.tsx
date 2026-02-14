import Image from "next/image";
import Link from "next/link";

export default function Landing() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Immagine di sfondo */}
            <Image
                src="/hero.jpg"
                alt="hero lemon trip"
                fill
                className="object-cover"
                priority 
            />

            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    
                    {/* TITOLO: Usiamo Rajdhani + uppercase + tracking per un look serigrafico/tecnico */}
                    <h1 className="font-rajdhani text-5xl md:text-5xl font-bold mb-6 uppercase tracking-wider drop-shadow-2xl text-white">
                        Lemon Trip
                    </h1>

                    <p className="font-roboto mt-4 text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                        Lemon Trip è un progetto creativo indipendente di abbigliamento 
                        <b className="text-white font-bold"> underground </b> 
                        nato nel 2021 in Sardegna. Dal nostro piccolo laboratorio di serigrafia realizziamo magliette e felpe 
                        <i className="italic"> stampate a mano</i>, con grafiche originali autoprodotte. 
                        Lavoriamo in modo totalmente <b className="text-white font-bold">artigianale</b>: 
                        ogni capo è unico e non presente nella grande distribuzione.
                    </p>

                <Link href="/collections"
                    className="font-rajdhani mt-8 px-10 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all rounded-sm inline-block">
                        Scopri di più
                </Link>
                    
                </div>
        </section>
    );
}