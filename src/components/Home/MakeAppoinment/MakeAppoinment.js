import React from 'react';
import Doctor from '../../../images/doctor.png';
import './MakeAppoinment.css';

const MakeAppoinment = () => {
    
    return (
        <main className="">
            <div className="make-appoinment m-auto row">
                <div className="col-md-6 text-end">
                    <img className="appoinmentImg" src={Doctor} alt="" />
                </div>
                <div className=" appoinment-text col-md-6 p-5 text-start">
                    <h5 className="mb-5">Appointment</h5>
                    <h1>Make an Appoinment</h1>
                    <h1 className="mb-4">Today</h1>
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, commodi!</p>
                    <button className="mt-4 btn btn-primary">Learn more</button>
                </div>
            </div>

        </main>
    );
};

export default MakeAppoinment;