import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserGroupIcon,
  Video01Icon,
  ArrowRight01Icon,
  RocketIcon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "projects · lucelabs",
  description: "what we're building at lucelabs",
};

export default function Projects() {
  return (
    <div className="font-mono min-h-screen flex flex-col p-4 sm:p-8 lg:p-12 gap-8 sm:gap-12 lg:gap-16">
      <Nav />

      <main className="flex-1 flex flex-col gap-10 sm:gap-14 max-w-6xl">
        <div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl leading-none">
            what we're
            <br />
            building.
          </h1>
          <p className="mt-3 text-xs sm:text-sm opacity-60 max-w-md leading-relaxed">
            we pick hard problems and build focused tools to solve them — one product at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          {/* LuceHR */}
          <div className="flex flex-col gap-5">
            <div className="w-full aspect-video bg-neutral-100 flex items-center justify-center text-neutral-400">
              <HugeiconsIcon icon={UserGroupIcon} size={40} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl">luceHR</span>
                <span className="text-xs opacity-40 border border-current px-2 py-0.5">
                  HR · engineering
                </span>
              </div>
              <p className="text-xs sm:text-sm opacity-60 leading-relaxed">
                HR management built for engineering companies. Handle leaves, payroll, performance reviews, and your whole team — in one clean place. No spreadsheets. No chaos. Built the way engineers think.
              </p>
              <a
                href="https://lucehr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs sm:text-sm hover:underline underline-offset-4 w-fit"
              >
                visit lucehr.com
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </a>
            </div>
          </div>

          {/* ProcusMeet */}
          <div className="flex flex-col gap-5">
            <div className="w-full aspect-video bg-neutral-100 flex items-center justify-center text-neutral-400">
              <HugeiconsIcon icon={Video01Icon} size={40} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl">procusMeet</span>
                <span className="text-xs opacity-40 border border-current px-2 py-0.5">
                  video · consulting
                </span>
              </div>
              <p className="text-xs sm:text-sm opacity-60 leading-relaxed">
                expert-client counselling that actually scales. Get matched to the right expert, book a session, and get things moving — like clarity.fm, but built for modern teams and workflows.
              </p>
              <a
                href="https://procusmeet.lucelabs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs sm:text-sm hover:underline underline-offset-4 w-fit"
              >
                visit procusmeet.lucelabs.org
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-xs opacity-40">© 2025 lucelabs</footer>
    </div>
  );
}
