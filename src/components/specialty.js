import React, { useEffect } from "react";
import Nav from "./nav";
import BottomHeader from "./bottomHeader";
import Special from "./special";
import { useLocation } from "react-router-dom";

const Specialty = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        }, [pathname, props.index]);

    const info = [
        {
            alt : "Psychodynamic Psychotherapy",
            src : "/static/media/dynamic.jpg",
            info : "Psychodynamic Psychotherapy is a form of talk therapy that focuses on the psychological underpinnings of emotional suffering. The primary goal of psychodynamic therapy is to help individuals gain a deeper understanding of their emotions, thoughts and early-life experiences, which may influence their current mental state and behavior. The hallmarks of this approach are guided self reflection, self examination and the use of the relationship between the therapist and patient as a window into problematic relationship patterns in the patient's life. It aims to resolve the root causes of distress rather than merely alleviating symptoms, thereby helping people to realize their potential and lead overall healthier lives.",
        },
        {
            alt : "Psychological Assessment",
            src : "/static/media/assess.webp",
            info : "Psychological assessment is a comprehensive process that involves the systematic evaluation of an individual's psychological, emotional, and behavioral functioning through a variety of methods and tools. These assessments are designed to provide a detailed understanding of a person's strengths, weaknesses, personality traits, and cognitive abilities. The goal of psychological assessment is to gather in-depth information that can inform diagnosis, treatment planning, and the understanding of complex psychological issues. The results of psychological assessment can provide critical insights that guide therapeutic approaches and can inform the use of medications, other medical treatments and therapeutic interventions to improve an individual's overall well-being and functioning.",
        },
    ]

    return (
        <>
            <Nav updateIndex={props.updateIndex}/>
            <div className="room-2"></div>
            <Special alt={info[props.index].alt} src={info[props.index].src} info={info[props.index].info}/>
            <BottomHeader />
        </>
    );
}

export default Specialty;