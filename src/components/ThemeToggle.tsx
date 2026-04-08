import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initial check from document class (set by Astro script)
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Safety check for localStorage in all environments
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Fallback if browser doesn't support View Transitions
    // @ts-ignore - Document.startViewTransition might not be in the exact TS definitions yet
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // @ts-ignore
    document.startViewTransition(() => {
      // Direct DOM update ensures the new state is captured synchronously by the API
      const root = window.document.documentElement;
      if (newTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      
      // Update React state
      setTheme(newTheme);
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 hover:bg-primary/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="size-5 text-primary" />
      ) : (
        <Sun className="size-5 text-primary" />
      )}
    </Button>
  );
};
