import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton.tsx";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-surface-alt text-muted border-b border-muted shadow-md sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <Link to="/" className="text-primary text-3xl font-bold">
                    Scripted Realms
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6">
                    <Link to="/" className="hover:text-accent transition">Home</Link>
                    <Link to="/features" className="hover:text-accent transition">Features</Link>
                    <Link to="/docs" className="hover:text-accent transition">Docs</Link>
                    <Link to="/about" className="hover:text-accent transition">About</Link>
                </nav>

                {/* Theme Toggle Button */}
                <ThemeToggleButton />

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <nav className="md:hidden bg-surface border-t border-border px-4 py-2 space-y-2 text-sm">
                    <Link to="/" className="block hover:text-accent transition">Home</Link>
                    <Link to="/features" className="block hover:text-accent transition">Features</Link>
                    <Link to="/docs" className="block hover:text-accent transition">Docs</Link>
                    <Link to="/about" className="block hover:text-accent transition">About</Link>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
