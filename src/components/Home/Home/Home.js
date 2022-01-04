import React from 'react';
import Blog from '../Blog/Blog';
import Exceptional from '../Exceptional/Exceptional';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default Home;