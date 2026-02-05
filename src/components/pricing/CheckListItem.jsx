import React from "react";

export const CheckListItem = ({ children, checked }) => {
  return (
    <div className="flex items-start gap-3 text-base md:text-lg">
      <span
        className={`mt-2 size-2 shrink-0 rounded-full ${
          checked ? "bg-zinc-400 border border-indigo-500 rounded-full" : "bg-zinc-300"
        }`}
        aria-hidden="true"
      />

      <span
        className={
          checked
            ? "text-zinc-900"
            : "text-zinc-500 line-through decoration-zinc-800"
        }
      >
        {children}
      </span>
    </div>
  );
};
