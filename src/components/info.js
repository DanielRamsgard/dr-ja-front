import React from "react";
import useWindowWidth from "./useWindowWidth";

const Info = () => {
    const widthFour = useWindowWidth(970);
    const widthSix = useWindowWidth(580);


    return (
        <>
            <div className="specialties">
                <div className="specialties-container">
                    <div className="landing-title title">
                        Julie A. Aspenleiter, PysD
                    </div>
                    <div className="spacer-3"></div>
                    <div className="expertise-3">
                        <div className="about-img-container">
                            <img alt="Dr. Julie Ann Aspenlieter, PysD" src="/static/media/dr.jpeg" className="about-img"></img>
                        </div>
                        {widthFour ? widthSix ? <div className="grey-2"></div> : <div className="grey-bar-new"></div> : <div className="grey-bar"></div>}
                        <div className="header-text-2">
                            Dr. Aspenleiter is a distinguished clinical psychologist known for her empathetic approach and expertise in human behavior. She integrates advanced therapeutic techniques with compassionate care, empowering patients to navigate challenges with resilience. Her contributions to the field reflect a commitment to holistic healing and personalized treatment.
                        </div>
                        
                        {widthFour ? widthSix ? <div className="grey-2"></div> : <div className="grey-bar-new"></div> : <div className="grey-bar"></div>}
                        <div className="container">
                            <div>
                                <h2>Contact</h2>
                                <p> <div className="new-color"> Fill Out Intake Forms </div>
                                    New Patients </p>
                                <p> <div className="new-color"> GIVE HER A CALL </div>
                                (315) 857-7864</p>
                            </div>
                            <div>
                                <h2>Locations</h2>
                                <p><div className="new-color"> 3460 County Line Rd </div>
                                Skaneateles, NY 13152
                                </p>
                                <p><div className="new-color"> 314 E. Seneca Street </div>
                                Manlius, New York 13104</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;