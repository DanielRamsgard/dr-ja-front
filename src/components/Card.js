import React from "react";

const Card = (props) => {
    return (
        <>
            <div className={props.widthThree ? "card-container-2" : "card-container"}>
                <div className={ props.widthThree ? "card-img-container-2" : "card-img-container"}>
                    <img alt="Card" src={props.img} className="card-img"></img>
                </div>
                <div className={props.widthThree ? "card-button-2" : "card-button"}>
                    {props.title}
                </div>
            </div>
        </>
    );
}

export default Card;