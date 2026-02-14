import type { Metadata } from "next";
import { Rajdhani, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// Configurazione dei font
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
  title: "Lemon Trip | Underground Clothing",
  description: "Serigrafia artigianale in Sardegna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // QUI CI DEVONO ESSERE I TAG HTML E BODY
    <html lang="it" className={`${rajdhani.variable} ${roboto.variable}`}>
      <body className="antialiased font-roboto bg-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}