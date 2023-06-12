import "./footer.scss";

import logo from "../images/Logo-black.png"

function Footer() {
    return (
        <div className="footer">
            <div>
                <div className="socials">
                    <div ><img src={logo} alt={logo} width="155px" /></div>
                    <div>
                        <a><i className="fa-brands fa-twitter"></i></a>
                        <a><i className="fa-brands fa-instagram"></i></a>
                        <a><i className="fa-brands fa-linkedin"></i></a>
                        <a><i className="fa-brands fa-square-facebook"></i></a>
                    </div>

                </div>
                <div className="grid-footer">
                    <div>
                        <h3>Why Scissor?</h3>
                        <ul>
                            <li>Scissor 101</li>
                            <li>Integration & API</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Solutions</h3>
                        <ul>
                            <li>Social Media</li>
                            <li>Digital Marketing</li>
                            <li>Customer Service</li>
                            <li>For Developers</li>
                        </ul>
                    </div>
                    <div><h3>Products</h3>
                        <ul>
                            <li>Link Management</li>
                            <li>Integration & API</li>
                            <li>Link-in-bio</li>
                        </ul></div>
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li>About Scissor</li>
                            <li>Careers</li>
                            <li>Partners</li>
                            <li>Press</li>
                            <li>Contact</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <ul>
                            <li>Blog</li>
                            <li>Resource Library</li>
                            <li>Developers</li>
                            <li>App Connectors</li>
                            <li>Support</li>
                            <li>Trust Center</li>
                            <li>Browser Extension</li>
                            <li>Mobile App</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Features</h3>
                        <ul>
                            <li>Branded Links</li>
                            <li>Mobile Links</li>
                            <li>Campaign</li>
                            <li>Management & Analytics</li>
                            <li>QR Code Generation</li>

                        </ul>
                    </div>
                    <div>
                        <h3>Legal</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Terms of Service</li>
                            <li>Acceptable Use Policy</li>
                            <li>Code of Conduct</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div>Terms of Service | Security | Scissor 2023</div>

        </div>
    );
}

export default Footer;