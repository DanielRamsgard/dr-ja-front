import React, { useEffect } from "react";
import Home from "./home";
import Nav from "./nav";
import BottomHeader from "./bottomHeader";
import { useLocation } from "react-router-dom";

const Land = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        }, [pathname]);

    return (
        <>
            <Nav updateIndex={props.updateIndex}/>
            <Home />
            <BottomHeader />
        </>
    );
}

export default Land;