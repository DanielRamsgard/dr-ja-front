import React from "react";
import useWindowWidth from "./useWindowWidth";
import { useNavigate } from "react-router-dom";

const Split = () => {
    const navigate = useNavigate();
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
                        <div className="landing-button" onClick={() => {
                            navigate("/new-patient-forms");
                        }}>
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
                                Dr. Aspenleiter is a Clinical Psychologist who works with Children, Adolescents and Adults. She specializes in Psychodynamic Psychotherapy but integrates an eclectic approach through Family Systems Theory and aspects of Cognitive Behavioral Therapy as well.</div>
                        </div>
                        <div className="landing-button" onClick={() => {
                            navigate("/new-patient-forms");
                        }}>
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
                            Dr. Aspenleiter is a Clinical Psychologist who works with Children, Adolescents and Adults. She specializes in Psychodynamic Psychotherapy but integrates an eclectic approach through Family Systems Theory and aspects of Cognitive Behavioral Therapy as well.</div>
                        <div className="landing-button" onClick={() => {
                            navigate("/new-patient-forms");
                        }}>
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