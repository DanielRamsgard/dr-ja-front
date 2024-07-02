"use client";

import React from "react";
import {
    APIProvider,
    Map,
  } from "@vis.gl/react-google-maps";

const UserMap = (props) => {

    return (
        <div className="map-container">
            <APIProvider apiKey={"AIzaSyALOG1ASXCWuo5aAuPvCv4BFUaUXEasTpc"}>
                <div className="map-2">
                    <Map
                        defaultZoom={ props.zoom }
                        defaultCenter={ props.position }>
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