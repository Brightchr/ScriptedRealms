import React from "react";
import clsx from "clsx";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "ghost" | "primary" | "accent";
    className?: string;
};

export const Button = ({ children, variant = "primary", className }: ButtonProps) => {
    return (
        <button
            className={clsx(
                "px-4 py-2 rounded",
                variant === "ghost" && "bg-transparent text-white border",
                variant === "primary" && "bg-blue-600 text-white",
                variant === "accent" && "bg-accent text-white",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;