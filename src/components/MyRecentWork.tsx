"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

function MyRecentWork() {
  const workList = [
    {
      title: "Chat Web App",
      image: "/ChatApp.png",
      link: "https://github.com/AbdelhaliemAdham/chat-app",
      description:
        "This web chat is made with ReactJs and the backend is made with ExpressJS and Socket.IO for real-time messaging.",
    },
    {
      title: "E-Commerce App",
      image: "/E-Commerce.jpg",
      link: "https://github.com/AbdelhaliemAdham/E-Commerce-React",
      description:
        "E-Commerce web made with React and authentication made with Firebase Auth. I used a famous API to fetch products and integrated payment with Stripe.",
    },
    {
      title: "Meal Web App",
      image: "/Meal.jpeg",
      link: "https://github.com/AbdelhaliemAdham/Meals-App",
      description:
        "This is a simple meal app made with ReactJs and Redux for state management.",
    },
    {
      title: "Weather Web App",
      link: "https://github.com/AbdelhaliemAdham/weather-app",
      image: "/Weather.jpeg",
      description:
        "This simple weather app displays weather parameters such as humidity, wind speed, and temperature.",
    },
  ];

  function handleClick(link: string) {
    window.open(link);
  }

  return (
    <section id="recentWork" className="py-12 bg-[#080808] text-white">
      <h2 className=" text-xl md:text-3xl font-bold text-center">Recent Work</h2>
      <p className="text-center text-gray-600 mt-2">
        I have made a lot of projects using <strong>NextJs</strong>,{" "}
        <strong>ReactJS</strong>, and <strong>Flutter</strong>. Here is a small
        collection of my work.
      </p>
      <div className="mt-8 mx-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {workList.map((work, index) => (
          <div
            key={index}
            className="relative group bg-[#080808] shadow-[#1d1c1c] shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={work.image}
              alt={`${work.title} image`}
              className="w-full h-auto object-cover transition duration-300 ease-in-out group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="text-xl font-semibold">{work.title}</h3>
              <p className="text-slate-300 mt-2 text-center">
                {work.description}
              </p>
              <Button click={() => handleClick(work.link)} text="Know More" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyRecentWork;
