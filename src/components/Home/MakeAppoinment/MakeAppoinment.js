import React from 'react';
import Doctor from '../../../images/doctor.png';

const MakeAppoinment = () => {
    const styles = {
        height: '410px',
    }
    const styleImg = {
        position: 'relative',
        top: '-63px',
        height: '535px'
    }
    return (
        <main className="m-5">

            <div style={styles} className="text-center m-5  d-flex align-items-center bg-info">
                <div className="col-md-6 text-end">
                    <img style={styleImg} src={Doctor} alt="" />
                </div>
                <div className="col-md-6 text-start">
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