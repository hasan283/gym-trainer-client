import React from 'react';
import banner from '../../../Image/Banner/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-image'>
            <img src={banner} alt="" />
            <div className="banner-content">
                <div className="banner-info">
                    <h1>WelCome To</h1>
                    <h1>My Gym Training Center!</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;