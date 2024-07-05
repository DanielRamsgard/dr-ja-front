import React from "react";

const Consent = () => {

    return (
        <>
            <div className="doc-container">
                <div className="doc-title-container">
                    <div className="doc-title-container-text">Julie A. Aspenleiter, Psy.D.</div>
                    <div className="doc-title-container-text">1551 East Genesee Street</div>
                    <div className="doc-title-container-text">Skaneateles, NY 13152</div>
                    <div className="doc-title-container-text">315-857-7864</div>
                    <div className="doc-title-container-text margin">
                    Informed Consent and Limits of Confidentiality for Psychological Services
                    </div>
                    <div className="margin">
                    You understand that the information regarding psychological treatment is kept confidential by the therapist and will not be revealed to others without your written consent. The confidentiality of there services will be maintain except for the following circumstances. 
                    </div>
                    <ol className="margin">
                    <li>If a legally signed release of information form is submitted to Dr. Aspenleiter by an agency, business or individual, she will comply with the limits of this request. </li>
                    <li>If an insurance company or manage care company is paying for part or all of these services, they will be provided with a report if requested and other information necessary to secure payment. </li>
                    <li>If you or your child report information that suggests child abuse or neglect, Dr. Aspenleiter is mandated by law to report these suspicions to proper authorities. </li>
                    <li>If you or your child are actively suicidal or homicidal, Dr. Aspenleiter will contact family, significant others, and/or police/1st responders to obtain necessary services to protect you or others. </li>
                    <li>If you fail to pay your bill and that bill is sent to a collection agency, that agency will be provided with only your name, address, phone number, dates of services and balance due. </li>
                    <li>In some emergency situations, information may be revealed that is necessary for your emergency treatment by another professional.</li>
                        Your signature indicates that you understand and accept these policies. 
                    </ol>
                
                <form>
                    <div className="form-container-info">
                        <div className="input-field">
                            <input className="input-info">
                            </input>
                            <div className="form-text">
                                Signature
                            </div>
                        </div>
                        <div className="input-field">
                            <input className="input-info">
                            </input>
                            <div className="form-text">
                                Date
                            </div>
                        </div>
                        <div className="input-field">
                            <input className="input-info">
                            </input>
                            <div className="form-text">
                                Print Name
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </>
    );
}

export default Consent;