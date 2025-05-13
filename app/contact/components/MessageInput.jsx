import React from 'react';

const MessageInput = ({ name, label, required }) => {
    return (
        <div className="flex flex-col pb-3">
            <span className="text-black">{label}</span>
            <textarea
                name={name}
                required={required}
                className="border border-gray-300 px-2 py-1 min-h-50 text-black"
            />
        </div>
    );
}

export default MessageInput