import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <main>
            <div className="container">
                <h2>Home Address</h2>
                <p>Karim Hafiz</p>
                <p>199 2nd street</p>
                <p>Apartment E310</p>
                <p>Mineola NY 11501</p>
            </div>

            <div className="container contact-div">
                <h2>Contact Information</h2>
                <ul className="contact-list">
                    <li>e-mail: karimhafiz7@gmail.com</li>
                    <li> Cell: (917)-545-6181 </li>
                    <li><a href="https://linkedin.com" className="contact-list-item">LinkedIn</a></li>
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
                    <img src="img/twitter.svg" className="pic" alt="twitter" />
                    <img src="img/instagram.svg" className="pic" alt="instagram" />
                    <img src="img/facebook.svg" className="pic" alt="facebook" />
                </div>
            </footer>
        </main>
    );
};

export default Contact;