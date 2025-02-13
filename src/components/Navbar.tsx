import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="bg-black">
      <ul className="flex flex-row bg-[#1B1B1B] text-[#9C9C9C] w-[90%] mx-auto h-16 items-center justify-between rounded-b-lg px-6">
        <li className="hover:text-white hover:filter hover:drop-shadow-[0_0_5px_white] transition-all duration-300">
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
        <div className="w-[150px]">
          <ul className="flex gap-5 items-center">
            <li>
              <img
                className="w-[40px] h-[40px] hover:filter hover:drop-shadow-[0_0_5px_white] transition-all duration-300"
                src="/Twitter.svg"
                alt="twitter"
              />
            </li>
            <li>
              <img
                className="w-[40px] h-[40px] hover:filter hover:drop-shadow-[0_0_5px_white] transition-all duration-300"
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
