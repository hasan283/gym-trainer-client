import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Trainer from '../Trainer/Trainer';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Treina-Home</title>
            </Helmet>
            <Banner></Banner>
            <Trainer></Trainer>
            <Services></Services>
        </div>
    );
};

export default Home;