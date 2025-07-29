const HomePage = () => {
    return (
        <div className="bg-bg text-text transition-colors duration-300">
            {/* 1. Hero Section */}
            <section className="relative bg-surface min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/hero-background.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-10" />
                <div className="relative z-20">
                    <h1 className="text-primary text-5xl font-bold mb-4 text-outline-soft">Scripted Realms</h1>
                    <p className="text-muted text-xl">
                        A free, open-source, web-based world builder for fantasy role-playing games.
                    </p>
                    <button className="mt-8 bg-accent text-bg px-8 py-4 rounded text-lg font-semibold hover:opacity-90">
                        Join the Beta
                    </button>
                    <p className="mt-4 text-muted text-sm">
                        By joining the beta, you agree to our{" "}
                        <a href="#" className="text-accent">Terms of Service</a> and{" "}
                        <a href="#" className="text-accent">Privacy Policy</a>.
                    </p>
                </div>
            </section>

            {/* 2. Trusted By */}
            <section className="py-16 text-center text-muted text-sm">
                Trusted by worldbuilders, authors, and game masters around the globe.
            </section>

            {/* 3. Feature Highlights */}
            <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <h3 className="text-primary text-xl font-semibold mb-2">World Map Editor</h3>
                    <p className="text-muted">Upload, annotate, and explore high-res fantasy maps with ease.</p>
                </div>
                <div>
                    <h3 className="text-primary text-xl font-semibold mb-2">Lore Manager</h3>
                    <p className="text-muted">Organize characters, places, and plotlines with flexible linking.</p>
                </div>
                <div>
                    <h3 className="text-primary text-xl font-semibold mb-2">Player Access</h3>
                    <p className="text-muted">Share curated content with your players — hide the rest.</p>
                </div>
            </section>

            {/* 4. Demo / Screenshot */}
            <section className="py-20 bg-surface border-t border-border text-center px-6">
                <h2 className="text-2xl text-primary font-bold mb-6">See Scripted Realms in Action</h2>
                <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
                    <img src="/demo-screenshot.png" alt="App demo" className="w-full" />
                </div>
            </section>

            {/* 5. Call to Action */}
            <section className="py-24 text-center px-6">
                <h2 className="text-primary text-3xl font-bold">Start Your Next Adventure</h2>
                <p className="text-muted mt-4 max-w-xl mx-auto">
                    Sign up and start building your next campaign or story world today.
                </p>
                <button className="mt-8 bg-accent text-bg px-8 py-4 rounded text-lg font-semibold hover:opacity-90">
                    Join the Beta
                </button>
            </section>

        </div>
    );
};

export default HomePage;
