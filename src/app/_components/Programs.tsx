import Image from "next/image";
import { SectionLayout } from "@/components/Layout/SectionLayout";
import { SectionContainer } from "@/components/Fragments/SectionContainer";

const Programs = () => {
  return (
    <SectionLayout id="products" heading="PRODUCTS">
      <SectionContainer heading="Fasilitas">
        <ul className="text-base list-disc list-outside pl-4">
          <li>Kelas Ber AC</li>
          <li>Seragam</li>
          <li>Safety Shoes</li>
          <li>Modul</li>
          <li>Sertifikat</li>
          <li>Program OJT (dicarikan tempat OJT)</li>
        </ul>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd14.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
      </SectionContainer>

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
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd1.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
      </SectionContainer>

      <SectionContainer heading="Managerial">
        <ul className="text-base list-disc list-outside pl-4">
          <li>Basic Maintenance Concept</li>
          <li>Tools Usage and Maintenance</li>
          <li>Parts Catalog and Manual Reading</li>
          <li>Remove and Install Procedure</li>
          <li>Repair and Recondition Management</li>
          <li>Technical Service Report</li>
          <li>Technical Analyst Program</li>
          <li>Aplikasi Alat Berat (APAB)</li>
          <li>PPIC / Plant Engineering</li>
          <li>Individual Development Program</li>
          <li>Safety, Health, and Environment (SHE)</li>
        </ul>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd2.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
      </SectionContainer>

      <SectionContainer heading="Technical" subHeading="POWER LINE">
        <ul className="text-base list-disc list-outside pl-4">
          <li>Engine</li>
          <li>Hydraulic System</li>
          <li>Air System and Pneumatic</li>
          <li>Clutch and Transmission</li>
          <li>Steering and Brake</li>
          <li>Electrical System</li>
          <li>Chassis</li>
          <li>Accessories</li>
          <li>Basic Trouble Shooting</li>
        </ul>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd3.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
      </SectionContainer>

      <SectionContainer heading="Department" subHeading="TRAINING BY JOB DESC">
        <ul className="text-base list-disc list-outside pl-4">
          <li>MECHANICS</li>
          <li>PARTS</li>
          <li>SUPPORT</li>
        </ul>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd4.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
      </SectionContainer>

      <SectionContainer col="grid-cols-3">
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd5.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd6.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd7.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
      </SectionContainer>

      <SectionContainer
        heading="TAB (Teknik Alat Berat)"
        subHeading="COMPETENCIES"
      >
        <ul className="text-base list-disc list-outside pl-4">
          <li>BASIC MECHANIC COURSE</li>
          <li>SERVICE OPERATION SYSTEM</li>
          <li>PARTS OPERATION SYSTEM</li>
          <li>SUPERVISORY MANAGEMENT PROGRAM</li>
          <li>PPIC / PLANT ENGINEER</li>
          <li>COMMUNICATION SKILL</li>
        </ul>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd8.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
      </SectionContainer>

      <SectionContainer
        heading="PartnerShip Opstion"
        subHeading="A. Mechanic Supply"
      >
        <ul className="text-base list-disc list-outside pl-4">
          <li>Free OJT and Recruitment</li>
          <li>Regular Recruitment</li>
          <li>Payment by Performance</li>
        </ul>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd9.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
      </SectionContainer>

      <SectionContainer
        heading="PartnerShip Opstion"
        subHeading="B. Site Support Training"
      >
        <ul className="text-base list-disc list-outside pl-4">
          <li>Mechanic</li>
          <li>Support</li>
          <li>PPIC / Planner</li>
          <li>Soft Skill Training</li>
        </ul>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd10.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
      </SectionContainer>

      <SectionContainer
        heading="Program Jurusan Teknik Alat Berat"
        subHeading="MoU Dengan SMK Muhima Wonogiri"
        col="grid-cols-3"
      >
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd11.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd12.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
        <div className="bg-blue-100 aspect-video flex justify-center items-center overflow-hidden">
          <Image
            className="transform transition-transform duration-300 hover:scale-95"
            src="/pd13.jpg"
            width={600}
            height={450}
            alt="Picture of the about"
          />
        </div>
      </SectionContainer>
    </SectionLayout>
  );
};

export { Programs };
