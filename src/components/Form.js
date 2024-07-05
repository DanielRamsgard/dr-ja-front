import React from "react";
import Consent from "./consent";
import useWindowWidth from "./useWindowWidth";

const Form = () => {
    const width = useWindowWidth(1000);

    return (
        <>
            <div className="top-form">
                <div className={width ? "form-julie-2" : "form-julie"}>
                    Dr. Julie A. Aspenleiter
                </div>
                <div className={width ? "intake-2" : "intake"}>
                    New Patient Intake Forms
                </div>
                <div className="submit">
                    Submit Now
                </div>
            </div>
            <div className="pdf-container">
                <div className="space"></div>
                <div className={width ? "pdf-container-2-2" : "pdf-container-2"}>
                    <Consent />
                </div>
                <div className="space-2"></div>
            </div>
        </>
    );
}

export default Form;