import React, { MouseEventHandler, useState } from "react";
import { Markup } from "./Markup";
import { Card } from "../../../components/utils/Card";
import { PulseLine } from "../../../components/utils/PulseLine";
import { BubbleButton } from "../../../components/buttons/BubbleButton";
import { FiZap } from "react-icons/fi";
import { useCalendly } from "@/context/CalendlyContext";

export const CodeCard = () => {
  const [selected, setSelected] = useState<"auto" | "int" | "dev" | "o365" | "it" | "db" | "domain" | "landing" | "api" | "security" | "infra" | "remote" | "dash">("auto");
  const { openCalendly } = useCalendly();

  return (
    <Card className="mx-auto max-w-2xl pt-3">
      <div className="-mx-9 mb-6 flex items-center border-b border-zinc-700 px-6 pb-3">
        <div className="flex flex-wrap gap-2 max-w-[650px]">
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
          <ToggleChip
            onClick={() => setSelected("db")}
            selected={selected === "db"}
          >
            Database
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("domain")}
            selected={selected === "domain"}
          >
            Domain
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("landing")}
            selected={selected === "landing"}
          >
            Landing Page
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("api")}
            selected={selected === "api"}
          >
            API
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("security")}
            selected={selected === "security"}
          >
            Security
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("infra")}
            selected={selected === "infra"}
          >
            Infrastructure
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("remote")}
            selected={selected === "remote"}
          >
            Remote Team
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("dash")}
            selected={selected === "dash"}
          >
            Dashboard
          </ToggleChip>
        </div>
      </div>
      <div className="no-scrollbar -mx-6 overflow-x-scroll px-6">
        <Markup
          code={
            selected === "auto" ? automationCode :
            selected === "int" ? integrationsCode :
            selected === "dev" ? developmentCode :
            selected === "o365" ? office365Code :
            selected === "it" ? itSupportCode :
            selected === "db" ? databaseCode :
            selected === "domain" ? domainCode :
            selected === "landing" ? landingPageCode :
            selected === "api" ? apiCode :
            selected === "security" ? securityCode :
            selected === "infra" ? infrastructureCode :
            selected === "remote" ? remoteTeamCode :
            dashboardCode
          }
          lang="typescript"
        />
      </div>
      <div className="mt-8 flex justify-center">
        <BubbleButton 
          className="flex items-center gap-2 px-6 py-2 text-base"
          onClick={openCalendly}
        >
          <FiZap className="text-lg" />
          Deploy
        </BubbleButton>
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

const databaseCode = `// Managing your data with precision and care 📊
database.optimize("BusinessDB")
  // Design for performance
  .structure({
    tables: "Perfectly normalized 📐",
    indexes: "Lightning-fast queries ⚡️",
    relations: "Everything connected 🔗"
  })

  // Keep it running smooth
  .maintain({
    backup: "Hourly snapshots 📸",
    cleanup: "No wasted space 🧹",
    monitor: "Performance insights 📈"
  })

  // Scale for growth
  .scale({
    capacity: "Room to grow 🌱",
    speed: "Always responsive 🏃‍♂️",
    reliability: "99.99% uptime ⭐️"
  })

// Your data, perfectly managed! 💫`;

const domainCode = `// Setting up your perfect online presence 🌐
domain.configure("yourcompany.com")
  // Essential setup
  .setup({
    dns: "Optimized records ⚡️",
    ssl: "Bank-grade encryption 🔒",
    cdn: "Global fast access 🌍"
  })

  // Email configuration
  .email({
    spf: "Spam protection 🛡",
    dkim: "Email authenticity ✅",
    mx: "Reliable delivery 📨"
  })

  // Performance tuning
  .optimize({
    caching: "Super fast loading 🚀",
    routing: "Smart traffic flow 🔄",
    backup: "Always available ⭐️"
  })

// Your domain, perfectly configured! 🎯`;

