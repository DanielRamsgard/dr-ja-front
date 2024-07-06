import React, { useEffect } from "react";
import BottomHeader from "./bottomHeader";
import Nav from "./nav";
import Form from "./form";
import { useLocation } from "react-router-dom";

const Forms = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        }, [pathname]);

    return (
        <>
            <Nav updateIndex={props.updateIndex}/>
            <Form />
            <BottomHeader />
        </>
    );
}

export default Forms;