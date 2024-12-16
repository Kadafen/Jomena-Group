import React, { useState } from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavCTAs } from "./NavCTAs";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  let lastScrollY = 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? "down" : "up";
    if (latest > 150) {
      setScrolled(true);
      setHidden(direction === "down");
    } else {
      setScrolled(false);
      setHidden(false);
    }
    lastScrollY = latest;
  });

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      animate={{
        opacity: 1,
        y: hidden ? "-100%" : "0%",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={`fixed left-0 right-0 top-0 z-50 bg-zinc-950/20 py-3 transition-colors ${
        scrolled && "bg-zinc-950/90 backdrop-blur"
      }`}
    >
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <NavLogo />
            <NavLinks />
          </div>
          <NavCTAs />
        </div>
      </MaxWidthWrapper>
    </motion.nav>
  );
};
