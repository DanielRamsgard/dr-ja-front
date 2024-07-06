import React from "react";
import Home from "./home";
import Nav from "./nav";
import BottomHeader from "./bottomHeader";

const Land = (props) => {

    return (
        <>
            <Nav updateIndex={props.updateIndex}/>
            <Home />
            <BottomHeader />
        </>
    );
}

export default Land;