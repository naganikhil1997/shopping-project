import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const staticUsername = 'nikhil';
        const staticPassword = 'nikhil12345';

        if (username === staticUsername && password === staticPassword) {
            setError('');
            navigate('/home'); // Navigate to the home page
        } else {
            setError('Invalid Username or Password');
        }
    };

    return (
        <div className='login-container'>
            <div className="login-main">
                <h1 style={{ textAlign: "center", fontFamily: 'sans-serif', marginBottom: '50px' }}>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            name='username' 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;