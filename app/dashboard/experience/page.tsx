'use client';

import { useLanguage } from "@/context/languageContext";
import { useTheme } from "@/context/themeContext";
import { cvFormLabels } from "@/data";

export default function Page() {
  const { language, setLanguage } = useLanguage();
  const { themeData } = useTheme();

  const currentMenuContent = cvFormLabels[language.currentLanguage].experience;

  console.log(currentMenuContent);
  
  return (
    <div>
      <p>experience</p>
    </div>
  );
}
