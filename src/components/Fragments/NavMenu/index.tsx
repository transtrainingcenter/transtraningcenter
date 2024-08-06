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
        className={`${isNavMenuOpen ? "absolute" : "hidden"} -z-40 top-0 left-0 right-0 w-screen h-screen bg-blue-500`}
      >
        <div className="container flex flex-col justify-between h-full py-28 ">
          <nav className="flex flex-col font-bold justify-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Programs</Link>
            <Link href="/">Gallery</Link>
            <Link href="/">Contact</Link>
          </nav>
          <Link href="/">
            <Button className="w-full self-end">Get Services</Button>
          </Link>
        </div>
      </div>
      <button
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
