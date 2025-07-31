import ReactFullpage from "@fullpage/react-fullpage";
import Button from "../components/ui/Button.tsx";

const HomePage = () => {
    return (
        <ReactFullpage
            scrollingSpeed={1000}
            navigation
            navigationPosition="right"
            credits={{ enabled: false }}
            render={() => (
                <ReactFullpage.Wrapper>
                    {/* 1. Hero Section */}
                    <div className="section relative flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-surface text-text">
                        <img
                            src="/images/herobackground.png"
                            alt="Fantasy Hero Background"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 z-10" />
                        <div className="relative z-20 max-w-2xl mx-auto">
                            <h1 className="text-6xl font-bold mb-4 font-cinzel glow-text">Scripted Realms</h1>
                            <p className="text-xl text-muted drop-shadow">
                                A free, open-source, web-based world builder for fantasy role-playing games.
                            </p>
                            <Button variant="ghost" className="mt-8 bg-primary text-bg px-8 py-4 rounded text-lg font-semibold hover:bg-accent hover:text-bg transition shadow">Join the Beta</Button>
                        </div>
                    </div>

                    {/* 2. Trusted By */}
                    <div
                        className="section relative flex items-center justify-center px-6 bg-bg text-text"
                        style={{
                            backgroundImage: "url('/images/section-bg.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <p className="text-center text-muted text-xl bg-surface border-t border-border p-16">
                            Trusted by worldbuilders, authors, and game masters around the globe.
                        </p>
                    </div>

                    {/* 3. Feature Highlights */}
                    <div
                        className="section relative px-6 py-20 bg-bg text-text overflow-hidden"
                        style={{
                            backgroundImage: "url('/images/features-bg2.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <h1 className="text-5xl font-bold mb-6 text-center relative z-20 glow-text">Features</h1>
                        <img
                            src="/images/necromancer.png"
                            alt="Necromancer"
                            className="hidden md:block absolute right-0 bottom-0 h-full object-contain z-10 pointer-events-none select-none"
                            style={{ maxHeight: "100%" }}
                        />
                        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "World Map Editor", image: "/images/feature-map.png" },
                                { title: "Lore Manager", image: "/images/feature-lore.png" },
                                { title: "Player Access", image: "/images/feature-access.png" },
                                { title: "Campaign Planner", image: "/images/feature-campaign.png" },
                                { title: "Scene Builder", image: "/images/feature-scene.png" },
                                { title: "Character Sheets", image: "/images/feature-characters.png" },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="group relative h-64 overflow-hidden rounded-lg shadow-lg border border-border"
                                >
                                    <img
                                        src={feature.image}
                                        alt=""
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/80 transition duration-300 z-10" />
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <h3 className="text-2xl glow-text font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                                            {feature.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. Demo Screenshot */}
                    <div className="section py-20 bg-surface border-t border-border text-center px-6">
                        <h2 className="text-5xl font-bold mb-6 glow-text">See Scripted Realms in Action</h2>
                        <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto border border-border">
                            <img src="https://placehold.co/800x400" alt="App demo" className="w-full" />
                        </div>
                    </div>

                    {/* 5. CTA */}
                    <div
                        className="section relative py-20 px-6 bg-bg text-text text-center bg-surface-alt border-t border-border"
                        style={{
                            backgroundImage: "url('/images/section-bg.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <h2 className="text-3xl font-bold glow-text">Start Your Next Adventure</h2>
                        <p className="text-muted mt-4 max-w-xl mx-auto">
                            Sign up and start building your next campaign or story world today.
                        </p>
                        <Button variant="ghost" className="mt-8 bg-primary text-bg px-8 py-4 rounded text-lg font-semibold hover:bg-accent hover:text-bg transition shadow">Join the Beta</Button>
                    </div>
                </ReactFullpage.Wrapper>
            )}
        />
    );
};

export default HomePage;
