import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export const CheckPill = ({ children, selected, setSelected, index }) => (
  <div className="rounded-full bg-zinc-900">
    <button
      onClick={() => setSelected(index)}
      className={`flex origin-top-left items-center gap-1 rounded-full border-2 bg-white px-2 py-1 text-sm font-medium transition-all duration-300
      ${
        selected ? "-translate-y-1 border-zinc-900 text-zinc-100 bg-zinc-900" : "border-zinc-900 text-zinc-800 hover:-translate-y-0.5 hover:bg-zinc-100"
      }`}
    >
      <FiCheckCircle className={`${selected ? "text-zinc-200" : "text-zinc-900"}`} />
      {children}
    </button>
  </div>
);
