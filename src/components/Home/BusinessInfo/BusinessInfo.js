import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {

    const InfoData = [
        {
            title: 'Opening Hours',
            description: 'we are open 7/24',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our location',
            description: 'Brooklyn, NY 1330 BD',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Call us now',
            description: '+8801655498874',
            icon: faPhone,
            background: 'primary'
        }
    ]

    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                InfoData.map(info => <InfoCard info={info}></InfoCard> )
            }
            </div>
        </section>
    );
};

export default BusinessInfo;