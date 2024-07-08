import React from "react";
import useWindowWidth from "./useWindowWidth";

const Special = (props) => {
    const width = useWindowWidth(700);

    return (
        <>
            <div className="special-container">
                <div className="special-image-container">
                    <img alt={props.alt} src={props.src} className="special-image"></img>
                </div>
                <div className="special-info">
                    <div className={ width ? "special-title-2" : "special-title"}>
                        {props.alt}
                    </div>
                    <div className="special-text">
                        {props.info}    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Special;