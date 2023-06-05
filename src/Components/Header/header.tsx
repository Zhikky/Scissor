import Navbar from "../navbar/navbar";
import "./header.scss"

// importing component dependencies
import plate from "../images/plate.png"

function Header() {
    return (
        <section className="header">
            <Navbar />


            <div className="header__content">
                <h1> Optimize Your Online Experience with Our Advanced <span>URL Shortening</span> Solution</h1>
                <p>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>
                <div className="header__buttons">
                    <a>Sign Up</a>
                    <a>Learn more</a>
                </div>

                <div className="header__card">
                    <div>
                        <p>Seamlessly transform your long URLs into <strong>concise</strong> and <strong>shareable links</strong> with just few clicks.</p>
                    </div>


                </div>
                
                <div>
                    <img src={plate} alt="#" />
                </div>

                <div>
                    
                </div>
            </div>
        </section>
    );
}

export default Header;