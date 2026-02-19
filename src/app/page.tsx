"use client"
import Image from "next/image";
import Link from "next/link"
import Footer from "./components/Footer";
import { useLanguage } from "@/src/context/LanguageContext"
import { Language } from "./translations";

export default function Landing() {
    const { language, setLanguage, t } = useLanguage();

    const languagesList = [
        { code: "it" as Language, label: "IT" },
        { code: "en" as Language, label: "EN" },
        { code: "es" as Language, label: "ES" },
        { code: "fr" as Language, label: "FR" }
    ];

    return (
        <> 
        <section className="relative w-full min-h-[100dvh] bg-black flex flex-col">

            {/* selettore lingua */}
            <div className="absolute top-6 right-6 z-30 flex gap-3 font-mono text-[10px] tracking-tighter text-white/50">
                {languagesList.map((l, index) => (
                    <div key={l.code} className="flex items-center gap-3">
                        <button 
                            onClick={() => setLanguage(l.code)}
                            className={`transition-all hover:text-[#C2F148] ${language === l.code ? "text-[#C2F148] font-bold" : ""}`}
                        >
                            {l.label}
                        </button>
                        {index < languagesList.length - 1 && <span className="opacity-20">/</span>}
                    </div>
                ))}
            </div>
            
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
                        <b className="text-white">Lemon Trip</b> {t.landing.p1} 
                        <b className="text-white font-bold"> {t.landing.p2} </b> {t.landing.p3}
                        <i className="text-white italic"> {t.landing.p4}</i>{t.landing.p5}
                        <i className="text-white italic"> {t.landing.p6} </i> {t.landing.p7}
                        <b className="text-white font-bold"> {t.landing.p8}</b>{t.landing.p9}
                    </p>

                <Link href="/collections"
                    className="font-rajdhani mt-10 px-10 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all rounded-sm">
                        {t.landing.button}
                </Link>
                    
                </div>
            
            <div className="relative z-20 mt-auto w-full">
                    <Footer forceShow={true} />
            </div>

        </section>
        </>
    );
}