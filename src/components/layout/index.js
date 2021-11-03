import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./Navbar";
import Login from "../../pages/Login";
import '@fortawesome/fontawesome-svg-core';


// eslint-disable-next-line react/prop-types
const Container = ({children}) => {

    // FUNCTION LAYOUT TO SHOW
    function renderLayoutToShow() {
        const {pathname} = window.location;
        if (pathname === "/login" || pathname === "/") {
            return <Login />;
        }


        return (
            <div>
                <Navbar />
                <div className="container">
                    {children}
                </div>
            </div>

        );

    }

    // DEFAULT PARENT RETURN
    return (

        <Router>
            {renderLayoutToShow()}
        </Router>
    );
};

export default Container;
