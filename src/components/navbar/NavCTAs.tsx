import React from "react";
import { SplashButton } from "../buttons/SplashButton";
import { useCalendly } from "@/context/CalendlyContext";

export const NavCTAs = () => {
  const { openCalendly } = useCalendly();
  
  return (
    <div className="flex items-center">
      <SplashButton
        onClick={openCalendly}
        className="px-4 py-1 text-base text-zinc-100"
      >
        Schedule a call
      </SplashButton>
    </div>
  );
};
