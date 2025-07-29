"use client";

import { useLanguage } from "@/context/languageContext";
import { useTheme } from "@/context/themeContext";
import { cvFormLabels } from "@/data";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";

export default function Page() {
  const { language, setLanguage } = useLanguage();
  const { themeData } = useTheme();

  const currentMenuContent = cvFormLabels[language.currentLanguage].summary;

  return (
    <div className="overflow-auto min-h-full relative flex flex-col">
      <div>
        <h2 className="text-4xl font-semibold">
          {currentMenuContent.sectionTitle}
        </h2>
      </div>

      <div className="mt-8 flex flex-col gap-4 w-full max-w-full flex-1">
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          className="text-inherit w-full max-w-full resize-none overflow-auto h-inherit box-border flex-10 border p-4 rounded-md"
        />
      </div>


      <div className="flex items-center justify-between">
        <Link className="text-right" href="/dashboard/personal">
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

        <Link href="/dashboard/education">
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
  );
}
