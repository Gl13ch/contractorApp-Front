import {useState} from 'react';
import axios from 'axios';

const Signup = () => {
    const [toggleError, setToggleError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [currUser, setCurrUser] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUserSignUp = (newUserObj) => {
        axios.post('http://localhost:8000/users/', newUserObj)
        .then((res) => {
            if (res.data.username) {
                console.log('success');
                setToggleError(false);
                setErrorMsg('');
                setCurrUser(res.data);
            } else {
                console.log('signup error\n', res.data);
                setErrorMsg(res.data);
                setToggleError(true);
            }
        }).catch(error =>{
            console.log(error);
        });
    };

    const signUpRequest = (event) => {
        event.preventDefault();
        let newUser = {
            username: username,
            password: password
        }
        handleUserSignUp(newUser);
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={signUpRequest}>
                <label htmlFor='username'>Username: </label>
                <input type='text' name='username' onChange={handleUsernameChange}/>
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' onChange={handlePasswordChange}/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Signup;