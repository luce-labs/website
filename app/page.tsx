import { Nav } from "@/components/nav";

export default function Home() {
	return (
		<div className="font-mono h-screen grid grid-rows-[auto_1fr_auto] items-start justify-items-stretch p-4 sm:p-8 lg:p-12 gap-4 sm:gap-8 lg:gap-12">
			<Nav />
			<main className="row-start-2 w-full max-w-6xl my-auto flex flex-col items-start justify-center gap-4 sm:gap-6 lg:gap-8">
				<div className="w-full flex flex-col gap-2 sm:gap-1">
					<div className="flex flex-col">
						<div className="leading-none -mb-15">
							<img
								src="/lucelabslogonew.svg"
								alt="lucelabs"
								width={500}
								height={14}
								className="inline-block align-middle"
							/>
						</div>
					</div>
					<p className="pl-2 text-xs sm:text-sm sm:w-4/6">
						building transformative technologies that empower businesses and
						give hope to everyone whose future depends on bold ideas
					</p>
				</div>
			</main>
			<footer className="row-start-3 w-full flex items-center justify-between text-xs opacity-40">
				<span>© 2025 lucelabs</span>
				<a
					href="https://lucehr.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-100 hover:underline underline-offset-4"
				>
					lucehr.com →
				</a>
			</footer>
		</div>
	);
}
