import React, { useEffect } from "react";
import Nav from "./nav";
import BottomHeader from "./bottomHeader";
import Info from "./info";
import { useLocation } from "react-router-dom";

const About = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        }, [pathname]);

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