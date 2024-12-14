import React from "react";
import { SplashButton } from "../buttons/SplashButton";
import { GhostButton } from "../buttons/GhostButton";
import { useCalendly } from "@/context/CalendlyContext";

export const NavCTAs = () => {
  const { openCalendly } = useCalendly();
  
  return (
    <div className="flex items-center gap-2">
      <GhostButton
        onClick={openCalendly}
        className="rounded-md px-4 py-1 text-base"
      >
        Schedule Demo
      </GhostButton>
      <SplashButton
        onClick={openCalendly}
        className="px-4 py-1 text-base text-zinc-100"
      >
        Get Started
      </SplashButton>
    </div>
  );
};
