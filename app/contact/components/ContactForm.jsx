'use client';

import useContactForm from '../hooks/useContactForm';
import FormInput from './FormInput';
import SendMailButton from './SendMailButton';
import MessageInput from './MessageInput';

const ContactForm = () => {
    const { formRef, handleSubmit, result, loading } = useContactForm();
    const submitButtonConf = { sent: result, loading: loading };

    return (
        <div>
            <div className='bg-white'>
                <form ref={formRef} className='p-5' onSubmit={handleSubmit}>
                    <div className="flex gap-5 pb-3 flex-col lg:flex-row">
                        <FormInput name="name" placeholder="John Doe" label="How shall I address you" required />
                        <FormInput name="email" placeholder="johndoe@gmail.com" label="Email" type="email" required />
                    </div>
                    <MessageInput name="message" label="Message" required />
                    <SendMailButton {...submitButtonConf} />
                </form>
            </div>
        </div>
    );
}

export default ContactForm