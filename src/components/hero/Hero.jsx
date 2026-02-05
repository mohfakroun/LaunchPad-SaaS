import React from "react";
import { MockupScreen } from "./MockupScreen";
import {  CTA_Tag } from "./Copy";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-12 pb-48 pt-12 md:pt-24">
      <CTA_Tag />
      <MockupScreen />
    </section>
  );
};
