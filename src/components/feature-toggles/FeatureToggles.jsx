import React, { useMemo, useState } from "react";
import { data } from "./data";
import { FeatureDisplay } from "./FeatureDisplay";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";
import { poppinsFont } from "../../fonts";

export const FeatureToggles = () => {
  const [selected, setSelected] = useState(data?.[0]?.id ?? 1);
  const el = useMemo(() => data.find((d) => d.id === selected), [selected]);

  return (
    <section
      className={`relative mx-auto max-w-6xl px-3 md:px-4 ${poppinsFont.className}`}
    >
      <div className="mb-10">
        <SectionHeading>Track work without the mess.</SectionHeading>
        <SectionSubheading>
          Pick a view that matches how your team actually ships: issues, boards,
          timelines, docs.
        </SectionSubheading>
      </div>

      <div className="grid gap-6 md:grid-cols-[340px_1fr] ">
        <div className="min-w-0 md:h-fit">
          <div className="w-full  border border-zinc-900 bg-white p-3 md:h-full">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Features
            </p>

            <div className="flex flex-col gap-2">
              {data.map((d) => {
                const active = d.id === selected;
                return (
                  <button
                    key={d.id}
                    onClick={() => setSelected(d.id)}
                    className={[
                      "group w-full rounded-md border-2 border-zinc-900 px-3 py-3 text-left transition-transform",
                      "shadow-[3px_3px_0_0_rgba(24,24,27,1)] hover:-translate-x-0.5 hover:-translate-y-0.5",
                      active
                        ? "bg-zinc-900/70 text-white"
                        : "bg-white text-zinc-900",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="truncate font-semibold uppercase">
                        {d.title}
                      </span>

                      <span
                        className={[
                          "shrink-0 rounded-md border-2 border-zinc-900 px-2 py-1 text-xs font-semibold",
                          active
                            ? "bg-white text-zinc-900"
                            : "bg-zinc-100 text-zinc-900",
                        ].join(" ")}
                      >
                        {active ? "Selected" : "View"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="min-w-0 h-fit">
          <div className="flex-1 overflow-hidden rounded-lg  border border-zinc-900 bg-white ">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-zinc-900 px-4 py-3">
              <span className="text-sm font-semibold text-zinc-700 underline">
                {el.title}
              </span>
            </div>
            <div className="relative flex flex-col p-4 md:p-6">
              <div className="min-h-[420px] md:min-h-full">
                <FeatureDisplay
                  selected={selected}
                  Component={el.Component}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
