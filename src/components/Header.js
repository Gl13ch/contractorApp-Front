import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Login from '../components/Login.js';
import Signup from '../components/Signup.js';

const Header = ({handleToggleLogin, currUser, setCurrUser, toggleLogin, handleLogin, handleSignup}) => {

    const [toggleLogout, setToggleLogout] = useState(false);
    
    const handleLogout = () => {
        setCurrUser({});
        console.log(currUser);
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
        <div className="header">
            <Link id='home' to='/'><img src="../public/images/ICON.png" alt="NLR Remodeling Logo"/></Link>

            <a href="#contact_us">Contact Us</a>

            {currUser.email ?
                <>
                    <div>
                        <h2>Welcome, {currUser.email}</h2>
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                    
                    <Link to='/user'>User Page</Link>
                </>
            :
                <>
                    <Link to='/signup'>Signup</Link>
                </> 
            }

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