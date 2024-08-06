import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        className="w-12 h-12"
        src="/logo.jpg"
        alt="gambar logo perusahaan"
        width="64"
        height="64"
      />
      <p className="text-xl font-bold">
        PT.
        <span className="text-yellow-500">
          Trans <br />
          Putra Pratama
        </span>
      </p>
    </Link>
  );
};

export { Logo };
