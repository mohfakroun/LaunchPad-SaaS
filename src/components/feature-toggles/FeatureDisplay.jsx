import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const FeatureDisplay = ({
  selected,
  Component,
}) => {
  return (
    <div className="grid h-full w-full grid-cols-1 overflow-hidden rounded-md border shadow-[6px_6px_0_0_rgba(24,24,27,1)] border-zinc-900 bg-white md:h-96 md:grid-cols-13">
      <div className="relative col-span-1 min-h-80 md:col-span-5">
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              x: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              y: 50,
              x: 50,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            key={selected}
            className="pointer-events-none absolute bottom-0 left-8 right-0 top-8 overflow-hidden bg-white shadow-2xl"
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
