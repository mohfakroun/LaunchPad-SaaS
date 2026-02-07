import React from "react";
import { motion } from "framer-motion";


export const Logos = () => {
  return (
    <section className="relative scale-[1.01] select-none  ">
      <div className="relative z-0 flex overflow-hidden pb-2">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      className="flex px-2 gap-4"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({  name }) => {
  return (
    <span className="flex items-center justify-evenly gap-10 px-4 py-2 md:py-4 rounded-xl border-r border-2 border-zinc-900 bg-white shadow-[8px_8px_0_0_rgba(24,24,27,1)]">
      <span className="whitespace-nowrap text-xl font-light uppercase md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem name="Nike" />
    <LogoItem name="Peachr" />
    <LogoItem name="Sage Learning" />
    <LogoItem name="Adobe" />
    <LogoItem name="AWS" />
    <LogoItem name="Bolt" />
    <LogoItem name="Uber" />
    <LogoItem name="Microsoft" />
    <LogoItem name="Barclays" />
  </>
);


