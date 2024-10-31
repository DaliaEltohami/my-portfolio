import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <span>LinkedIn</span>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/daliaeltohami",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <span>Github</span>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/DaliaEltohami",
    },
    {
      id: 3,
      child: (
        <>
          <span>Mail</span>
          <IoMailOutline size={30} />
        </>
      ),
      href: "mailto:daliaeltohami1991@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <span>Resume</span>
          <BsPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1z0Zkc8KVh93lycRvSrqFk6WNQTtM_Py5/view?usp=drive_link",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col fixed left-0 top-[35%]">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`bg-gray-500 p-4 h-14 w-40 ml-[-100px] hover:ml-[-10px] duration-300 ease-out hover:rounded-md ${style}`}
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              download={download}
              className="flex justify-between items-center text-white "
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
