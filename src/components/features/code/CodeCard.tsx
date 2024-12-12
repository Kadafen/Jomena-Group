import React, { MouseEventHandler, useState } from "react";
import { Markup } from "./Markup";
import { Card } from "../../../components/utils/Card";
import { PulseLine } from "../../../components/utils/PulseLine";
import { BubbleButton } from "../../../components/buttons/BubbleButton";
import { SiGithub } from "react-icons/si";
import { FiStar } from "react-icons/fi";

export const CodeCard = () => {
  const [selected, setSelected] = useState<"auto" | "int" | "dev" | "o365" | "it">("auto");

  return (
    <Card className="mx-auto max-w-3xl pt-3">
      <div className="-mx-9 mb-6 flex items-center justify-between border-b border-zinc-700 px-6 pb-3">
        <div className="flex items-center gap-3 flex-wrap">
          <ToggleChip
            onClick={() => setSelected("auto")}
            selected={selected === "auto"}
          >
            Automations
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("int")}
            selected={selected === "int"}
          >
            Integrations
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("dev")}
            selected={selected === "dev"}
          >
            Development
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("o365")}
            selected={selected === "o365"}
          >
            Office 365
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("it")}
            selected={selected === "it"}
          >
            IT Support
          </ToggleChip>
        </div>
        <BubbleButton className="text-xs">
          <SiGithub />
          <FiStar className="hidden sm:inline" />
          <span className="hidden sm:inline">1,234</span>
        </BubbleButton>
      </div>
      <div className="no-scrollbar -mx-6 overflow-x-scroll px-6">
        <Markup
          code={
            selected === "auto" ? automationCode :
            selected === "int" ? integrationsCode :
            selected === "dev" ? developmentCode :
            selected === "o365" ? office365Code :
            itSupportCode
          }
          lang={
            selected === "auto" ? "typescript" :
            selected === "int" ? "typescript" :
            selected === "dev" ? "typescript" :
            selected === "o365" ? "typescript" :
            "typescript"
          }
        />
      </div>
      <PulseLine />
    </Card>
  );
};

const ToggleChip = ({
  children,
  selected,
  onClick,
}: {
  children: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded px-1.5 py-0.5 text-sm font-medium transition-colors ${selected ? "bg-blue-600 text-zinc-50" : "bg-zinc-900 text-zinc-50 hover:bg-zinc-700"}`}
    >
      {children}
    </button>
  );
};

const automationCode = `// Let's make your repetitive tasks disappear! 🪄
automation.create("Daily Tasks")
  .when("New email arrives from client")
    .then("Save attachment to shared folder")
    .and("Notify team on Slack")
    .and("Create task in project board")
  
  .when("Invoice is received")
    .then("Extract important details")
    .and("Update accounting system")
    .and("Send confirmation to client")
    .with("✨ Professional email template")

  .when("It's Friday at 4pm")
    .then("Generate weekly report")
    .and("Send to management")
    .with("📊 Beautiful charts")

// Your work day just got easier!`;

const integrationsCode = `// Making your apps work together in harmony 🎵
connect.everything({
  // Share customer info everywhere
  when: "New customer signs up",
  sync: {
    to: "CRM system",
    and: "Email marketing",
    and: "Support desk",
    and: "Billing system"
  },
  
  // Keep everyone in the loop
  notify: {
    sales: "New lead arrived! 🎯",
    support: "Welcome our new customer! 👋",
    account: "Ready for onboarding! 🚀"
  }
})

// Everything connected, everyone happy! 🌈`;

const developmentCode = `// Building your dream software with love ❤️
project.create("Amazing App")
  
  // Making it beautiful
  .design({
    style: "Modern and sleek ✨",
    colors: "Perfect brand match 🎨",
    experience: "Super friendly 😊"
  })
  
  // Making it powerful
  .build({
    performance: "Lightning fast ⚡️",
    security: "Fort Knox level 🔒",
    scaling: "Sky is the limit 🚀"
  })
  
  // Making it reliable
  .test({
    quality: "Pixel perfect 🎯",
    bugs: "None allowed! 🐛❌",
    uptime: "24/7/365 ⏰"
  })

// Your vision, our expertise! 🌟`;

const office365Code = `// Welcome aboard! Let's set up your perfect Office 365 🚀
office.onboardNewEmployee("Sarah")
  // Create secure workspace
  .setup({
    email: "sarah@company.com ✉️",
    password: "Super strong and unique! 🔒",
    groups: ["Marketing", "Project X"] 👥
  })

  // Configure cloud services
  .provision({
    oneDrive: "Personal secure cloud 🌥",
    sharePoint: "Team documents ready 📁",
    teams: "Connected with colleagues 🤝"
  })

  // Implement security & compliance
  .secure({
    mfa: "Extra login protection 🛡",
    dataPolicy: "GDPR compliant ✓",
    backup: "Everything safely stored 💾",
    monitoring: "24/7 security watch 👀"
  })

  // Set up automation flows
  .automate({
    calendar: "Team meetings synced 📅",
    files: "Auto-organize documents 📎",
    tasks: "Smart notifications 🔔"
  })

  // Manage domain & infrastructure
  .configure({
    domain: "Custom email domain ⭐️",
    dns: "Optimized mail flow 📧",
    spam: "Intelligent filtering 🚫"
  })

// Everything set up, secured, and ready to go! 🎉`;

const itSupportCode = `// Your IT superhero, at your service! 🦸‍♂️
support.ready({
  // Quick problem solving
  when: "Computer is acting up 🖥",
  we: {
    diagnose: "Find the issue fast 🔍",
    fix: "Like it never happened ⚡️",
    prevent: "Stop it happening again 🛡"
  },
  
  // Always here for you
  help: {
    available: "24/7 support 🌟",
    response: "Lightning fast ⚡️",
    attitude: "Always friendly 😊"
  },
  
  // Keeping you safe
  security: {
    monitor: "Watch for threats 🔒",
    protect: "Block bad stuff 🛡",
    backup: "Keep data safe 💾"
  }
})

// Problems solved, smiles delivered! 😊`;
