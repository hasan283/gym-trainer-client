import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';

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

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>

    }
    // Toggle Register page 
    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center pt-5 pb-4'>Please Login</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}

            <p className='mt-5'>New To Treina? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Please Register</span></p>

            <SocialMediaLogin></SocialMediaLogin>
        </div>
    );
};

export default Login;