import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { LogoSmall } from "../navigation/Logo";
import { NAV_LINKS } from "../navigation/constants";

export const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="relative mx-auto max-w-6xl overflow-hidden py-12">
        <div className="md:px4 grid grid-cols-10 gap-x-1.5 gap-y-6 px-2">
          <LogoColumn />
          <GenericColumn
            title="Company"
            links={[...NAV_LINKS[2].sublinks, ...NAV_LINKS[4].sublinks]}
          />

          {/* for the legal links, create pages in the pages folder. ensure the names of the files is the same as the links */}
          <GenericColumn
            title="Legal"
            links={[
              {
                title: "Terms & Conditions",
                href: "/#",
              },
              {
                title: "Privacy Policy",
                href: "/#",
              },
              {
                title: "Refund Policy",
                href: "/#",
              },
            ]}
          />
          {/* change these to your products links. these can be changed to your twitter, google business page etc... */}
          <GenericColumn
            title="Socials"
            links={[
              {
                title: "Linkedin",
                href: "https://www.linkedin.com/in/mohamed-fakroun/",
                Icon: FaLinkedinIn,
              },
              {
                title: "Github",
                href: "https://github.com/mohfakroun",
                Icon: FaGithub,
              }
            ]}
          />
        </div>
      </footer>
    </div>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      {/* <LogoSmall /> */}
      <span className="mt-3 inline-block text-xs">
        © {new Date().getFullYear()} Mohamed-Fakroun. All rights reserved.
      </span>
    </div>
  );
};

const GenericColumn = ({ title, links }) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <h4 className="block font-light text-base ">{title}</h4>
      {links.map((l) => (
        <Link
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 transition-colors hover:text-indigo-600 hover:text-md transition-all duration-300"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      ))}
    </div>
  );
};
