import {useState} from 'react';

const Login = ({handleLogin, toggleError, errorMsg}) => {
    const [currUser, setCurrUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');


    const loginRequest = (event) => {
        event.preventDefault();
        let userCredentials = {
            email: email,
            password: password,
            phone: phone
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
            <div>{errorMsg.error}</div>
            <form onSubmit={loginRequest}>
                <label htmlFor='email'>Email: </label>
                <input type='text' name='email' onChange={handleEmailChange}/>
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' onChange={handlePasswordChange}/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Login;