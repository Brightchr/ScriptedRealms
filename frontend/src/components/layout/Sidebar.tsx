// src/components/Sidebar.tsx
import { Link, useLocation } from "react-router-dom"
import clsx from "clsx"

const Sidebar = () => {
    const { pathname } = useLocation()

    const links = [
        { label: "Lobby", to: "/lobby" },
        { label: "My Campaigns", to: "/campaigns" },
        { label: "Create Game", to: "/create" },
        { label: "Invite Players", to: "/invite" },
        { label: "Settings", to: "/settings" },
    ]

    return (
        <aside className="w-64 bg-zinc-900 text-text border-r border-border p-4 space-y-6">
            <h2 className="text-xl font-bold tracking-wide mb-4">Scripted Realms</h2>
            <nav className="space-y-2">
                {links.map(({ label, to }) => (
                    <Link
                        key={to}
                        to={to}
                        className={clsx(
                            "block px-4 py-2 rounded transition-colors",
                            pathname === to
                                ? "bg-zinc-800 text-accent"
                                : "hover:bg-zinc-800 hover:text-accent"
                        )}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
