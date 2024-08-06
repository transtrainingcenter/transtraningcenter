import { Button } from "@/components/Elements/Button";

const Hero = () => {
  return (
    <main className="container pt-28 lg:pb-20 lg:pt-48 pb-10">
      <h1 className="text-3xl font-bold">
        PT. <span className="text-yellow-500">Trans Putra Pratama</span>
      </h1>
      <p className="text-2xl font-bold">TRANS TRAINING CENTER</p>
      <p className="text-base mt-4 mb-6 lg:w-4/12">
        Lembaga Pelatihan Teknisi & Operator Alat Berat: Menyediakan pelatihan
        teknis komprehensif untuk mempersiapkan profesional alat berat yang
        kompeten.
      </p>
      <Button>Get Services</Button>
      <div className="grid grid-cols-3 gap-4 mt-4 lg:w-5/12">
        <div className="opacity-10 hover:opacity-100 bg-blue-100 aspect-video"></div>
        <div className="opacity-10 hover:opacity-100 bg-blue-100 aspect-video"></div>
        <div className="opacity-10 hover:opacity-100 bg-blue-100 aspect-video"></div>
        <div className="opacity-10 hover:opacity-100 bg-blue-100 aspect-video"></div>
        <div className="opacity-10 hover:opacity-100 bg-blue-100 aspect-video"></div>
        <div className="opacity-10 hover:opacity-100 bg-blue-100 aspect-video"></div>
      </div>
    </main>
  );
};

export { Hero };
