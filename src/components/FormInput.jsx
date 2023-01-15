import React from "react";

function FormInput(props) {
    const handleChange = ({ target }) => {
        props.handleInputChange(target.value, target.name)
    }
    return (
        <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5 w-full">
                <label htmlFor={props.label} className="formbold-form-label">{props.label}</label>
                <input
                    type={props.type}
                    value={props.value}
                    name={props.label}
                    onChange={handleChange}
                    className="formbold-form-input"
                />
            </div>
        </div>
    )
}

export default FormInput;
