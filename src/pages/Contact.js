import React from 'react';
import "./Contact.css"
import mediumLogo from './img/medium.png';
import linkedinLogo from './img/linkedin-icon.png';

const Contact = () => {
    return (
        <main>
            <div className="container">
                <h2>Home Address</h2>
                <p>Karim Hafiz</p>
                <p>13312 Burkitts Road</p>
                <p>Fairfax, Va 22033</p>
            </div>

            <div className="container contact-div">
                <h2>Contact Information</h2>
                <ul className="contact-list">
                    <li>e-mail: karimhafiz7@gmail.com</li>
                    <li>Cell: (917)-545-6181</li>
                    <li><a href="https://www.linkedin.com/feed/" target="_blank" className="contact-list-item">LinkedIn</a></li>
                    <li><a href="https://twitter.com/your-profile" target="_blank" className="contact-list-item">Twitter</a></li>
                    <li><a href="https://medium.com/@karimhafiz7" target="_blank" className="contact-list-item">Medium</a></li>
                </ul>
            </div>

            <div className="container client-contact">
                <h2>Client Contact Form</h2>
                <form className="Form" action="text" method="post" id="contact-form">
                    <ul>
                        <li>
                            <label htmlFor="fname">First name</label>
                            <input type="text" name="first name" id="fname" className="form-input" />
                        </li>
                        <br />
                        <li>
                            <label htmlFor="lname">Last name</label>
                            <input type="text" name="last name" id="lname" className="form-input" />
                        </li>
                        <br />
                        <li>
                            <label htmlFor="e-mail">E-mail address</label>
                            <input type="text" name="e-mail" id="e-mail" className="form-input" />
                        </li>
                        <br />
                        <li>
                            <label htmlFor="tel">Telephone number</label>
                            <input type="text" id="tel" name="tel" required className="form-input" />
                        </li>
                        <br />
                        <li>
                            <label htmlFor="message">Questions or Concerns</label>
                            <textarea id="message" maxLength="240" required className="form-input"></textarea>
                        </li>
                        <br />
                        <li>
                            <input type="submit" value="Send Message" className="submit-message" />
                        </li>
                    </ul>
                </form>
            </div>

            <footer className="contact-footer">
                <h2>You can find me by clicking the links below!</h2>
                <div className="icon-div">
                    <a href="https://twitter.com/your-profile" target="_blank">
                        <img src="img/twitter.svg" className="pic" alt="twitter" />
                    </a>
                    <a href="https://medium.com/@your-profile" target="_blank">
                        <img src={mediumLogo} className="pic" alt="medium" />
                    </a>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank">
                        <img src={linkedinLogo} className="pic" alt="linkedin" />
                    </a>
                </div>
            </footer>
        </main>
    );
};

export default Contact;