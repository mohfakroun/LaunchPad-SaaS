import React from "react";
import {
  SiNotion,
  SiSlack,
  SiStripe,
  SiGoogledrive,
  SiZapier,
} from "react-icons/si";
import { Block } from "./Block";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const IntegrationsBlock = () => (
  <div className="col-span-3 overflow-hidden md:col-span-2 p-6">
    <CardTitle>Plays nice with your tech stack</CardTitle>
    <CardSubtitle>
     Connects with all the tools you forgot you're still paying for. Yes, even that project management app from 2019 that auto renews every March.
    </CardSubtitle>

    <div className="relative pb-1 mt-6 grid grid-cols-3 gap-2">
      <div className="grid w-full place-content-center border-2 border-zinc-900 rounded-2xl bg-zinc-100 py-8 text-white shadow-[4px_4px_0_0_rgba(24,24,27,1)]">
        <SiSlack className="text-4xl text-zinc-900" />
      </div>
      <div className="grid w-full place-content-center border-2 rounded-2xl border-zinc-900 bg-zinc-100 py-8 text-white shadow-[4px_4px_0_0_rgba(24,24,27,1)]">
        <SiNotion className="text-4xl text-zinc-900" />
      </div>
      <div className="grid w-full place-content-center border-2 border-zinc-900 rounded-2xl bg-zinc-100 py-8 text-white shadow-[4px_4px_0_0_rgba(24,24,27,1)]">
        <SiStripe className="text-4xl text-zinc-900" />
      </div>

      <div className="grid w-full place-content-center border-2 border-zinc-900 rounded-2xl bg-zinc-100 py-8 text-white shadow-[4px_4px_0_0_rgba(24,24,27,1)]">
        <SiGoogledrive className="text-4xl text-zinc-900" />
      </div>
      <div className="grid w-full place-content-center border-2 border-zinc-900 rounded-2xl bg-zinc-100 py-8 text-white shadow-[4px_4px_0_0_rgba(24,24,27,1)]">
        <SiZapier className="text-4xl text-zinc-900" />
      </div>
      <div className="grid w-full place-content-center border-zinc-200 rounded-2xl bg-white py-8 shadow-inner shadow-zinc-900/20">
        +1,000's more
      </div>
    </div>
  </div>
);