import React from "react";
import useWindowWidth from "./useWindowWidth";

const Info = () => {
    const widthFour = useWindowWidth(580);
    const widthSix = useWindowWidth(580);


    return (
        <>
            <div className="specialties">
                <div className="specialties-container">
                    <div className="landing-title title title-2">
                        Julie A. Aspenleiter, PysD
                    </div>
                    <div className="spacer-3"></div>
                    <div className="expertise-3">
                        <div className={widthSix ? "header-text-2-2" : "header-text-2"}>
                            Julie Aspenleiter, PsyD is a NY State Licensed Psychologist specializing in psychodynamic psychotherapy. Dr. Aspenleiter received a BS from Ithaca college, her Masters and Doctorate in Clinical Psychology (PsyD) from University of Hartford.  Dr. Aspenleiter completed a one-year internship at Upstate Medical University. Upon completion of her training, Dr. Aspenleiter was appointed Clinical Assistant Professor of Psychiatry and the Coordinator of the Child and Adolescent Psychiatry Clinic at Upstate Medical University. Subsequently, Dr. Aspenleiter served as a liaison for The NY State Project Teach Program, providing consultation to pediatricians regarding the mental health needs of their patients. In addition to her private practice, Dr. Aspenleiter currently works as a therapist for NY State’s OnTrackNY Program, providing specialty care for young adults struggling with first episode psychosis.  </div>
                    
                        {widthFour ? widthSix ? <div className="grey-2"></div> : <div className="grey-bar-new"></div> : <div className="grey-bar"></div>}
                        <div className="container">
                            <div>
                                <h2>Contact</h2>
                                <div className="pad"> <div className="new-color"> Fill Out Intake Forms </div>
                                    New Patients </div>
                                <div> <div className="new-color"> GIVE HER A CALL </div>
                                (315) 857-7864</div>
                            </div>
                            <div>
                                <h2>Location</h2>
                                <div className="pad"><div className="new-color"> 1551 E Genesee St #211 </div>
                                Skaneateles, NY 13152
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-contain">
                    <img alt="Info Background" src="/static/media/windy.jpg" className="img"></img>
                </div>
            </div>
        </>
    );
}

export default Info;