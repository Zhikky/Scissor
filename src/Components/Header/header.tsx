import Navbar from "../navbar/navbar";
import "./header.scss"

// importing component dependencies
import dash from "../images/shortening-dash.png"

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
            </div>
        </section>
    );
}

export default Header;