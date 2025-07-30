import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function LobbyPage() {
    const navigate = useNavigate()

    useEffect(() => {
        const hash = window.location.hash
        const params = new URLSearchParams(hash.substring(1))
        const token = params.get("access_token")

        if (token) {
            localStorage.setItem("neon_token", token)
            // You're already at /lobby, so maybe just show content now
        } else {
            navigate("/")
        }
    }, [navigate])

    return (
        <div className="p-10 text-white">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Lobby</h1>
            <p>Load your campaigns, create a new game, or invite players here.</p>
            {/* Add game loading logic next */}
        </div>
    )
}
