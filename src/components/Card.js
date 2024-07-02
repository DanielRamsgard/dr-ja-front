import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="card-container">
                <div className="card-img-container">
                    <img alt="Card" src={props.img} className="card-img"></img>
                </div>
                <div className="card-button">
                    {props.title}
                </div>
            </div>
        </>
    );
}

export default Card;