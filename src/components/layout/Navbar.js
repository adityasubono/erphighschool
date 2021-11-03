import React from 'react';
import Logo from '../../assets/images/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import "../layout/navbar.css";
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {faBell, faComment} from "@fortawesome/free-solid-svg-icons";

library.add(
    faBell,
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
);
const Navbar = () => {

    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
            <div className="container-sm">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="logo" className="img-fluid" width="140"/>
                </a>
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"
                               href="#"
                               id="navbarDropdown"
                               role="button"
                               data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
