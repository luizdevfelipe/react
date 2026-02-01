import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const emailLength: number = useMemo(() => {
        return email.length;
    }, [email.length]);

    const handleClick = () => {
        navigate("/dashboard");
    }

    const handleEntrar = () => {
        alert(`Entrando com o email: ${email}`);
    }

    useEffect(() => {
        if (email.length > 0) {
            setEmail(email.toLocaleLowerCase());
        }

        return () => {
            if (email.length > 0) {
                console.log(email);
            }
        }

    }, [email]);

    return (
        // <header>
        //     <h1>Login Page</h1>
        //     <button onClick={handleClick}>Dashboard</button>
        // </header>
        <form onSubmit={handleEntrar}>
            <p>Email length: {emailLength}</p>

            <label htmlFor="iemail">Email</label>
            <input type="email" id="iemail" value={email} onChange={e => setEmail(e.target.value)} />

            <label htmlFor="ipassword">Password</label>
            <input type="password" id="ipassword" />

            <button type="submit">Login</button>
        </form>
    );
}