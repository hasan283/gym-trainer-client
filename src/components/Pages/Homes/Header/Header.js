import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Logo from '../../../Image/Logo/treina-logo.png';

const Header = () => {
    const [user] = useAuthState(auth)

    // Handle Sing Out 
    const handleSingOut = () => {
        signOut(auth);
        localStorage.removeItem('Access Token');
    }

    return (
        <>

            <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ height: '30px' }} src={Logo} alt="" />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="home#trainer">Trainer</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

                        </Nav>
                        <Nav>

                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                                    {/* <Nav.Link as={Link} to="/manage">Manage Service</Nav.Link> */}
                                    <Nav.Link as={Link} to="/order">Orders</Nav.Link>
                                </>
                            }

                            {
                                user ?
                                    <button className='btn text-white' onClick={handleSingOut}>Sing Out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;