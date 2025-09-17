import Image from "next/image";
import { TestTube2, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="font-mono grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] text-4xl row-start-2 items-center sm:items-start">
        luce industries
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="https://luceindustries.com/lucelabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TestTube2 />
          lucelabs
        </a>
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="https://luceindustries.com/vision"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Brain />
          vision
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to lucehr.com→
        </a>
      </footer>
    </div>
  );
}
