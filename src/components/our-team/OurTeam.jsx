import React from "react";
import { TEAM } from "./data";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";


const TeamCard = ({ person, className = "" }) => {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-zinc-900 bg-white p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:rotate-1",
        className,
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl border border-zinc-900 bg-zinc-900 ">
          <img
            src={person.avatar}
            alt={`${person.name} avatar`}
            loading="lazy"
            className="h-20 w-20 rounded-xl border border-zinc-900 object-cover transition-transform duration-500 ease-out group-hover:-rotate-6"
          />
        </div>

        <div className="w-fit">
          <p className="truncate text-lg font-semibold text-zinc-900">
            {person.name}
          </p>

          <p className="mt-0.5 text-sm text-zinc-600">
            <span className="font-medium text-zinc-900">{person.role}</span>{" "}
            <span className="text-zinc-500">•</span>{" "}
            <span className="text-zinc-500">{person.team}</span>
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-600">
        {person.bio}
      </p>
    </div>
  );
};



export const OurTeam = () => {
  const [a, b, c, d, e, f] = TEAM;

  return (
    <section className="mx-auto max-w-6xl px-2 md:px-4 py-12">
      <div className="text-center mb-12">
        <SectionHeading>Meet the team</SectionHeading>
        <SectionSubheading>
          The small crew behind your next product.
        </SectionSubheading>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <TeamCard person={a} className="md:col-span-6" />
        <TeamCard person={b} className="md:col-span-6" />
        <TeamCard person={c} className="md:col-span-4" />
        <TeamCard person={d} className="md:col-span-4" />
        <TeamCard person={e} className="md:col-span-4" />
        
      </div>
    </section>
  );
};