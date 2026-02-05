import React, { useState } from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { CheckListItem } from "./CheckListItem";
import { Toggle } from "./Toggle";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../shared/PricingButton";

export const Pricing = () => {
  const [selected, setSelected] = useState("annual");
  return (
    <section className="mx-auto max-w-7xl px-2 md:px-4">
      <SectionHeading>Stop Overpaying For Software</SectionHeading>
      <Toggle selected={selected} setSelected={setSelected} />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
        <PriceColumn
          title="Individuals"
          price="0"
          statement="Perfect for solo hustlers who refuse to pay for things."
          items={[
            {
              children: "1 User (Obviously)",
              checked: true,
            },
            {
              children: "10 Projects",
              checked: true,
            },
            {
              children: "Basic Analytics",
              checked: true,
            },
            {
              children: "Priority Support",
              checked: false,
            },
            {
              children: "API Access",
              checked: false,
            },
            {
              children: "White Label",
              checked: false,
            },
          ]}
        />
        <PriceColumn
          title="Teams"
          price={selected === "monthly" ? "12" : "8"}
          statement="For teams who actually want to ship things"
          highlight
          items={[
            {
              children: "Up to 25 Users ",
              checked: true,
            },
            {
              children: "Unlimited Projects (Go wild)",
              checked: true,
            },
            {
              children: "Advanced Analytics",
              checked: true,
            },

            {
              children: "Priority Support",
              checked: true,
            },
            {
              children: "API Access",
              checked: true,
            },
            {
              children: "White Label",
              checked: false,
            },
          ]}
        />
        <PriceColumn
          title="Enterprise"
          price={selected === "monthly" ? "24" : "16"}
          statement={`For when investors ask "does it scale?"`}
          items={[
            {
              children: "Unlimited Users",
              checked: true,
            },
            {
              children: "Unlimited Projects",
              checked: true,
            },
            {
              children: "Custom Dasboards",
              checked: true,
            },

            {
              children: "Dedicated Support",
              checked: true,
            },
            {
              children: "Full API Access",
              checked: true,
            },
            {
              children: "Whiter Label",
              checked: true,
            },
          ]}
        />
      </div>
    </section>
  );
};

const PriceColumn = ({ highlight, title, price, statement, items }) => {
  return (
    <div
      style={{
        boxShadow: highlight ? "5px 6px 0 0 rgba(24,24,27,1)" : "",
      }}
      className={`relative flex h-full w-full flex-col rounded-lg p-6 md:p-8 ${
        highlight ? "border-[1px] border-zinc-900 bg-white lg:-translate-y-2" : "border-[1px] border-dashed border-zinc-300 bg-zinc-100"
      }`}
    >
      {highlight && (
        <span className="absolute right-4 top-4 rounded-full bg-indigo-600 px-2 py-0.5 text-sm text-white">
          Most Popular
        </span>
      )}

      <p className="mb-6 text-xl font-medium">{title}</p>

      <div className="mb-6 flex items-center gap-3">
        <AnimatePresence mode="popLayout">
          <motion.span
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            key={price}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="block text-6xl font-bold"
          >
            £{price}
          </motion.span>
        </AnimatePresence>

        <motion.div layout className="font-medium md:text-xl text-zinc-600">
          <span className="block">/month</span>
        </motion.div>
      </div>

      <p className="mb-8 text-lg">{statement}</p>

      <div className="mb-8 flex-1 space-y-2">
        {items.map((i) => (
          <CheckListItem key={i.children} checked={i.checked}>
            {i.children}
          </CheckListItem>
        ))}
      </div>

      <Button className="w-full" intent={highlight ? "primary" : "secondary"}>
        Try it now
      </Button>
    </div>
  );
};

