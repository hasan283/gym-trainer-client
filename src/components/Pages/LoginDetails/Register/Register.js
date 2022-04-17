import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()


    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

    }

    // Toggle Login Page page 
    const navigateLogin = event => {
        navigate('/login')
    }

    // Register Form  
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center pt-5 pb-4'>Please Register</h1>
            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-5'>Already Have an Account? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateLogin}>Please Login</span></p>
        </div>
    );
};

export default Register;