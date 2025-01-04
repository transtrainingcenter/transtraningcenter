import Image from "next/image";
import { SectionLayout } from "@/components/Layout/SectionLayout";
import { SectionContainer } from "@/components/Fragments/SectionContainer";

const Gallery = () => {
  const imageData = [
    { label: "Fasilitas", count: 6 },
    { label: "Binalistik", count: 6 },
    { label: "Latihan Dasar Leadership", count: 8 },
    { label: "OJT SISWA PROGRAM TKR+", count: 6 },
    { label: "PRAKTEK LAPANGAN SISWA OPERATOR", count: 6 },
    { label: "OVERHAUL ENGINE CAT 3208 V8", count: 3 },
    { label: "PENYALURAN SMK MUHIMA PURWANTORO BINAAN TTC", count: 3 },
    { label: "SISWA TTC OJT DI PT BINTANG SUKSES ENERGI, JAMBI", count: 8 },
    { label: "SISWA TTC OJT DI PT ANUGRAH BUMI LESTARI", count: 5 },
    { label: "SISWA TTC OJT DI CV. TUNAS INTI PRATAMA", count: 3 },
    { label: "SISWA TTC OJT DI PT. BINTANG ALAM REZEKI", count: 2 },
    { label: "SISWA TTC OJT DI PT. SINOPACIFIC", count: 6 },
    { label: "SISWA TTC OJT DI PT. ANSAF INTI RESOURCES", count: 6 },
    { label: "SISWA TTC OJT DI PT. DAYA GUSTI AGUNG", count: 3 },
    { label: "SISWA TTC OJT DI PT. PRESISI", count: 3 },
    { label: "SISWA TTC OJT DI PT. MUTIARA ETAM COAL", count: 3 },
  ];

  let imageIndex = 1; // Start counting from 1

  return (
    <SectionLayout id="gallery" heading="GALLERY">
      {imageData.map((section, index) => {
        const images = Array.from({ length: section.count }).map((_, i) => {
          // Dynamically calculate the image number based on the section index and image index
          const imageNumber = imageIndex++;

          // Skip g13.jpg by checking the current imageNumber
          if (imageNumber === 13) return null;

          return (
            <div
              className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden"
              key={imageNumber}
            >
              <Image
                className="transform transition-transform duration-300 hover:scale-95"
                src={`/g${imageNumber}.jpg`}
                width={600}
                height={450}
                alt={`${section.label} Image ${i + 1}`}
              />
            </div>
          );
        });

        return (
          <SectionContainer
            key={section.label}
            heading={section.label}
            col="grid-cols-3"
          >
            {images}
          </SectionContainer>
        );
      })}
    </SectionLayout>
  );
};

export { Gallery };
