import React from "react";
import Consent from "./consent";

const Form = () => {

    return (
        <>
            <div className="top-form">
                <div className="form-julie">
                    Dr. Julie A. Aspenleiter
                </div>
                <div className="intake">
                    New Patient Intake Forms
                </div>
                <div className="submit">
                    Submit Now
                </div>
            </div>
            <div className="pdf-container">
                <div className="space"></div>
                <div className="pdf-container-2">
                    <Consent />
                </div>
                <div className="space-2"></div>
            </div>
        </>
    );
}

export default Form;