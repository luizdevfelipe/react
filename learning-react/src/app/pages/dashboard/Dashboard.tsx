import { Link } from 'react-router-dom';
import { useLoggedUser } from '../../shared/hooks';

export const Dashboard = () => {

    const { userName, logOut } = useLoggedUser();

    return (
        <header>
            <h1>Dashboard</h1>
            {userName !== "" && <h2>Welcome to the Dashboard {userName}!</h2>}
            <Link to="/login">Go to Login</Link>
            {userName !== "" && <button onClick={logOut}>Log Out</button>}
        </header>
    );
}