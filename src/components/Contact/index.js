import React, { useState } from 'react';
import './style.css';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        console.log(e.target.children);
        e.preventDefault();
        if (!errorMessage) {
            setFormState({[e.target.name]: e.target.name });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section>
            <h2 data-testid="h2tag">Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} placeholder='Name:' />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} placeholder='Email:' />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input name="message" rows="5" defaultValue={message} onChange={handleChange} placeholder='Message:' />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;