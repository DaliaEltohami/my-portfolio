import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black px-8 py-12 md:p-20 text-white"
    >
      <div className="max-w-screen-xl w-full h-full flex flex-col justify-center items-start m-auto">
        <div className="pb-16">
          <h2 className="text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2">
            About
          </h2>
        </div>

        {/* Main Introduction */}
        <p className="text-l text-gray-400 text-justify">
          As a Front-End Developer with a Computer Science degree from Mansoura
          University, I thrive on turning complex ideas into seamless,
          high-performance web experiences. My journey from administration and
          digital transformation to front-end development has given me a unique
          perspective—one that bridges technical excellence with business
          insight.
          <br />
          Over the past two years, I’ve immersed myself in modern web
          development, building a strong foundation in core web technologies
          like HTML, CSS, and JavaScript, while specializing in Single Page
          Application (SPA) frameworks such as React and its ecosystem,
          including Redux. Beyond writing clean, maintainable code, I’m
          passionate about building applications that are not just functional
          but intuitive and impactful. My ability to adapt, learn, and optimize
          allows me to create solutions that align with both user needs and
          business goals.
          <br />
          I’m always pushing my technical boundaries, refining my skills, and
          embracing new challenges. Whether it’s crafting dynamic interfaces,
          optimizing performance, or integrating scalable architectures, I bring
          dedication and problem-solving to every project. Driven by curiosity
          and a relentless pursuit of excellence, I’m excited to contribute to
          forward-thinking teams and build solutions that make a difference.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
