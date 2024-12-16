import React from "react";
import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="flex gap-2 mt-4 items-center">
      {/* Instagram Button */}
      <Link href="https://www.instagram.com/transtrainingcenter" passHref>
        <div
          className="p-2 rounded-full bg-white shadow-md hover:bg-white/80 hover:shadow-lg flex justify-center items-center cursor-pointer"
          aria-label="Instagram"
        >
          <Instagram size={28} className="text-pink-600 hover:text-pink-800" />
        </div>
      </Link>

      {/* WhatsApp Button */}
      <Link
        href="https://api.whatsapp.com/send/?phone=6282336802981&text=Halo%2C+saya+ingin+bertanya+tentang+program+pembelajaran+kerja+ke+tambang+di+Trans+Training+Center.+Bisakah+saya+mendapatkan+informasi+tentang+pendaftaran%2C+jadwal%2C+dan+biaya%3F+Terima+kasih%21&type=phone_number&app_absent=0"
        passHref
      >
        <div
          className="p-2 rounded-full bg-white shadow-md hover:bg-white/80 hover:shadow-lg flex justify-center items-center cursor-pointer"
          aria-label="WhatsApp"
        >
          <MessageCircle
            size={28}
            className="text-green-500 hover:text-green-700"
          />
        </div>
      </Link>
    </div>
  );
};

export { SocialMedia };
