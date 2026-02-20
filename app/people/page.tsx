import {
	ArrowRight01Icon,
	GithubIcon,
	UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
	title: "people · lucelabs",
	description: "the team behind lucelabs",
};

const team = [
	{
		name: "kekeli",
		role: "creator & ceo",
		// bio: "shapes the vision and keeps everything moving. the kind of person who sees the full picture and makes sure everyone's building toward it.",
		github: "db-keli",
	},
	{
		name: "gideon adeti",
		role: "engineer",
		// bio: "brings the technical depth and the strategic thinking. obsessed with building systems that scale without breaking a sweat.",
		github: "gideonadeti",
	},
	{
		name: "richlove mawumenyo",
		role: "operations",
		// bio: "the kind of person you want in the room when things get complex. thoughtful, precise, and always shipping.",
		github: null,
	},
	{
		name: "kelvin amoaba",
		role: "engineer",
		// bio: "brings energy and craft to everything they touch. great at turning rough ideas into clean, working solutions.",
		github: "AmoabaKelvin",
	},
];

export default function People() {
	return (
		<div className="font-mono min-h-screen flex flex-col p-4 sm:p-8 lg:p-12 gap-8 sm:gap-12 lg:gap-16">
			<Nav />

			<main className="flex-1 flex flex-col gap-10 sm:gap-14 max-w-6xl">
				<div>
					<h1 className="text-3xl sm:text-5xl lg:text-7xl leading-none">
						the team.
					</h1>
					<p className="mt-3 text-xs sm:text-sm opacity-60 max-w-md leading-relaxed">
						small, focused, and moving fast. four people building tools
						they&apos;d want to use themselves.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-3/5 sm:w-full mx-auto sm:mx-0">
					{team.map((member) => (
						<div key={member.name} className="flex flex-col gap-3">
							<div className="w-full aspect-square bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
								<HugeiconsIcon icon={UserIcon} size={40} />
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm sm:text-base">{member.name}</p>
								<p className="text-xs opacity-50">{member.role}</p>
								{/* <p className="text-xs opacity-60 leading-relaxed mt-1">
									{member.bio}
								</p> */}
								{member.github && (
									<a
										href={`https://github.com/${member.github}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1 text-xs opacity-50 hover:opacity-100 hover:underline underline-offset-4 mt-1 w-fit"
									>
										<HugeiconsIcon icon={GithubIcon} size={12} />
										{member.github}
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</main>

			<footer className="text-xs opacity-40">© 2025 lucelabs</footer>
		</div>
	);
}
