import React, { useState } from "react";
import {
  ChevronRight,
  Code2,
  Palette,
  Terminal,
  WrenchIcon,
} from "lucide-react";
import technologies from "../data/technologies.json";

const Skills = () => {
  console.log(technologies);

  // Map of icon strings to Lucide React components
  const iconComponents = {
    code2: Code2,
    palette: Palette,
    wrench: WrenchIcon,
    terminal: Terminal,
  };

  const techs = technologies.technologies;

  return (
    <div
      id="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-gray-100 px-8 py-12 md:p-20"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2">
            Experience
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            Comprehensive overview of my technical expertise and skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-12">
          {techs.map((tech) => (
            <button
              key={tech.name}
              className={
                "group p-6 rounded-xl transition-all duration-300 flex flex-col items-center gap-4 bg-gray-800/50 hover:bg-gray-800 border border-transparent cursor-default hover:bg-gradient-to-br from-blue-500/10 to-purple-500/10 hover:border-blue-500/20"
              }
            >
              <div className="w-20 h-20 flex items-center justify-center ">
                <img
                  src={`${process.env.PUBLIC_URL}/${tech.image}`}
                  alt="tech-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-blue-400">
                {tech.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
