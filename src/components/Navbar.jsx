import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="bg-black h-28 px-2 text-white  w-full fixed">
      <div className="flex justify-between items-center h-full max-w-screen-xl mx-auto">
        <h1 className="font-signature text-5xl ml-2">Dalia</h1>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="font-medium text-gray-500 cursor-pointer hover:scale-105 duration-200 px-4 capitalize"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => {
            setBurger(!burger);
          }}
          className="text-gray-500 cursor-pointer pr-4 md:hidden z-10"
        >
          {burger ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
        </div>
        {burger && (
          <ul className="absolute top-0 right-0 bg-gradient-to-b h-screen w-full flex justify-center items-center flex-col from-black to-gray-800 text-gray-500 md:hidden">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="text-4xl cursor-pointer py-4 my-4 capitalize"
              >
                <Link
                  onClick={() => {
                    setBurger(!burger);
                  }}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Navbar;
