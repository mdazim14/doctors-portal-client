import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navber from '../Navber/Navber';
// import Services from '../Services/Services';
import './Header.css';
const Header = () => {
    return (
        <div class="Header-container">
            <Navber></Navber>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
            {/* <Services></Services> */}
        </div>
    );
};

export default Header;