import Button from "../components/ui/Button"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        const clientKey = import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY
        const redirectUri = import.meta.env.VITE_STACK_REDIRECT_URI
        const projectId = import.meta.env.VITE_STACK_PROJECT_ID

        const loginUrl = `https://auth.neon.tech/oauth/authorize?response_type=token&client_id=${clientKey}&redirect_uri=${encodeURIComponent(
            redirectUri
        )}&scope=openid%20email&project_id=${projectId}&state=sr_auth`

        window.location.href = loginUrl
    }

    return (
        <div className="relative min-h-screen bg-surface text-text flex items-center justify-center px-6 overflow-hidden">
            {/* Background Image */}
            <img
                src="/images/herobackground.png"
                alt="Login Background"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Login Form */}
            <div className="relative z-20 w-full max-w-md bg-zinc-900 border border-border p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-cinzel font-bold mb-4 glow-text">Welcome Back</h1>
                <p className="text-muted mb-6">Log in to your worldbuilding realm</p>

                <Button
                    variant="ghost"
                    className="w-full bg-primary text-bg py-3 rounded text-lg font-semibold hover:bg-accent hover:text-bg transition shadow"
                    onClick={handleLogin}
                >
                    Login with Neon
                </Button>

                <p className="mt-6 text-sm text-muted">
                    Don’t have an account?{" "}
                    <span
                        className="text-accent hover:underline cursor-pointer"
                        onClick={() => navigate("/signup")}
                    >
            Sign Up
          </span>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
