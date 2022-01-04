import React from 'react';

import doctore from '../../../images/doctor-small.png';


const doctorsData = [
    {
        name: 'Dr. Winson Herry',
        img: doctore,
        phone: '+88002320991'

    },
    {
        name: 'Dr. Winson Herry',
        img: doctore,
        phone: '+88002320991'
    },
    {
        name: 'Dr. Winson Herry',
        img: doctore,
        phone: '+88002320991'
    }
]
const Doctors = () => {
    return (
        <div>
            <div className="w-75 m-auto text-center mt-5">
                <h4 className="text-info">OUR DOCTORS</h4>
            </div>

            <div className="w-75 d-flex m-auto">
                {
                    doctorsData.map(info =>
                        <div className="m-5">
                            <div className="text-center">
                                <img className="mt-5 w-75" src={info.img} alt="" />
                                <h4 className="mt-3">{info.name}</h4>
                                <h6 className="">{info.phone}</h6>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Doctors;