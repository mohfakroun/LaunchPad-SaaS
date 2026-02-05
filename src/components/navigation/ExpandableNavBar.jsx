import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { Logo } from "./Logo";
import { DesktopLinks } from "./DesktopLinks";
import { MobileLinks } from "./MobileLinks";
import { Announcement } from "./Announcement";
import { Button } from "../shared/Button";

export const ExpandableNavBar = ({ children, links }) => {
  const [hovered, setHovered] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeSublinks = useMemo(() => {
    if (!hovered) return [];
    const link = links.find((l) => l.title === hovered);

    return link ? link.sublinks : [];
  }, [hovered]);

  return (
    <>
      <div className="bg-zinc-900 pt-2">
        <nav
          onMouseLeave={() => setHovered(null)}
          className="rounded-t-lg bg-white p-4"
        >
          <div className=" flex items-start justify-evenly gap-10">
            <Logo />
            <div className=" hidden md:block pt-2">
              <DesktopLinks
                links={links}
                setHovered={setHovered}
                hovered={hovered}
                activeSublinks={activeSublinks}
              />
            </div>

              <span className="font-bold hidden md:block">Sign up </span> 

            <button
              onClick={() => setMobileNavOpen((pv) => !pv)}
              className="mt-0.5 block text-2xl md:hidden"
            >
              <FiMenu />
            </button>
          </div>
          <MobileLinks links={links} open={mobileNavOpen} />
        </nav>
      </div>
      <motion.main layout>
        <div className="bg-zinc-900 rounded-t-full border-t-[1px] border-gray-700 mt-2">{children}</div>
      </motion.main>
    </>
  );
};
