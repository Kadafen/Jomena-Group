import { Card } from "../../../components/utils/Card";
import { CornerBlur } from "../../../components/utils/CornerBlur";
import { SectionHeading } from "../../../components/utils/SectionHeading";
import { SectionSubheading } from "../../../components/utils/SectionSubheading";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IconType } from "react-icons";
import {
  FiArrowLeft,
  FiArrowRight,
  FiServer,
  FiShield,
  FiUsers,
  FiMail,
  FiSettings,
  FiCode,
  FiHeadphones,
  FiLink,
  FiDatabase,
  FiGlobe,
  FiLayout,
  FiMonitor,
} from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;
const AUTO_SCROLL_INTERVAL = 5000; // 5 seconds

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (features.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      // If we can't shift left, we're at the start, so loop to the end
      setOffset(-(CARD_SIZE * (features.length - CARD_BUFFER)));
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      // If we can't shift right, we're at the end, so loop to the start
      setOffset(0);
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  // Auto-scroll functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      shiftRight();
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(intervalId);
  }, [offset, width]); // Reset interval when offset or width changes

  return (
    <section
      className="relative overflow-hidden border-b border-zinc-700 bg-zinc-900/30 py-12"
      ref={ref}
    >
      <div className="relative z-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-3">
              <SectionHeading>Comprehensive IT Solutions</SectionHeading>
              <SectionSubheading>
                Your remote technology partner delivering end-to-end solutions for modern businesses
              </SectionSubheading>
            </div>
            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${features.length}, 1fr)`,
            }}
          >
            {features.map((post) => {
              return <Feature key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>

      <CornerBlur />
    </section>
  );
};

const Feature = ({ title, description, Icon }: FeatureType) => {
  return (
    <Card
      className="shrink-0"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <Icon className="size-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 p-3 text-blue-50" />
      <p className="mb-1.5 mt-3 text-lg font-medium">{title}</p>
      <p className="text-sm text-zinc-400">{description}</p>
    </Card>
  );
};

export default Carousel;

type FeatureType = {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
};

const features: FeatureType[] = [
  {
    id: 1,
    Icon: FiMonitor,
    title: "Remote Tech Team",
    description:
      "Your dedicated remote technology team available 24/7, bringing expertise and innovation to your business from anywhere in the world.",
  },
  {
    id: 2,
    Icon: FiCode,
    title: "Custom Development",
    description:
      "Tailored software solutions built to your specifications, from web applications to complex enterprise systems.",
  },
  {
    id: 3,
    Icon: FiHeadphones,
    title: "Professional Support",
    description:
      "Expert technical support team providing rapid remote assistance, troubleshooting, and problem resolution around the clock.",
  },
  {
    id: 4,
    Icon: FiSettings,
    title: "Smart Automations",
    description:
      "Streamline your workflows with intelligent automation solutions that reduce manual tasks and boost operational efficiency.",
  },
  {
    id: 5,
    Icon: FiLink,
    title: "Custom Integrations",
    description:
      "Seamlessly connect your business tools and systems with custom-built integrations that enhance productivity.",
  },
  {
    id: 6,
    Icon: FiDatabase,
    title: "Database Management",
    description:
      "Professional database design, optimization, and maintenance ensuring your data is secure, efficient, and scalable.",
  },
  {
    id: 7,
    Icon: FiGlobe,
    title: "Domain Management",
    description:
      "Complete domain administration services including registration, DNS management, and security configurations.",
  },
  {
    id: 8,
    Icon: FiMail,
    title: "Email Solutions",
    description:
      "Professional email hosting with advanced features, spam protection, and seamless integration with popular email clients.",
  },
  {
    id: 9,
    Icon: FiLayout,
    title: "Landing Page Design",
    description:
      "Engaging, conversion-optimized landing pages designed to capture leads and showcase your products effectively.",
  },
  {
    id: 10,
    Icon: FiServer,
    title: "Infrastructure Management",
    description:
      "Comprehensive management of your IT infrastructure, ensuring optimal performance, security, and reliability.",
  },
  {
    id: 11,
    Icon: FiShield,
    title: "Security Services",
    description:
      "Advanced security protocols including firewall configuration, threat monitoring, and regular security assessments.",
  },
  {
    id: 12,
    Icon: FiUsers,
    title: "Office 365 Management",
    description:
      "Complete Office 365 setup, migration, and management services for enhanced team collaboration and productivity.",
  },
  {
    id: 13,
    Icon: FiSettings,
    title: "API Development",
    description:
      "Custom API development and integration services to connect your systems and enable seamless data flow.",
  }
];
