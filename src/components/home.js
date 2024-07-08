import React from "react";
import useWindowWidth from "./useWindowWidth";
import Card from "./card";
import Split from "./split";
import Locations from "./locations";
import Info from "./info";

const Home = () => {
    const widthThree = useWindowWidth(485);
    const path = "/static/media/";
    const specialties = [
        {
            img : path + "natureOne.jpg",
            title : "Schizophrenia",
        },
        {
            img : path + "natureTwo.jpg",
            title : "Trauma",
        },
        {
            img : path + "natureThree.jpg",
            title : "Anxiety",
        },
        {
            img : path + "natureFour.jpg",
            title : "OCD",
        },
    ]

    return (
        <>
            <Split />
            <div className="spacer-2">
                <div className="header-text">
                Dr. Aspenleiter believes in providing care that is individualized to each person’s unique needs, using empirically validated treatments to optimize results. She utilizes a compassionate, yet goal oriented approach to treatment. Dr. Aspenleiter’s philosophy is that effective therapy should help empower the individual to gain insight and learn to help themselves, ultimately creating change. </div>
            </div> 
            <div className="spacer-2"></div>
            <div className="specialties">
                <div className="specialties-container">
                    <div className="landing-title title">
                        Areas of Expertise
                    </div>
                    <div className="spacer-3">

                    </div>
                    <div className={widthThree ? "expertise-2" : "expertise"}>
                        {
                            specialties.map((item) => {
                                return <Card key={item.title} img={item.img} title={item.title} widthThree={widthThree}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="spacer-2"></div>
            <Locations />
            <div className="spacer-2"></div>
            <Info />
            <div className="spacer-2"></div>
        </>
    );
}

export default Home;