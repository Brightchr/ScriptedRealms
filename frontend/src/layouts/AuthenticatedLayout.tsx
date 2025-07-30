import {type JSX, useEffect} from "react"
import { useNavigate, Outlet } from "react-router-dom"
import Sidebar from "../components/layout/Sidebar.tsx";
import Navbar from "../components/layout/Navbar.tsx";

export default function AuthenticatedLayout(): JSX.Element {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("neon_token")
        if (!token) {
            navigate("/login")
        }
    }, [navigate])

    return (
        <div className="flex min-h-screen bg-bg text-text">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
