import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black p-20 pb-40 text-white"
    >
      <div className="max-w-screen-xl w-full h-full flex flex-col justify-center items-start m-auto">
        <div className="pb-28">
          <h2 className="text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2">
            About
          </h2>
        </div>

        {/* Main Introduction */}
        <p className="text-l">
          As a Front-End Web Developer with a distinguished Computer Science
          degree from Mansoura University, I bring a unique blend of technical
          expertise and creative problem-solving to every project. Two years
          ago, I made a deliberate and passionate transition from administration
          and digital transformation to specialized front-end development – a
          journey that has equipped me with a valuable perspective on both
          business operations and technical implementation.
        </p>
        <br />

        {/* Career Transition & Growth */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-300">
            My Development Journey
          </h3>
          <p className="text-l">
            My career transition story is one of determination and continuous
            growth. While my Computer Science degree provided a strong
            foundation, I dedicated the past two years to intensive
            self-directed learning and hands-on practice in modern web
            development. This transition period has been marked by countless
            hours of coding, building projects, and mastering front-end
            technologies – transforming my theoretical knowledge into practical
            expertise. What sets me apart is this unique combination of formal
            education, business experience, and self-driven technical
            advancement.
          </p>
        </div>

        {/* Technical Expertise */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-300">
            Technical Expertise
          </h3>
          <p className="text-l">
            Through rigorous self-study and practical application, I've
            developed strong expertise in modern front-end technologies,
            particularly React.js, Next.js, and Redux. My skill set extends to
            RESTful API integration, responsive design, and performance
            optimization. My background in Computer Science, combined with
            graduating with honors, has enabled me to quickly adapt to new
            technologies and maintain high standards in code quality and
            application performance.
          </p>
        </div>

        {/* Professional Approach */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-300">
            Professional Approach
          </h3>
          <p className="text-l">
            I believe in creating web applications that not only meet technical
            requirements but also deliver exceptional user experiences. My
            approach combines clean, maintainable code with performance-driven
            development and user-centric design principles. My previous
            experience in digital transformation gives me a unique advantage in
            understanding both business needs and technical implementation,
            allowing me to create solutions that truly serve their purpose.
          </p>
        </div>

        {/* Looking Forward */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-300">
            Looking Forward
          </h3>
          <p className="text-l">
            I'm actively seeking opportunities to contribute to innovative
            projects where I can leverage my unique background and technical
            skills. My career transition has taught me the value of persistence,
            adaptability, and continuous learning – qualities I bring to every
            project. Whether it's transforming complex requirements into
            intuitive interfaces or optimizing application performance, I'm
            committed to delivering excellence while continuing to grow as a
            developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
