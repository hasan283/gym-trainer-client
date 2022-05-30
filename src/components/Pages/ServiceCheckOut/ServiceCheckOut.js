import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCheckOutDetail from '../../../hooks/useCheckOutDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';

const ServiceCheckOut = () => {
    const { checkoutId } = useParams();
    const [checkout] = useCheckOutDetail(checkoutId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'Md Hasan Ali',
    //     email: 'info@gmail.com',
    //     address: 'Jashore, Manirampur, 7440',
    //     number: '+8801XXXXXXXXX'
    // });

    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            checkout: checkout.name,
            checkoutId: checkoutId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://agile-lake-38546.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order is Booked');
                    event.target.reset()
                }
            })
    }


    return (
        <div>
            <h1 className='text-center'>Please Order: {checkout.name}</h1>
            <div className='w-50 mx-auto my-5'>
                <form onSubmit={handlePlaceOrder}>
                    <input className='w-100 my-2 py-1 px-3' type="text" name="name" value={user?.displayName} placeholder='Enter Your Name' required readOnly disabled /><br />
                    <input className='w-100 my-2 py-1 px-3' type="email" name="email" value={user?.email} placeholder='Enter Your Email' required readOnly disabled /><br />
                    <input className='w-100 my-2 py-1 px-3 fw-bold' type="text" name="service" value={checkout.name} placeholder='Enter Your Service' /><br />
                    <input className='w-100 my-2 py-1 px-3' type="text" name="address" placeholder='Enter Your Address' autoComplete='off' required /><br />
                    <input className='w-100 my-2 py-1 px-3' type="number" name="phone" autoComplete='off' placeholder='Enter Your Phone Number' required /><br />
                    <input className='w-50 mx-auto d-block bg-dark text-white py-2 rounded' type="submit" value="Order Now" />
                </form>
            </div>
        </div>
    );
};

export default ServiceCheckOut;