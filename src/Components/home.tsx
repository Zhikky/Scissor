import Analytics from "./Analytics/analytics";
import Faq from "./FAQ/faq";
import Header from "./Header/header";
import Footer from "./Footer/footer";

function Home() {
    return (
        <div className="home__container">

            {/* Navbar component container */}
            <Header />
            {/* Navbar component container ends */}

            {/* Analytics component container */}
            <Analytics />
            {/* Analytics component container ends */}

            {/* FAQs Component Container */}
            <Faq />
            {/* FAQs Component Container ends */}

            {/* Footer component container */}
            <Footer />
            {/* Footer component container ends */}
        </div>
    );
}

export default Home;