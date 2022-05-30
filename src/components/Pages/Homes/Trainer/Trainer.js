import React from 'react';
import { Helmet } from 'react-helmet-async';
import treina from '../../../Image/Banner/treina.png';
import './Trainer.css'

const Trainer = () => {
    return (
        <div>

            <div id='trainer' className='treina-container pt-5 pb-5'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <h4>Wellcome to Treina</h4>
                            <h1>Become More <span>Healthy</span></h1>
                            <h1>and Stay Sporty</h1>
                            <p className='mt-3'>Hey! I'm Treina. I'm a good and Professional GYM Trainer. My GYM Trainer center is very good Training Center.
                                <span> Don't Waste your time. If you want to good Healthy. Come to my Training center</span></p>
                            <div className="treina-btn mt-5">
                                <a href="#services">Follow My Services</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                            <div className="treinaImage">
                                <img src={treina} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainer;