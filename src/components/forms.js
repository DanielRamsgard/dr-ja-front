import React from "react";
import BottomHeader from "./bottomHeader";
import Nav from "./nav";
import Form from "./form";

const Forms = (props) => {
    return (
        <>
            <Nav updateIndex={props.updateIndex}/>
            <Form />
            <BottomHeader />
        </>
    );
}

export default Forms;