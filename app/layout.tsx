import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; //


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Challenge Chuck Norris",
  description: "Joke by Chuck Norris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <SidebarNavigation />
            <SidebarTrigger />
            <main className="p-10  w-full">
              {children}
            </main>
          </SidebarProvider>
          <Toaster position="top-right" toastOptions={{
            className: 'text-gray-500 text-black',
          }}/>
        </ThemeProvider>
      </body>
    </html>
  );
}
