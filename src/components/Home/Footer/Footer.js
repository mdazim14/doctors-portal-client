import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="container bg-img">
            <div className="footerStyle">
                {/* <h1>i'm footer</h1> */}
                <div className="col-md-3 mt-5 pt-2">
                    <li>Emergency Dental Care</li>
                    <li>Check Up</li>
                    <li>Treatment of Personal Disease</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                </div>
                <div className="col-md-3">
                    <h5 className="text-info">Services</h5>
                    <li>Emergency Dental Care</li>
                    <li>Check Up</li>
                    <li>Treatment of Personal Disease</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                    <li>Check Up</li>
                    <li>Treatment of Personal Disease</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                </div>
                <div className="col-md-3">
                    <h5 className="text-info">Ora Health</h5>
                    <li>Emergency Dental Care</li>
                    <li>Check Up</li>
                    <li>Treatment of Personal Disease</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                </div>
                <div className="col-md-3">
                    <h5 className="text-info">Our Address</h5>
                    <li>Emergency Dental Care</li>
                    <li>Check Up</li>
                    <li>Treatment of Personal Disease</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                    <div className="pt-5">
                        <li className="bg-info w-25 mb-1 ps-1">Call Now</li>
                        <li className="bg-info w-50 ps-1">+8804578946</li>
                    </div>

                </div>

            </div>
            <h6 className=" pb-3 text-center">Copyright 2022 all right reserved.</h6>
        </section>
    );
};

export default Footer;