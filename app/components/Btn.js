
import React from "react";

const Btn = ({ name, onClick, arrow = false, len = false, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative overflow-hidden
        rounded-2xl
        px-3 py-2 sm:px-4 sm:py-2.5
        bg-linear-to-b from-gray-700 to-gray-900
        text-sm sm:text-base md:text-lg
        font-semibold text-white
        border border-gray-600
        shadow-[0_8px_25px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.45)]
        active:translate-y-0 active:scale-95
        disabled:cursor-not-allowed disabled:opacity-50
        cursor-pointer
        ${len ? "w-full" : ""}
      `}
    >
      {/* Button Content */}
      <span
        className={`
          relative z-10 flex items-center gap-3
          ${len ? (arrow ? "justify-around" : "justify-center") : "justify-center"}
        `}
      >
        {name}

        {arrow && (
          <span className="text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </span>

      {/* Shine Effect */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent via-white/15 to-transparent
          transition-transform duration-700
          group-hover:translate-x-full
        "
      />
    </button>
  );
};

export default Btn;
