import React, { useState } from "react";
import useWindowWidth from "./useWindowWidth";
import NavPage from "./navPage";

const Nav = () => {
    const width = useWindowWidth(1000);
    const [nav, setNav] = useState(false);
    const [chevron, setChevron] = useState(false);
    const [chevronTwo, setChevronTwo] = useState(false);

    const updateNav = (nav) => {
        setNav(nav);
    }


    return (
        <>
            { nav ? <NavPage updateNav={updateNav}/> : <></> }
            <div className="nav-container">
                <div className="nav-container-2">
                    <div className="dr">
                        Dr. Aspenleiter
                    </div>
                    { width ?
                        <div className="burger" onClick={() => {
                            setNav(true);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16">
                                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </div>
                    :
                        <div className="pages-container">
                            <div className="nav-text" onMouseEnter={() => {
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
                                    <div className="drop-text">Adolescent Young Adult Trauma</div>
                                </> : <></>}
                                </div>
                            </div>
                            <div className="nav-text" onMouseEnter={() => {
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
                                    <div className="drop-text">Patient Intake Forms</div> 
                                    <div className="drop-text">Schedule Consultation</div>
                                    <div className="drop-text">Contact Dr. Aspenleiter</div>
                                </> : <></>}
                                </div>
                            </div>
                            <div className="nav-text">
                                Insurance
                            </div>
                            
                            <div className="nav-text">
                                Locations
                            </div>
                            <div className="nav-text">
                                About
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Nav;