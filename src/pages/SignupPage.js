import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Signup from '../components/Signup';
import axios from 'axios';

const SignupPage = ({setCurrUser}) => {
    const [toggleError, setToggleError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleSignup = (newUserObj) => {
        axios.post('http://localhost:8000/users/', newUserObj)
        .then((res) => {
            if (res.data.email) {
                console.log('success');
                setToggleError(false);
                setErrorMsg('');
                setCurrUser(res.data);
                navigate('/')
            } else {
                console.log('signup error\n', res.data);
                setErrorMsg(res.data);
                setToggleError(true);
            }
        }).catch(error =>{
            console.log(error);
        });
    };

    return(
        <div className='pageContainer'>
            <Signup handleSignup={handleSignup}/>
        </div>
    )
}

export default SignupPage