import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Bara Capital | Platform Investasi & Pembiayaan Pengusaha Muda",
  description: "Bara Capital adalah platform investasi dan pembiayaan yang memberdayakan pengusaha muda Jawa Barat untuk naik kelas melalui akses permodalan yang terstruktur, transparan, dan profesional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
