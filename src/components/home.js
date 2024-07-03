import React from "react";
import useWindowWidth from "./useWindowWidth";
import Card from "./card";
import UserMap from "./map";
import BottomHeader from "./bottomHeader";

const Home = () => {
    const width = useWindowWidth(945);
    const widthTwo = useWindowWidth(700);
    const widthThree = useWindowWidth(485);
    const widthFour = useWindowWidth(970);
    const widthSix = useWindowWidth(590);
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
            { width ?
            widthTwo ?
            <>
                <div className="landing-container-new">
                    <img alt="Landing" src="/static/media/iphoneSmall.jpg" className="landing"></img>
                </div>
                <div className="info-new">
                        <div className="landing-title-new-2">
                            Mental health, built around you.
                        </div>
                        <div className="landing-button">
                            Get Started
                        </div>
                </div>

            </>
            :
            <>
                <div className="landing-container-new">
                    <img alt="Landing" src="/static/media/iphone.jpg" className="landing"></img>
                </div>
                <div className="info-new">
                        <div className="title-container">
                            <div className="landing-title-new">
                                Mental health, <br /> built around you.
                            </div>
                            <div className="landing-subtitle-new">
                                Support your emotional well-being through therapy, groups, and workshops, led by an expert provider who's focused on your needs.
                            </div>
                        </div>
                        <div className="landing-button">
                            Get Started
                        </div>
                </div>
            </> 
            :
            <div className="home-container">
                <div className="landing-container">
                    <img alt="Landing" src="/static/media/landing.jpg" className="landing"></img>
                </div>
                <div className="info">
                    <div className="info-2">
                        <div className="landing-title">
                            Mental health, <br /> built around you.
                        </div>
                        <div className="landing-subtitle">
                            Support your emotional well-being through therapy, groups, and workshops, led by an expert provider who's focused on your needs.
                        </div>
                        <div className="landing-button">
                            Get Started
                        </div>
                        <div className="spacer">
                        </div>
                    </div>
                </div>
            </div>}
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
            <div className="specialties">
                <div className="specialties-container">
                    <div className="landing-title title">
                        Her Locations
                    </div>
                    <div className="spacer-3"></div>
                    <div className="expertise">
                        <UserMap position={{ lat: 42.9470, lng: -76.4291 }} zoom={14} address={"1551 E Genesee St #110, Skaneateles, NY 13152"}/>
                        <UserMap position={{ lat: 43.0481, lng: -76.1474 }} zoom={13} address={"750 E Adams St, Syracuse, NY 13210"}/>
                        
                    </div>
                </div>
            </div>
            <div className="spacer-2"></div>
            <div className="specialties">
                <div className="specialties-container">
                    <div className="landing-title title">
                        Dr. Julie A. Aspenlieter, PysD
                    </div>
                    <div className="spacer-3"></div>
                    <div className="expertise-3">
                        <div className="about-img-container">
                            <img alt="Dr. Julie Ann Aspenlieter, PysD" src="/static/media/dr.jpeg" className="about-img"></img>
                        </div>
                        {widthFour ? widthSix ? <div className="grey-2"></div> : <div className="grey-bar-new"></div> : <div className="grey-bar"></div>}
                        <div className="header-text-2">
                            Dr. Aspenleiter is a distinguished clinical psychologist known for her empathetic approach and expertise in human behavior. She integrates advanced therapeutic techniques with compassionate care, empowering patients to navigate challenges with resilience. Her contributions to the field reflect a commitment to holistic healing and personalized treatment.
                        </div>
                        
                        {widthFour ? widthSix ? <div className="grey-2"></div> : <div className="grey-bar-new"></div> : <div className="grey-bar"></div>}
                        <div className="container">
                            <div>
                                <h2>Contact</h2>
                                <p> <div className="new-color"> Fill Out Intake Forms </div>
                                    New Patients </p>
                                <p> <div className="new-color"> GIVE HER A CALL </div>
                                (315) 857-7864</p>
                            </div>
                            <div>
                                <h2>Locations</h2>
                                <p><div className="new-color"> 3460 County Line Rd </div>
                                Skaneateles, NY 13152
                                </p>
                                <p><div className="new-color"> 314 E. Seneca Street </div>
                                Manlius, New York 13104</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer-2"></div>
            <BottomHeader />
        </>
    );
}

export default Home;