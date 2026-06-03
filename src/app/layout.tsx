import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "./components/animation-provider";
import { Nav } from "./components/nav";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dunes & Demis | 4L Trophy 2027",
  description:
    "Équipage Dunes & Demis pour le 4L Trophy 2027. Aventure solidaire à travers le désert marocain.",
  icons: {
    icon: "/logo_sans_fond.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <AnimationProvider />
        <Nav />
        {children}
      </body>
    </html>
  );
}
