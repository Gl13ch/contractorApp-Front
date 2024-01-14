import {Link} from 'react-router-dom';

const Header = ({handleToggleLogin, handleToggleLogout, currUser}) => {
    

    return(
        <div className="header">
            {/* Will probably put Logo here, will be the home page button */}
            <Link id='home' to='/'><img src="../public/images/ICON.png" alt="NLR Remodeling Logo"/></Link>
            
            <a href="#contact_us">Contact Us</a>

            {currUser.email &&
                <>
                    <div>
                        <h2>Welcome, {currUser.email}</h2>
                    </div>
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