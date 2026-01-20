import React from "react";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>

            <div className="contact-card">
                <div className="contact-item">
                    <i className="fas fa-user"></i>
                    <span>Abitha J</span>
                </div>

                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>abithajothimurugan06@gmail.com</span>
                </div>

                <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>+91 97862 86638</span>
                </div>

                <div className="contact-links">
                    <a
                        href="https://www.linkedin.com/in/abitha-jothimurugan-158240318/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <i className="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/abithajothimurugan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <i className="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
