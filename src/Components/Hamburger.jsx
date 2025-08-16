// Hamburger.jsx
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ThemeToggle from "./ThemeToggle";
import { Buttons } from "./Buttons";
import { navLinks } from "../Data/Data";

function Hamburger({ open, onClose }) {
  const menuRef = useRef();
  const firstLinkRef = useRef();

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleEmailClick = () => {
    window.location.href =
      "mailto:chimechinonyelum@gmail.com?subject=Let's%20Work%20Together";
  };

  const handleLinkClick = () => onClose();

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 bg-white/60 dark:bg-[rgba(16,1,8,0.8)] z-40"
        onClick={onClose}
        aria-label="Close menu"
      />
      <aside
        ref={menuRef}
        className="fixed top-0 right-0 w-full z-50 transition-transform duration-300 ease-out"
        style={{
          height: "50vh",
          transform: open ? "translateY(0%)" : "translateY(-100%)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <nav className="flex flex-col gap-5 p-5 md:p-8 bg-gray-200 dark:bg-[#2B2B2B]">
          {navLinks.map((link, i) => (
            <div key={i} className="w-full">
              {link.type === "route" ? (
                <NavLink
                  to={link.to}
                  onClick={handleLinkClick}
                  className="flex p-2 justify-center items-center"
                  ref={i === 0 ? firstLinkRef : undefined}
                >
                  <span className="text-[#100108] dark:text-[#FFFFFF] font-inter text-base">
                    {link.name}
                  </span>
                </NavLink>
              ) : (
                <HashLink
                  smooth
                  to={link.to}
                  onClick={handleLinkClick}
                  className="flex p-2 justify-center items-center"
                  ref={i === 0 ? firstLinkRef : undefined}
                >
                  <span className="text-[#100108] dark:text-[#FFFFFF] font-inter text-base">
                    {link.name}
                  </span>
                </HashLink>
              )}
            </div>
          ))}

          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/chinonyelum-chime-a4b0a4166/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="font-bold text-[#100108] dark:text-[#C78D32]"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center">{/* <ThemeToggle /> */}</div>

          <Buttons
            className="md:w-60 self-stretch font-bold"
            onClick={handleEmailClick}
          >
            Let's talk
          </Buttons>
        </nav>
      </aside>
    </>
  );
}

export default Hamburger;
