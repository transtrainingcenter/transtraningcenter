interface SectionContainerProps {
  heading?: string;
  subHeading?: string;
  children: React.ReactNode;
  col?: string;
}

const SectionContainer = ({
  heading,
  children,
  col = "grid-cols-1 md:grid-cols-2",
  subHeading,
}: SectionContainerProps) => {
  return (
    <div className="container flex flex-col py-4 gap-2 lg:gap-4">
      {heading && <h3 className="text-xl font-bold  pt-2">{heading}</h3>}
      {subHeading && <p className="text-lg -mt-4 ">{subHeading}</p>}
      <div className={`grid lg:gap-8 gap-4 ${col}`}>{children}</div>
    </div>
  );
};

export { SectionContainer };
