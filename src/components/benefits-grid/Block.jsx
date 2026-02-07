import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      className={twMerge(
        "col-span-1 rounded-lg border-zinc-900 bg-white p-6",
        className
      )}
      {...rest}
    />
  );
};
