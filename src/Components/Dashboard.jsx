// Dashboard.jsx
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ThemeToggle from "./ThemeToggle";
import { Buttons } from "./Buttons";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../Data/Data";

function Dashboard({ onHamburgerClick }) {
  const location = useLocation();

  // Works for both object `to={{pathname:'/', hash:'#about'}}` and string `to="#testimonial"`
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

  return (
    <section className="dark:bg-[#2B2B2B] bg-[#FCFCFC] shadow-sm dark:shadow-gray-500 w-full fixed top-0 left-0 z-40">
      {/* Mobile Header */}
      <nav className="lg:hidden flex flex-row p-5 justify-between items-center self-stretch">
        <HashLink
          smooth
          to="/#"
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="font-inter text-sm font-bold text-[#100108] dark:text-[#FFF]">
            Ujunwa Chiahaoke
          </span>
        </HashLink>
        <button
          type="button"
          onClick={onHamburgerClick}
          aria-label="Open menu"
          className="p-3 focus:outline-none"
        >
          <GiHamburgerMenu className="w-4 h-4 md:w-[2.25rem] md:h-[2.25rem] text-[#100108] dark:text-[#F8F1E6]" />
        </button>
      </nav>

      {/* Desktop Header */}
      <nav className="md:hidden hidden lg:flex w-full justify-between items-center pt-10 pb-5 px-14">
        <HashLink
          smooth
          to="/#"
          className="flex items-center gap-2"
          aria-label="Homepage"
        >
          <img
            src="./Logo.svg"
            alt="logo"
            className="w-[3.75rem] h-[3.75rem]"
          />
          <span className="font-inter text-lg font-bold text-[#100108] dark:text-[#FFF]">
            Ujunwa Chiahaoke
          </span>
        </HashLink>

        <ul className="flex py-5 items-center gap-14">
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
                            ? "w-full bg-[#FCFCFC]"
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
                          ? "w-full bg-[#FCFCFC]"
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
            href="http://linkedin.com/in/chinonyelum-chime-a4b0a4166"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base py-[0.875rem] px-4 text-[#100108] dark:text-[#C78D32]"
          >
            LinkedIn
          </a>
          <Buttons className="font-bold" onClick={handleEmailClick}>
            Let’s talk
          </Buttons>
        </section>
      </nav>
    </section>
  );
}

export default Dashboard;
