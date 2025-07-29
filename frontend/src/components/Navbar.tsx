import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button.tsx";
import ThemeToggle from "./ThemeToggle.tsx";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-bg text-text shadow-md sticky top-0 z-30 border-b border-border transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-text tracking-tight">
                    Scripted Realms
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 font-medium">
                    <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                    <Link to="/features" className="hover:text-accent transition-colors">Features</Link>
                    <Link to="/docs" className="hover:text-accent transition-colors">Docs</Link>
                    <Link to="/about" className="hover:text-accent transition-colors">About</Link>
                </nav>

                {/* Buttons */}
                <Button variant="accent">Login</Button>
                <Button variant="primary">Sign Up</Button>
                <ThemeToggle />

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text focus:outline-none focus:ring-2 focus:ring-glow rounded"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <nav className="md:hidden bg-surface-alt border-t border-border px-4 py-4 space-y-2 text-base font-medium shadow-inner transition-colors">
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
