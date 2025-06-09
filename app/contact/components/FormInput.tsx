import React from 'react';

type FormInputProps = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({ name, label, type = 'text', placeholder, required }) => {
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