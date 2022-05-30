import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Addservice = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://agile-lake-38546.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log((result))
                toast('Add Service Success')
            })
    };

    return (
        <div className='container'>
            <h1 className='text-center my-5'>Your Service Add Now</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-2">
                    <p>Service Name</p>
                    <input className='form-control' {...register("name", { required: true, maxLength: 20 })} />
                </div>

                <div className="my-2">
                    <p>Price</p>
                    <input className='form-control' type="number" {...register("price")} />
                </div>

                <div className="my-2">
                    <p>Photo (Url)</p>
                    <input className='form-control' type="text" {...register("img")} />
                </div>

                <div className="my-2">
                    <p>Description</p>
                    <textarea className='form-control' {...register("description")} />
                </div>

                <input style={{ borderRadius: '10px' }} className='my-2 w-50 d-block mx-auto border-0 py-2 bg-dark text-white' type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default Addservice;