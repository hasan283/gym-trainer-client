import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { checkoutId } = useParams()
    return (
        <div>
            <h1>This is Checkout Page{checkoutId}</h1>
        </div>
    );
};

export default CheckOut;