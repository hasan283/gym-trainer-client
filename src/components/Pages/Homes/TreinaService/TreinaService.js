import React from 'react';
import './TreinaService.css'


const TreinaService = (props) => {
    const { img, name, service, price, info } = props.service;
    return (
        <div id="services">
            <img src={img} alt="" />
            <div className="service-info">
                <h4>{name}</h4>
                <h6>{service}</h6>
                <p><b>Price:</b> ${price}</p>
                <p><b>Description:</b> {info.slice(0, 30)}...</p>
            </div>
        </div>
    );
};

export default TreinaService;