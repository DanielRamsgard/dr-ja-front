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
            img : path + "imgOne.jpg",
            title : "Schizophrenia",
        },
        {
            img : path + "imgTwo.jpg",
            title : "Trauma",
        },
        {
            img : path + "imgThree.jpg",
            title : "Anxiety",
        },
        {
            img : path + "imgFour.jpg",
            title : "OCD",
        },
    ]

    return (
        <>
            <Split />
            <div className="spacer-2">
                <div className="header-text">
                    Dr. Aspenleiter established her practice to meet the increasing need for exceptional mental health services in our area. Providing accurate and prompt evaluations and treatments can significantly enhance the quality of life for many individuals. Dr. Aspenleiter handles every aspect of patient care, ensuring each client receives personalized and effective treatment.
                </div>
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