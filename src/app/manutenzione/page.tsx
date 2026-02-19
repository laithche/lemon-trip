import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lemon Trip",
  description: "Something very acid is coming...",
  robots: "noindex, nofollow", 
};

export default function Maintenance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-center">
      <div className="space-y-6 flex flex-col items-center">

        <Image
          src="/logo.svg"
          alt="Lemon Trip logo"
          width={180}
          height={180}
          priority />
        <div className="space-y-2">
          <p className="text-xl text-gray-400">Something very acid is coming...</p>
          <p className="text-xl text-gray-400">⚠ STAY TUNED ⚠</p>
        </div>
      </div>
    </main>
  );
}