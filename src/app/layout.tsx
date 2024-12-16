import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRANS TRAINING CENTER - PT. Trans Putra Pratama",
  description:
    "Lembaga Pendidikan Ketrampilan yang mengkhususkan diri sebagai tempat Pendidikan, Pelatihan dan Pengembangan untuk mencetak SDM yang Handal, Berkarakter dan Terpecaya dalam bidang Alat Berat serta menjadi partner terpercaya dalam peningkatan dan pengembangan bisnis.",
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
