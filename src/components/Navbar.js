import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Styles
import "../styles/Navbar.css";

// Components
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';


const Navbar = () => {

    const { isLoading, error } = useAuth0();


    return (
        <div className='Navbar'>
            <h1>Logo</h1>
            
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
            {!error && !isLoading && (
                <div className='navbar-right'>
                    <Profile />
                    <div className='navbar-buttons'>
                        <LoginButton />
                        <LogoutButton />
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Navbar;
