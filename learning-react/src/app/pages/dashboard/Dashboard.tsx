import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoggedUserContext } from '../../shared/contexts';

export const Dashboard = () => {

    const { userName } = useContext(LoggedUserContext);

    return (
        <header>
            <h1>Dashboard</h1>
            <h2>Welcome to the Dashboard {userName} !</h2>
            <Link to="/login">Go to Login</Link>
        </header>
    );
}