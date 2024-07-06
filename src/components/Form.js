import React, { useState } from "react";
import Consent from "./consent";
import useWindowWidth from "./useWindowWidth";
import ReleaseAuth from "./releaseAuth";
import ClientInfo from "./clientInfo";

const Form = () => {
    const width = useWindowWidth(1000);
    const widthTwo = useWindowWidth(700);
    const [chevron, setChevron] = useState(false);
    const [form, setForm] = useState("consent");
    const [submit, setSubmit] = useState({
        formOne : {
            signature : "",
            date : "",
            printName : "",
        },
        formTwo : {
            name : "",
            address : "",
            number : "",
            signature : "",
            nameBirth : "",
            date : "",
            witnessSignature : "",
        },
        formThree : {
            name : "",
            date : "",
            social : "",
            address : "",
            number : "",
            emergency : "",
            emergencyNumber : "",
            parent : "",
            childAddress : "",
            childNumber : "",
        },
    });
    
    function updateSubmit(updatedSubmit) {
        setSubmit(prevSubmit => ({
            ...prevSubmit,
            ...updatedSubmit,
        }));
    }

    const formShow = () => {
        if (form === "consent"){
            return <Consent submit={submit} updateSubmit={updateSubmit}/>;
        } else if (form === "release auth") {
            return <ReleaseAuth submit={submit} updateSubmit={updateSubmit}/>
        } else if (form === "client info") {
            return <ClientInfo submit={submit} updateSubmit={updateSubmit}/>
        }
    }

    return (
        <>
            <div className="top-form">
                <div className={widthTwo ? "form-julie-2" : "form-julie"}>
                    Dr. Julie A. Aspenleiter
                </div>
                <div className={widthTwo ? "intake-2" : "intake"}>
                    New Patient Intake Forms
                </div>
                <div className="nav-text submit" onMouseEnter={() => {
                                    setChevron(true);
                                }}
                                
                                onMouseLeave={() => {
                                    setChevron(false);
                                }}>
                    Forms 
                    <div className={ chevron ? "chevron-new" : "chevron"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                </div>
                                <div className={ chevron ? "dropdown-new" : "dropdown-no-new"}>
                                { chevron ? 
                                <>
                                    <div className="drop-text text-text" onClick={() => {
                                        setForm("consent");
                                        setChevron(false);
                                    }}>Patient Consent</div> 
                                    <div className="drop-text text-text" onClick={() => {
                                        setForm("release auth");
                                        setChevron(false);
                                    }}>Authorization Release</div>
                                    <div className="drop-text text-text" onClick={() => {
                                        setForm("client info");
                                        setChevron(false);
                                    }}>Demographic Information</div>
                                </> : <></>}
                                </div>
                </div>
                <div className="upon">
                    Upon submission of the following forms, Dr. Aspenleiter will contact you about scheduling an appointment time. Information is saved between forms.
                </div>
            </div>
            <div className="pdf-container">
                <div className="space"></div>
                <div className={width ? "pdf-container-2-2" : "pdf-container-2"}>
                    {formShow()}
                </div>
                <div className="space-2"></div>
                <div className={width ? "submit extra-margin" : "submit"}>
                    Submit Now
                </div>
            </div>
        </>
    );
}

export default Form;