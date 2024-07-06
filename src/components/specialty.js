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
            info : "Psychodynamic psychotherapy is a form of depth psychology that emphasizes the exploration of unconscious processes as they are manifested in a person's present behavior. This therapeutic approach is rooted in the theories of psychoanalysis, primarily those developed by Sigmund Freud, but it has evolved to incorporate new insights and techniques. The primary goal of psychodynamic therapy is to help individuals gain a deeper understanding of their emotions, thoughts, and early-life experiences, which may be influencing their current mental state and behavior. By uncovering and addressing these unconscious conflicts, patients can achieve greater self-awareness and emotional insight, leading to improved coping mechanisms and a more fulfilling life. The therapeutic process often involves exploring past relationships and experiences, examining dreams and fantasies, and analyzing the transference and countertransference dynamics that arise within the therapist-patient relationship. This approach is particularly effective for treating complex psychological issues, such as personality disorders, trauma, and chronic depression, as it aims to resolve the root causes of distress rather than merely alleviating symptoms.",
        },
        {
            alt : "Psychological Assessment",
            src : "/static/media/assess.webp",
            info : "Psychological assessment is a comprehensive process that involves the systematic evaluation of an individual's psychological, emotional, and behavioral functioning through a variety of methods and tools. These assessments are designed to provide a detailed understanding of a person's strengths, weaknesses, personality traits, and cognitive abilities. The process typically includes the administration of standardized tests, clinical interviews, observations, and the review of relevant records or history. The goal of psychological assessment is to gather in-depth information that can inform diagnosis, treatment planning, and the understanding of complex psychological issues. This process is essential in various contexts, including clinical, educational, and organizational settings, as it helps professionals develop tailored interventions and support strategies. Psychological assessments are valuable for diagnosing mental health disorders, identifying learning disabilities, understanding developmental delays, and evaluating cognitive functioning, among other purposes. The results provide critical insights that guide therapeutic approaches, educational accommodations, and other necessary interventions to improve an individual's overall well-being and functioning.",
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