import { Link } from 'react-router-dom';
import { useLoggedUser } from '../../shared/hooks';

export const Dashboard = () => {

    const { userName } = useLoggedUser();

    return (
        <header>
            <h1>Dashboard</h1>
            <h2>Welcome to the Dashboard {userName}!</h2>
            <Link to="/login">Go to Login</Link>
        </header>
    );
}