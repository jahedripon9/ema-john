import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {

    const {signInGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/shop'
    

    const handleGoogleLogin = () =>{
        signInGoogle()
        .then(result =>{
            history.push(redirect_uri)

        })
    }

    return (
        <div className=" d-flex justify-content-center ">
            <div className="   ">
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your E-mail" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your Password"/>
                    <br />
                    <input className="btn btn-warning" type="submit" value="Submit" />
                </form>
                <p>New to Ema-john <Link to="/register">Create Account</Link></p>
                <div>------------Or-------------</div>
                <button className="btn btn-warning" onClick={handleGoogleLogin}>Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;