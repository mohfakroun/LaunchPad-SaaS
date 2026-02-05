import React from "react";
import { poppinsFont } from "../../fonts";






export const SectionHeading = ({ children }) => {
  return (
    <h2 className={`mx-auto mb-4 capitalize max-w-3xl text-center text-4xl leading-[1.15] md:text-6xl font-light md:leading-[1.1] ${poppinsFont.className}`}>
      {children}
    </h2>
  );
};
