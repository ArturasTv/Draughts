import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import type { PropsWithChildren } from "react";
import Providers from "../providers";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
	title: "Draughts platform",
	description: "TODO",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body className={`${roboto.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
