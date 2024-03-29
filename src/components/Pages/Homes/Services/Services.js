import React from 'react';
import { Helmet } from 'react-helmet-async';
import useService from '../../../../hooks/useService';
import TreinaService from '../TreinaService/TreinaService';
import './Services.css'
const Services = () => {
    const [services] = useService();
    return (
        <div>

            <div id="services" className="container pt-5 pb-5">
                <h1 className='text-center pt-2 pb-4'>Treina Services</h1>
                <div className="row">
                    <div className='services-container'>
                        {
                            services.map(service => <TreinaService
                                key={service._id}
                                service={service}></TreinaService>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;