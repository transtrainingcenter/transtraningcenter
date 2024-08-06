import Link from "next/link";
import { Logo } from "@/components/Elements/Logo";
import { Button } from "@/components/Elements/Button";

const Footer = () => {
  return (
    <footer className="container flex flex-col gap-4 py-10">
      <div>
        <Logo />
        <h3 className="text-xl font-bold mt-2">TRANS TRAINING CENTER</h3>
        <p className="text-base">
          Lembaga Pelatihan Teknisi & Operator Alat Berat
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <ul>
            <li>
              <Link href="/">Instagram</Link>
            </li>
            <li>
              <Link href="/">WhatsApp</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Company</h3>
          <ul>
            <li>
              <Link href="/">About Us</Link>
            </li>

            <li>
              <Link href="/">Programs</Link>
            </li>

            <li>
              <Link href="/">Gallery</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base text-center">
          © 2024 PT Trans Putras Oratama. <br /> All Rights Reserved.
        </p>
        <Button className="w-full">Get Services</Button>
      </div>
    </footer>
  );
};

export { Footer };
