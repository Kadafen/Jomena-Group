import React from "react";
import { NavLink } from "./NavLink";

export const NavLinks = () => {
  return (
    <ul className="flex items-center gap-3 text-sm text-zinc-400 md:gap-6 md:text-base">
      <li className="whitespace-nowrap">
        <NavLink href="/#features">Features</NavLink>
      </li>
      <li className="whitespace-nowrap">
        <NavLink href="/#services">Services</NavLink>
      </li>
      <li className="whitespace-nowrap">
        <NavLink href="/#testimonials">Testimonials</NavLink>
      </li>
      <li className="whitespace-nowrap">
        <NavLink href="/#pricing">Pricing</NavLink>
      </li>
    </ul>
  );
};
