import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

import { FloatingNav } from "@/components/nava";

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'AboutUS', link: '/aboutUs' },
  { name: 'Contact', link: '/contact' },
];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
        <FloatingNav navItems={navItems} />
        
        </div>
        
        {children}</body>
    </html>
  );
}
