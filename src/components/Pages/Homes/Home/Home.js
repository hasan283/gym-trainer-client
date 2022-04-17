import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Trainer from '../Trainer/Trainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trainer></Trainer>
            <Services></Services>
        </div>
    );
};

export default Home;