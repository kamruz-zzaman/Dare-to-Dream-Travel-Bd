import React from 'react';
import logo from '../../../Images/Header-logo.png'
import img from '../../../Images/google-logo.png'
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';

const Login = () => {
    const history = useHistory();
    const { user, signinWithGoogle } = useAuth();
    if (user.email) {
        history.push('/home')
    }
    console.log(history);
    return (
        <div className='flex justify-center items-center' >
            <div>
                <div className='flex justify-center items-center mt-5'>
                    <img className='w-72' src={logo} alt="" />
                </div>
                <div className='border-2 px-10 py-16 m-10 rounded-lg'>
                    <div>
                        <p className='font-bold text-3xl m-5 text-center'>Login With</p>
                        <button onClick={signinWithGoogle} className='m-5 border-2 py-1 px-7 rounded-3xl'><img className='w-6 inline mr-8 ' src={img} alt="" /> Continue with Google </button>
                        <p>Don't have an account? <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" target='_blank' rel="noreferrer" className='text-blue-400 border-b  border-blue-300'>Create an account</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;