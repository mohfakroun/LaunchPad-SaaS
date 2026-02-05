import React from "react";

export const ToggleButton = ({ children, selected, setSelected, id }) => {
  return (
    <div
      className={`rounded-lg transition-colors ${
        selected === id ? "bg-white" : "bg-zinc-900"
      }`}
    >
      <button
        onClick={() => setSelected(id)}
        className={`w-full origin-top-left rounded-lg border py-3 text-xs font-medium transition-all md:text-base  border-black ${
          selected === id
            ? "bg-white border-2 border-dashed "
            : "border-zinc-300 text-zinc-900 bg-white/80 hover:translate-y-1 -translate-y-1 "
        }`}
      >
        {children}
      </button>
    </div>
  );
};
