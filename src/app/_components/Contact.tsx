import { SectionLayout } from "@/components/Layout/SectionLayout";
import { SectionContainer } from "@/components/Fragments/SectionContainer";

const Contact = () => {
  return (
    <SectionLayout id="contact" heading="CONTACT">
      <SectionContainer heading="Contact">
        <div className="flex flex-col gap-2">
          <div>
            <h4 className="font-bold -mb-1">Location</h4>
            <p>Jl.Banyuwangi No.45 Yosomulyo Gambiran Banyuwangi 68486</p>
          </div>
          <div>
            <h4 className="font-bold -mb-1">Email</h4>
            <p>email@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold -mb-1">Phone</h4>
            <p>+62 822-2891-3588</p>
          </div>
        </div>
        <div className="bg-blue-100 aspect-video"></div>
      </SectionContainer>
    </SectionLayout>
  );
};

export { Contact };
