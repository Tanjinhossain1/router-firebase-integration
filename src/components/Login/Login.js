import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)
const Login = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
        let from = location.state?.from?.pathname || "/";
        navigate(from)
    }
    return (
        <div>

            <h1> login!!</h1>
            <form>
                <input type="email" name="" placeholder='Enter your email' id="" />
                <br />
                <input type="password" name="" placeholder='Enter your password' id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <button onClick={handleSignInWithGoogle}>Google Sing In</button>

        </div>
    );
};

export default Login;