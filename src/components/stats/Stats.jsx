import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stats = () => {
  return (
    <section className="px-4 relative bg-zinc-900 py-24 text-white">
      <h3  className=" py-12 block text-center text-3xl md:text-4xl">
          Show Off  <span className=" text-zinc-400 ">Some Stats</span>
      </h3>
      <div className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-0 mx-auto max-w-5xl ">
        <Stat
          num={12}
          suffix="X"
          subheading="Less monthly overhead"
          highlight="overhead"
        />

        <Stat
          num={100}
          suffix="%"
          subheading="Increase in retention"
          highlight="retention"
        />

        <Stat
          num={100}
          suffix="M"
          subheading="Tasks tracked so far"
          highlight="tracked"
        />
      </div>
        <div className="absolute left-0 right-0 top-0 h-8 lg:rounded-b-[40px] rounded-b-2xl bg-zinc-50" />
      <div className="absolute bottom-0 left-0 right-0 h-8 lg:rounded-t-[40px] rounded-t-2xl bg-zinc-50" />
    </section>
  );
};

const Stat = ({
  num,
  suffix,
  decimals = 0,
  subheading,
  highlight,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 1.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  const [before, after] = subheading.split(highlight);

  return (      
    <div className="flex w-full flex-col items-center ">


      <p className="mb-3 text-5xl font-mono tracking-tight text-zinc-200">
        <span ref={ref}></span>
        {suffix}
      </p>

      <p className="text-xl text-white text-center">
        {before}
        <span className=" text-zinc-400">{highlight}</span>
        {after}
      </p>
    </div>
  );
};
