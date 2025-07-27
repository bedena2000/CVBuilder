"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ThemeData } from "@/types";

const defaultValue: ThemeData = {
  currentTheme: 'dark'
};

type ThemeContextProviderInterface = {
  themeData: ThemeData;
  setThemeData: React.Dispatch<React.SetStateAction<ThemeData>>;
};

export const ThemeContext = createContext<ThemeContextProviderInterface | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeData, setThemeData] = useState<ThemeData>(defaultValue);

  const modifyThemeData = () => {};

  return (
    <ThemeContext.Provider
      value={{
        themeData: themeData,
        setThemeData: modifyThemeData,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) return [];
  return context;
};
