import React from 'react';

type MessageInputProps = {
    name: string;
    label: string;
    required?: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ name, label, required }) => {
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