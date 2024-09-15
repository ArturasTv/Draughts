import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import Logo from "../../components/ui/logo";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="flex flex-row h-screen">
			<aside className="md:w-1/2 hidden md:block relative">
				<Image
					src="/images/draughts-hero.jpg"
					alt="Draughts hero"
					fill
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					priority
				/>
				<div className="absolute top-0 left-0 h-full w-full backdrop-brightness-50 p-8">
					<Link href={ROUTES.ROOT.INDEX}>
						<Logo />
					</Link>
				</div>
			</aside>
			<main className="md:w-1/2 w-full flex items-center justify-center">
				{children}
			</main>
		</div>
	);
}
