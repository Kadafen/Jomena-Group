import React from "react";
import { MaxWidthWrapper } from "../../utils/MaxWidthWrapper";
import { CodeCard } from "./CodeCard";
import { Minigrid } from "../../utils/Minigrid";
import { FiZap } from "react-icons/fi";
import { Stepper } from "./Stepper";
import { SectionHeadingSpacing } from "../../utils/SectionHeadingSpacing";
import { SectionHeading } from "../../utils/SectionHeading";
import { SectionSubheading } from "../../utils/SectionSubheading";

export const CodeDemo = () => {
  return (
    <section id="services" className="relative overflow-hidden border-y border-zinc-700">
      <MaxWidthWrapper className="relative z-20 py-20 md:py-36">
        <span className="mx-auto mb-3 block w-fit rounded bg-gradient-to-br from-zinc-800 to-zinc-950 p-3 text-3xl shadow-md shadow-blue-900">
          <FiZap />
        </span>
        <SectionHeadingSpacing>
          <SectionHeading persistCenter>
            Our Services, Tailored for You
          </SectionHeading>
          <SectionSubheading persistCenter>
            Comprehensive solutions designed to streamline your business operations and drive growth.
          </SectionSubheading>
        </SectionHeadingSpacing>
        <CodeCard />
        <Stepper />
      </MaxWidthWrapper>
      <Minigrid />
    </section>
  );
};
