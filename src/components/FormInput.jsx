import React from "react";

function FormInput({ type, value, name, label, handleInputChange }) {
    const handleChange = ({ target }) => {
        handleInputChange(target.value, target.name)
    }
    return (
        <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5 w-full">
                <label htmlFor={name} className="formbold-form-label text-uppercase">{label}</label>
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={handleChange}
                    className="formbold-form-input"
                />
            </div>
        </div>
    )
}

export default FormInput;
