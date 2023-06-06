import Analytics from "./Analytics/analytics";
import Header from "./Header/header";

function Home() {
    return (
        <div className="home__container">

            {/* Navbar component container */}
            <Header />
            {/* Navbar component container ends */}

            {/* Analytics component container */}
            <Analytics />
            {/* Analytics component container ends */}
        </div>
    );
}

export default Home;