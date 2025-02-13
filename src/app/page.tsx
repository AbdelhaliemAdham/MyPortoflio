import React from "react";
import "../index.css";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import MyRecentWork from "@/components/MyRecentWork";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSections";
import Contact from "@/components/Contact";
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <About />
        <SkillsSection />
        <MyRecentWork />
        <Contact />
      </main>
    </>
  );
}

export default Home;
