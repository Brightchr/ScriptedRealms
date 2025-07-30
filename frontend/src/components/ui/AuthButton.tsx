// src/components/AuthButton.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from "./Button.tsx";

export default function AuthButton() {
    const [token, setToken] = useState(localStorage.getItem('neon_token'))
    const navigate = useNavigate()

    const handleLogin = () => {
        const clientKey = import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY
        const redirectUri = import.meta.env.VITE_STACK_REDIRECT_URI
        const projectId = import.meta.env.VITE_STACK_PROJECT_ID

        const loginUrl = `https://auth.neon.tech/oauth/authorize?client_id=${clientKey}&redirect_uri=${encodeURIComponent(
            redirectUri
        )}&response_type=token&scope=openid%20email&state=sr_auth&project_id=${projectId}`

        window.location.href = loginUrl
    }

    const handleLogout = () => {
        localStorage.removeItem('neon_token')
        setToken(null)
        navigate('/')
    }

    return (
        <div className="cursor-pointer">
            {!token ? (
        <Button variant="ghost" onClick={handleLogin}>Login</Button>
    ) : (
        <button onClick={handleLogout}>Logout</button>
    )}
    </div>
)
}
