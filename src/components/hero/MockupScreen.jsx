import React from "react";
import { FiChevronDown, FiTrendingUp, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

export const MockupScreen = () => {
  return (
    <div className="absolute bottom-0 left-1/2 h-36 w-[calc(100vw_-_56px)] max-w-[1100px] -translate-x-1/2 overflow-hidden rounded-t-xl bg-zinc-200 p-0.5">
      <div className="flex items-center justify-between px-2 py-1">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-yellow-400" />
          <span className="size-2 rounded-full bg-green-400" />
        </div>
        <a className="rounded bg-zinc-600 px-2 py-0.5 text-xs text-zinc-100 hover:underline " href="https://www.github.com/mohfakroun" target="_blank" rel="nofollow">
        www.github.com/mohfakroun
        </a>
        <FiChevronDown className="text-zinc-800" />
      </div>
      <div className="relative z-0 h-full w-full overflow-hidden rounded-t-lg bg-white border border-zinc-800">
        <div className="flex items-center justify-between border-b border-zinc-200 px-2 py-1 md:px-3">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={22} height={22} />
            <div className="leading-tight">
              <p className="text-[10px] font-medium text-zinc-900 md:text-xs">
                Peachr Platform
              </p>
              <p className="text-[9px] text-zinc-500 md:text-[10px]">
                Last 7 days
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-[9px] text-zinc-700 md:text-[10px]">
            <FiTrendingUp className="text-indigo-600" />
            <span>+12.4%</span>
          </div>
        </div>

        <div className="grid h-full grid-cols-12 gap-2 p-2 md:gap-3 md:p-3">
          <div className="col-span-12 grid grid-cols-3 gap-2 md:col-span-5 md:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-2">
              <p className="text-[9px] text-zinc-500 md:text-[10px]">
                Visitors
              </p>
              <p className="text-sm font-semibold text-zinc-900 md:text-base">
                18.2k
              </p>
              <p className="text-[9px] text-emerald-600 md:text-[10px]">
                +8.1%
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-2">
              <p className="text-[9px] text-zinc-500 md:text-[10px]">
                Signups
              </p>
              <p className="text-sm font-semibold text-zinc-900 md:text-base">
                1,204
              </p>
              <p className="text-[9px] text-emerald-600 md:text-[10px]">
                +14.0%
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-2">
              <p className="text-[9px] text-zinc-500 md:text-[10px]">
                Conversion
              </p>
              <p className="text-sm font-semibold text-zinc-900 md:text-base">
                6.6%
              </p>
              <p className="text-[9px] text-zinc-500 md:text-[10px]">
                steady
              </p>
            </div>
          </div>



          <div className="col-span-12 md:col-span-7">
            <div className="h-full rounded-lg border border-zinc-200 bg-white p-2 md:p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[10px] font-medium text-zinc-900 md:text-xs">
                  Traffic
                </p>
                <span className="text-[9px] text-zinc-500 md:text-[10px]">
                  realtime
                </span>
              </div>
              <div className="mt-2 hidden grid-cols-3 gap-2 text-[9px] text-zinc-600 sm:grid md:text-[10px]">
                <span className="rounded bg-zinc-50 px-2 py-1">
                  Top page: /pricing
                </span>
                <span className="rounded bg-zinc-50 px-2 py-1">
                  Avg. time: 1m 12s
                </span>
                <span className="rounded bg-zinc-50 px-2 py-1">
                  Ref: Google
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
