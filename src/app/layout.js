import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const SITE_URL = "https://www.bara.capital";

const title = "Bara Capital | Platform Investasi & Pembiayaan Pengusaha Muda";
const description = "Bara Capital adalah platform investasi dan pembiayaan yang memberdayakan pengusaha muda Jawa Barat untuk naik kelas melalui akses permodalan yang terstruktur, transparan, dan profesional.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Bara Capital",
    locale: "id_ID",
    url: "/",
    title,
    description,
    images: [{ url: "/logo.png", width: 500, height: 500, alt: "Bara Capital" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bara Capital",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
