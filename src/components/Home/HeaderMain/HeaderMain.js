import React from 'react';
import chair from '../../../images/chair.png';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const HeaderMain = () => {

    const style = {
        color: '#3A4256'
    }

    return (
        <div>
            <div style={{height: '800px'}} className="d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={style}>Your New Smile</h1>
                    <h1 style={style}>Start Here</h1>
                    <p>Lorem ipsum dolor rerum! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid.
                    </p>
                    <button className="btn btn-primary"type="">Get Appoinment</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={chair}/>
                </div>
                
            </div>
        </div>
    );
};

export default HeaderMain;