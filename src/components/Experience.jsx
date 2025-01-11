import React, { useState } from "react";
import {
  ChevronRight,
  Code2,
  Palette,
  Terminal,
  WrenchIcon,
} from "lucide-react";
import skillsData from "../data/skills.json";

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  // Map of icon strings to Lucide React components
  const iconComponents = {
    code2: Code2,
    palette: Palette,
    wrench: WrenchIcon,
    terminal: Terminal,
  };

  // Function to render icon based on string identifier
  const renderIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  const categories = skillsData.categories;

  const SkillBar = ({ proficiency }) => (
    <div className="flex-1 md:grow-[2]  bg-gray-700 h-1.5 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${proficiency}%` }}
      />
    </div>
  );

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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(categories).map(([key, { icon, title }]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`p-6 rounded-xl transition-all duration-300 flex flex-col items-center gap-4 
                ${
                  activeCategory === key
                    ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                    : "bg-gray-800/50 hover:bg-gray-800 border border-transparent"
                }`}
            >
              <div
                className={`${
                  activeCategory === key ? "text-blue-400" : "text-gray-400"
                }`}
              >
                {renderIcon(icon)}
              </div>
              <span className="text-sm font-medium">{title}</span>
            </button>
          ))}
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              {categories[activeCategory].title}
            </h3>
            <p className="text-gray-400">
              {categories[activeCategory].description}
            </p>
          </div>

          <div className="space-y-12">
            {categories[activeCategory].skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="flex-1 text-lg font-medium text-gray-200 whitespace-nowrap w-2/12 text-wrap">
                    {skillGroup.name}
                  </h4>
                  <SkillBar proficiency={skillGroup.proficiency} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-700/50 text-sm hover:bg-gray-700 transition-colors duration-200"
                    >
                      <ChevronRight size={14} className="text-blue-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
