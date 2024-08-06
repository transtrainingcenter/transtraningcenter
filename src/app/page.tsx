import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { Programs } from "./_components/Programs";
import { Gallery } from "./_components/Gallery";
import { Contact } from "./_components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Contact />
    </>
  );
}
