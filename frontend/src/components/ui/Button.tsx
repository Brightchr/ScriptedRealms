import React from "react";
import clsx from "clsx";

type ButtonProps = {
    variant?: "ghost" | "primary" | "accent";
    className?: string;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // This adds onClick

export const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {
    return (
        <button
            className={clsx(
                "px-4 py-2 rounded cursor-pointer",
                variant === "ghost" && "bg-transparent text-white border",
                variant === "primary" && "bg-zinc-800 text-white",
                variant === "accent" && "bg-accent text-white",
                className
            )}
            {...props} // spreads onClick
        >
            {children}
        </button>
    );
};

export default Button;
