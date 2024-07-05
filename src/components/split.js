import React from "react";
import useWindowWidth from "./useWindowWidth";

const Split = () => {
    const width = useWindowWidth(945);
    const widthTwo = useWindowWidth(700);

    return (
        <>
            { width ?
            widthTwo ?
            <>
                <div className="landing-container-new">
                    <img alt="Landing" src="/static/media/iphoneSmall.jpg" className="landing"></img>
                </div>
                <div className="info-new">
                        <div className="landing-title-new-2">
                            Mental health, built around you.
                        </div>
                        <div className="landing-button">
                            Get Started
                        </div>
                </div>

            </>
            :
            <>
                <div className="landing-container-new">
                    <img alt="Landing" src="/static/media/iphone.jpg" className="landing"></img>
                </div>
                <div className="info-new">
                        <div className="title-container">
                            <div className="landing-title-new">
                                Mental health, <br /> built around you.
                            </div>
                            <div className="landing-subtitle-new">
                                Support your emotional well-being through therapy, groups, and workshops, led by an expert provider who's focused on your needs.
                            </div>
                        </div>
                        <div className="landing-button">
                            Get Started
                        </div>
                </div>
            </> 
            :
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
                        <div className="spacer">
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Split;