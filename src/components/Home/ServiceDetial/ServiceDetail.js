import React from 'react';

const ServiceDetail = ({info}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'70px'}} src={info.img} alt="" />
            <h5 className="mt-3 mb-3" >{info.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, cumque.</p>
        </div>
    );
};

export default ServiceDetail;