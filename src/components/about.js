import React from "react";
import Nav from "./nav";
import BottomHeader from "./bottomHeader";
import Info from "./info";

const About = (props) => {
    return (
        <>
            <Nav updateIndex={props.updateIndex}/>
            <div className="room"></div>
            <Info />
            <BottomHeader />
        </>
    );
}

export default About