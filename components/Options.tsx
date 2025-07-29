import { useTheme } from "@/context/themeContext";
import { Moon, Sun } from "lucide-react";

export default function Options() {
  const theme = useTheme();

  const handleClick = () => theme.setThemeData();

  return (
    <div
      className={`px-2 py-1 rounded-full absolute -top-22 right-24 ${
        theme.themeData.currentTheme === "light"
          ? "bg-[#0d1117] text-white"
          : "bg-[#f9fafb] text-black"
      }`}
    >
      <div
        className="cursor-pointer w-[60px] flex rounded-4xl"
        onClick={handleClick}
      >
        {theme.themeData.currentTheme === "dark" ? (
          <div className="border flex justify-end p-1 rounded-4xl w-full">
            <Sun color="black" size={18} />
          </div>
        ) : (
          <div className="border p-1 rounded-4xl w-full">
            <Moon color="white" size={18} />
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
}
