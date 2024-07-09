import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Card from "./card";
import useWindowWidth from "./useWindowWidth";

const CustomCarousel = () => {
    const width = useWindowWidth(800);
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
          items: 5
        },
        desktopSmall: {
            breakpoint: { max: 1400, min: 1200 },
            items: 5
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
            img : path + "imgOne.jpg",
            title : "Depressive Disorders",
        },
        {
            img : path + "natureTwo.jpg",
            title : "Generalized Anxiety Disorder",
        },
        {
            img : path + "womanTwo.jpg",
            title : "Schizophrenia Spectrum Disorders",
        },
        {
            img : path + "rock.jpg",
            title : "Bi-Polar Disorders",
        },
        {
            img : path + "imgTwo.jpg",
            title : "PTSD and Trauma Recovery",
        },
        {
            img : path + "relax.jpg",
            title : "Obsessive Compulsive Disorder",
        },
        {
            img : path + "woman.jpg",
            title : "Social Anxiety",
        },
        {
            img : path + "natureFour.jpg",
            title : "Adjustment Difficulties",
        },
        {
            img : path + "manOne.jpg",
            title : "Emotion Dysregulation",
        },
        {
            img : path + "imgThree.jpg",
            title : "Grief and Loss",
        },
        {
            img : path + "tranquility.jpeg",
            title : "Addiction",
        },
        {
            img : path + "womanThree.jpg",
            title : "Women’s Mental Health",
        },
        {
            img : path + "imgFour.jpg",
            title : "Life Transitions / Family Changes",
        },
        {
            img : path + "natureOne.jpg",
            title : "Chronic Illness",
        },
        {
            img : path + "serenity.jpeg",
            title : "Disordered eating",
        },
        
        
    ]

      return (
        <>
            
            <div>
            <div className={width ? "landing-title title color-2" : "landing-title title color"}>
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