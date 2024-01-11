import {useState} from 'react';

const Login = ({handleLogin, toggleError, errorMsg}) => {
    const [currUser, setCurrUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginRequest = (event) => {
        event.preventDefault();
        let userCredentials = {
            email: email,
            password: password
        }
        handleLogin(userCredentials);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginRequest}>
                <label htmlFor='email'>Email: </label>
                <input type='text' name='email' onChange={handleEmailChange}/>
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' onChange={handlePasswordChange}/>
                <input type='submit'/>
                {toggleError && <h5>{errorMsg}</h5>}
            </form>
        </div>
    )
}

export default Login;