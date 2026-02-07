import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../shared/Button";

export const CTA_Tag = () => {
  return (
    <>
      <div className="mb-1.5 md:rounded-full md:pt-10 pt-4">
      </div>
      <h1 className="max-w-4xl text-center text-4xl font-light text-zinc-50 leading-[1.15] md:text-7xl md:leading-[1.15]">
    Your product deserves a better first impression
      </h1>
      <h2 className="mx-auto my-4 max-w-3xl text-center text-zinc-400 font-extralight leading-relaxed md:my-6 md:text-2xl md:leading-relaxed">
        A simple, <span className="text-zinc-50">high impact</span> landing page for launching SaaS products. <span className="text-zinc-50"> Clean layout</span> and<span className="text-zinc-50">  clear messaging. </span>
       </h2>

       {/* replace this with your product link if its live 
       or a lead capture if you are marketing your perosnal product
        */}
       <a href="https://github.com/mohfakroun/LaunchPad-SaaS" target="_blank" rel="noopener noreferrer">       
     <Button>
  <span className="font-light">Get started Today </span>
  </Button>
  </a>
    </>
  );
};
