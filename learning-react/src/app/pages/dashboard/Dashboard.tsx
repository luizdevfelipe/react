import { Link } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <header>
            <h1>Dashboard</h1>
            <Link to="/login">Go to Login</Link>
        </header>
    );
}