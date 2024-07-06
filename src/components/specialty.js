import React from "react";
import Nav from "./nav";
import BottomHeader from "./bottomHeader";
import Special from "./special";

const Specialty = () => {
    return (
        <>
            <Nav />
            <div className="room-2"></div>
            <Special alt={"Psychodynamic Psychotherapy"} src={"/static/media/dynamic.jpg"}/>
            <BottomHeader />
        </>
    );
}

export default Specialty;