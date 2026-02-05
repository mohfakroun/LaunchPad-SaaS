import React from "react";
import { CheckPill } from "./CheckPill";
import { OPTIONS } from "./options";

export const Copy = ({ selected, setSelected }) => {
  return (
    <div className="w-full">
      <span className="mb-3 inline-flex items-center px-3 py-1 text-xs font-medium tracking-wide text-zinc-900 uppercase">
        built for real teams 
      </span>

      <h2 className="mb-6 text-4xl font-light leading-tight md:text-5xl capitalize">
          designed to fit how you already work!
      </h2>


      <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
        {OPTIONS.map((o, i) => {
          return (
            <CheckPill
              key={o.title}
              index={i}
              selected={i === selected}
              setSelected={setSelected}
            >
              {o.title}
            </CheckPill>
          );
        })}
      </div>

    <p className="text-base leading-relaxed text-zinc-700 md:text-lg">
      Every product looks good in isolation. What matters is how it supports{" "} <span className="font-semibold text-zinc-900"> different people, roles and use cases </span>{" "}
      once it's actually in use.
      <br />
      <br />
      Use this section to show how your product adapts across{" "} <span className="font-semibold text-zinc-900"> industries, team sizes or audiences </span>{" "} and how each one gets value in their own way.
    </p>


    </div>
  );
};
