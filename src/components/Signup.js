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
    const [isAdmin, setIsAdmin] = useState(false);

    const signUpRequest = (e) => {
        e.preventDefault();
        let newUser = {
            email: email,
            password: password,
            phone: phone,
            first_name: firstName,
            last_name: lastName,
            is_admin: isAdmin
        };
        handleSignup(newUser);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleAdminChange = (e) => {
        setIsAdmin(e.target.value);
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
                <label htmlFor='firstName'>First Name:</label>
                <input type='firstName' name='firstName' onChange={handleFirstNameChange}/>
                <br />
                <label htmlFor='lastName'>Last Name:</label>
                <input type='lastName' name='lastName' onChange={handleLastNameChange}/>
                <br />
                <label htmlFor='isAdmin'>Admin:</label>
                <input type='checkbox' name='isAdmin' onChange={handleAdminChange}/>
                <br />
                <input type='submit'/>
            </form>
        </div>
    );
};

export default Signup;