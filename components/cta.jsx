import Link from "next/link";
import React from "react";

function CTA() {
  return (
    <div className="h-[180px] lg:h-[250px] px-5 lg:px-20 py-10 bg-[url(/images/bg-boost-mobile.svg)] md:bg-[url(/images/bg-boost-desktop.svg)] bg-dark-violet bg-cover">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl text-white font-bold">Boost your links today</h2>
        <Link
          href={"#"}
          className="mt-10 py-2 px-5 bg-cyan text-white text-sm font-semibold rounded-full"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default CTA;
