"use client";

import Link from "next/link";
import { useState } from "react";
import { X, AlignRight } from "lucide-react";
import { Button } from "@/components/Elements/Button";

const NavMenu = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`${isNavMenuOpen ? "absolute w-screen h-screen " : "hidden"} lg:block -z-40 top-0 left-0 right-0 bg-blue-800`}
      >
        <div className="container flex flex-col lg:flex-row justify-between gap-4 lg:items-center h-full lg:py-4  py-28 ">
          <nav className="flex flex-col font-bold lg:flex-row justify-center gap-4">
            <Link href="/">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#programs">Programs</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <Link href="https://wa.me/6282336802981?text=Halo,%20saya%20ingin%20bertanya%20tentang%20program%20pembelajaran%20kerja%20ke%20tambang%20di%20Trans%20Training%20Center.%20Bisakah%20saya%20mendapatkan%20informasi%20tentang%20pendaftaran,%20jadwal,%20dan%20biaya%3F%20Terima%20kasih!">
            <Button className="w-full self-end">Get Services</Button>
          </Link>
        </div>
      </div>
      <button
        className="lg:hidden"
        onClick={() => {
          setIsNavMenuOpen(!isNavMenuOpen);
        }}
      >
        {isNavMenuOpen ? <X size={32} /> : <AlignRight size={32} />}
      </button>
    </div>
  );
};

export { NavMenu };
