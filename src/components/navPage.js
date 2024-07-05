import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavPage = (props) => {
    const [chevron, setChevron] = useState(false);
    const [chevronTwo, setChevronTwo] = useState(false);
    const navigate = useNavigate("/");

    return (
        <div className="container-container">
            <div className="x-container">
                <div className="x-svg" onClick={() => {props.updateNav(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
            </div>
            <div className="navpage-container">
                <div className="navpage-text" onClick={() => {
                    navigate("/");
                }}> Home </div>
                <div className="navpage-text" 
                    onMouseEnter={() => 
                        {
                            setChevron(true);
                        }}
                        
                        onMouseLeave={() => {
                            setChevron(false);
                        }}> 
                    Specialties 
                    <div className={ chevron ? "chevron-new" : "chevron"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                    <div className={ chevron ? "dropdown" : "dropdown-no"}>
                    { chevron ? 
                    <>
                        <div className="drop-text">Psychodynamic Psychotherapy</div> 
                        <div className="drop-text">Interpersonal Therapy</div>
                    </> : <></>}
                    </div>
                </div>
                <div className="navpage-text" 
                    onMouseEnter={() => 
                        {
                            setChevronTwo(true);
                        }}
                        
                        onMouseLeave={() => {
                            setChevronTwo(false);
                        }}> 
                    New Patients 
                    
                    <div className={ chevronTwo ? "chevron-new" : "chevron"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                    <div className={ chevronTwo ? "dropdown-special" : "dropdown-no-special"}>
                    { chevronTwo ? 
                    <>
                        <div className="drop-text" onClick={() => {
                                        navigate("/new-patient-forms");
                                    }}>Patient Intake Forms</div> 
                        <div className="drop-text">Schedule Consultation</div>
                        <div className="drop-text">Contact Dr. Aspenleiter</div>
                    </> : <></>}
                    </div>
                </div>
                <div className="navpage-text"> Locations </div>
                <div className="navpage-text"> About </div>
            </div>
        </div>
    );
}

export default NavPage;