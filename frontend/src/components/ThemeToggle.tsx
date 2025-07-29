import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') !== 'light';
        }
        return true;
    });

    useEffect(() => {
        document.documentElement.classList.toggle('theme-light', !isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={isDark}
                onChange={() => setIsDark(prev => !prev)}
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-border rounded-full peer peer-checked:bg-accent transition-colors duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-text rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />
        </label>
    );
};

export default ThemeToggle;
