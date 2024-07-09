import React from "react";
import { useNavigate } from "react-router-dom";

const BottomHeader = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="bottom-header">
                <div className="bottom-header-title">
                    Dr. Julie Aspenleiter
                </div>
                <div className="new-patients" onClick={() => {
                    navigate("/new-patient-forms")
                }}>
                    NEW PATIENTS
                </div>
                <div className="bottom-header-text plus">
                    (315)-857-7864
                </div>
                <div className="bottom-header-text">
                1551 E Genesee St #211, Skaneateles, NY 13152 | &copy; All Rights Reserved. Dr. Julie A. Aspenleiter. 
                </div>
                <span className="bottom-header-text link" onClick={() => {
                        window.open("https://www.linkedin.com/in/daniel-ramsgard-28b196284/", '_blank', 'noopener,noreferrer');
                    }}> Website by Daniel Ramsgard - RFS Web Design.</span>
            </div>
        </>
    );
}

export default BottomHeader;