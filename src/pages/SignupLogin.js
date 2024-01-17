import {useState, useEffect} from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import axios from 'axios';

const SignupLogin = ({currUser, setCurrUser, handleLogout}) => {
    const [toggleLogin, setToggleLogin] = useState(true);
    const [toggleError, setToggleError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = (userObj) => {
		axios.put('http://localhost:8000/users/login', userObj)
		.then((res) =>{
			if (res.data.email) {
				console.log('success');
				setToggleError(false);
				setErrorMsg('');
				setCurrUser(res.data);
			} else {
				console.log('error', res.data);
				setErrorMsg(res.data);
				setToggleError(true);
			};
		});   
	};
    
    const handleToggleLogin = () => {
        if (toggleLogin) {
          setToggleLogin(false);
        } else {
          setToggleLogin(true);
        };
    };

    return(
        <>
            <div>
                {toggleLogin ?
                <Login handleLogin={handleLogin}/>
                :
                <Signup/>
                }
                <button onClick={handleToggleLogin}>{toggleLogin ? 'Need an account?':'Already have an account'}</button>
            </div>
        </>
    )
};

export default SignupLogin;