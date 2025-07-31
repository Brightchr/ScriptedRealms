import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.tsx";

export default function LoginButton() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        setIsAuthenticated(!!token);
    }, []);

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        localStorage.removeItem("auth_token");
        setIsAuthenticated(false);
        navigate("/");
    };

    return (
        <div className="cursor-pointer">
            {!isAuthenticated ? (
                <Button variant="ghost" onClick={handleLogin}>
                    Login
                </Button>
            ) : (
                <Button variant="ghost" onClick={handleLogout}>
                    Logout
                </Button>
            )}
        </div>
    );
}
