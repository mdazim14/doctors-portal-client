import React from 'react';
import './Navber.css';

const Navber = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto fw-bold">
                        <li class="nav-item me-5">
                            <a class="nav-link me-5" href="#">Home </a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link me-5" href="#">About</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link me-5" href="#">Dental services</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link me-5 text-white" href="#">Reviews</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link me-5 text-white" href="#">Blogs</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link me-5 text-white" href="#">Contact Us</a>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navber;