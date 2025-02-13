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
        <h1 className="font-bold text-[3rem]">Abdelhaliem Adham</h1>
        <p className="text-[#9C9C9C] mt-4 text-lg leading-relaxed">
          Welcome to my portfolio!. This portfolio showcases my skills and
          projects built with Next.js, demonstrating my ability to deliver
          high-quality and performant web solutions.
        </p>

        <button
          onClick={handleButtonClick}
          className="py-3 px-8 my-3 bg-[#3F8E00] rounded-lg font-bold hover:bg-[#3F8575] hover:scale-[1.05]"
          type="button"
        >
          Download My CV
        </button>
      </div>
      <img
        className="w-[250px] h-[250px] rounded-full"
        src="/abdo.png"
        alt="My Photo"
      />
    </section>
  );
}

export default HomeSection;
