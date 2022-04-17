import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // UseRef 
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    // HandleSubmit 
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
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

            <p className='mt-5'>New To Treina? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Please Register</span></p>
        </div>
    );
};

export default Login;