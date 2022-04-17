import React from 'react';
import about from '../../Image/About/aboutme.png'

const About = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <h4 className="text-dark">My Name Is Md Hasan Ali</h4>
                    <h6 className="text-info"><b>Address: </b>Jashore, Khulna & Bangladesh</h6>
                    <p>I'm a front-end Website Designer and Developer. I'm very expert Designer and Developer. I want to be a better developer in the future. I want to develop myself in a more professional way.</p>
                    <p></p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="ps-5">
                        <img style={{ height: '350px' }} src={about} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;