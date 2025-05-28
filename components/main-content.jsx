import React from "react";
import Image from "next/image";

function MainContent() {
  const data = [
    {
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      image: "/images/icon-brand-recognition.svg",
    },
    {
      title: "Detailed Records",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      image: "/images/icon-detailed-records.svg",
    },
    {
      title: "Fully Customizable",
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      image: "/images/icon-fully-customizable.svg",
    },
  ];
  return (
    <>
      <div className="py-10">
        <h1 className="text-2xl font-bold">Advanced Statistics</h1>
        <p className="text-grayish-violet">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:gap-x-5">
        {data.map((item) => (
          <div key={item.title} className="relative my-15 p-5 bg-white">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-violet rounded-full w-15 h-15 flex items-center justify-center">
              <Image src={item.image} width={35} height={35} alt="hero image" />
            </div>
            <h2 className="mt-8 mb-3 font-bold">{item.title}</h2>
            <p className="text-grayish-violet text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainContent;
