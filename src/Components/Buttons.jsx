import React from "react";
import { motion } from "framer-motion";

function Buttons({ children, icon, className, onClick, onKeyDown }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      animate={{ transition: { duration: 0.3, ease: "linear" } }}
      className={`inline-flex justify-center items-center py-[0.875rem] px-4 gap-2 lg:text-base md:text-sm text-xs bg-[#C78D32] text-[#000000] active:bg-[#D8B070] active:shadow-[0_4px_4px_0_rgba(216, 176, 112, 0.36)] hover:bg-[#BB7608] hover:shadow-[0_4px_4px_0_rgba(187,118,8,0.36)] rounded-[0.25rem] focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </motion.button>
  );
}

function Buttons1({ children, icon, className, onClick, onKeyDown }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      animate={{ transition: { duration: 0.3, ease: "linear" } }}
      className={`inline-flex justify-center items-center border-2 border-[#C78D32] bg-[#F8F1E6] text-[#A96800] py-[0.875rem] px-4 gap-2 lg:text-base md:text-sm text-xs  active:border-[#D8B070] active:shadow-[0_4px_4px_0_rgba(216,176,112,0.36)]  hover:border-[#BB7608] hover:shadow-[0_4px_4px_0_rgba(187,118,8,0.36)] hover:font-medium rounded-[0.25rem] focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </motion.button>
  );
}
function Buttons2({ children, icon, className, onClick, onKeyDown }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      animate={{ transition: { duration: 0.3, ease: "linear" } }}
      className={`inline-flex justify-center items-center text-[#C78D32] py-[0.875rem] px-4 gap-2 lg:text-base md:text-sm text-xs hover:text-[#BB7608] hover:underline underline-offset-auto decoration-from-font hover:font-medium rounded-[0.25rem] focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </motion.button>
  );
}

export { Buttons, Buttons1, Buttons2 };
