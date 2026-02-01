import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const inputPasswordRef: React.RefObject<HTMLInputElement | null> = useRef(null);

    const emailLength: number = useMemo(() => {
        return email.length;
    }, [email.length]);

    const handleClick = () => {
        navigate("/dashboard");
    }

    const handleEntrar: () => void = useCallback(() => {
        alert(`Entrando com o email: ${email}`);
    }, [email]);

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
        <>
            <header>
                <h1>Login Page</h1>
                <button onClick={handleClick}>Dashboard</button>
            </header>
            <form onSubmit={handleEntrar}>
                <p>Email length: {emailLength}</p>

                <label htmlFor="iemail">Email</label>
                <input type="email" id="iemail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === ' ' ? inputPasswordRef.current?.focus() : undefined}
                />

                <label htmlFor="ipassword">Password</label>
                <input ref={inputPasswordRef} type="password" id="ipassword" />

                <button type="submit">Login</button>
            </form>
        </>
    );
}