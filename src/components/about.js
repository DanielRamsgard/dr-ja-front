import React from "react";
import Nav from "./nav";
import BottomHeader from "./bottomHeader";
import Info from "./info";

const About = () => {
    return (
        <>
            <Nav />
            <div className="room"></div>
            <Info />
            <BottomHeader />
        </>
    );
}

export default About