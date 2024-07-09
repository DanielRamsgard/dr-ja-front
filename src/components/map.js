"use client";

import React from "react";
import {
    APIProvider,
    Map,
    Marker
} from "@vis.gl/react-google-maps";

const UserMap = (props) => {
    return (
        <div className="map-container">
            <APIProvider apiKey={"AIzaSyALOG1ASXCWuo5aAuPvCv4BFUaUXEasTpc"}>
                <div className="map-2">
                    <Map
                        defaultZoom={props.zoom}
                        defaultCenter={{ lat: 42.9470, lng: -76.4291 }}>
                        {props.positions.map((position, index) => (
                            <Marker key={index} position={position} />
                        ))}
                    </Map>
                </div>
            </APIProvider>

            <div className="map-2-item">
                {props.address}
            </div>
        </div>
    );
}

export default UserMap;
