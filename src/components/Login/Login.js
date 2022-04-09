import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {googleSingIn} = useFirebase();
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
            <button onClick={googleSingIn}>Google Sing In</button>

        </div>
    );
};

export default Login;