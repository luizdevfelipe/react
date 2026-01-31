import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard");
    }

    return (
        <header>
            <h1>Login Page</h1>
            <button onClick={handleClick}>Dashboard</button>
        </header>
    );
}