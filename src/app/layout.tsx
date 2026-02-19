import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Rajdhani, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { LanguageProvider } from "@/src/context/LanguageContext";

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
  title: "Lemon Trip | Underground Wear",
  description: "Handmade Streetwear",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${roboto.variable}`}>
      
      <body className="antialiased bg-circuit-pattern min-h-screen flex flex-col">
          <LanguageProvider>
            <NavBar />
            <main className="grow">
              <Analytics />
              {children}
            </main>
          </LanguageProvider>
        <Footer />
      </body>
    </html>
  );
}