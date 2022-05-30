import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init'
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet-async';
import useToken from '../../../../hooks/useToken';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updatedError] = useUpdateProfile(auth);
    const [token] = useToken(user)
    const navigate = useNavigate()


    if (token) {
        navigate('/home');
    }
    // Toggle Login Page page 
    const navigateLogin = event => {
        navigate('/login')
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        // 

    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    // Register Form  
    return (
        <div>
            <Helmet>
                <title>Treina-Register</title>
            </Helmet>

            <div className='w-50 mx-auto'>
                <h1 className='text-center pt-5 pb-4'>Please Register</h1>
                <Form onSubmit={handleRegister}>


                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" name="name" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='mt-5'>Already Have an Account? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateLogin}>Please Login</span></p>
                <SocialMediaLogin></SocialMediaLogin>
            </div>
        </div>
    );
};

export default Register;