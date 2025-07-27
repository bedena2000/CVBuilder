"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { CVSection } from "@/types";

const defaultValue: CVSection = {
  personalInfo: {
    name: "",
    title: "",
    phone: "",
    email: "",
    location: "",
    linkedin: "",
    github: "",
  },
  summary: "",
  skills: [],
  experience: [],
  education: [],
  projects: [],
  languages: [],
  certifications: [],
  hobbies: [],
};

type CVContextProviderInterface = {
  cvData: CVSection;
  setCvData: React.Dispatch<React.SetStateAction<CVSection>>;
};

export const CVContext = createContext<CVContextProviderInterface | undefined>(
  undefined
);

export const CVProvider = ({ children }: { children: ReactNode }) => {
  const [cvData, setCvData] = useState<CVSection>(defaultValue);

  const modifyCVData = () => {};

  return (
    <CVContext.Provider
      value={{
        cvData: cvData,
        setCvData: modifyCVData,
      }}
    >
      {children}
    </CVContext.Provider>
  );
};

export const useCV = () => {
  const context = useContext(CVContext);
  if (!context) return [];
  return context;
};
