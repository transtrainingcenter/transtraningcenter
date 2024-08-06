import { Card } from "@/components/Elements/Card";
import { SectionLayout } from "@/components/Layout/SectionLayout";
import { SectionContainer } from "@/components/Fragments/SectionContainer";

const About = () => {
  return (
    <SectionLayout id="about" heading="ABOUT">
      <SectionContainer heading="Introduction">
        <p className="text-base">
          TRANS TRAINING CENTER adalah sebuah Lembaga Pendidikan Ketrampilan
          yang mengkhususkan diri sebagai tempat Pendidikan, Pelatihan dan
          Pengembangan untuk mencetak SDM yang Handal, Berkarakter dan Terpecaya
          dalam bidang Alat Berat serta menjadi partner terpercaya dalam
          peningkatan dan pengembangan bisnis.
        </p>
        <div className="bg-blue-100 aspect-video"></div>
      </SectionContainer>

      <SectionContainer col="grid-cols-1">
        <div className="flex flex-col w-full lg:flex-row lg:justify-between gap-4 lg:gap-8">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-bold">Visi</h3>
            <p className="text-base">
              Menjadi Lembaga Pendidikan dan pelatihan alat berat yang
              profesional, handal, terpercaya dan berkarakter.
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
      </SectionContainer>

      <SectionContainer heading="Founder" col="grid-cols-1">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-2">
          <Card />
          <Card />
        </div>
      </SectionContainer>

      <SectionContainer heading="Team Trainer" col="grid-cols-1">
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </SectionContainer>

      <SectionContainer heading="Team Administration" col="grid-cols-1">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-2">
          <Card />
          <Card />
        </div>
      </SectionContainer>

      <SectionContainer heading="Organizational Structure" col="grid-cols-1">
        <div className="bg-blue-200 aspect-video"></div>
      </SectionContainer>
    </SectionLayout>
  );
};

export { About };
