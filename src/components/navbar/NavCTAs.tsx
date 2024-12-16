import React from "react";
import { SplashButton } from "../buttons/SplashButton";
import { useCalendly } from "@/context/CalendlyContext";

export const NavCTAs = () => {
  const { openCalendly } = useCalendly();
  
  return (
    <div className="flex items-center">
      <SplashButton
        onClick={openCalendly}
        className="px-3 py-1 text-sm text-zinc-100 md:px-4 md:text-base"
      >
        Schedule a call
      </SplashButton>
    </div>
  );
};
