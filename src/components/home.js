import React from "react";

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="landing-container">
                    <img alt="Landing" src="/static/media/landing.jpg" className="landing"></img>
                </div>
                <div className="info">
                    <div className="info-2">
                        <div className="landing-title">
                            Mental health, <br /> built around you.
                        </div>
                        <div className="landing-subtitle">
                            Support your emotional well-being through therapy, groups, and workshops, led by an expert provider who's focused on your needs.
                        </div>
                        <div className="landing-button">
                            Get Started
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;