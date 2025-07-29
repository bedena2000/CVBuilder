// CV

import { LucideIcon } from "lucide-react";
import { ComponentType, SVGProps } from "react";

export interface CVSection {
  personalInfo: { [key: string]: string };
  summary: string;
  skills: { name: string; level: string }[];
  experience: {
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
  }[];
  languages: {
    language: string;
    level: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    date: string;
    link: string;
  }[];
  hobbies: string[];
}

export interface CVData {
  eng: CVSection;
  geo: CVSection;
}

// Theme

export interface ThemeData {
  currentTheme: "dark" | "light";
}

// Languages

export interface LanguagesData {
  currentLanguage: "eng" | "geo";
}

// Menu


export interface MenuItem {
  id: number;
  title: string;
  path: string;
  icon: LucideIcon;
}
