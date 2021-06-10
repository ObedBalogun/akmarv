import React, {useEffect, useState} from 'react';
import {apiAuthenticateUser} from "../backendQuery";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('/');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        const handleAuthentication = (data) => {
            if (data) {
                localStorage.clear();
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                window.location.replace('/');
            } else {
                setUsername('');
                setPassword('');
                localStorage.clear();
                setErrors(true);
            }
        };

        apiAuthenticateUser(handleAuthentication, username, password)
    };

    return (
        <div>
            {loading === false && <h1>Login</h1>}
            {errors === true && <h2>Cannot log in with provided credentials</h2>}
            {loading === false && (
                <form onSubmit={onSubmit}>
                    <label htmlFor='username'>Username:</label> <br/>
                    <input
                        name='username'
                        type='text'
                        value={username}
                        required
                        onChange={e => setUsername(e.target.value)}
                    />{' '}
                    <br/>
                    <label htmlFor='password'>Password:</label> <br/>
                    <input
                        name='password'
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />{' '}
                    <br/>
                    <input type='submit' value='Login'/>
                </form>
            )}
        </div>
    );
};

export default LoginPage;