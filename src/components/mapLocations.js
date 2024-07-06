import React, { useEffect } from "react";
import Locations from "./locations";
import Nav from "./nav";
import BottomHeader from "./bottomHeader";
import { useLocation } from "react-router-dom";

const MapLocations = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        }, [pathname]);

    return (
        <>
            <Nav updateIndex={props.updateIndex}/>
            <div className="room"></div>
            <Locations />
            <BottomHeader />
        </>
    );
}

export default MapLocations