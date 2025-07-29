import { MenuItem as MenuItemInterface } from "@/types";
import Link from "next/link";
import { FC } from "react";

interface MenuItemProps {
  menuItem: MenuItemInterface;
  theme: "dark" | "light";
}

const MenuItem: FC<MenuItemProps> = ({ menuItem, theme }) => {
  const Icon = menuItem.icon;
  return (
    <Link href={menuItem.path} className="hover:scale-105 transition-all delay-75 ease-linear">
      <div
        className={`cursor-pointer flex items-center gap-4 px-4 py-2 rounded-lg ${
          theme === "dark"
            ? "bg-[#f9fafb] text-black"
            : "bg-[#0d1117] text-white"
        }`}
      >
        <Icon className="text-inherit" />
        <p>{menuItem.title}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
