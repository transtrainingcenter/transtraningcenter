import Image from "next/image";

const Card = ({
  heading = "Heading",
  description = "Description",
  image = "/profile.png",
}: {
  heading: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex lg:w-[49%] gap-2 items-center">
      <div className="bg-blue-100 flex overflow-clip aspect-square w-24">
        <Image
          className="aspect-square w-24 transition-all duration-300 hover:scale-110 object-cover"
          src={image}
          width={96}
          height={96}
          alt={`Picture of the author ${heading}`}
        />
      </div>
      <div className="w-8/12">
        <h4 className="text-lg font-bold">{heading}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export { Card };
