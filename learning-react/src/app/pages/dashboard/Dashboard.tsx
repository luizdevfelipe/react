import { Link } from 'react-router-dom';
import { useLoggedUser } from '../../shared/hooks';
import { useCallback, useEffect, useState } from 'react';
import { TasksService } from '../../shared/services/api/tasks/TasksService';
import { ApiException } from '../../shared/services/api/ApiException';

interface ITasks {
    id: number;
    title: string;
    isCompleted: boolean;
}


export const Dashboard = () => {

    const { userName, logOut } = useLoggedUser();
    const [list, setList] = useState<ITasks[]>([]);

    const handleInputKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (event.currentTarget.value.trim().length === 0) return;

            const value = event.currentTarget.value.trim();

            if (list.some(item => item.title === value)) return;

            TasksService.create({ title: value, isCompleted: false }).then((result) => {
                if (result instanceof ApiException) {
                    console.error(result.message);
                } else {
                    console.log(result);
                    setList((oldList) => {
                        return [...oldList, result];
                    });
                }
            });
            event.currentTarget.value = "";
        }
    }, [list]);

    useEffect(() => {
        TasksService.getAll().then((response) => {
            if (response instanceof ApiException) {
                console.error(response.message);
            } else {
                setList(response);
            }
        })
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
                <p>{list.filter(item => item.isCompleted).length} items selected</p>

                <ul>
                    {list.map((listItem) => {
                        return <li key={listItem.id}>
                            <input
                                type="checkbox"
                                checked={listItem.isCompleted}
                                onChange={() => setList((oldList) => {
                                    return oldList.map(item => {
                                        if (item.id === listItem.id) {
                                            return { ...item, isCompleted: !item.isCompleted };
                                        }
                                        return item;
                                    })
                                })}
                            />
                            {listItem.title}
                        </li>
                    })}
                </ul>
            </main >
        </>
    );
}