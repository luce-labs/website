import Link from "next/link";

export function Nav() {
  return (
    <nav className="font-mono w-full flex items-center justify-between text-xs sm:text-sm">
      <Link href="/" className="hover:underline underline-offset-4">
        lucelabs
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        <Link href="/projects" className="opacity-60 hover:opacity-100 hover:underline underline-offset-4">
          projects
        </Link>
        <Link href="/vision" className="opacity-60 hover:opacity-100 hover:underline underline-offset-4">
          vision
        </Link>
        <Link href="/people" className="opacity-60 hover:opacity-100 hover:underline underline-offset-4">
          people
        </Link>
        <Link href="/careers" className="opacity-60 hover:opacity-100 hover:underline underline-offset-4">
          careers
        </Link>
      </div>
    </nav>
  );
}
