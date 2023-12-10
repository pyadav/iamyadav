"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaCloudMoon } from "react-icons/fa6";
import { IoPartlySunny } from "react-icons/io5";
import Logo from "./Logo";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "light") {
      return (
        <FaCloudMoon
          className="w-4 h-4 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    } else {
      return (
        <IoPartlySunny
          className="w-4 h-4 text-indigo-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    }
  };

  if (!mounted) return <></>;
  return (
    <header className="h-15 dark:border-gray-700">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        <Logo />
        {toggleTheme()}
      </div>
    </header>
  );
};

export default Header;
