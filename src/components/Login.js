import {useState, useEffect} from 'react';
import axios from 'axios';

const Login = () => {
    const [toggleError, setToggleError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [currUser, setCurrUser] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = (userObj) => {
        axios.put('http://localhost:8000/users/login', userObj)
        .then((res) =>{
            if (res.data.username) {
                console.log('success');
                setToggleError(false);
                setErrorMsg('');
                setCurrUser(res.data);
            } else {
                console.log('error', res.data);
                setErrorMsg(res.data);
                setToggleError(true);
            }
        })     
    };

    const loginRequest = (event) => {
        event.preventDefault();
        let userCredentials = {
            username: username,
            password: password
        }
        handleLogin(userCredentials);
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginRequest}>
                <label htmlFor='username'>Username: </label>
                <input type='text' name='username' onChange={handleUsernameChange}/>
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' onChange={handlePasswordChange}/>
                <input type='submit'/>
                {toggleError && <h5>{errorMsg}</h5>}
            </form>
        </div>
    )
}

export default Login;