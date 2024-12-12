import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import React from "react";
import { CodeCard } from "./CodeCard";
import { Minigrid } from "../../utils/Minigrid";
import { FiZap } from "react-icons/fi";
import { Stepper } from "./Stepper";
import { SectionHeadingSpacing } from "@/components/utils/SectionHeadingSpacing";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";

export const CodeDemo = () => {
  return (
    <section className="relative overflow-hidden border-y border-zinc-700">
      <MaxWidthWrapper className="relative z-20 py-20 md:py-36">
        <span className="mx-auto mb-3 block w-fit rounded bg-gradient-to-br from-zinc-800 to-zinc-950 p-3 text-3xl shadow-md shadow-blue-900">
          <FiZap />
        </span>
        <SectionHeadingSpacing>
          <SectionHeading persistCenter>
          Showing You the Process, Step by Step
          </SectionHeading>
          <SectionSubheading persistCenter>
          Our code and integrations are built to last. We’ll walk you through how it all fits together, giving you clarity and control.
          </SectionSubheading>
        </SectionHeadingSpacing>
        <CodeCard />
        <Stepper />
      </MaxWidthWrapper>
      <Minigrid />
    </section>
  );
};
