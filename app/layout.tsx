import type { Metadata } from "next";
import { Rajdhani, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Lemon Trip | Underground Handicraft",
  description: "Serigrafia artigianale in Sardegna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${rajdhani.variable} ${roboto.variable}`}>
      
      <body className="antialiased bg-circuit-pattern min-h-screen flex flex-col">
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}