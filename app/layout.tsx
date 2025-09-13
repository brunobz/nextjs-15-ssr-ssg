import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import AuthProvider from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next 15 Tailwind Starter",
    template: "%s | Next 15 Starter",
  },
  description:
    "Starter template for learning Next.js 15 with Tailwind, SSR, SSG, ISR, API routes and middleware.",
  openGraph: {
    title: "Next 15 Tailwind Starter",
    description: "Learn SSR/SSG/ISR with a production-like skeleton.",
    type: "website",
    url: "https://example.com",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            <NavBar />
            <main className="container py-6">{children}</main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
