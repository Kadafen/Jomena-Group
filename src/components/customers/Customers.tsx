import React, { useState } from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { Card } from "../utils/Card";
import { SiX, SiLinkedin, SiFacebook } from "react-icons/si";
import { BubbleButton } from "../buttons/BubbleButton";
import { motion } from "framer-motion";
import { useWindowSize } from "../utils/useWindowSize";
import { CornerGrid } from "../utils/CornerGrid";
import { SectionHeading } from "../utils/SectionHeading";
import { SectionSubheading } from "../utils/SectionSubheading";
import { SectionHeadingSpacing } from "../utils/SectionHeadingSpacing";

export const Customers = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  const shouldCollapseColumns = width ? width <= 768 : false;

  return (
    <section id="testimonials" className="relative overflow-hidden">
      <MaxWidthWrapper className="relative z-10 py-20 md:py-40">
        <SectionHeadingSpacing>
          <SectionHeading>Success Stories</SectionHeading>
          <SectionSubheading>
            Discover how businesses thrive with our dedicated remote IT solutions
          </SectionSubheading>
        </SectionHeadingSpacing>
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          style={{
            overflow: "hidden",
          }}
          variants={{
            open: {
              height: "fit-content",
            },
            closed: {
              height: 600,
            },
          }}
          className="relative grid grid-cols-1 gap-3 md:grid-cols-3"
        >
          {shouldCollapseColumns ? (
            <>
              <ReviewsColumn
                reviews={[...REVIEWS.left, ...REVIEWS.center, ...REVIEWS.right]}
              />
            </>
          ) : (
            <>
              <ReviewsColumn reviews={REVIEWS.left} />
              <ReviewsColumn reviews={REVIEWS.center} />
              <ReviewsColumn reviews={REVIEWS.right} />
            </>
          )}

          <motion.div
            variants={{
              open: {
                top: "100%",
              },
              closed: {
                top: "0%",
              },
            }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950"
          />
        </motion.div>
        <BubbleButton
          onClick={() => setOpen((pv) => !pv)}
          className="mx-auto mt-12"
        >
          {open ? "View less" : "View more"}
        </BubbleButton>
      </MaxWidthWrapper>
      <CornerGrid />
    </section>
  );
};

const ReviewsColumn = ({ reviews }: { reviews: typeof REVIEWS.left }) => {
  return (
    <div className="h-fit space-y-3">
      {reviews.map((r) => (
        <Card
          style={{
            padding: r.size === "large" ? "28px" : "20px",
          }}
          key={r.name}
          className="transform hover:scale-[1.02] transition-all duration-300"
        >
          <div className="mb-1.5 flex items-center justify-between">
            <div className="relative flex items-center gap-2 py-2 text-xs">
              <img
                src={r.src}
                alt={`Placeholder image for faux user ${r.name}`}
                className="size-8 rounded-full"
              />
              <div>
                <span className="block font-medium text-zinc-300">
                  {r.name}
                </span>
                <span className="block text-zinc-500">{r.handle}</span>
              </div>
            </div>
            {r.platform === 'linkedin' && <SiLinkedin className="text-[#0077b5]" />}
            {r.platform === 'facebook' && <SiFacebook className="text-[#1877f2]" />}
            {r.platform === 'x' && <SiX className="text-sky-300" />}
          </div>
          <p className={r.size === "large" ? "text-base" : "text-sm"}>{r.review}</p>
        </Card>
      ))}
    </div>
  );
};

type ReviewType = {
  src: string;
  name: string;
  handle: string;
  review: string;
  size: "small" | "medium" | "large";
  platform: "x" | "linkedin" | "facebook";
};

const REVIEWS = {
  left: [
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&gender=male",
      name: "Sarah Chen",
      handle: "@sarahc_tech",
      review: "Saved $45K annually switching to their remote IT team. Great service! 💰",
      size: "medium",
      platform: "linkedin"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike&gender=female",
      name: "Mike Rodriguez",
      handle: "@mrodriguez",
      review:
        "As we grew from 15 to 50 employees, they scaled our IT support perfectly. Their team really understands our business needs.",
      size: "large",
      platform: "x"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa&gender=male",
      name: "Lisa Thompson",
      handle: "@lisa_digital",
      review: "Server issue at midnight - fixed in 10 minutes! 🌙",
      size: "small",
      platform: "facebook"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&gender=female",
      handle: "@jwilson_tech",
      name: "James Wilson",
      review:
        "They manage all our IT needs - from daily support to tech planning. Really feels like part of our team.",
      size: "large",
      platform: "linkedin"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos&gender=female",
      name: "Carlos Mendoza",
      handle: "@carlos_m",
      review: "Quick response times, professional support. Just what we needed! 🚀",
      size: "small",
      platform: "x"
    }
  ],
  center: [
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&gender=male",
      name: "Emma Davis",
      handle: "@emma_d",
      review:
        "Being in a small town made IT staffing difficult. Their remote team solved everything - response time usually under 5 minutes.",
      size: "medium",
      platform: "facebook"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&gender=female",
      name: "Alex Kumar",
      handle: "@alexk_dev",
      review: "Email issues resolved in minutes. Great support! ✨",
      size: "large",
      platform: "linkedin"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel&gender=male",
      name: "Rachel Morgan",
      handle: "@rmorgan",
      review:
        "Our dedicated IT consultant knows our setup perfectly. Always available when needed.",
      size: "medium",
      platform: "x"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&gender=female",
      name: "David Park",
      handle: "@dpark_biz",
      review:
        "Helped us grow from 20 to 75 people smoothly. IT support that actually scales with you.",
      size: "large",
      platform: "facebook"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Victoria&gender=male",
      name: "Victoria Lee",
      handle: "@vic_lee",
      review: "They automated the HELL out of our business, 18 hours manual processes now only takes 2 hours! 📈",
      size: "small",
      platform: "linkedin"
    }
  ],
  right: [
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie&gender=male",
      name: "Sophie Anderson",
      handle: "@sophie_a",
      review:
        "Replaced our 2-person IT team with their service. Better coverage, 30% cost savings, and 24/7 support.",
      size: "medium",
      platform: "x"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&gender=female",
      name: "Marcus Johnson",
      handle: "@marcusj",
      review: "No more IT headaches - they handle everything! 😌",
      size: "large",
      platform: "facebook"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina&gender=male",
      name: "Nina Patel",
      handle: "@nina_tech",
      review:
        "Got us a cloud expert right when we needed one. No waiting around.",
      size: "medium",
      platform: "linkedin"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom&gender=female",
      name: "Tom Martinez",
      handle: "@tommartz",
      review:
        "They spot and fix issues before they become problems. Proactive support at its best.",
      size: "large",
      platform: "x"
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki&gender=male",
      name: "Yuki Tanaka",
      handle: "@yuki_t",
      review: "Fast support, fair pricing. Exactly what we wanted! 💯",
      size: "small",
      platform: "facebook"
    }
  ]
};
