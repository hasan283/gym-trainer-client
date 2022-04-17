import React from 'react';
import './TreinaService.css'


const TreinaService = (props) => {
    const { img, name, price, info } = props.service;
    return (
        <div id="services" className="service-container">
            <div className="container">
                <div className="serivice-content">
                    <div className="service-item">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreinaService;