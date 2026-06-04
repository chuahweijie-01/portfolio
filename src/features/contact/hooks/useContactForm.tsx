import React, { useState, useRef, useEffect } from 'react';
import useWeb3forms from '@web3forms/react';

export default function useContactForm() {
    const [result, setResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (result) {
            const timeout = setTimeout(() => setResult(false), 3000);
            return () => clearTimeout(timeout);
        }
    }, [result]);

    const { submit: submitForm } = useWeb3forms({
        access_key: "66a2dcb8-8012-4e9b-9f29-53731c774988",
        settings: {
            from_name: "Anonymous",
            subject: "Beep! There's a mail.",
        },
        onSuccess: () => {
            setResult(true);
            setLoading(false);
            formRef.current?.reset();
        },
        onError: (msg) => {
            setLoading(false);
            console.error('Error: ', msg);
        },
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formRef.current) { return; }
        const formData = new FormData(formRef.current);
        const plainData = Object.fromEntries(formData.entries());
        setLoading(true);
        submitForm(plainData);
    };

    return { formRef, handleSubmit, result, loading };
};