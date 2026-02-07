import { Link } from 'react-router-dom';
import { useLoggedUser } from '../../shared/hooks';
import { useCallback, useState } from 'react';

interface IListItem {
    value: string;
    isChecked: boolean;
}


export const Dashboard = () => {

    const { userName, logOut } = useLoggedUser();
    const [list, setList] = useState<IListItem[]>([]);

    const handleInputKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (event.currentTarget.value.trim().length === 0) return;

            const value = event.currentTarget.value.trim();

            setList((oldList) => {
                if (oldList.some(item => item.value === value)) return oldList;
                return [...oldList, { value, isChecked: false }];
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
                <p>{list.filter(item => item.isChecked).length} items selected</p>

                <ul>
                   {list.map((listItem) => {
                    return <li key={listItem.value}>
                        <input 
                        type="checkbox"
                        checked={listItem.isChecked}
                        onChange={() => setList((oldList) => {
                            return oldList.map(item => {
                                if (item.value === listItem.value) {
                                    return { ...item, isChecked: !item.isChecked };
                                }
                                return item;
                            })
                        })}
                        />
                        {listItem.value}
                    </li>
                   })}
                </ul>
            </main >
        </>
    );
}