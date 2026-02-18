"use client";
import { usePathname } from "next/navigation";

export default function Footer({ forceShow = false}: { forceShow?: boolean }) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    
    if (isHome && !forceShow) {
        return null;
    }

    return (
        <footer className={`w-full py-8 text-center transition-colors duration-300
            ${forceShow 
                ? "bg-transparent text-white"
                : "bg-transparent text-zinc-900 border-t border-zinc-100"
            }
        `}>
            <div className="container mx-auto px-4">
                <p className="text-[10px] md:text-sm opacity-80 font-roboto tracking-wide">
                    <b className="tracking-widest font-rajdhani uppercase mr-2">
                        © 2026 LEMON TRIP
                    </b> 
                    <span className="hidden sm:inline opacity-40">|</span> 
                    <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">
                        lemontripstyle@gmail.com
                    </span>
                </p>
            </div>
        </footer>
    );
}