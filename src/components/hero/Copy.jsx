import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../shared/Button";

export const CTA_Tag = () => {
  return (
    <>
      <div className="mb-1.5 rounded-full ">
   {/* <Link
  href="https://www.producthunt.com/"
  target="_blank"
  rel="nofollow"
  className="
    group
    inline-flex items-center rounded-full
    border border-dotted border-zinc-900
    bg-white p-0.5 text-sm
    transition-all duration-500
    shadow-[4px_4px_0px_rgba(255,255,255,0.9)]
    hover:border-solid
    hover:translate-x-[6px] hover:translate-y-[6px]
    hover:shadow-none
  "
>
  <span
    className="
      rounded-full bg-zinc-800
      px-2 py-0.5 font-medium text-white
      transition-colors duration-300 border-[1px] border-zinc-800
      group-hover:bg-zinc-300
      group-hover:text-zinc-900
    "
  >
    HEY!
  </span>

  <span className="ml-1.5 mr-1">
    We're live on Product Hunt!
  </span>

</Link>

 */}

      </div>
      <h1 className="max-w-4xl text-center text-4xl font-light text-zinc-50 leading-[1.15] md:text-7xl md:leading-[1.15]">
    Your product deserves a better first impression
      </h1>
      <p className="mx-auto my-4 max-w-3xl text-center text-zinc-400 font-extralight leading-relaxed md:my-6 md:text-2xl md:leading-relaxed">
        A simple, <span className="text-zinc-50">high impact</span> landing page for launching SaaS products. <span className="text-zinc-50"> Clean layout</span> and<span className="text-zinc-50">  clear messaging. </span>
       </p>
     <Button>
  <span className="font-light">Get started Today </span>

  </Button>
    </>
  );
};
