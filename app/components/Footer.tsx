"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const isLanding = pathname === "/landing"; 

    return (
        <footer className={`
            w-full py-6 text-center transition-all duration-500
            ${isLanding 
                ? "absolute bottom-0 z-30 bg-transparent text-white" 
                : "relative bg-transparent text-black"}
        `}>
            <div className="container mx-auto px-4">
                <p className="text-sm mt-1 opacity-70 font-roboto">
                    <b className="tracking-widest font-rajdhani">
                        © 2026 LEMON TRIP
                    </b> - lemontripstyle@gmail.com
                </p>
            </div>
        </footer>
    );
}