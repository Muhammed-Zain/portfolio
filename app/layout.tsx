import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider"

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammed-zain-portfolio.vercel.app/"),

  title: 'Muhammed Zain Portfolio',
  authors: {
    name: "Muhammed Zain",
  },

  description:
    "Based in Bangalore, I'm a Fullstack developer passionate about building modern web applications that clients love.",
  openGraph: {
    title: "Portfolio",
    description:
      "Hey There, check out my portfolio website. It includes my skillset and the projects that I've worked on",
    url: "https://muhammed-zain-portfolio.vercel.app/",
    siteName: "portfolio",
    images: "/portfolio.png",
    type: "website",
  },
  keywords: ["aceternity", "portfolio", "nextjs", "muhammed", "zain", "muhammed zain"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
