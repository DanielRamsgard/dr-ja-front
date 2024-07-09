import React, { useState, useEffect, useRef } from "react";
import Consent from "./consent";
import useWindowWidth from "./useWindowWidth";
import ReleaseAuth from "./releaseAuth";
import ClientInfo from "./clientInfo";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Form = () => {
    const width = useWindowWidth(1000);
    const pdfRef = useRef(null);
    const widthTwo = useWindowWidth(700);
    const [validForm, setValidForm] = useState(true);
    const [chevron, setChevron] = useState(false);
    const [click, setClick] = useState(false);
    const [form, setForm] = useState("formOne");
    const [submit, setSubmit] = useState({
        formOne : {
            formName : "formOne",
            signature : "",
            date : "",
            printName : "",
        },
        formTwo : {
            formName : "formTwo",
            name : "",
            address : "",
            number : "",
            signature : "",
            nameBirth : "",
            date : "",
            witnessSignature : "",
        },
        formThree : {
            formName : "formThree",
            name : "",
            date : "",
            social : "",
            address : "",
            number : "",
            emergency : "",
            emergencyNumber : "",
            childParent : "",
            childAddress : "",
            childNumber : "",
        },
    });
    
    useEffect(() => {
        let timer;
        if (!validForm) {
            timer = setTimeout(() => {
                setValidForm(true);
                setClick(false);
            }, 400);
        }
    
        return () => clearTimeout(timer); // Cleanup the timeout if `validForm` changes before the timeout is complete
    }, [validForm]);
    
    const handleSubmit = (formNum) => {
        const isValid = Object.values(submit).some(form =>
            Object.entries(form).every(([key, value]) =>
                (form.formName === formNum && (key.startsWith("child") || value !== ""))
            )
        );
    
        setValidForm(isValid);
        
        if (isValid) {
            setClick(true);
            setTimeout(() => {
                setValidForm(true);
                setClick(false);
            }, 1000);
            handlePDFGen();
            console.log("At least one form is completely filled out.");
            // Further submit logic
        } else {
            setClick(false);
            console.log("Some required fields are empty.");
            // Handle the case where some fields are empty
        }
    }
    
    function updateSubmit(updatedSubmit) {
        setSubmit(prevSubmit => ({
            ...prevSubmit,
            ...updatedSubmit,
        }));
    }

    const formShow = () => {
        if (form === "formOne"){
            return <Consent submit={submit} updateSubmit={updateSubmit}/>;
        } else if (form === "formTwo") {
            return <ReleaseAuth submit={submit} updateSubmit={updateSubmit}/>
        } else if (form === "formThree") {
            return <ClientInfo submit={submit} updateSubmit={updateSubmit}/>
        }
    }

    const handlePDFGen = async () => {
        const inputData = pdfRef.current;
        try {
            const canvas = await html2canvas(inputData);
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation : "portrait",
                unit : "px",
                format : "a4"
            });

            const width = pdf.internal.pageSize.getWidth();
            const height = (canvas.height * width) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, width, height);
            const pdfBlob = pdf.output('blob');
            // pdf.save("test.pdf");
            const formData = new FormData();
            formData.append('file', pdfBlob, form + '.pdf');

            try {
                const res = await fetch("http://localhost:8000/", {
                method : "POST",
                body : formData
                });
                
                console.log(res);

            } catch (err) {
                console.log(err);
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="top-form">
                <div className={widthTwo ? "form-julie-2" : "form-julie"}>
                    Dr. Julie A. Aspenleiter
                </div>
                <div className={widthTwo ? "intake-2" : "intake"}>
                    New Patient Intake Forms
                </div>
                <div className="nav-text submit" onMouseEnter={() => {
                                    setChevron(true);
                                }}
                                
                                onMouseLeave={() => {
                                    setChevron(false);
                                }}>
                    Forms 
                    <div className={ chevron ? "chevron-new" : "chevron"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                </div>
                                <div className={ chevron ? "dropdown-new" : "dropdown-no-new"}>
                                { chevron ? 
                                <>
                                    <div className="drop-text text-text" onClick={() => {
                                        setForm("formOne");
                                        setChevron(false);
                                    }}>Patient Consent</div> 
                                    <div className="drop-text text-text" onClick={() => {
                                        setForm("formTwo");
                                        setChevron(false);
                                    }}>Authorization Release</div>
                                    <div className="drop-text text-text" onClick={() => {
                                        setForm("formThree");
                                        setChevron(false);
                                    }}>Demographic Information</div>
                                </> : <></>}
                                </div>
                </div>
                <div className="upon">
                    Upon submission of the following forms, Dr. Aspenleiter will contact you about the possibility of scheduling an appointment time. Please submit forms individually.
                </div>
            </div>
            <div className="pdf-container">
                <div className="space"></div>
                <div className={width ? "pdf-container-2-2" : "pdf-container-2"}>
                    {formShow()}
                </div>
                <div className="pdf-container-capture" ref={pdfRef}>
                    {formShow()}
                </div>
                <div className="space-2"></div>
                <div className={width ? validForm ? "submit extra-margin" : "submit-red extra-margin" : validForm ? "submit" : "submit-red"} onClick={() => {
                    handleSubmit(form);
                }}>
                    {validForm && click ? "Form Submitted" : "Submit Now"}
                </div>
            </div>
        </>
    );
}

export default Form;