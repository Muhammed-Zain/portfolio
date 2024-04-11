import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider"

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: 'Muhammed Zain Portfolio',
  authors: {
    name: "Muhammed Zain",
  },

  description:
    "Based in Bangalore, I'm a Fullstack developer passionate about building modern web applications that clients love.",
  openGraph: {
    title: "Portfolio",
    description:
      "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
    url: "http://localhost:3000/",
    siteName: "portfolio",
    images: "/portfolio.png",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
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
