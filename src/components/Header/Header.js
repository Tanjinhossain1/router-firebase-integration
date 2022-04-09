import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './header.css'
const Header = () => {
    const { user, googleSingOut } = useFirebase();
    console.log(user)
    return (
        <div className='header-container'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>


                {user?.uid ? <button onClick={googleSingOut}>log out</button> :
                    <Link to='/login'>Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;