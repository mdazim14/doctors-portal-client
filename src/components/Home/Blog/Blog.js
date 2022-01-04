import React from 'react';

import patient1 from '../../../images/people-1.png';
import patient2 from '../../../images/people-2.png';
import patient3 from '../../../images/people-3.png';


const blogData = [
    {
        name: 'Winson Herry',
        img: patient1,
        date: '23 April 2021',
        location: 'Califrnia',
        advice: 'Check at least a doctor in a year for your teeth',
        description: 'It is a long established fact that by the readable content of a lot loyout. The point of using lorem a more or less normal distribu to using Content here, content.'
    },
    {
        name: 'Sophia Olivia',
        img: patient2,
        date: '12 April 2021',
        location: 'Califrnia',
        advice: 'Check at least a doctor in a year for your teeth',
        description: 'It is a long established fact that by the readable content of a lot loyout. The point of using lorem a more or less normal distribu to using Content here, content.'
    },
    {
        name: 'Ava Emma',
        img: patient3,
        date: '18 April 2021',
        location: 'Califrnia',
        advice: 'Check at least a doctor in a year for your teeth',
        description: 'It is a long established fact that by the readable content of a lot loyout. The point of using lorem a more or less normal distribu to using Content here, content.'
    }
]
const Blog = () => {
    return (
        <main className="mb-5">
            <div className="w-75 m-auto text-center mt-5">
                <h4 className="text-info">OUR BLOG</h4>
                <h1>From Our Blog News</h1>
            </div>

            <div className="w-75 d-flex m-auto">
                {
                    blogData.map(info =>
                        <div className="border rounded p-3 m-4 mt-5">
                            <div className="d-flex ">
                                <img className="mt-5 mb-5 ms-5 me-3" src={info.img} alt="" />
                                <div className="mt-5 pt-3">
                                    <h6 className="text-info">{info.name}</h6>
                                    <p className="">{info.date}</p>
                                </div>
                            </div>
                            <h5>{info.advice}</h5>
                            <p className="mt-4">{info.description}</p>
                        </div>)
                }
            </div>
        </main>
    );
};

export default Blog;