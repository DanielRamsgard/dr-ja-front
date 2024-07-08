import React from "react";
import Split from "./split";
import Locations from "./locations";
import Info from "./info";
import "react-multi-carousel/lib/styles.css";
import CustomCarousel from "./customCarousel";

const Home = () => {

    return (
        <>
            <Split />
            <div className="spacer-2">
                <div className="header-text">
                Dr. Aspenleiter believes in providing care that is individualized to each person’s unique needs, using empirically validated treatments to optimize results. She utilizes a compassionate, yet goal oriented approach to treatment. Dr. Aspenleiter’s philosophy is that effective therapy should help empower the individual to gain insight and learn to help themselves, ultimately creating change. </div>
            </div> 
            <div className="spacer-2"></div>
            <CustomCarousel />
            <div className="spacer-2"></div>
            <Locations />
            <div className="spacer-2"></div>
            <Info />
            <div className="spacer-2"></div>
        </>
    );
}

export default Home;