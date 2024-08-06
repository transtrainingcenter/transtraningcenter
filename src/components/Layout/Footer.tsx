import { Logo } from "@/components/Elements/Logo";
import { Button } from "@/components/Elements/Button";
import {
  FooterLinks,
  FooterLinksProps,
} from "@/components/Fragments/FooterLinks";

const dataFooterLinks: FooterLinksProps[] = [
  {
    heading: "Follow Us",
    links: [
      { title: "Instagram", href: "https://instagram.com" },
      { title: "WhatsApp", href: "https://whatsapp.com" },
    ],
  },
  {
    heading: "Company",
    links: [
      { title: "Home", href: "#" },
      { title: "About", href: "#about" },
      { title: "Programs", href: "#programs" },
      { title: "Gallery", href: "#gallery" },
      { title: "Contact", href: "#contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="container flex flex-col lg:flex-row lg:justify-between lg:flex-wrap gap-4 lg:gap-8 py-10">
      <div>
        <Logo />
        <h3 className="text-xl font-bold mt-2">TRANS TRAINING CENTER</h3>
        <p className="text-base">
          Lembaga Pelatihan Teknisi & Operator Alat Berat
        </p>
      </div>

      <FooterLinks data={dataFooterLinks} />

      <div className="flex flex-col gap-2 lg:w-full lg:flex-row lg:justify-between">
        <p className="text-base text-center lg:text-left ">
          © 2024 PT Trans Putras Oratama. <br /> All Rights Reserved.
        </p>
        <Button className="w-full lg:w-max">Get Services</Button>
      </div>
    </footer>
  );
};

export { Footer };
