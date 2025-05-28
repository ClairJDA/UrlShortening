"use client";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-5 lg:px-20 py-5 flex justify-between items-center text-sm text-grayish-violet font-semibold">
      <div>
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="inline-block"
        />
        <ul className="hidden md:inline-block">
          <li className="inline-block ml-5 hover:cursor-pointer hover:text-very-dark-blue">
            Features
          </li>
          <li className="inline-block ml-5 hover:cursor-pointer hover:text-very-dark-blue">
            Pricing
          </li>
          <li className="inline-block ml-5 hover:cursor-pointer hover:text-very-dark-blue">
            Resources
          </li>
        </ul>
      </div>

      <ul className="hidden md:inline-block">
        <li className="inline-block ml-5 hover:cursor-pointer hover:text-very-dark-blue">
          Login
        </li>
        <li className="inline-block ml-5 bg-cyan text-white rounded-full py-2 px-5 hover:opacity-50">
          Sign Up
        </li>
      </ul>

      <div
        className="burger-menu md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
        >
          <path d="M4 18L20 18" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12L20 12" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 6L20 6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-[80%] py-10 bg-dark-violet z-10 flex flex-col justify-center items-center rounded-xl"
        onMouseOut={() => setIsOpen(false)}
        onPointerOut={() => setIsOpen(false)}>
          <ul className="text-center text-white text-lg">
            <li className="my-3 hover:cursor-pointer hover:text-very-dark-blue">
              Features
            </li>
            <li className="my-3 hover:cursor-pointer hover:text-very-dark-blue">
              Pricing
            </li>
            <li className="my-3 hover:cursor-pointer hover:text-very-dark-blue">
              Resources
            </li>
          </ul>
          <hr className="border-grayish-violet w-3/4"/>
          <ul className="text-center text-white text-lg">
            <li className="my-3 hover:cursor-pointer hover:text-very-dark-blue">
              Login
            </li>
            <li className="my-3 bg-cyan text-white rounded-full py-2 px-5 hover:opacity-50">
              Sign Up
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
