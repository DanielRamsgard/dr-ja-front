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
                <div className="doc-title-container">
                    <div className="doc-title-container-text">Julie A. Aspenleiter, Psy.D.</div>
                    <div className="doc-title-container-text">1551 East Genesee Street</div>
                    <div className="doc-title-container-text">Skaneateles, NY 13152</div>
                    <div className="doc-title-container-text">315-857-7864</div>
                    <div className="doc-title-container-text margin-2">
                        Authorization for Release and Exchange of Information
                    </div>
                    <div className="margin">
                        Permission is granted for the release and exchange of information between Dr. Julie Aspenleiter and the following: 
                    </div>
                <form className="form-tag">
                    <div className="form-container-info-3">
                        <div className="input-field-2">
                            <input className="input-info-3" placeholder="*" value={props.submit.formTwo.name} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formTwo", "name"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Name
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" placeholder="*" value={props.submit.formTwo.address} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formTwo", "address"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Address
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" placeholder="*" value={props.submit.formTwo.number} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formTwo", "number"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Phone Number
                            </div>
                        </div>
                    </div>
                </form>
                <div className="middle-text-form">
                    The information exchanged will relate to the academic / social / psychiatric / medical history for myself or my child. The permission may be withdrawn at any time upon the written notification to Dr. Aspenleiter.
                </div>
                <form className="form-tag">
                    <div className="form-container-info-3">
                        <div className="input-field-2">
                            <input className="input-info-3" placeholder="*" value={props.submit.formTwo.signature} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formTwo", "signature"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Signature of patient / parent / guardian
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" placeholder="*" value={props.submit.formTwo.nameBirth} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formTwo", "nameBirth"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Name and date of birth of patient
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" placeholder="*" value={props.submit.formTwo.date} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formTwo", "date"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Date
                            </div>
                        </div>
                        <div className="input-field-2">
                            <input className="input-info-3" placeholder="*" value={props.submit.formTwo.witnessSignature} onChange={(e) => {
                                props.updateSubmit(handleChange(e, "formTwo", "witnessSignature"));
                            }}>
                            </input>
                            <div className="form-text-3">
                                Witness signature and date
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