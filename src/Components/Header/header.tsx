import React from "react";
import Navbar from "../navbar/navbar";
import "./header.scss";


// importing component dependencies
import plate from "../images/plate.png";
import link_eclipse from "../images/link-eclipse.png";
import link_pen from "../images/link-pen.png";
import link_code from "../images/link-code.png";
import link_analytics from "../images/link-analytics.png";
import bullet_circle from "../images/bullet-circle.png";
import bullet_circle_white from "../images/bullet-circle-white.png";
import link from "../images/link.png"

function Header() {
    return (
        <section className="header">
            <Navbar />


            <div className="header__content">
                <h1> Optimize Your Online Experience with Our Advanced <span>URL Shortening</span> Solution</h1>
                <p>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>
                <div className="header__buttons">
                    <a href="#">Sign Up</a>
                    <a href="#">Learn more</a>
                </div>

                <div className="header__card">
                    <div>
                        <img src={link} alt="link" width="80%"/>
                        <p>Seamlessly transform your long URLs into <strong>concise</strong> and <strong>shareable links</strong> with just few clicks.</p>
                    </div>


                </div>

                <div>
                    <img src={plate} alt="#" />
                </div>

                <div className="possibilities">
                    <p>One Stop. <br />Four <span>Possibilities</span>.</p>
                    <div>
                        <div>
                            <h2>3M</h2>
                            <p>Active users</p>
                        </div>
                        <div>
                            <h2>60M</h2>
                            <p>Links and QR codes generated</p>
                        </div>
                        <div>
                            <h2>1B</h2>
                            <p>Clicked and scanned connections</p>
                        </div>
                        <div>
                            <h2>300K</h2>
                            <p>App integrations</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features" id="features">
                <div>
                    <div>
                        <h2>Why choose <span>Scissors</span></h2>
                        <p>Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p>
                    </div>
                    <div>
                        <div>
                            <img src={link_eclipse} alt="link" width="56px" />
                            <h2>URL Shortening</h2>
                            <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                        </div>
                        <div>
                            <img src={link_pen} alt="link" width="56px" />
                            <h2>Custom URLs</h2>
                            <p>With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
                        </div>
                        <div>
                            <img src={link_code} alt="link" width="56px" />
                            <h2>QR Codes</h2>
                            <p>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                        </div>
                        <div>
                            <img src={link_analytics} alt="link" width="56px" />
                            <h2>Data Analytics</h2>
                            <p>Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricing">
                <div>
                    <h2> A <span>perfect price</span> for your needs.</h2>
                    <p>From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</p>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>Basic</h3>
                            <h2>Free</h2>
                            <h3>Free plan for all users</h3>
                            <ul>
                                <li> <img src={bullet_circle} alt="bullet point" width="16px" />Limited URL Shortening</li>
                                <li><img src={bullet_circle} alt="bullet point" width="16px" />Basic Link Analytics</li>
                                <li><img src={bullet_circle} alt="bullet point" width="16px" />Qr code generation</li>
                                <li><img src={bullet_circle} alt="bullet point" width="16px" />Standard Support</li>
                                <li><img src={bullet_circle} alt="bullet point" width="16px" />Ad-supported</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3>Professional</h3>
                            <h2>$15/month</h2>
                            <h3>Ideal for business creators</h3>
                            <ul>
                                <li><img src={bullet_circle_white} alt="bullet point" width="16px" />Enhanced Link Analytics</li>
                                <li><img src={bullet_circle_white} alt="bullet point" width="16px" />Custom Branded Domains</li>
                                <li><img src={bullet_circle_white} alt="bullet point" width="16px" />Advanced Link Customization</li>
                                <li><img src={bullet_circle_white} alt="bullet point" width="16px" />Priority Support</li>
                                <li><img src={bullet_circle_white} alt="bullet point" width="16px" />Ad-free Experience</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Teams</h3>
                            <h2>$25/month</h2>
                            <h3>Share with up to 10 users</h3>
                            <ul>
                                <li><img src={bullet_circle} alt="bullet point" width="16px" />Team Collaboration</li>
                                <li><img src={bullet_circle} alt="bullet point" width="16px" />User Roles and Permissions</li>
                                <li><img src={bullet_circle} alt="bullet point" width="16px" />Enhanced Security</li>
                                <li><img src={bullet_circle} alt="bullet point" width="16px" />API Access</li>
                                <li><img src={bullet_circle} alt="bullet point" width="16px" />Dedicated Account Manager</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pricing__buttons">
                    <a href="#">Get Custom Pricing</a>
                    <a href="#">Select Pricing</a>

                </div>
            </div>
        </section>
    );
}

export default Header;