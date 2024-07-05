import React from "react";
import Locations from "./locations";
import Nav from "./nav";
import BottomHeader from "./bottomHeader";

const MapLocations = () => {
    return (
        <>
            <Nav />
            <div className="room"></div>
            <Locations />
            <BottomHeader />
        </>
    );
}

export default MapLocations