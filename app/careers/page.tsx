import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Target01Icon,
  RocketIcon,
  UserGroupIcon,
  Briefcase01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "careers · lucelabs",
  description: "join the team at lucelabs",
};

const values = [
  {
    icon: Target01Icon,
    label: "ownership",
    description:
      "you own your work end to end. no hand-holding — just clear goals and real support when you need it.",
  },
  {
    icon: RocketIcon,
    label: "craft",
    description:
      "we care about doing things well. not perfect, but well. quality is baked into how we work, not just what we ship.",
  },
  {
    icon: UserGroupIcon,
    label: "clarity",
    description:
      "we communicate directly and honestly. no politics, no noise — just clear, kind communication that moves things forward.",
  },
  {
    icon: Briefcase01Icon,
    label: "curiosity",
    description:
      "we love people who ask why, dig into ideas, and bring fresh thinking to the table. restless minds welcome.",
  },
];

const openRoles = [
  {
    title: "software engineer",
    type: "full-time · remote",
    description:
      "help us build the core products. you're comfortable across the stack and care deeply about clean, fast, well-tested code.",
  },
  {
    title: "product designer",
    type: "full-time · remote",
    description:
      "shape how people interact with our tools. you think in systems, not just screens, and genuinely love the craft of it.",
  },
];

export default function Careers() {
  return (
    <div className="font-mono min-h-screen flex flex-col p-4 sm:p-8 lg:p-12 gap-8 sm:gap-12 lg:gap-16">
      <Nav />

      <main className="flex-1 flex flex-col gap-10 sm:gap-16 max-w-6xl">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl leading-none mb-5">join us.</h1>
          <p className="text-sm sm:text-base leading-relaxed opacity-70">
            we're small and intentional. every person on the team shapes how we build and how we work. if you care about craft, love solving real problems, and want to build things that actually matter — we'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-xs opacity-40 uppercase tracking-widest">what we look for</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {values.map((v) => (
              <div key={v.label} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={v.icon} size={16} />
                  <span className="text-sm sm:text-base">{v.label}</span>
                </div>
                <p className="text-xs sm:text-sm opacity-60 leading-relaxed pl-6">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-xs opacity-40 uppercase tracking-widest">open roles</p>
          <div className="flex flex-col divide-y divide-current/10">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 py-5 first:pt-0"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm sm:text-base">{role.title}</span>
                  <span className="text-xs opacity-40">{role.type}</span>
                  <p className="text-xs sm:text-sm opacity-60 leading-relaxed max-w-md mt-1">
                    {role.description}
                  </p>
                </div>
                <a
                  href="mailto:careers@luceindustries.com"
                  className="flex items-center gap-1 text-xs sm:text-sm hover:underline underline-offset-4 shrink-0"
                >
                  apply
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="text-xs opacity-40">© 2025 lucelabs</footer>
    </div>
  );
}
