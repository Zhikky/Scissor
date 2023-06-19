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

                    <li>Log in</li>
                    <NavLink to="/SignUp"><li>Sign Up</li></NavLink>
                    <li>Try for free</li>
                </ul>

            </div>

        </div>
    );
}

export default Navbar;