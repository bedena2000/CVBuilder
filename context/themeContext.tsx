"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ThemeData } from "@/types";

const defaultValue: ThemeData = {
  currentTheme: "dark",
};

type ThemeContextProviderInterface = {
  themeData: ThemeData;
  setThemeData: () => void;
};

export const ThemeContext = createContext<
  ThemeContextProviderInterface | undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeData, setThemeData] = useState<ThemeData>(defaultValue);

  const changeTheme = () => {
    if (themeData.currentTheme === "dark") {
      setThemeData({
        currentTheme: "light",
      });
    } else {
      setThemeData({
        currentTheme: "dark",
      });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeData: themeData,
        setThemeData: changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
