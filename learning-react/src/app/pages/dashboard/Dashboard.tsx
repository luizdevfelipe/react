import { Link } from 'react-router-dom';
import { useLoggedUser } from '../../shared/hooks';
import { useCallback, useState } from 'react';

export const Dashboard = () => {

    const { userName, logOut } = useLoggedUser();
    const [list, setList] = useState<string[]>(["Item1", "Item2", "Item3", "Item4"]);

    const handleInputKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (event.currentTarget.value.trim().length === 0) return;

            const value = event.currentTarget.value.trim();

            setList((oldList) => {
                if (oldList.includes(value)) return oldList;    
                return [...oldList, value];
            });
            event.currentTarget.value = "";
        }
    }, []);

    return (
        <>
        <header>
            <h1>Dashboard</h1>
            {userName !== "" && <h2>Welcome to the Dashboard {userName}!</h2>}
            <Link to="/login">Go to Login</Link>
            {userName !== "" && <button onClick={logOut}>Log Out</button>}
        </header>
        <main>

            <input onKeyDown={handleInputKeyDown} />

            <ul>
                {list.map((value, index) => <li key={value}> {index} - {value}</li>)}
            </ul>
        </main>
        </>
    );
}