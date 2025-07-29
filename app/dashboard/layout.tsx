"use client";

import Menu from "@/components/Menu";
import Options from "@/components/Options";
import { useTheme } from "@/context/themeContext";
import { Ubuntu } from "next/font/google";

const ubuntuFont = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic']
});

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { themeData } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        themeData.currentTheme === "dark"
          ? "bg-zinc-900 text-white"
          : "bg-zinc-50 text-black"
      } p-28 ${ubuntuFont.className}`}
    >
      <div className="flex gap-8 relative">
        <Options />
        <Menu />
        <div
          className={`h-[calc(100vh-224px)] px-[120px] py-8 border w-full ${
            themeData.currentTheme === "dark"
              ? "bg-white text-black"
              : "bg-black text-white"
          } rounded-4xl shadow-2xl`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
