import {useState} from 'react';
import axios from 'axios';

const Signup = ({handleSignup}) => {
    const [toggleError, setToggleError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [currUser, setCurrUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false)

    const signUpRequest = (event) => {
        event.preventDefault();
        let newUser = {
            email: email,
            password: password,
            phone: phone,
            firstName: firstName,
            lastName: lastName,
            isAdmin: isAdmin
        };
        handleSignup(newUser);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={signUpRequest}>
                <label htmlFor='email'>Email: </label>
                <input type='text' name='email' onChange={handleEmailChange}/>
                <br />
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' onChange={handlePasswordChange}/>
                <br />
                <label htmlFor='phone'>Phone:</label>
                <input type='phone' name='phone' onChange={handlePhoneChange}/>
                <br />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Signup;