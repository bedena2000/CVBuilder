"use client";

import { useLanguage } from "@/context/languageContext";
import { useTheme } from "@/context/themeContext";

export default function Page() {
  const languageData = useLanguage();
  console.log(languageData);

  return (
    <div>
      <p>personal page</p>
    </div>
  );
}
