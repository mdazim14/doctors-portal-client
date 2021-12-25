import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetial/ServiceDetail';
const servicesData = [
    {
        name: 'Fluride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1cc7c1' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3A4256' }}>Services we provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div  className="w-75 row mt-5 pt-5">
                    {
                        servicesData.map(info => <ServiceDetail info={info}></ServiceDetail>)
                    }
                </div>
            </div>


        </section>
    );
};

export default Services;