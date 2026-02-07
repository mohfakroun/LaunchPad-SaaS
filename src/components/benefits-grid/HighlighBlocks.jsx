import React from "react";
import { Block } from "./Block";
import {
  FiCoffee,
  FiSmile,
} from "react-icons/fi";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const HighlighBlocks = () => {
  return (
    <>
      <HighlightBlock
        Icon={ LuCircleDollarSign}
        title="Your wallet will thank you"
        subtitle={`Stop buying expensive coffee to "brainstorm" at cafés. Our platform does the thinking so you can actually enjoy that oat milk latte."`}
      />
      <HighlightBlock
        Icon={ FaChartLine}
        title="Actually make money"
        subtitle={`Make more money while doing less work. It's not lazy, it's called "working smarter." Your accountant will send you a thank you card.`}
      />
      <HighlightBlock
        Icon={FiSmile}
        title="Get stuff done (finally)"
        subtitle={`Finally stop pretending those 3-hour "strategy sessions" are productive. Get actual work done and reclaim your evenings for Netflix guilt`}
      />
      <HighlightBlock
        Icon={FiCoffee}
        title="Reclaim your evenings"
        subtitle="Leave the office before the cleaning crew arrives. Automate the boring stuff and pretend you're just naturally efficient. We won't tell anyone."
      />
    </>
  );
};

const HighlightBlock = ({ iconClassName, Icon, title, subtitle }) => (
  <Block className="col-span-3 space-y-1.5 md:col-span-1 shadow-inner shadow-zinc-900/40">
    <Icon className={twMerge("text-3xl")} />
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </Block>
);
