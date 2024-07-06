import React from "react";
import Locations from "./locations";
import Nav from "./nav";
import BottomHeader from "./bottomHeader";

const MapLocations = (props) => {
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