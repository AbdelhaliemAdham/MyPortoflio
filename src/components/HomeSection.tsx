"use client";
import React from "react";

function HomeSection() {
  function handleButtonClick() {
    window.open("./AbdelhaliemAdham-react-frontend-developer.pdf");
  }
  return (
    <section
      id="home"
      className="flex flex-row items-center text-white justify-center bg-[#080808] h-[calc(100vh-4rem)]"
    >
      <div className="w-[40%]">
        <h1 className="font-bold text-base md:text-2xl lg:text-4xl 2xl:text-5xl">
          Abdelhaliem Adham
        </h1>
        <p className="text-sm text-[#9C9C9C] mt-4 md:text-lg lg:text-xl leading-relaxed">
          Welcome to my portfolio!. This portfolio showcases my skills and
          projects built with Next.js, demonstrating my ability to deliver
          high-quality and performant web solutions.
        </p>

        <button
          onClick={handleButtonClick}
          className="text-base md:text-lg lg:text-xl py-2 px-4 my-2 md:py-3 md:px-8 bg-[#3F8E00] rounded-lg font-bold hover:bg-[#3F8575] hover:scale-[1.05]"
          type="button"
        >
          Download My CV
        </button>
      </div>
      <div className="w-[35%]">
        <img
          className="max-w-full h-auto rounded-full"
          src="/abdo.png"
          alt="My Photo"
        />
      </div>
    </section>
  );
}

export default HomeSection;
