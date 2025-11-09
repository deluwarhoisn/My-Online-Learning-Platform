import React, { use } from 'react';
import Navbar from '../Header/Navbar';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthProvider';


const Login = () => {
   const {signIn}= use(AuthContext);

    const submitForm = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email,password});

        signIn(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user)
        }).catch((error)=>{
            const errorCode =error.code;
            const errorMessage =error.errorMessage;
            alert(errorCode,errorMessage)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">


                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={submitForm} className="card-body">
                            <fieldset  className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p>Dont't Have An Account?<span className='text-red-500'><Link to="/register"> Register</Link> </span></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;