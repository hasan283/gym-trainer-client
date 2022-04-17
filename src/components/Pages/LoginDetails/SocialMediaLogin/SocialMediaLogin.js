import React from 'react';
import google from '../../../Image/Logo/google.png'
import github from '../../../Image/Logo/github.png'

const SocialMediaLogin = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div className=' w-50 mx-auto'>
                <button className='btn bg-dark text-white w-100'>
                    <img src={google} alt="" />
                    Google Sing In
                </button>
                <button className='btn bg-info text-dark w-100 mt-3'>
                    <img src={github} alt="" />
                    Github Sing In
                </button>
            </div>
        </div>
    );
};

export default SocialMediaLogin;