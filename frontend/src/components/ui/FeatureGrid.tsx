// src/components/ui/FeatureGrid.tsx
import React from "react";

interface Feature {
    title: string;
    image: string;
}

interface FeatureGridProps {
    features: Feature[];
    className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, className = "" }) => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1600px] mx-auto px-4 ${className}`}>
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="relative group h-[400px] overflow-hidden border border-zinc-900 rounded-xl shadow-lg transition-all hover:scale-[1.02] bg-zinc-950"
                >
                    <img
                        src={feature.image}
                        alt={feature.title}
                        className="absolute inset-0 w-full h-full object-cover brightness-[0.8] group-hover:brightness-50 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/80 transition duration-300 z-10" />
                    <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
                        <h3 className="text-3xl font-bold glow-text text-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {feature.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureGrid;
