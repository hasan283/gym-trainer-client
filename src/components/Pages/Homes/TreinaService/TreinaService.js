import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TreinaService.css'


const TreinaService = (props) => {
    const { img, name, service, price, info } = props.service;
    const navigate = useNavigate()
    const navigateServiceDetails = id => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className='services-item'>
            <img src={img} alt="" />
            <div className="service-info">
                <h4>{name}</h4>
                <h6>{service}</h6>
                <p><b>Price:</b> ${price}</p>
                <p><b>Description:</b> {info.slice(0, 30)}...</p>
                <div className="checkout-btn">
                    <button onClick={() => navigateServiceDetails(info)}>Checkout Now</button>
                </div>
            </div>
        </div>
    );
};

export default TreinaService;