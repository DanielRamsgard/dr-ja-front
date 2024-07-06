import React from "react";

const Special = (props) => {
    return (
        <>
            <div className="special-container">
                <div className="special-image-container">
                    <img alt={props.alt} src={props.src} className="special-image"></img>
                </div>
                <div className="special-info">
                    <div className="special-title">
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