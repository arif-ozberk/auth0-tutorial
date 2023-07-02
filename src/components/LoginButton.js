import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Styles
import "../styles/Navbar.css";


const LoginButton = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();


    return (
        !isAuthenticated && (
            <button 
                className='navbar-button login-button'
                onClick={() => loginWithRedirect()}
            >
                Login
            </button>
        )
    );
}

export default LoginButton;