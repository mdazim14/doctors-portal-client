import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px', border: '3px solid red'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 border" >
                <h1>Your New Smile</h1>
                <h1>Start Here</h1>
                <p>Lorem ipsum dolor rerum! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid.
                </p>
                <button className="btn btn-primary"type="">Get Appoinment</button>
            </div>
            <div className="col-md-6 border">
                <img className="img-fluid" src={chair} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;