import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = useMemo(
    () => [
      { id: 1, link: "home", label: "Home" },
      { id: 2, link: "about", label: "About" },
      { id: 3, link: "portfolio", label: "Portfolio" },
      { id: 4, link: "experience", label: "Experience" },
      { id: 5, link: "contact", label: "Contact" },
    ],
    []
  );

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      console.log(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Handle scroll spy
  useEffect(() => {
    const handleSpy = () => {
      const sections = links.map(({ link }) => document.getElementById(link));
      const scrollPosition = window.scrollY + 150;

      const currentSection = sections.find((section) => {
        if (!section) return false;
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        return scrollPosition >= offset && scrollPosition < offset + height;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
        console.log(currentSection);
      }
      console.log(activeSection);
    };

    window.addEventListener("scroll", handleSpy);
    return () => window.removeEventListener("scroll", handleSpy);
  }, [activeSection, links]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="home" smooth duration={500} className="cursor-pointer">
              <h1 className="font-signature text-4xl hover:text-primary transition-colors">
                Dalia
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map(({ id, link, label }) => (
                <Link
                  key={id}
                  to={link}
                  smooth
                  duration={500}
                  className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all
                    ${
                      activeSection === link
                        ? "text-blue-500 scale-105"
                        : "hover:text-blue-500 hover:scale-105"
                    }`}
                >
                  {label}
                  {activeSection === link && (
                    <div className="h-0.5 bg-blue-500 mt-1 rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-500 hover:bg-black/5 transition-colors"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-0 right-0 bg-gradient-to-b h-screen w-full flex justify-center items-center flex-col from-black to-gray-800 text-gray-500 md:hidden">
          <div className=" space-y-1 py-28 p-16 h-full w-full flex flex-col justify-around ">
            {links.map(({ id, link, label }) => (
              <Link
                key={id}
                to={link}
                smooth
                duration={500}
                onClick={() => setIsOpen(false)}
                className="flex flex-1 items-center justify-between cursor-pointer text-gray-300 hover:text-primary hover:bg-black/20 px-3 py-4 rounded-md text-lg font-medium transition-all"
              >
                {label}
                <ChevronRight className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
