import ReactFullpage from "@fullpage/react-fullpage";
import Button from "../components/ui/Button.tsx";
import FeatureGrid from "../components/ui/FeatureGrid.tsx";

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
                        className="section relative flex flex-col items-center justify-center px-6 bg-bg text-text overflow-hidden"
                        style={{
                            backgroundImage: "url('/images/section-bg.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <img
                            src="/images/skull.png"
                            alt="Trusted By Logo"
                            className="w-200 h-auto mb-6 transform transition-all duration-1000 translate-x-32 opacity-0 animate-slidein"
                        />
                        <p className="text-center text-muted text-2xl">
                            Trusted by world builders, authors, and game masters around the globe.
                        </p>
                    </div>

                    {/* 3. Feature Highlights */}
                    <div
                        className="section relative px-6 py-20 bg-bg text-text overflow-hidden"
                        style={{
                            backgroundImage: "url('/images/features-bg.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <h1 className="text-5xl font-bold mb-6 text-center relative z-20 glow-text">Features</h1>
                        {/*<img*/}
                        {/*    src="/images/necromancer.png"*/}
                        {/*    alt="Necromancer"*/}
                        {/*    className="hidden md:block absolute right-0 bottom-0 h-full object-contain z-0 pointer-events-none select-none"*/}
                        {/*    style={{ maxHeight: "100%" }}*/}
                        {/*/>*/}
                        {/* feature grid */}
                        <FeatureGrid features={[
                            { title: "World Map Editor", image: "/images/feature-map.png" },
                            { title: "Lore Manager", image: "/images/feature-lore.png" },
                            { title: "Player Access", image: "/images/feature-access.png" },
                            { title: "Campaign Planner", image: "/images/feature-campaign.png" },
                            { title: "Scene Builder", image: "/images/feature-scene.png" },
                            { title: "Character Sheets", image: "/images/feature-characters.png" },
                        ]} />
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
