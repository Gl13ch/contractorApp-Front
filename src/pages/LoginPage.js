import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Login from '../components/Login';
import axios from 'axios';

const LoginPage = ({setCurrUser}) => {
    const [toggleError, setToggleError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleLogin = (userObj) => {
		axios.put('http://localhost:8000/users/login', userObj)
		.then((res) =>{
			if (res.data.email) {
				console.log('success');
				setToggleError(false);
				setErrorMsg('');
				setCurrUser(res.data);
                navigate('/')
			} else {
				console.log('error', res.data);
				setErrorMsg(res.data);
				setToggleError(true);
			};
		});
	};

    return(
        <div className='pageContainer'>
            <Login handleLogin={handleLogin} errorMsg={errorMsg}/>
        </div>
    )
}

export default LoginPage