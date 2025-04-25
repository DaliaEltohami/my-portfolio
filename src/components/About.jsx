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
        {/* <p className="text-l text-gray-400 text-justify">
          A Front-End Developer with a Computer Science degree, I’m passionate
          about building intuitive, user-focused web experiences. I started my
          web development journey by mastering the fundamentals—HTML, CSS, and
          JavaScript—and I’m now expanding my skills in React and its ecosystem,
          including Redux, and NextJS by building real projects and learning
          hands-on every day.
          <br />
          <br />
          My previous experience in administration and digital transformation
          taught me how to connect technical solutions with real business needs.
          Over the past couple of years, I’ve been actively developing my
          front-end skills through online learning (including Nanodegrees from
          Udacity), tutorials, and most importantly—building real-world projects
          that I’ve proudly showcased in my portfolio. These hands-on projects
          gave me the opportunity to apply what I’ve learned, practice solving
          real problems, and develop responsive, user-friendly interfaces from
          the ground up.
          <br />
          <br />
          I’m passionate about clean, intuitive design, and I love turning ideas
          into interactive experiences. I'm always eager to grow, collaborate
          with others, and contribute to meaningful products that make a real
          impact.
        </p> */}
        <p className="text-l text-gray-400 text-justify">
          <b>
            A Front-End Developer with a Computer Science degree, I’m passionate
            about building intuitive, user-focused web experiences.
          </b>
          <br />
          <br /> I started my web development journey by mastering the
          fundamentals—HTML, CSS, and JavaScript—and I’m now expanding my skills
          in React, its ecosystem (including Redux), and Next.js by building
          real projects and learning hands-on every day.
          <br />
          <br /> My previous experience in administration and digital
          transformation taught me how to connect technical solutions with real
          business needs. Over the past couple of years, I’ve been actively
          developing my front-end skills through online learning (including
          Nanodegrees from Udacity), YouTube tutorials, and—most importantly—by
          building real-world projects that I’ve proudly showcased in my
          portfolio.
          <br />
          <br /> These hands-on projects gave me the opportunity to apply what
          I’ve learned, solve real problems, and develop responsive,
          user-friendly interfaces from the ground up. I’m passionate about
          clean, intuitive design, and I love turning ideas into interactive
          experiences.
          <br /> <br /> I'm always eager to grow, collaborate with others, and
          contribute to meaningful products that make a real impact.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
