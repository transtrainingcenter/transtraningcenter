interface SectionLayoutProps {
  heading: string;
  id: string;
  children: React.ReactNode;
}

const SectionLayout = ({heading, id, children} : SectionLayoutProps) => {
  return (
    <section id={id} className="py-10 scroll-mt-24">
      <h2 className="text-center text-2xl font-bold bg-blue-950 py-4 lg:py-10">
        {heading}
      </h2>
      {children}
    </section>
  );
};

export { SectionLayout };
