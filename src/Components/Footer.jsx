import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { navLinks } from "../Data/Data";
import { Buttons } from "./Buttons";
import { MdArrowOutward } from "react-icons/md";

function Footer() {
  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      yourClickHandler();
    }
  }

  const linkHash = (to) => (typeof to === "string" ? to : to.hash || "");

  const isHashActive = (link) => {
    if (link.type === "hash") {
      return (
        location.pathname === link.to.pathname && location.hash === link.to.hash
      );
    }
    if (link.type === "hash-self") {
      return location.hash === linkHash(link.to);
    }
    return false;
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:chimechinonyelum@gmail.com?subject=Let's%20Work%20Together";
  };
  const navLink = [
    { name: "About", path: "/about", width: "w-14" },
    { name: "Projects", path: "/projects", width: "w-16" },
    { name: "Experience", path: "/experience", width: "w-16" },
    { name: "Testimonial", path: "/testimonial", width: "w-16" },
  ];

  return (
    <footer className="flex flex-col items-start self-stretch p-5 gap-4 dark:bg-[#2B2B2B] bg-[#FCFCFC] w-full dark:shadow-[0_-4px_6px_-1px_rgba(255,255,255,0.1)]">
      <span className="lg:hidden block text-base leading-[1.05rem] font-bold text-[#100108] dark:text-[#FFF]">
        Ujunwa Chiahaoke
      </span>

      {/* Mobile Footer */}
      <nav
        className="lg:hidden flex flex-col items-start self-stretch gap-4 text-[#100108] bg-gray-200 dark:bg-[#2B2B2B]"
        aria-label="Main menu"
      >
        <Link to="/about" className="w-full">
          <div className="flex p-2 items-center gap-2 self-stretch">
            <span className="text-[#100108] dark:text-[#FFFFFF] text-sm leading-[1.2rem]">
              About Me
            </span>
          </div>
        </Link>

        <Link to="/projects" className="w-full" tabIndex={0}>
          <div className="flex p-2 items-center  gap-2 self-stretch">
            <span className="text-[#100108] dark:text-[#FCFCFC] text-sm leading-[1.rem]">
              Projects
            </span>
          </div>
        </Link>
        <Link to="/projects" className="w-full" tabIndex={0}>
          <div className="flex p-2 items-center  gap-2 self-stretch">
            <span className="text-[#100108] dark:text-[#FCFCFC] text-sm leading-[1.rem]">
              Experience
            </span>
          </div>
        </Link>
        <Link to="/projects" className="w-full" tabIndex={0}>
          <div className="flex p-2 items-center  gap-2 self-stretch">
            <span className="text-[#100108] dark:text-[#FCFCFC] text-sm leading-[1.rem]">
              Testimonial
            </span>
          </div>
        </Link>
        <section className="flex flex-col items-start self-stretch gap-2">
          <Buttons
            className="md:self-center md:w-60  self-stretch font-bold"
            onKeyDown={handleKeyDown}
            onClick={handleEmailClick}
          >
            Let's talk
          </Buttons>

          <div className="flex py-[0.875rem] px-4 justify-center items-center self-stretch">
            <a
              href="https://www.linkedin.com/chinonyelum-chime-a4b0a4166/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2"
              aria-label="Open Ujunwa Chiahaoke LinkedIn profile in a new tab"
              tabIndex={0}
            >
              <span className="text-[#100108] dark:text-[#C78D32] text-sm font-bold leading-[1.013rem]">
                LinkedIn
              </span>
            </a>
          </div>
        </section>
      </nav>

      {/* Desktop Footer */}
      <nav className="md:hidden hidden lg:flex w-full justify-between items-center pt-10 pb-5 px-14">
        <HashLink
          smooth
          to="/#"
          className="flex items-center gap-2"
          aria-label="Homepage"
        >
          <span className="font-inter text-lg font-bold text-[#100108] dark:text-[#FFF]">
            Ujunwa Chiahaoke
          </span>
        </HashLink>

        <ul className="flex py-5 items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name} className="p-2">
              {link.type === "route" ? (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `group text-base text-[#100108] dark:text-[#FFF] cursor-pointer ${
                      isActive ? "font-medium" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative pb-1">
                      {link.name}
                      <span
                        className={`absolute left-0 bottom-0 h-[2px] transition-all duration-500 ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full bg-[#FCFCFC]/40"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              ) : (
                <HashLink
                  smooth
                  to={link.to}
                  className={`group text-base text-[#100108] dark:text-[#FFF] cursor-pointer ${
                    isHashActive(link) ? "font-medium" : ""
                  }`}
                >
                  <span className="relative pb-1">
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] transition-all duration-500 ${
                        isHashActive(link)
                          ? "w-full"
                          : "w-0 group-hover:w-full bg-[#FCFCFC]/40"
                      }`}
                    />
                  </span>
                </HashLink>
              )}
            </li>
          ))}
        </ul>

        <section className="flex items-center gap-5">
          {/* <ThemeToggle /> */}
          <a
            href="https://www.linkedin.com/in/ujunwa-chiahaoke-8159731ba"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-row gap-[1px] text-base items-center py-[0.875rem] px-4 text-[#C78D32] hover:text-[#BB7608] active:text-[#D8B070] lg:text-base md:text-sm font-[400] leading-6 transition-colors duration-300"
          >
            LinkedIn
            <MdArrowOutward
              className="opacity-0 group-hover:opacity-100 h-5 w-5 text-[#BB7608] transition-opacity duration-300"
              aria-hidden="true"
            />
          </a>
          <Buttons className="font-bold" onClick={handleEmailClick}>
            Let’s talk
          </Buttons>
        </section>
      </nav>
    </footer>
  );
}

export default Footer;
