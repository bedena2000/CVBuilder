"use client";

import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/languageContext";
import { useTheme } from "@/context/themeContext";
import { cvFormLabels } from "@/data";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const { language, setLanguage } = useLanguage();
  const { themeData } = useTheme();

  const currentMenuContent = cvFormLabels[language.currentLanguage].education;


  return (
    <div className="overflow-auto min-h-full relative flex flex-col">
      <div>
        <h2 className="text-4xl font-semibold">
          {currentMenuContent.sectionTitle}
        </h2>
      </div>

      <div className="mt-4">
        <div>
          <div className="flex flex-col gap-4">
            <label htmlFor="degree">{currentMenuContent.degree}</label>
            <Input id="degree" name="degree" placeholder="degree" />
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="degree_start">
                {currentMenuContent.startDate}
              </label>
              <Input
                id="degree_start"
                type="date"
                name="degree"
                placeholder="degree_start"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="degree_end">{currentMenuContent.endDate}</label>
              <Input
                type="date"
                id="degree_end"
                name="degree_end"
                placeholder="degree_end"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-6  items-center gap-4">
          <div className="flex flex-col gap-4">
            <label htmlFor="institution">
              {currentMenuContent.institution}
            </label>
            <Input
              id="institution"
              name="institution"
              placeholder="institution"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="location">{currentMenuContent.location}</label>
            <Input id="location" name="location" placeholder="location" />
          </div>
        </div>

        <div className="mt-6 h-full">
          <div className="flex flex-col gap-4">
            <label htmlFor="degree_description">
              {currentMenuContent.description}
            </label>
            <textarea
              id="degree_description"
              name="degree_description"
              placeholder="degree_description"
              className="resize-none border rounded-md h-[160px] p-4"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link className="text-right" href="/dashboard/summary">
            <div
              className={`inline-block mt-4 m-auto px-2 py-1 rounded-md cursor-pointer ${
                themeData.currentTheme === "light"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              <MoveLeft size={24} className="text-inherit" />
            </div>
          </Link>

          <Link href="/dashboard/experience">
            <div
              className={`inline-block mt-4 m-auto px-2 py-1 rounded-md cursor-pointer ${
                themeData.currentTheme === "light"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              <MoveRight size={24} className="text-inherit" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
