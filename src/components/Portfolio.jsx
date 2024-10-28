import React, { useState } from "react";

import projectsData from "../data/projects.json";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg shadow-gray-700 transition-all duration-300 hover:shadow-gray-500 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 flex-shrink-0">
        <img
          src={`${process.env.PUBLIC_URL}/${project.src}`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-20" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        {/* Main Content Section */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-100 mb-2">
            {project.title}
          </h3>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4">
            {isExpanded
              ? project.description
              : `${project.description.slice(0, 100)}...`}
            <button
              className="ml-1 text-blue-400 hover:text-blue-300"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          </p>

          {/* Key Features */}
          {isExpanded && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-200 mb-2">
                Key Features
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Buttons Container */}
        <div className="flex gap-4 pt-6 mt-auto border-t border-gray-800">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center py-2 rounded-md border border-gray-600 hover:bg-gray-800 transition-colors duration-300"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(3);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend Apps" },
    { id: "fullstack", label: "Full Stack Apps" },
    { id: "landing", label: "Landing Pages" },
    { id: "learning", label: "Learning & Concepts" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectsData.projects
      : projectsData.projects.filter(
          (project) => project.category === activeCategory
        );

  // Reset visible projects when category changes
  React.useEffect(() => {
    setVisibleProjects(3);
  }, [activeCategory]);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <div
      id="portfolio"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-gray-100 p-8 md:p-20"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2">
            Portfolio
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            Crafting Digital Experiences Through Code
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 
                ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > visibleProjects && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-medium"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
