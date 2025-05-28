import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroArea() {
  return (
    <div className="px-5 lg:px-20 overflow-hidden flex flex-col md:flex-row-reverse justify-between items-center ">
      <div className="md:relative lg:h-[400px] md:w-1/2">
        <Image
          src="/images/illustration-working.svg"
          width={500}
          height={500}
          alt="hero image"
          className="lg:absolute lg:-right-15 lg:top-0"
        />
      </div>

      <div className="my-5 text-center md:w-1/2 md:text-left">
        <h1 className="text-4xl lg:text-6xl text-very-dark-blue font-bold">
          More than just shorter links
        </h1>
        <p className="my-3 lg:w-3/4 text-grayish-violet">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Link
          href={"#"}
          className="bg-cyan text-white text-sm font-semibold rounded-full py-2 px-5 hover:opacity-50"
        >
          Get Started{" "}
        </Link>
      </div>
    </div>
  );
}

export default HeroArea;
