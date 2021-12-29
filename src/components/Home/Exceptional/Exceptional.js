import React from 'react';
import treatment from '../../../images/treatment.png';

const Exceptional = () => {
    return (
        <div className="d-flex mt-5 pt-5 mb-5 pb-5">
            <div className="col-md-6 text-end">
                <img className="w-50" src={treatment} alt="" />
            </div>
            <div className="col-md-6 w-25 p-5 ">
                <h2>Exceptional Dental</h2>
                <h2>Care, on Your Terms</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis at nemo debitis quibusdam necessitatibus, odio odit, voluptatum ea nisi dolorum atque voluptates. Nulla expedita saepe rerum aspernatur hic repellendus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis at nemo debitis quibusdam necessitatibus, odio odit, voluptatum ea nisi dolorum atque voluptates. Nulla expedita saepe rerum aspernatur hic repellendus!</p>

                <button className="btn btn-primary">Learn more</button>
            </div>
        </div>
    );
};

export default Exceptional;