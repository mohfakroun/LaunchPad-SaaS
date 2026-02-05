import React from "react";
import { motion } from "framer-motion";
import { IntegrationsBlock } from "./IntegrationsBlock";
import { CollaborateBlock } from "./CollaborateBlock";
import { HighlighBlocks } from "./HighlighBlocks";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";
import { GetStarted } from "./GetStarted";
import { Button } from "../shared/Button";

export const BenefitsGrid = () => {
  return (
    <motion.section
      transition={{
        staggerChildren: 0.1,
      }}
      initial="initial"
      whileInView="whileInView"
      className="relative mx-auto grid max-w-6xl grid-cols-3 gap-4 px-2 md:px-4"
    >
      <div className="col-span-3">
        <SectionHeading>Why Your Life Is About To Get Easier!</SectionHeading>
        <SectionSubheading>
          Real talk...these features will actually save your sanity (and your weekends).
        </SectionSubheading>
      </div>
      <IntegrationsBlock />
      <HighlighBlocks />
      <CollaborateBlock />
      <GetStarted />
    </motion.section>
  );
};
