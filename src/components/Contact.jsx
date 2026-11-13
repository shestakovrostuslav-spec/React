import { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="page contact-page">
            <h2>Зв’язок зі мною</h2>
            <p>Маєте ідею для фотосесії або хочете обговорити співпрацю? Напишіть мені!</p>

            <div className="contact-wrapper">
                <div className="contact-info">
                    <p><strong>Локація:</strong> Київ / Львів / Виїзд по Україні</p>
                    <p><strong>Email:</strong> photo@lenslight.ua</p>
                    <p><strong>Телефон:</strong> +38 (099) 123-45-67</p>
                    <p><strong>Instagram:</strong> @lenslight_ua</p>
                </div>

                {submitted ? (
                    <div className="success-message">
                        <h3>Дякую за звернення!</h3>
                        <p>Я зв’яжуся з вами найближчим часом.</p>
                        <button onClick={() => setSubmitted(false)} className="btn-small">
                            Надіслати ще одне повідомлення
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input type="text" placeholder="Ваше ім’я" required />
                        <input type="email" placeholder="Ваш Email або Telegram" required />
                        <textarea rows="4" placeholder="Опишіть бажаний формат зйомки..." required></textarea>
                        <button type="submit" className="btn">Відправити запит</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;