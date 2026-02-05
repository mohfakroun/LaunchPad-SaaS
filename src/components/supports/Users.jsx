import React from "react";
import { OPTIONS } from "./options";
import { AnimatePresence } from "framer-motion";

export const Users = ({ selected }) => {
  const option = OPTIONS[selected] || OPTIONS[0];
  const { Content } = option;

  return (
    <div className="w-full rounded-lg">
      <AnimatePresence mode="wait">
        <Content key={selected} />
      </AnimatePresence>
    </div>
  );
};
