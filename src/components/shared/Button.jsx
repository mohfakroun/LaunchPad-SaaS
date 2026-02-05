import React from "react";

export const Button = ({ className = "", ...props }) => {
  return (
    <button
      className={`
        uppercase
        inline-flex items-center justify-center
        rounded-lg
        border border-dashed border-zinc-900
        bg-white text-zinc-900
        px-6 py-3 text-base
        transition-all duration-200
        shadow-[6px_6px_0px_rgba(255,255,255,0.9)]
        hover:translate-x-[6px] hover:translate-y-[6px]
        hover:shadow-none
        hover:border-solid 
        active:translate-x-[7px] active:translate-y-[7px]
        active:shadow-none
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/40
        focus-visible:ring-offset-2
        focus-visible:ring-offset-black
        ${className}
      `}
      {...props}
    />
  );
};
