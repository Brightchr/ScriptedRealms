import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!res.ok) {
                throw new Error("Invalid credentials");
            }

            const data = await res.json();
            localStorage.setItem("auth_token", data.token);
            navigate("/lobby");
        } catch (err: any) {
            setError(err.message || "Login failed");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-surface text-text px-6 relative">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url('/images/login-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-black/80 z-0" />

            {/* Login Form */}
            <form
                onSubmit={handleSubmit}
                className="relative z-20 w-full max-w-md bg-zinc-900 p-8 rounded shadow border border-border space-y-6"
            >
                <h1 className="text-3xl font-bold text-center glow-text">Login</h1>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 rounded bg-zinc-800 border border-border text-text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 rounded bg-zinc-800 border border-border text-text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <Button type="submit" className="w-full bg-primary text-bg font-semibold">
                    Login
                </Button>

                <p className="text-sm text-center text-muted">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => navigate("/signup")}
                        className="text-accent hover:underline cursor-pointer"
                    >
                        Sign Up
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
