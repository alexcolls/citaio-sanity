import React, { useState } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Contact.scss';

import { send } from 'emailjs-com';
import { useForm } from "react-hook-form";

const Contact = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [toSend, setToSend] = useState({
        name: '',
        reply_to: '',
        mobile: '',
        message: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_a3jo7dq',
            'template_jjifw0g',
            toSend,
            'zDLG-RnNIGQ_Kh0MZ'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        setIsFormSubmitted(true);
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>

            {!isFormSubmitted ? (
                <>
                    <h2 className="head-text">Contáctanos para <span>solicitar una demo</span></h2>
                    <form className="app__footer-form app__flex" onSubmit={onSubmit} noValidate>
                        <div className="app__flex">
                            <input
                                type='text'
                                name='name'
                                placeholder='Tu nombre'
                                value={toSend.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="app__flex">
                            <input
                                type='text'
                                name='reply_to'
                                placeholder='Tu email'
                                value={toSend.reply_to}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="app__flex">
                            <input
                                className="app__flex"
                                type='text'
                                name='mobile'
                                placeholder='Tu teléfono'
                                value={toSend.mobile}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="app__flex">
                            <textarea
                                type='text'
                                name='message'
                                placeholder='Tu mensaje'
                                value={toSend.message}
                                onChange={handleChange}
                            />
                        </div>

                        <input type="submit" className="p-text" ></input>

                    </form>
                </>
            ) : (
                <div>
                    <h3 className="p-text" style={{ fontSize: "20px" }}>
                        Gracias! Nos pondremos en contacto contigo en la mayor brevedad posible.
                    </h3>
                </div>
            )
            }

        </>
    );
};

export default AppWrap(
    MotionWrap(Contact, 'app__footer'),
    'contacto',
    'app__whitebg',
);