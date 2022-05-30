import React from 'react';
import useService from '../../../hooks/useService';

const ManageService = () => {
    const [services, setServices] = useService();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this service?');
        if (proceed) {
            const url = `https://agile-lake-38546.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);

                })
        }
    }
    return (
        <div className='container'>
            <h1 className='text-center my-3'>Manage Your Service</h1>
            {
                services.map(service => <div style={{ border: '1px solid black', margin: '1rem 0' }} className='w-50 mx-auto' key={service._id}>
                    <img style={{ maxWidth: '100%' }} src={service.img} alt="" />
                    <h5 className='text-center'>{service.name}</h5>
                    <h5 className='text-center'>{service.service}</h5>
                    <h5><b>Price</b> ${service.price}</h5>
                    <p><b>Description:</b> {service.description.slice(0, 40)}</p>
                    <button onClick={() => handleDelete(service._id)} className='w-50 d-block mx-auto bg-dark text-white'>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageService;