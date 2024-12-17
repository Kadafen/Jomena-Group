import React, { ReactNode } from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { SectionHeadingSpacing } from "../utils/SectionHeadingSpacing";
import { SectionHeading } from "../utils/SectionHeading";
import { SectionSubheading } from "../utils/SectionSubheading";
import { Card } from "../utils/Card";
import { GhostButton } from "../buttons/GhostButton";
import { FiCheck, FiX } from "react-icons/fi";
import { useCalendly } from "@/context/CalendlyContext";

export const Pricing = () => {
  const { openCalendly } = useCalendly();
  
  return (
    <section
      id="pricing"
      style={{
        backgroundImage:
          "radial-gradient(100% 100% at 50% 0%, rgba(13,13,17,1), rgba(9,9,11,1))",
      }}
      className="relative overflow-hidden"
    >
      <MaxWidthWrapper className="relative z-10 mx-auto max-w-5xl py-20 md:py-40">
        <SectionHeadingSpacing>
          <SectionHeading persistCenter>Emergency Support Packages</SectionHeading>
          <SectionSubheading persistCenter>
            Need immediate technical assistance? Choose the right support package for your business needs.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PriceCard
            tier="Essential Support"
            price="$399/mo"
            bestFor="Perfect for small businesses & startups"
            CTA={<GhostButton className="w-full" onClick={openCalendly}>Get Essential Support</GhostButton>}
            benefits={[
              { text: "Email Support", checked: true },
              { text: "Remote Technical Assistance", checked: true },
              { text: "Basic System Maintenance", checked: true },
              { text: "48hr Response Time", checked: true },
              { text: "Business Hours Support", checked: true },
              { text: "Monthly System Health Check", checked: true },
            ]}
          />
          <PriceCard
            tier="Growth Support"
            price="$800/mo"
            bestFor="Ideal for growing businesses"
            CTA={
              <GhostButton className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900" onClick={openCalendly}>
                Get Priority Support
              </GhostButton>
            }
            benefits={[
              { text: "Priority Email Support", checked: true },
              { text: "2hr Response Time", checked: true },
              { text: "Advanced Tech Support", checked: true },
              { text: "Proactive Monitoring", checked: true },
              { text: "Weekly System Reports", checked: true },
              { text: "Dedicated Support Team", checked: true },
            ]}
          />
          <PriceCard
            tier="Enterprise Support"
            price="$1,500/mo"
            bestFor="For large-scale operations"
            CTA={<GhostButton className="w-full" onClick={openCalendly}>Get Enterprise Support</GhostButton>}
            benefits={[
              { text: "24/7 Phone Support", checked: true },
              { text: "1hr Emergency Response", checked: true },
              { text: "Custom Solutions", checked: true },
              { text: "Dedicated Account Manager", checked: true },
              { text: "On-site Emergency Support", checked: true },
              { text: "Priority Escalation", checked: true },
            ]}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const PriceCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
}: {
  tier: string;
  price: string;
  bestFor: string;
  CTA: ReactNode;
  benefits: BenefitType[];
}) => {
  return (
    <Card>
      <div className="flex flex-col items-center border-b border-zinc-700 pb-6">
        <span className="mb-6 inline-block text-zinc-50">{tier}</span>
        <span className="mb-3 inline-block text-4xl font-medium ">{price}</span>
        <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
          {bestFor}
        </span>
      </div>

      <div className="space-y-4 py-9">
        {benefits.map((b, i) => (
          <Benefit {...b} key={i} />
        ))}
      </div>

      {CTA}
    </Card>
  );
};

type BenefitType = {
  text: string;
  checked: boolean;
};

const Benefit = ({ text, checked }: BenefitType) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-5 place-content-center rounded-full bg-blue-600 text-sm text-zinc-50">
          <FiCheck />
        </span>
      ) : (
        <span className="grid size-5 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
          <FiX />
        </span>
      )}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>
  );
};
