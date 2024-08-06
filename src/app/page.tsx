import { Button } from "@/components/Elements/Button";

export default function HomePage() {
  return (
    <>
      <main className="container pt-28 pb-10">
        <h1 className="text-3xl font-bold">
          PT. <span className="text-yellow-500">Trans Putra Pratama</span>
        </h1>
        <p className="text-2xl font-bold">TRANS TRAINING CENTER</p>
        <p className="text-base mt-4 mb-6">
          Lembaga Pelatihan Teknisi & Operator Alat Berat: Menyediakan pelatihan
          teknis komprehensif untuk mempersiapkan profesional alat berat yang
          kompeten.
        </p>
        <Button>Get Services</Button>
      </main>

      <section id="about" className="py-10 ">
        <h2 className="text-center text-2xl font-bold bg-blue-950 py-4">
          ABOUT TTC
        </h2>

        <div className="container flex flex-col py-4 gap-4">
          <h3 className="text-xl font-bold">Indoduction</h3>
          <div className="flex flex-col gap-2">
            <p className="text-base">
              TRANS TRAINING CENTER adalah sebuah Lembaga  Pendidikan
              Ketrampilan yang mengkhususkan diri  sebagai tempat Pendidikan,
              Pelatihan dan  Pengembangan untuk mencetak SDM yang Handal,
              Berkarakter dan Terpecaya dalam bidang  Alat Berat  serta menjadi
              partner terpercaya  dalam peningkatan dan pengembangkan bisnis.
            </p>
            <div className="bg-blue-100 aspect-video"></div>
          </div>
        </div>

        <div className="container flex flex-col py-4 gap-4">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-bold">Visi</h3>
            <p className="text-base">
              Menjadi Lembaga Pendidikan  dan pelatihan alat berat  yang
              profesional, handal, terpercaya dan berkarakter
            </p>
          </div>
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-bold">Misi</h3>
            <ul className="text-base list-disc list-outside pl-4">
              <li>
                Menyelenggarakan program pendidikan dan pelatihan alat berat
                secara profesional.
              </li>
              <li>
                Menyediakan Sumber Daya Manusia Di Dunia Alat Berat yang Handal,
                Berkarakter dan Terpercaya dan Siap Pakai Dalam Bisnis Alat
                Berat.
              </li>
              <li>
                Mendidik generasi muda agar memiliki semangat kerja yang tinggi,
                disiplin, dan berkarakter.
              </li>
              <li>Memberikan manfaat bagi masyarakat dan stake holder.</li>
            </ul>
          </div>
        </div>

        <div className="container flex flex-col py-4 gap-4">
          <h3 className="text-xl font-bold">Founder</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-center items-center">
              <div className="bg-blue-100 aspect-square flex-1"></div>
              <div className="w-8/12">
                <h4 className="text-lg font-bold">Haris Setiawan M.T</h4>
                <p>
                  Mechanic, Foreman, Training Spv. 13 Years Experienced. PT. UT
                  , PT. BUMA, PT.  ARKANANTA
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <div className="bg-blue-100 aspect-square flex-1"></div>
              <div className="w-8/12">
                <h4 className="text-lg font-bold">Safety Nadira</h4>
                <p>
                  Personality & Character Building,  Plant Operation, Customer
                  Support and  Business Development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col py-4 gap-4">
          <h3 className="text-xl font-bold">Team Trainer</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-center items-center">
              <div className="bg-blue-100 aspect-square flex-1"></div>
              <div className="w-8/12">
                <h4 className="text-lg font-bold">Haris Setiawan M.T</h4>
                <p>
                  Mechanic, Foreman, Training Spv. 13 Years Experienced. PT. UT
                  , PT. BUMA, PT.  ARKANANTA
                </p>
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <div className="bg-blue-100 aspect-square flex-1"></div>
              <div className="w-8/12">
                <h4 className="text-lg font-bold">Haris Setiawan M.T</h4>
                <p>
                  Mechanic, Foreman, Training Spv. 13 Years Experienced. PT. UT
                  , PT. BUMA, PT.  ARKANANTA
                </p>
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <div className="bg-blue-100 aspect-square flex-1"></div>
              <div className="w-8/12">
                <h4 className="text-lg font-bold">Haris Setiawan M.T</h4>
                <p>
                  Mechanic, Foreman, Training Spv. 13 Years Experienced. PT. UT
                  , PT. BUMA, PT.  ARKANANTA
                </p>
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <div className="bg-blue-100 aspect-square flex-1"></div>
              <div className="w-8/12">
                <h4 className="text-lg font-bold">Haris Setiawan M.T</h4>
                <p>
                  Mechanic, Foreman, Training Spv. 13 Years Experienced. PT. UT
                  , PT. BUMA, PT.  ARKANANTA
                </p>
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <div className="bg-blue-100 aspect-square flex-1"></div>
              <div className="w-8/12">
                <h4 className="text-lg font-bold">Safety Nadira</h4>
                <p>
                  Personality & Character Building,  Plant Operation, Customer
                  Support and  Business Development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col py-4 gap-4">
          <h3 className="text-xl font-bold">Team Adminitrsion</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-center items-center">
              <div className="bg-blue-100 aspect-square flex-1"></div>
              <div className="w-8/12">
                <h4 className="text-lg font-bold">Haris Setiawan M.T</h4>
                <p>
                  Mechanic, Foreman, Training Spv. 13 Years Experienced. PT. UT
                  , PT. BUMA, PT.  ARKANANTA
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <div className="bg-blue-100 aspect-square flex-1"></div>
              <div className="w-8/12">
                <h4 className="text-lg font-bold">Safety Nadira</h4>
                <p>
                  Personality & Character Building,  Plant Operation, Customer
                  Support and  Business Development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col py-4 gap-4">
          <h3 className="text-xl font-bold">Organizational Structure</h3>
          <div className="bg-blue-200 aspect-video"></div>
        </div>
      </section>
    </>
  );
}
