import React from 'react';
import useService from '../../../../hooks/useService';
import TreinaService from '../TreinaService/TreinaService';
import './Services.css'
const Services = () => {
    const [services] = useService();
    return (
        <div className="container">
            <div className="row">
                <div className='services-container'>
                    {
                        services.map(service => <TreinaService
                            key={service.id}
                            service={service}></TreinaService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;