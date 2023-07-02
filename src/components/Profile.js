import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Styles
import "../styles/Navbar.css";


const Profile = () => {

    const { user, isAuthenticated } = useAuth0();


    return (
        isAuthenticated && (
            <div className='profile'>
                {user?.name && <p>Welcome back <span>{user.name}</span></p>}
                {user?.picture && <img src={user.picture} />}
            </div>
        )
    );
}
 
export default Profile;