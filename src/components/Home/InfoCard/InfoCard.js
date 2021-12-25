import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex info-container align-items-center justify-content-center  m-3 info-${info.background}`}>
                <div className="fs-1 m-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <p>{info.description}</p>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;