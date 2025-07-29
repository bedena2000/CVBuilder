"use client";

import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/languageContext";
import { useTheme } from "@/context/themeContext";
import { cvFormLabels } from "@/data";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const { language, setLanguage } = useLanguage();
  const { themeData } = useTheme();

  const currentMenuContent =
    cvFormLabels[language.currentLanguage].personalInfo;

  console.log(currentMenuContent);

  return (
    <div className="overflow-auto min-h-full relative">
      <div>
        <h2 className="text-4xl font-semibold">
          {currentMenuContent.sectionTitle}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">{currentMenuContent.name}</label>
          <Input
            id="name"
            className="text-inherit"
            placeholder={currentMenuContent.name}
            name="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone">{currentMenuContent.phone}</label>
          <Input
            id="phone"
            type="number"
            className="text-inherit"
            placeholder={currentMenuContent.phone}
            name="phone"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 w-full gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">{currentMenuContent.email}</label>
          <Input
            id="email"
            type="email"
            className="text-inherit"
            placeholder={currentMenuContent.email}
            name="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="location">{currentMenuContent.location}</label>
          <Input
            id="location"
            className="text-inherit"
            placeholder={currentMenuContent.location}
            name="location"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="github">{currentMenuContent.github}</label>
          <Input
            id="github"
            className="text-inherit"
            placeholder={currentMenuContent.github}
            name="github"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="linkedin">{currentMenuContent.linkedin}</label>
          <Input
            id="linkedin"
            className="text-inherit"
            placeholder={currentMenuContent.linkedin}
            name="linkedin"
          />
        </div>
      </div>

      <Link href="/dashboard/summary">
        <div
          className={`absolute bottom-0 right-0 rounded-lg px-2 py-1 cursor-pointer ${
            themeData.currentTheme === "light"
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
        >
          <MoveRight size={24} className="text-inherit" />
        </div>
      </Link>
    </div>
  );
}
