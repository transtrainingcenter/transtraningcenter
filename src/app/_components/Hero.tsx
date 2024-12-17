import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Elements/Button";

const Hero = () => {
  return (
    <main className="container pt-28 lg:pb-20 lg:pt-48 pb-10 gap-10 flex flex-col lg:flex-row">
      <div>
        <h1 className="text-3xl font-bold">
          PT. <span className="text-yellow-500">Trans Putra Pratama</span>
        </h1>
        <p className="text-2xl font-bold">TRANS TRAINING CENTER</p>
        <p className="text-base mt-4 mb-6 lg:w-10/12">
          Lembaga Pelatihan Teknisi & Operator Alat Berat: Menyediakan pelatihan
          teknis komprehensif untuk mempersiapkan profesional alat berat yang
          kompeten.
        </p>
        <Button>Get Services</Button>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-8 lg:w-8/12">
          <div className="opacity-30 overflow-hidden flex hover:opacity-100 bg-blue-100 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <Image
              src="/ps1.jpg"
              width={120}
              height={90}
              alt="Picture of the Partner Ship"
              className="object-cover w-full"
            />
          </div>
          <div className="opacity-30 overflow-hidden flex hover:opacity-100 bg-blue-100 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <Image
              src="/ps2.jpg"
              width={120}
              height={90}
              alt="Picture of the Partner Ship"
              className="object-cover w-full"
            />
          </div>
          <div className="opacity-30 overflow-hidden flex hover:opacity-100 bg-blue-100 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <Image
              src="/ps3.jpg"
              width={120}
              height={90}
              alt="Picture of the Partner Ship"
              className="object-cover w-full"
            />
          </div>
          <div className="opacity-30 overflow-hidden flex hover:opacity-100 bg-blue-100 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <Image
              src="/ps4.jpg"
              width={120}
              height={90}
              alt="Picture of the Partner Ship"
              className="object-cover w-full"
            />
          </div>
          <div className="opacity-30 overflow-hidden flex hover:opacity-100 bg-blue-100 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <Image
              src="/ps5.jpg"
              width={120}
              height={90}
              alt="Picture of the Partner Ship"
              className="object-cover w-full"
            />
          </div>
          <div className="opacity-30 overflow-hidden flex hover:opacity-100 bg-blue-100 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <Image
              src="/ps6.jpg"
              width={120}
              height={90}
              alt="Picture of the Partner Ship"
              className="object-cover w-full"
            />
          </div>
          <div className="opacity-30 overflow-hidden flex hover:opacity-100 bg-blue-100 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <Image
              src="/ps7.jpg"
              width={120}
              height={90}
              alt="Picture of the Partner Ship"
              className="object-cover w-full"
            />
          </div>
          <div className="opacity-30 overflow-hidden flex hover:opacity-100 bg-blue-100 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <Image
              src="/ps8.jpg"
              width={120}
              height={90}
              alt="Picture of the Partner Ship"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-8 items-center">
        <Link
          href="https://www.instagram.com/p/CsShYpoLa36/?img_index=1"
          className="bg-primary hidden lg:block lg:w-10/12"
        >
          <Image
            className="border m-auto w-full transition-all duration-300 ease-in-out transform hover:brightness-100 hover:scale-110 hover:z-20 object-cover"
            src="/bg3.jpg"
            width={300}
            height={300}
            alt="Picture of the Partner Ship"
          />
        </Link>
      </div>
    </main>
  );
};

export { Hero };
