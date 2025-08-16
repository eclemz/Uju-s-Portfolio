import React from "react";

function Buttons({ children, icon, className, onClick, onKeyDown }) {
  return (
    <button
      className={`inline-flex justify-center items-center py-[0.875rem] px-4 gap-2 lg:text-base md:text-sm text-xs bg-[#C78D32] text-[#FFF] active:scale-95 active:bg-[#D8B070] active:shadow-[0_4px_4px_0_rgba(216, 176, 112, 0.36)] hover:scale-105 hover:bg-[#BB7608] hover:shadow-[0_4px_4px_0_rgba(187,118,8,0.36)] transition-transform duration-300 rounded-[0.25rem] focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </button>
  );
}

function Buttons1({ children, icon, className, onClick, onKeyDown }) {
  return (
    <button
      className={`inline-flex justify-center items-center border-2 border-[#C78D32] bg-[#F8F1E6] text-[#A96800] py-[0.875rem] px-4 gap-2 lg:text-base md:text-sm text-xs active:scale-95 active:border-[#D8B070] active:shadow-[0_4px_4px_0_rgba(216,176,112,0.36)] hover:scale-105 hover:border-[#BB7608] hover:shadow-[0_4px_4px_0_rgba(187,118,8,0.36)] hover:font-medium transition-transform duration-300 rounded-[0.25rem] focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </button>
  );
}
function Buttons2({ children, icon, className, onClick, onKeyDown }) {
  return (
    <button
      className={`inline-flex justify-center items-center text-[#C78D32] py-[0.875rem] px-4 gap-2 lg:text-base md:text-sm text-xs active:scale-95 hover:scale-105 hover:text-[#BB7608] hover:underline underline-offset-auto decoration-from-font hover:font-medium transition-transform duration-300 rounded-[0.25rem] focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </button>
  );
}

export { Buttons, Buttons1, Buttons2 };
