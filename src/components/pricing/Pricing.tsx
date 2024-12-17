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
      <MaxWidthWrapper className="relative z-10 mx-auto max-w-6xl py-20 md:py-40">
        <SectionHeadingSpacing>
          <SectionHeading persistCenter>Emergency Support Packages</SectionHeading>
          <SectionSubheading persistCenter>
            Need immediate technical assistance? Choose the right support package for your business needs.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <PriceCard
            tier="Free Consultation"
            price="$0"
            bestFor="Understand your IT needs"
            CTA={<GhostButton className="w-full" onClick={openCalendly}>Book Consultation</GhostButton>}
            benefits={[
              { text: "30-Minute Strategy Call", checked: true },
              { text: "Basic Needs Assessment", checked: true },
              { text: "Infrastructure Review", checked: true },
              { text: "Cost Saving Opportunities", checked: true },
              { text: "Security Evaluation", checked: true },
              { text: "Customized Solution Plan", checked: true },
            ]}
          />
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
              { text: "Business Hours Support (9-5)", checked: true },
              { text: "Monthly System Health Check", checked: true },
              { text: "Basic Security Monitoring", checked: true },
              { text: "Data Backup Support", checked: true },
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
              { text: "Everything in Essential, plus:", checked: true },
              { text: "Priority Email & Phone Support", checked: true },
              { text: "2hr Response Time", checked: true },
              { text: "Advanced Tech Support", checked: true },
              { text: "24/7 Proactive Monitoring", checked: true },
              { text: "Weekly System Reports", checked: true },
              { text: "Dedicated Support Team", checked: true },
              { text: "Cloud Services Management", checked: true },
              { text: "Advanced Security Suite", checked: true },
              { text: "Quarterly Strategy Reviews", checked: true },
            ]}
          />
          <PriceCard
            tier="Enterprise Support"
            price="$1,500/mo"
            bestFor="For large-scale operations"
            CTA={<GhostButton className="w-full" onClick={openCalendly}>Get Enterprise Support</GhostButton>}
            benefits={[
              { text: "Everything in Growth, plus:", checked: true },
              { text: "24/7 Premium Support", checked: true },
              { text: "1hr Emergency Response", checked: true },
              { text: "Custom Solutions & Development", checked: true },
              { text: "Dedicated Account Manager", checked: true },
              { text: "On-site Emergency Support", checked: true },
              { text: "Priority Escalation", checked: true },
              { text: "Infrastructure Planning", checked: true },
              { text: "Enterprise Security Suite", checked: true },
              { text: "Monthly Executive Reports", checked: true },
              { text: "Disaster Recovery Planning", checked: true },
              { text: "Compliance Management", checked: true },
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
    <Card className="flex h-full flex-col">
      <div className="flex flex-col items-center border-b border-zinc-700 pb-6">
        <span className="mb-6 inline-block text-zinc-50">{tier}</span>
        <span className="mb-3 inline-block text-4xl font-medium">{price}</span>
        <span className="text-sm text-zinc-400">{bestFor}</span>
      </div>
      <div className="flex flex-1 flex-col">
        <ul className="mb-6 mt-6 flex flex-col gap-4">
          {benefits.map((benefit, i) => (
            <Benefit key={i} {...benefit} />
          ))}
        </ul>
        <div className="mt-auto">{CTA}</div>
      </div>
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
