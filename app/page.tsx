import { TestTube2, Brain, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="font-mono min-h-screen grid grid-rows-[auto_1fr_auto] items-start justify-items-stretch p-4 sm:p-8 lg:p-12 gap-8 sm:gap-12">
      <main className="row-start-2 w-full max-w-6xl my-auto flex flex-col items-start justify-center gap-6 sm:gap-8">
        <div className="w-full flex flex-col gap-4 sm:gap-1">
          <div className="flex flex-col">
            <p className="text-4xl sm:text-6xl lg:text-8xl leading-none">luce</p>
            <p className="text-4xl sm:text-6xl lg:text-8xl leading-none -mt-1 sm:-mt-2 lg:-mt-3">industries</p>
          </div>
          <p className="text-xs sm:text-sm sm:w-4/6">
            building transformative technologies that empower businesses and give hope to everyone whose future depends on bold ideas
          </p>
        </div>
      </main>
      <footer className="row-start-3 w-full max-w-7xl mx-auto flex text-xs sm:text-base flex-wrap items-center justify-center gap-4 sm:gap-6">
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="https://luceindustries.com/lucelabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TestTube2 width={16} height={16} />
          lucelabs
        </a>
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="https://luceindustries.com/vision"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Brain width={16} height={16} />
          vision
        </a>
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe width={16} height={16} />
          Go to lucehr.com→
        </a>
      </footer>
    </div>
  );
}
