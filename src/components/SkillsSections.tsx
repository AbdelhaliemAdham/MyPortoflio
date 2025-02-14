import React from "react";
import BasicGauges from "./SkillChart";

function SkillsSection() {
  return (
    <section id="skills" className="bg-[#080808]">
      <h1 className="text-white md:text-3xl text-xl font-bold text-center p-11">
        Technical Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center">
        <BasicGauges percent={90} title={"React"} />
        <BasicGauges percent={90} title={"NextJs"} />
        <BasicGauges percent={80} title={"Tailwind"} />
        <BasicGauges percent={50} title={"NodeJs"} />
        <BasicGauges percent={90} title={"Flutter"} />
        <BasicGauges percent={85} title={"Type-Script"} />
      </div>
    </section>
  );
}

export default SkillsSection;
