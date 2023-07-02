import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Styles
import "../styles/Navbar.css";


const LogoutButton = () => {

    const { logout, isAuthenticated } = useAuth0();


    return (
        isAuthenticated && (
            <button
                className='navbar-button logout-button'
                onClick={() => logout()}
            >
                Logout
            </button>
        )
    );
}

export default LogoutButton;