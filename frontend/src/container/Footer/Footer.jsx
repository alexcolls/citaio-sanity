import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h2 className="head-text">Contáctanos para solicitar una demo</h2>

            {!isFormSubmitted ? (
                <form className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Tu nombre" name="username" value={username} onChange={handleChangeInput} />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Tu email" name="email" value={email} onChange={handleChangeInput} />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Tu telefono" name="teléfono" value={email} onChange={handleChangeInput} />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Tu mensaje"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="app__footer-checkbox" >
                        <input type="checkbox" id="privacy" />
                        <label for="privacy">He leído y acepto la información básica de <a href=''>política de privacitat </a></label>
                    </div>
                    <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Enviar' : 'Enviando...'}</button>
                </form>
            ) : (
                <div>
                    <h3 className="head-text">
                        Gracias! Nos pondremos en contacto contigo en la mayor brevedad posible.
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contacto',
    'app__whitebg',
);