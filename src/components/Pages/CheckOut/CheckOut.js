import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { checkoutId } = useParams()
    return (
        <div className='container pt-5 pb-5'>
            <h1>Description:</h1>
            <p>{checkoutId}</p>
        </div>
    );
};

export default CheckOut;