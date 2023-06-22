import React from "react";
import "./navbar.scss";
import Hamburger from 'hamburger-react';
//importing component images and dependencies
import logo from "../images/logo.png"
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar__logo">
                <a href="/"><img src={logo} alt="logo" width="155px" /></a>

            </div>

            <input type="checkbox" id="toggler" />
            {/* toggler for mobile navigation */}
            <label htmlFor="toggler">
                <Hamburger />
            </label>


            <div className="navbar__links">
                <ul className="links1">
                    <li>My URLs</li>
                    <a href="#features"><li>Features</li></a>
                    <li>Pricing</li>
                    <li>Analytics</li>
                    <li>FAQs</li>
                </ul>

                <ul>

                    <NavLink to="/SignIn"><li>Log In</li></NavLink>
                    <NavLink to="/SignUp"><li>Sign Up</li></NavLink>
                    <a href="#analytics"><li>Try for free</li></a>
                </ul>

            </div>

        </div>
    );
}

export default Navbar;