import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Transcription Call",
	description: "Transcription Call",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} bg-gradient-to-b from-[#3D418F] to-[#5B60BA]`}
			>
				{children}
			</body>
		</html>
	);
}
