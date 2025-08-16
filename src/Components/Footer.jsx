import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Buttons } from "./Buttons";

function Footer() {
  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      yourClickHandler();
    }
  }
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
      <nav className=" md:hidden hidden lg:flex w-full justify-between items-center self-stretch pt-10 pb-5 px-14">
        <Link to="/" className="flex items-center gap-2" aria-label="Homepage">
          <span className="flex justify-center items-center shrink-0 font-inter text-lg font-bold text-[#100108] dark:text-[#FFF]">
            Ujunwa Chiahaoke
          </span>
        </Link>
        <ul className="flex py-5 items-center gap-5">
          {navLink.map((link) => (
            <li
              key={link.name}
              className="flex justify-center items-center gap-2 p-2"
            >
              <NavLink
                to={link.path}
                className={`group text-base text-[#100108] dark:text-[#FFF] items-center cursor-pointer`}
                aria-label={`Go to ${link.name}`}
              >
                <span className="relative pb-1">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <section className="flex items-center gap-5">
          <a
            href="http://linkedin.com/in/chinonyelum-chime-a4b0a4166"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 text-base py-[0.875rem] px-4 cursor-pointer text-[#100108] dark:text-[#C78D32] dark:hover:text-[#BB7608] dark:active:text-[#D8B070]"
            aria-label="Open Ujunwa Chiahaoke LinkedIn profile in a new tab"
          >
            LinkedIn
          </a>
          <Buttons
            className="md:self-center font-bold leading-[1.05rem]"
            onClick={handleEmailClick}
          >
            Let’s talk
          </Buttons>
        </section>
      </nav>
    </footer>
  );
}

export default Footer;
