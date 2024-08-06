import { SectionLayout } from "@/components/Layout/SectionLayout";
import { SectionContainer } from "@/components/Fragments/SectionContainer";

const Gallery = () => {
  return (
    <SectionLayout id="gallery" heading="GALLERY">
      <SectionContainer heading="Balistik" col="grid-cols-3">
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
      </SectionContainer>
      <SectionContainer heading="Others" col="grid-cols-3">
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
        <div className="bg-blue-100 aspect-video"></div>
      </SectionContainer>
    </SectionLayout>
  );
};

export { Gallery };
