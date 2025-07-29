import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("theme-light", "theme-dark");
        root.classList.add(`theme-${theme}`);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <div className="absolute top-4 right-4 z-30">
            <button
                className="bg-accent text-bg px-4 py-2 rounded text-sm font-semibold hover:opacity-90 shadow"
                onClick={toggleTheme}>
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
        </div>

    );
};

export default ThemeToggleButton;
