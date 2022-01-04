import React from 'react';
import cotation from '../../../images/double cotn.PNG';
import patient1 from '../../../images/people-1.png';
import patient2 from '../../../images/people-2.png';
import patient3 from '../../../images/people-3.png';


const testimonialData = [
    {
        name: 'Winson Herry',
        img: patient1,
        location: 'Califrnia',
        description: 'It is a long established fact that by the readable content of a lot loyout. The point of using lorem a more or less normal distribu to using Content here, content.'
    },
    {
        name: 'Sophia Olivia',
        img: patient2,
        location: 'Califrnia',
        description: 'It is a long established fact that by the readable content of a lot loyout. The point of using lorem a more or less normal distribu to using Content here, content.'
    },
    {
        name: 'Ava Emma',
        img: patient3,
        location: 'Califrnia',
        description: 'It is a long established fact that by the readable content of a lot loyout. The point of using lorem a more or less normal distribu to using Content here, content.'
    }
]

const Testimonial = () => {
    return (
        <main className="mb-5">

            <div className="row m-auto w-75 m-5">
                <div className="col-md-6 p-5">
                    <h5 className="text-info">TESTIMONIAL</h5>
                    <h2>What's Our Patients</h2>
                    <h2>Says</h2>
                </div>
                <div className="col-md-6 p-5">
                    <img className="float-end" src={cotation} alt="" />
                </div>
            </div>

            <div className="w-75 d-flex m-auto">
                {
                    testimonialData.map(info =>
                        <div className="border rounded p-4 m-4">
                            <p className="text-center">{info.description}</p>
                            <div className="d-flex ">
                                <img className="w-25 h-25 mt-4" src={info.img} alt="" />
                                <div className="ms-4 mt-5">
                                    <h6 className="text-info">{info.name}</h6>
                                    <p className="">{info.location}</p>
                                </div>

                            </div>
                        </div>)
                }
            </div>

        </main>
    );
};

export default Testimonial;