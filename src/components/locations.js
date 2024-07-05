import React from "react";
import UserMap from "./map";

const Locations = () => {
    return (
        <>
            <div className="specialties">
                <div className="specialties-container">
                    <div className="landing-title title">
                        Her Locations
                    </div>
                    <div className="spacer-3"></div>
                    <div className="expertise">
                        <UserMap position={{ lat: 42.9470, lng: -76.4291 }} zoom={14} address={"1551 E Genesee St, Skaneateles, NY 13152"}/>
                        <UserMap position={{ lat: 43.0481, lng: -76.1474 }} zoom={13} address={"750 E Adams St, Syracuse, NY 13210"}/>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Locations