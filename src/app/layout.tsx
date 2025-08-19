import { Toaster } from "@/components/core/toaster";
import { TooltipProvider } from "@/components/core/tooltip";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { APP_CONSTANTS } from "@/lib/constants";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_CONSTANTS.APP_TITLE,
  description: APP_CONSTANTS.APP_DESCRIPTION,
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="light" storageKey="dakxinpath-theme">
            <TooltipProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                {children}
                <Footer />
              </div>
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
