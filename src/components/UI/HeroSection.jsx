import { FaArrowCircleRight } from "react-icons/fa";


export const HeroSection = () => {
    return (
        <main className="main">
            {/* <Headers /> */}
            <div className="hero-section">
                <div className="container grid grid-two-cols">

                    <div className="hero-content">
                        <div className="hero-image">
                            <img src="/images/earth.webp" alt="world beauty" className="banner-image" />

                        </div>
                    </div>

                    <div className="heading-xl">
                        <h1>Explore the World, One <span> Country</span> at a Time.
                        </h1>
                        <p className="paragraph"> Discover the history, culture, and beauty of every nation. Sort, search and filter through countries to find the details you need.</p>
                        <button className="btn btn-darken btn-inline bg-white-box">
                            Start Exploring <FaArrowCircleRight />
                        </button>
                    </div>

                </div>
                {/* <About /> */}
            </div>
        </main>
    );
};

