import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Card from "./card";

const CustomCarousel = () => {
    const responsive = {
        superLargerDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 2000 },
            items: 8
          },
        desktop: {
          breakpoint: { max: 2000, min: 1400 },
          items: 7
        },
        desktopSmall: {
            breakpoint: { max: 1400, min: 1200 },
            items: 6
          },
        tablet: {
          breakpoint: { max: 1200, min: 1050 },
          items: 5
        },
        tabletSmall: {
            breakpoint: { max: 1050, min: 800 },
            items: 4
          },
        tabletSmallSmall: {
            breakpoint: { max: 800, min: 600 },
            items: 3
          },
        mobile: {
          breakpoint: { max: 600, min: 370 },
          items: 2
        },
        mobileSmall: {
            breakpoint: { max: 370, min: 0 },
            items: 1
          }
      };

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
            
            <div>
            <div className="landing-title title color">
                Areas of Expertise
                <div className="white-space"></div>
            </div>
                <Carousel responsive={responsive} infinite={true} itemClass="contain">
                    {specialties.map((item) => (
                        <Card key={item.title} img={item.img} title={item.title}/>
                    ))}
                </Carousel>
            </div>
        </>
      );
}

export default CustomCarousel;