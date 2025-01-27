import { ChevronRight, Menu, X } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-scroll";

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

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleSpy = useCallback(() => {
    const sections = links.map(({ link }) => document.getElementById(link));
    const windowOffset = window.scrollY + 150;

    // let newActiveSection = activeSection;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (!section) continue;

      const Offset = section.offsetTop;
      const height = section.offsetHeight;

      if (windowOffset >= Offset && windowOffset < Offset + height) {
        if (activeSection !== section.id) {
          setActiveSection(section.id);
        }
        break;
      }
    }
  }, [links, activeSection]);

  useEffect(() => {
    let timeoutId = null;

    const throttlingHandleSpy = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleSpy();
          timeoutId = null;
        }, 100);
      }
    };

    handleSpy();

    window.addEventListener("scroll", throttlingHandleSpy);
    return () => {
      window.removeEventListener("scroll", throttlingHandleSpy);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleSpy]);

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
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary hover:bg-black/5 transition-colors"
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
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } fixed inset-0 bg-black/95 backdrop-blur-sm`}
      >
        <div className="pt-20 pb-3 space-y-1 px-4">
          {links.map(({ id, link, label }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between cursor-pointer hover:bg-black/20 px-3 py-4 rounded-md text-lg font-medium transition-all
                ${
                  activeSection === link
                    ? "text-primary"
                    : "text-gray-300 hover:text-primary"
                }`}
            >
              {label}
              <ChevronRight className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
