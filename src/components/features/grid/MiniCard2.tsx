import React from "react";
import { Card } from "../../utils/Card";
import { CalloutChip } from "../../utils/CalloutChip";
import { SiX } from "react-icons/si";
import { CornerBlur } from "@/components/utils/CornerBlur";

export const MiniCard2 = () => {
  return (
    <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
      <Card>
        <CalloutChip>Proven Success</CalloutChip>
        <p className="mb-1.5 text-2xl">Stories That Speak for Themselves</p>
        <p className="text-zinc-400">
        Our results show up in the numbers and in the words of the clients who trust us.
        </p>

        <div className="absolute -bottom-2 left-2 right-2 z-10 h-44 rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
          <div className="mb-3 flex gap-3">
            <img
              src="https://api.dicebear.com/9.x/avataaars/svg?seed=Sawyer"
              alt="Placeholder image for faux user Don Donaldson"
              className="size-10 shrink-0 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-zinc-50">
                Jack Nikogosian
              </p>
              <p className="text-xs text-zinc-400">@NarekTheGreat</p>
            </div>
          </div>
          <p>
            <span className="font-semibold text-blue-300">@Jomena_Group</span>
            &apos; transformed the way we work. Automation that’s reliable, efficient, and saves us hours every day. ❤️
          </p>

          <SiX className="absolute right-4 top-4 text-[#1F9AF1]" />
        </div>

        <CornerBlur />
      </Card>
    </div>
  );
};
