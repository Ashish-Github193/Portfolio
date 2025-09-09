import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Kumar Jha - Software Developer",
  description:
    "Software Developer specializing in Python, Automation & Scalable System Design. SDE2 at Leadzen.ai with expertise in FastAPI, Docker, MongoDB.",
  keywords:
    "Software Developer, Python, FastAPI, Docker, MongoDB, Next.js, Full Stack Developer, Automation, System Design",
  authors: [{ name: "Ashish Kumar Jha" }],
  creator: "Ashish Kumar Jha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashishkumarjha.dev",
    title: "Ashish Kumar Jha - Software Developer",
    description:
      "Software Developer specializing in Python, Automation & Scalable System Design",
    siteName: "Ashish Kumar Jha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Kumar Jha - Software Developer",
    description:
      "Software Developer specializing in Python, Automation & Scalable System Design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
