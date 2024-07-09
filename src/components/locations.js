import React from "react";
import UserMap from "./map";

const Locations = () => {
    const positions = [
        { lat: 42.945830, lng: -76.397610 }  // Same latitude and longitude for the additional pin
    ];

    return (
        <>
            <div className="specialties">
                <div className="specialties-container">
                    <div className="landing-title title">
                        Her Location
                    </div>
                    <div className="spacer-3"></div>
                    <div className="expertise-4">
                        <UserMap positions={positions} zoom={14} address={"1551 E Genesee St #211, Skaneateles, NY 13152"}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Locations;
