import React from "react";
import { FiEdit } from "react-icons/fi";
import { BsFillCursorFill } from "react-icons/bs";
import { MdOutlineSecurity, MdFileDownloadOff } from "react-icons/md";
import { Block } from "./Block";
import { twMerge } from "tailwind-merge";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const CollaborateBlock = () => (
  <Block className="col-span-3 overflow-hidden md:col-span-2 border-2 border-zinc-900">
    <div className="flex h-full flex-col justify-between gap-6">
      <div className="relative -mx-6 -mt-6 grid h-full place-content-center overflow-hidden border-b-2 border-zinc-900 bg-zinc-100">
        <div className="my-6 rounded-lg border-2 border-zinc-900 bg-white p-4 shadow shadow-zinc-500">
          <MdOutlineSecurity className="text-4xl text-zinc-900" />
        </div>
        <MdFileDownloadOff className="absolute bottom-4 right-4 text-4xl text-zinc-900 opacity-40" />
      </div>
      <div>
        <CardTitle>Stop worrying about breaches</CardTitle>
        <CardSubtitle>
          We take security so seriously, even we can't see your stuff. Your clients' info stays locked down tighter than your NDA agreements.
        </CardSubtitle>
      </div>
    </div>
  </Block>
);

