import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    // UseRef 
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // HandleSubmit 
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }


    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>


    }
    // Toggle Register page 
    const navigateRegister = event => {
        navigate('/register')
    }
    // Reset Password 
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please Enter Your Email Address')
        }
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center pt-5 pb-4'>Please Login</h1>
            <ToastContainer />

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}

            <p className='mt-5'>New To Treina? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Please Register</span></p>
            <p className='mt-5'>Forget Password? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={resetPassword}>Reset Password</span></p>

            <SocialMediaLogin></SocialMediaLogin>
        </div>
    );
};

export default Login;