import React, { useState } from "react";

function OutputArea({ original_link: orinalLink, short_link: shortLink }) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="my-3 p-5 relative -top-10 flex flex-col md:flex-row justify-between items-center bg-white">
      <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-between text-left">
        <p className="mb-3 pb-3 md:mb-0 md:pb-0text-very-dark-blue text-md font-semibold border-b-1 border-grayish-violet md:border-none">
          {orinalLink}
        </p>
        <p className="text-cyan text-md font-semibold">{shortLink}</p>
      </div>

      <button
        className={`w-full md:w-[20%] mt-3 md:mt-0 ${
          isCopied ? "bg-dark-violet" : "bg-cyan"
        } text-white text-sm font-semibold py-2 px-5 hover:opacity-50`}
        onClick={() => {
          navigator.clipboard.writeText(shortLink);
          setIsCopied(true);
        }}
      >
        {isCopied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default OutputArea;
