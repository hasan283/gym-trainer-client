import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init'
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()


    if (user) {
        navigate(`/checkout`);
    }
    // Toggle Login Page page 
    const navigateLogin = event => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }
    // Register Form  
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center pt-5 pb-4'>Please Register</h1>
            <Form onSubmit={handleRegister}>


                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-5'>Already Have an Account? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateLogin}>Please Login</span></p>
            <SocialMediaLogin></SocialMediaLogin>
        </div>
    );
};

export default Register;