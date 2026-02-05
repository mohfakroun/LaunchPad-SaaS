import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export const Button = ({ className = "", ...props }) => (
  <div className="rounded-2xl">
    <button className={`rounded-3xl bg-white border-[1px] border-black/30 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${className}`}>
        Try it now
    </button>
  </div>
);
