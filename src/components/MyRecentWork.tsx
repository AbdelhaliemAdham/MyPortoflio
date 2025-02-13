"use client";
import React from "react";
import Button from "./Button";

function MyRecentWork() {
  const workList = [
    {
      title: "Chat Web App",
      image: "/ChatApp.png",
      link: "https://github.com/AbdelhaliemAdham/chat-app",
      description:
        "this Web Chat made with ReactJs and the backend made with ExpressJS,Socket.IO for real-time messaging",
    },
    {
      title: "E-Commerce App",
      image: "/E-Commerce.jpg",
      link: "https://github.com/AbdelhaliemAdham/E-Commerce-React",
      description:
        "E-Commerce Web Made with React and Authentication made with firebase-auth and i used famous api called to fetch products, also integrated payment with Stripe ",
    },
    {
      title: "Meal Web App",
      image: "/Meal.jpeg",
      link: "https://github.com/AbdelhaliemAdham/Meals-App",
      description:
        "this is Simple Meal App Made with ReactJs,Redux for State-Management",
    },
    {
      title: "Weather Web App",
      link: "https://github.com/AbdelhaliemAdham/weather-app",
      image: "/Weather.jpeg",
      description:
        "this Simple Weather App display Weather parameters e.g humidity,speed wind,temperature",
    },
  ];

  function handleClick(link: string) {
    window.open(link);
  }
  return (
    <section id="recentWork" className="py-12 bg-[#080808] text-white">
      <h2 className="text-3xl font-bold text-center">Recent Work</h2>
      <p className="text-center text-gray-600 mt-2">
        I Made a lot of projects using <strong>NextJs</strong> and{" "}
        <strong>ReactJS</strong>, <strong>Flutter</strong>, but is just a Small
        Collection of My Work.
      </p>
      <div className="mt-8 mx-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {workList.map((work, index) => (
          <div
            key={index}
            className="relative group bg-[#080808] shadow-[#1d1c1c] shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-auto object-scale-cover transition duration-300 ease-in-out group-hover:blur-sm"
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
