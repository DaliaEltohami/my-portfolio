import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full pt-60 p-20 pb-32"
    >
      <div className="flex flex-col lg:flex-row text-white h-full items-center justify-center p-10 m-auto max-w-screen-xl w-full">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-4xl  sm:text-7xl font-bold text-white text-center lg:text-left">
            I'm a Front End Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-center lg:text-left">
            Passionate Front-End Developer with a Computer Science background,
            specializing in creating responsive, user-centric web applications.
            With a unique journey from digital transformation to development, I
            combine technical expertise with creative problem-solving to build
            exceptional digital experiences. Currently focused on React
            ecosystem and modern web technologies, I'm ready to take on
            challenging projects that push the boundaries of web development.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group cursor-pointer text-white rounded-md flex items-center justify-center w-fit my-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              portofolio
              <span className="group-hover:rotate-90 duration-300 ease-out">
                <MdKeyboardDoubleArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        <div className="h-full flex flex-col justify-start items-center flex-1 p-4 my-5 ">
          <img
            src="/assets/heroImage.jpeg"
            alt="my profile"
            className="rounded-2xl w-2/3  h-2/3  md:w-2/3 md:h-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
