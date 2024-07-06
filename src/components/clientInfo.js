import React from "react";

const ReleaseAuth = (props) => {
    const handleChange = (e, form, value) => {
        let newSubmit = { ...props.submit }; // Make a shallow copy of props.submit
        newSubmit[form][value] = e.target.value; // Use bracket notation to assign the value
        return newSubmit;
    }

    return (
        <>
            <div className="doc-container">
                <div className="doc-title-container-2">
                    <div className="doc-title-container-text">Julie A. Aspenleiter, Psy.D.</div>
                    <div className="doc-title-container-text">1551 East Genesee Street</div>
                    <div className="doc-title-container-text">Skaneateles, NY 13152</div>
                    <div className="doc-title-container-text">315-857-7864</div>
                    <div className="doc-title-container-text margin-8">
                        Client Demographic Information
                    </div>
                <form className="form-tag">
                    <div className="form-container-info-3">
                        <div className="input-field-2">
                            <input className="input-info-3" value={props.submit.formThree.name} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formThree", "name"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Client Name
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" value={props.submit.formThree.date} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formThree", "date"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Date of Birth
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" value={props.submit.formThree.social} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formThree", "social"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Client SS#
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" value={props.submit.formThree.address} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formThree", "address"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Home Address
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" value={props.submit.formThree.number} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formThree", "number"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Home Phone Number
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" value={props.submit.formThree.emergency} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formThree", "emergency"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Emergency Contact
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" value={props.submit.formThree.emergencyNumber} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formThree", "emergencyNumber"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Emergency Contact Phone Number
                            </div>
                        </div>
                    </div>
                </form>
                <div className="form-text-3 margin-7">
                    If Child:
                </div>
                <form className="form-tag">
                    <div className="form-container-info-3">
                        <div className="input-field-2">
                            <input className="input-info-3" value={props.submit.formThree.parent} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formThree", "parent"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Parent / Legal Guardian 
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" value={props.submit.formThree.childAddress} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formThree", "childAddress"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Address (if different)
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" value={props.submit.formThree.childNumber} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formThree", "childNumber"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Phone Number
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </>
    );
}

export default ReleaseAuth;