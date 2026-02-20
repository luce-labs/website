import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Target01Icon,
  RocketIcon,
  UserGroupIcon,
  StarAward01Icon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "vision · lucelabs",
  description: "why lucelabs exists",
};

const beliefs = [
  {
    icon: Target01Icon,
    title: "focus beats breadth",
    description:
      "companies do their best work when they can focus on what they're great at. we build the operational tools so they don't have to.",
  },
  {
    icon: RocketIcon,
    title: "tech should feel effortless",
    description:
      "the best software is the kind you barely notice — it just works, fits into your day, and gets out of your way.",
  },
  {
    icon: UserGroupIcon,
    title: "small teams, big impact",
    description:
      "we believe a focused group of sharp people can outbuild a hundred-person team any day. we live by that conviction.",
  },
  {
    icon: StarAward01Icon,
    title: "quality is the product",
    description:
      "we don't cut corners. every feature we ship is something we're proud to put our name on — or we don't ship it.",
  },
];

export default function Vision() {
  return (
    <div className="font-mono min-h-screen flex flex-col p-4 sm:p-8 lg:p-12 gap-8 sm:gap-12 lg:gap-16">
      <Nav />

      <main className="flex-1 flex flex-col gap-10 sm:gap-16 max-w-6xl">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl leading-none mb-5">
            why we
            <br />
            exist.
          </h1>
          <p className="text-sm sm:text-base leading-relaxed opacity-70">
            too many companies get slowed down by the operations that are supposed to support them — HR overhead, communication gaps, admin that never ends. we think that's a solvable problem.
          </p>
          <p className="text-sm sm:text-base leading-relaxed opacity-70 mt-4">
            at lucelabs, we build smart, focused software that handles the hard operational stuff so your team can focus on what actually matters. we're not trying to do everything — just the things that slow great teams down.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-xs opacity-40 uppercase tracking-widest">what we believe</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {beliefs.map((b) => (
              <div key={b.title} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={b.icon} size={16} />
                  <span className="text-sm sm:text-base">{b.title}</span>
                </div>
                <p className="text-xs sm:text-sm opacity-60 leading-relaxed pl-6">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="text-xs opacity-40">© 2025 lucelabs</footer>
    </div>
  );
}
