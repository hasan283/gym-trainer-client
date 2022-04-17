import React from 'react';
import google from '../../../Image/Logo/google.png'
import github from '../../../Image/Logo/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialMediaLogin = () => {

    // Sing In With Google 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // Sing In With Github 
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {

        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

    }

    if (user || user1) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className=' w-50 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='btn bg-dark text-white w-100'>
                    <img src={google} alt="" />
                    Google Sing In
                </button>
                <button onClick={() => signInWithGithub()} className='btn bg-info text-dark w-100 mt-3'>
                    <img src={github} alt="" />
                    Github Sing In
                </button>
            </div>
        </div>
    );
};

export default SocialMediaLogin;