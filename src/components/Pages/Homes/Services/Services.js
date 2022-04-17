import React from 'react';
import useService from '../../../../hooks/useService';
import TreinaService from '../TreinaService/TreinaService';
const Services = () => {
    const [services] = useService();
    return (
        <div className='container'>
            {
                services.map(service => <TreinaService
                    key={service.id}
                    service={service}></TreinaService>)
            }
        </div>
    );
};

export default Services;