const landingPageCode = `// Creating your perfect landing page 🎨
landing.create("Product Launch")
  // Design that converts
  .design({
    hero: "Attention-grabbing header 🎯",
    style: "Modern and clean ✨",
    mobile: "Perfect on all devices 📱"
  })

  // Engagement features
  .engage({
    cta: "Irresistible buttons 🔥",
    forms: "Easy to complete 📝",
    social: "Share everywhere 🌐"
  })

  // Optimization
  .optimize({
    speed: "Lightning fast ⚡️",
    seo: "Google loves it 🔍",
    analytics: "Track everything 📊"
  })

// Ready to convert visitors! 🚀`;

const apiCode = `// Building your perfect API gateway 🔌
api.create("Business API")
  // Core setup
  .configure({
    auth: "Secure JWT tokens 🔒",
    rate: "Smart throttling ⚡️",
    docs: "Clear documentation 📚"
  })

  // Endpoint design
  .endpoints({
    rest: "Clean and intuitive 🎯",
    graphql: "Flexible queries 🔄",
    websocket: "Real-time updates 📡"
  })

  // Performance features
  .optimize({
    cache: "Fast responses ⚡️",
    scaling: "Handles any load 🚀",
    monitoring: "Full visibility 📊"
  })

// Your API, ready for action! 🎉`;

const securityCode = `// Protecting your digital assets 🛡
security.protect("Company Assets")
  // Access control
  .access({
    auth: "Multi-factor enabled 🔐",
    roles: "Granular permissions 👥",
    audit: "Track everything 📝"
  })

  // Threat prevention
  .defend({
    firewall: "Smart filtering 🔥",
    antivirus: "Real-time scanning 🦠",
    encryption: "Military grade 🔒"
  })

  // Monitoring & Response
  .monitor({
    alerts: "Instant notifications ⚡️",
    analysis: "AI-powered detection 🤖",
    response: "Quick remediation 🚑"
  })

// Your security, our priority! 🎯`;

const infrastructureCode = `// Building your cloud infrastructure 🏗
infrastructure.deploy("Cloud Platform")
  // Core services
  .provision({
    compute: "Auto-scaling servers ⚡️",
    storage: "Infinite capacity 💾",
    network: "Global backbone 🌐"
  })

  // High availability
  .configure({
    loadBalancer: "Smart traffic routing 🔄",
    failover: "Zero downtime ⚡️",
    backup: "Disaster recovery 🛟"
  })

  // Monitoring & Management
  .manage({
    metrics: "Real-time insights 📊",
    costs: "Budget optimization 💰",
    alerts: "Proactive monitoring 🚨"
  })

// Your infrastructure, rock solid! 🎯`;

const remoteTeamCode = `// Your remote tech dream team 👥
team.assemble("Tech Squad")
  // Team composition
  .members({
    developers: "Full-stack ninjas 🥷",
    designers: "UX wizards 🎨",
    devops: "Infrastructure heroes 🦸‍♂️"
  })

  // Collaboration tools
  .equip({
    chat: "Instant communication 💬",
    video: "Face-to-face meetings 🎥",
    docs: "Knowledge sharing 📚"
  })

  // Project management
  .organize({
    sprints: "Agile workflow 🏃‍♂️",
    tasks: "Clear objectives 🎯",
    reviews: "Quality assurance ✨"
  })

// Your remote team, always connected! 🌟`;

const dashboardCode = `// Building your perfect analytics dashboard 📊
dashboard.create("Business Insights")
  // Data sources
  .connect({
    sales: "Real-time revenue 💰",
    users: "Customer activity 👥",
    systems: "Infrastructure health 🏥"
  })

  // Visualization
  .display({
    charts: "Beautiful insights 📈",
    alerts: "Important updates 🔔",
    reports: "Auto-generated PDFs 📄"
  })

  // Intelligence
  .analyze({
    trends: "Pattern detection 🔍",
    predict: "AI forecasting 🤖",
    suggest: "Smart recommendations 💡"
  })

// Your data, beautifully visualized! ✨`;
