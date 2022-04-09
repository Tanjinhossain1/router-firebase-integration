import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';
import './header.css';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';


const auth = getAuth(app);
const Header = () => {
    // const { user, googleSingOut } = useFirebase();
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div className='header-container'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/order'>Order</Link>
                <Link to='/register'>Register</Link>
              


                {user?.uid ? <button onClick={() => signOut(auth)}>log out</button> :
                    <Link to='/login'>Login</Link>
                }
                {user?.uid && user.displayName}
            </nav>
        </div>
    );
};

export default Header;