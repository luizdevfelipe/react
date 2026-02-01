import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputLogin } from "./components/InputLogin";

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


                <InputLogin
                    label="Email"
                    name="email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressSpace={() => inputPasswordRef.current?.focus()}
                    type="email"
                />

                <InputLogin
                    label="Password"
                    name="password"
                    value={undefined}
                    ref={inputPasswordRef}
                    type="password"
                />

                <button type="submit">Login</button>
            </form>
        </>
    );
}