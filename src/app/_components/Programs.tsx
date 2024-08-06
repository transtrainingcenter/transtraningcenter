import { SectionLayout } from "@/components/Layout/SectionLayout";
import { SectionContainer } from "@/components/Fragments/SectionContainer";

const Programs = () => {
  return (
    <SectionLayout id="programs" heading="PROGRAMS">
      <SectionContainer
        heading="Soft Skills"
        subHeading="PERSONALITY & CHARRACTER BUILDING"
      >
        <ul className="text-base list-disc list-outside pl-4">
          <li>Supervisory Management Program</li>
          <li>Total Quality Control.</li>
          <li>The Power Of Mindset</li>
          <li>The Excellent Personality</li>
          <li>Team Work Building</li>
          <li>Leadership</li>
          <li>Self Induction.</li>
          <li>Paradigm Shift</li>
        </ul>
        <div className="bg-blue-100 aspect-video"></div>
      </SectionContainer>

      <SectionContainer heading="Fasilitas">
        <ul className="text-base list-disc list-outside pl-4">
          <li>Kelas Ber AC</li>
          <li>Seragam</li>
          <li>Safety Shoes</li>
          <li>Modul</li>
          <li>Sertifikat</li>
          <li>Program OJT (dicarikan tempat OJT)</li>
        </ul>
        <div className="bg-blue-100 aspect-video"></div>
      </SectionContainer>

      <SectionContainer col="grid-cols-3">
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
      </SectionContainer>
    </SectionLayout>
  );
};

export { Programs };
