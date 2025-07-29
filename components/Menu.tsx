"use client";

import { useLanguage } from "@/context/languageContext";
import { cvFormLabels } from "@/data";
import {
  CircleUserRound,
  StickyNote,
  GraduationCap,
  BriefcaseBusiness,
  Lightbulb,
  Code,
  Globe,
  Volleyball,
} from "lucide-react";
import type { MenuItem as MenuItemInterface } from "@/types";
import MenuItem from "@/components/MenuItem";
import { useTheme } from "@/context/themeContext";

export default function Menu() {
  const { language, setLanguage } = useLanguage();
  const { themeData } = useTheme();

  const currentMenuContent = cvFormLabels[language.currentLanguage];

  const finalMenu: MenuItemInterface[] = [
    {
      id: 1,
      title: currentMenuContent.personalInfo.sectionTitle,
      path: "personal",
      icon: CircleUserRound,
    },

    {
      id: 2,
      title: currentMenuContent.summary.sectionTitle,
      path: "summary",
      icon: StickyNote,
    },

    {
      id: 3,
      title: currentMenuContent.education.sectionTitle,
      path: "education",
      icon: GraduationCap,
    },

    {
      id: 4,
      title: currentMenuContent.experience.sectionTitle,
      path: "experience",
      icon: BriefcaseBusiness,
    },

    {
      id: 5,
      title: currentMenuContent.skills.sectionTitle,
      path: "skills",
      icon: Lightbulb,
    },

    {
      id: 6,
      title: currentMenuContent.projects.sectionTitle,
      path: "projects",
      icon: Code,
    },

    {
      id: 7,
      title: currentMenuContent.languages.sectionTitle,
      path: "languages",
      icon: Globe,
    },

    {
      id: 8,
      title: currentMenuContent.hobbies.sectionTitle,
      path: "hobbies",
      icon: Volleyball,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {finalMenu.map((menuItem: MenuItemInterface) => (
        <MenuItem
          key={menuItem.id}
          menuItem={menuItem}
          theme={themeData.currentTheme}
        />
      ))}
    </div>
  );
}
