import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Login from '../components/Login.js';
import Signup from '../components/Signup.js';
import '../views/header.css';

const Header = ({handleToggleLogin, currUser, setCurrUser, toggleLogin, handleLogin, handleSignup}) => {

    const [toggleLogout, setToggleLogout] = useState(false);
    
    const handleLogout = () => {
        setCurrUser({});
        handleToggleLogout();
    };

    const handleToggleLogout = () => {
        if (toggleLogout) {
          setToggleLogout(false);
        } else {
          setToggleLogout(true);
        };
    };

    return(
        <div className="headerContainer">
            <div className='linkContainer1'>
                    {currUser.email ?
                        <>
                            <div>
                                <h2>Welcome, {currUser.email}</h2>
                            </div>
                            <Link to='/' onClick={handleLogout}>Logout</Link>
                            <br />
                        </>
                        :   
                        <Link to='/login'>Login </Link>
                    }
                </div>
            <div className='imageContainer'>
                
                <Link id='home' to='/'><img id='nlrLogo' src={require('../images/nlrLogoCircle.png')} alt="NLR Remodeling Logo"/></Link>

                <div className='linkContainer2'>
                <Link to='/'>Home </Link>
                    <a href="#contact_us">Contact Us </a>
                {currUser.email ?
                    <>
                        <Link to='/user'>User Page</Link>
                        <Link>Job Board </Link>
                        <Link>Punch List </Link>
                        <Link to='/settings'>Settings </Link>
                    </>
                    :<></>
                }
            </div>
            </div>
            

            {/* LOGGED OUT */}
            {/* Login */}
            {/* LOGGED IN */}
            {/* Dashboard (which is jobboardDB) */}
            {/* Punch List */}
            {/* Profile */}
            {/* Log Out */}
        </div>
    );
};

export default Header;