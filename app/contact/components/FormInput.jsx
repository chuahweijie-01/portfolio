import React from 'react';

const FormInput = ({ name, label, type = 'text', placeholder, required }) => {
    return (
        <div className="flex flex-1 flex-col">
            <span className="text-black pb-1">{label}</span>
            <input
                type={type}
                name={name}
                required={required}
                placeholder={placeholder}
                className="border border-gray-300 px-2 py-1 text-black"
            />
        </div>
    );
};

export default FormInput