import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { LogoLarge } from "../navigation/Logo";
import { Button } from "../shared/PricingButton";
import { FiGithub } from "react-icons/fi";
import { RiVercelLine } from "react-icons/ri";
import { TbFreeRights } from "react-icons/tb";

export const FinalCTA = () => {
  return (
    <section className="-mt-8 bg-white px-2 py-24 md:px-4">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-zinc-900 bg-zinc-50 px-6 py-14 shadow-[4px_4px_0px_rgb(24,_24,_27)] md:px-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <LogoLarge />
            <div className="mt-6">
              <SectionHeading>Ready to go?</SectionHeading>
            </div>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-xl md:leading-relaxed">
              Clone the repo, swap the copy and ship your next landing page in
              an afternoon. Clean layout, modular components and ready to deploy
              complexity.
            </p>

            <div className="mt-8">
              {/* change the href to your desire destination. If you have a product, link it to that. 
              If you are trying to capture leads, link it to your calendarly
              OR wait for the release of the email capture component and you can replace this with the email capture form.
              */}
              <a href="https://github.com/mohfakroun/LaunchPad-SaaS" target="_blank" rel="noopener noreferrer">
              <Button className="text-md font-light" >
                  Let's release your product
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 text-sm text-zinc-600 sm:flex-row sm:gap-6">
              <Reassurance icon={<TbFreeRights />} text="Free and open source" />
              <Reassurance icon={<FiGithub />} text="Clone and tweak components" />
              <Reassurance icon={<RiVercelLine />} text="Deploy in under an hour" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reassurance = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-zinc-500 text-lg">{icon}</span>
      <p className="font-medium">{text}</p>
    </div>
  );
};
