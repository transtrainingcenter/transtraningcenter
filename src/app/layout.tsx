import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT. Trans Putra Pratama - TRANS TRAINING CENTER",
  description:
    "Lembaga Pendidikan Ketrampilan yang mengkhususkan diri sebagai tempat Pendidikan, Pelatihan dan Pengembangan untuk mencetak SDM yang Handal, Berkarakter dan Terpecaya dalam bidang Alat Berat serta menjadi partner terpercaya dalam peningkatan dan pengembangan bisnis.",
  openGraph: {
    type: "website",
    title: "TRANS TRAINING CENTER - PT. Trans Putra Pratama",
    description:
      "Lembaga Pendidikan Ketrampilan yang mengkhususkan diri sebagai tempat Pendidikan, Pelatihan dan Pengembangan untuk mencetak SDM yang Handal, Berkarakter dan Terpecaya dalam bidang Alat Berat serta menjadi partner terpercaya dalam peningkatan dan pengembangan bisnis.",
    url: "https://transtrainingcenter.vercel.app",
    siteName: "TRANS TRAINING CENTER",
    images: [
      {
        url: "https://transtrainingcenter.vercel.app/banner.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://transtrainingcenter.vercel.app/banner.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRANS TRAINING CENTER - PT. Trans Putra Pratama",
    description:
      "Lembaga Pendidikan Ketrampilan yang mengkhususkan diri sebagai tempat Pendidikan, Pelatihan dan Pengembangan untuk mencetak SDM yang Handal, Berkarakter dan Terpecaya dalam bidang Alat Berat serta menjadi partner terpercaya dalam peningkatan dan pengembangan bisnis.",
    siteId: "1467726470533754880",
    creator: "@YourTwitterHandle", // Ganti dengan handle Twitter yang sesuai
    creatorId: "1467726470533754880",
    images: ["https://transtrainingcenter.vercel.app/banner.png"], // Ganti dengan URL gambar yang sesuai
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-blue-800 text-blue-100 ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
