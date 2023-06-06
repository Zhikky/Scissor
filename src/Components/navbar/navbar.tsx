import "./navbar.scss";


//importing component images and dependencies
import logo from "../images/logo.png"

function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar__logo">
                <a href="/"><img src={logo} alt="logo" width="155px" /></a>
                
            </div>


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
                    <li>Try for free</li>
                    <li>Try for free</li>
                </ul>

            </div>

        </div>
    );
}

export default Navbar;