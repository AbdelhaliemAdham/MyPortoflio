"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  return (
    <nav className="bg-black">
      <ul className="px-3 h-10 text-sm md:text-base flex flex-row bg-[#1B1B1B] text-[#9C9C9C] w-[90%] mx-auto md:h-16 items-center justify-between rounded-b-lg md:px-6">
        <li className=" hover:text-white hover:filter hover:drop-shadow-[0_0_5px_white] transition-all duration-300">
          <Link href="#">Home</Link>
        </li>
        <li className="hover:text-white hover:filter hover:drop-shadow-[0_0_5px_white] transition-all duration-300">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:text-white hover:filter hover:drop-shadow-[0_0_5px_white] transition-all duration-300">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="hover:text-white hover:filter hover:drop-shadow-[0_0_5px_white] transition-all duration-300">
          <Link href="#recentWork">Recent Work</Link>
        </li>
        <li className="hover:text-white hover:filter hover:drop-shadow-[0_0_5px_white] transition-all duration-300">
          <Link href="#contact">Contact</Link>
        </li>
        <div className="w-fit md:w-[150px]">
          <ul className="flex gap-3 md:gap-5 items-center">
            <li>
              <Image
                className="w-[20px] h-auto md:w-[40px] md:h-[40px] hover:filter hover:drop-shadow-[0_0_5px_white] transition-all duration-300"
                src="/Twitter.svg"
                alt="twitter"
              />
            </li>
            <li
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/abdelhaliem-adham-4485ab20b/"
                )
              }
            >
              <Image
                className="w-[20px] h-auto md:w-[40px] md:h-[40px] hover:filter hover:drop-shadow-[0_0_5px_white] transition-all duration-300"
                src="/LinkedIn.svg"
                alt="LinkedIn"
              />
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
