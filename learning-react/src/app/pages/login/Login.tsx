import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");


    const handleClick = () => {
        navigate("/dashboard");
    }

    const handleEntrar = () => {
        alert(`Entrando com o email: ${email}`);
    }

    return (
        // <header>
        //     <h1>Login Page</h1>
        //     <button onClick={handleClick}>Dashboard</button>
        // </header>
        <form onSubmit={handleEntrar}>
            <label htmlFor="iemail">Email</label>
            <input type="email" id="iemail" value={email} onChange={e => setEmail(e.target.value)} />

            <label htmlFor="ipassword">Password</label>
            <input type="password" id="ipassword" />

            <button type="submit">Login</button>
        </form>
    );
}