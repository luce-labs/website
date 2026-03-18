"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "projects" },
  { href: "/vision", label: "vision" },
  { href: "/people", label: "people" },
  { href: "/careers", label: "careers" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="font-mono w-full flex items-center justify-between text-xs sm:text-sm">
      <Link href="/" className="hover:underline underline-offset-4 inline-flex items-center">
        <img
          src="/lucelabslogonew1.svg"
          alt="lucelabs"
          width={45}
          height={12}
          className="inline-block align-middle"
        />
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`relative ${isActive ? "" : "opacity-60 hover:opacity-100"} hover:underline underline-offset-4`}
            >
              {label}
              {isActive && (
                <span className="absolute left-0 right-0 h-px overflow-hidden" style={{ top: "calc(100% + 4px)" }}>
                  <span className="dot-slide absolute top-0 left-0 w-[3px] h-full bg-current" />
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
