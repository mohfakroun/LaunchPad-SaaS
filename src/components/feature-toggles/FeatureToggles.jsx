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
    <section className={`relative mx-auto max-w-6xl px-3 md:px-4 ${poppinsFont.className}`}>
      <div className="mb-10">
        <SectionHeading>Track work without the mess.</SectionHeading>
        <SectionSubheading>
          Pick a view that matches how your team actually ships: issues, boards, timelines, docs.
        </SectionSubheading>
      </div>


      <div className="grid gap-6 md:grid-cols-[320px_1fr]">
        <div className="md:sticky md:top-6 self-start">
          <div className="rounded-xl border-2 border-zinc-900 bg-white p-3 shadow-[6px_6px_0_0_rgba(24,24,27,1)]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Features
            </p>

            <div className="flex flex-col gap-2">
              {data.map((d, idx) => {
                const active = d.id === selected;

                return (
                  <button
                    key={d.id}
                    onClick={() => setSelected(d.id)}
                    className={[
                      "group w-full text-left rounded-lg border-2 border-zinc-900 px-3 py-3 transition-transform",
                      "shadow-[3px_3px_0_0_rgba(24,24,27,1)] hover:-translate-x-0.5 hover:-translate-y-0.5",
                      active ? "bg-zinc-900/70 text-white" : "bg-white text-zinc-900",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold uppercase">{d.title}</span>
                        </div>
                      </div>

                      <span
                        className={[
                          "shrink-0 rounded-md border-2 border-zinc-900 px-2 py-1 text-xs font-semibold",
                          active ? "bg-white text-zinc-900" : "bg-zinc-100 text-zinc-900",
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
        <div className="min-w-2">
          <div className="rounded-xl border-2 border-zinc-900 bg-white shadow-[8px_8px_0_0_rgba(24,24,27,1)]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-zinc-900 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-zinc-700 underline">
                  {el.title}
                </span>
              </div>
            </div>


            <div className="p-4 md:p-6">
              <FeatureDisplay
                selected={selected}
                // cardTitle={el.cardTitle}
                cardSubtitle={el.cardSubtitle}
                Component={el.Component}
              />
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {(el?.bento ?? []).slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="rounded-xl border-2 border-zinc-900 bg-white p-4 shadow-[6px_6px_0_0_rgba(24,24,27,1)]"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  {item.kicker}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.body}
                </p>
                {item.tag && (
                  <div className="mt-3 inline-flex rounded-md border-2 border-zinc-900 bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-900">
                    {item.tag}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
