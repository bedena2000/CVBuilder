"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { LanguagesData } from "@/types";

const defaultValue: LanguagesData = {
  currentLanguage: "eng",
};

type LanguageContextProviderInterface = {
  language: LanguagesData;
  setLanguage: React.Dispatch<React.SetStateAction<LanguagesData>>;
};

export const LanguageContext = createContext<
  LanguageContextProviderInterface | undefined
>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguagesData>(defaultValue);

  const modifyLanguageData = () => {};

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
