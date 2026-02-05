import React, { useState } from "react";
import { Users } from "./Users";
import { Copy } from "./Copy";

export const Supports = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="relative mx-auto max-w-6xl px-2 md:px-4">
      <div className="relative overflow-hidden rounded-2xl bg-zinc-50 p-5 md:p-8">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="relative flex flex-col gap-10 md:flex-row md:items-start md:gap-10">
          <div className="w-full md:w-5/12">
            <Copy selected={selected} setSelected={setSelected} />
          </div>

          <div className="w-full md:w-7/12">
            <Users selected={selected} />
          </div>
        </div>
      </div>
    </section>
  );
};
