import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MentorMe",
	description: "Connect with mentors and mentees around the world",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem={true}
					storageKey='mentor_me-theme'>
					<body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
						{children}
					</body>
				</ThemeProvider>
			</html>
		</ClerkProvider>
	);
}
