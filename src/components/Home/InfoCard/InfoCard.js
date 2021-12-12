import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white">
            <div className={`d-flex m-3 info-${info.background}`}>
                <div>
                    <FontAwesomeIcon icon={info.icon}></FontAwesomeIcon>
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