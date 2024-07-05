import React from "react";

const BottomHeader = () => {
    return (
        <>
            <div className="bottom-header">
                <div className="bottom-header-title">
                    Dr. Aspenleiter, PysD
                </div>
                <div className="new-patients">
                    NEW PATIENTS
                </div>
                <div className="bottom-header-text">
                    (315)-857-8656
                </div>
                <div className="bottom-header-text">
                1551 E Genesee St #110, Skaneateles, NY 13152 | 750 E Adams St, Syracuse, NY 13210
                </div>
                <div className="bottom-header-text">
                &copy; All Rights Reserved. Dr. Julie A. Aspenleiter. Website by Daniel Ramsgard, <div className="link" onClick={() => {
                                    window.open("https://www.linkedin.com/in/daniel-ramsgard-28b196284/", '_blank', 'noopener,noreferrer');
                                }}> {" RFS Web Design."} </div>
                </div>
            </div>
        </>
    );
}

export default BottomHeader;