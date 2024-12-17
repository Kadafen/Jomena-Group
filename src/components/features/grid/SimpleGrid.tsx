import React from "react";
import {
  FiCalendar,
  FiCheck,
  FiCloud,
  FiDollarSign,
  FiMoon,
  FiWatch,
} from "react-icons/fi";
import { IconType } from "react-icons";

export const SimpleGrid = () => (
  <div className="relative z-10 grid grid-cols-2 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
    <Item
      Icon={FiCalendar}
      title="Free Your Schedule"
      subtitle="We handle the tech details, letting you focus on what you do best."
    />
    <Item
      Icon={FiWatch}
      title="Save tens of hours"
      subtitle="Cut out repetitive tasks with smart automations."
    />
    <Item
      Icon={FiMoon}
      title="Reliable Support"
      subtitle="Count on our team to keep everything running, day and night."
    />
    <Item
      Icon={FiDollarSign}
      title="Save thousands"
      subtitle="Reduce IT costs with efficient solutions and proactive maintenance."
    />
    <Item
      Icon={FiCloud}
      title="Cost-Effective"
      subtitle="Optimize your infrastructure and cut unnecessary expenses."
    />
    <Item
      Icon={FiCheck}
      title="All-in-One IT"
      subtitle="Get all your solutions in one place, with one team you trust."
    />
  </div>
);

const Item = ({
  Icon,
  title,
  subtitle,
}: {
  Icon: IconType;
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <h4 className="mb-1.5 flex items-start text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 h-[26px] text-blue-300" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
