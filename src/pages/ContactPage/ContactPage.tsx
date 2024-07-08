import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  return (
    <section className="section">
      <div className="contact">
        <div className="contact__left">
          <h2 className="contact__title">
            Let&apos;s work
            <br />
            <span className="contact__title-span">together</span>
          </h2>

          <div className="contact__wrapper">
            <Link
              to="tel:(684) 555-0102"
              className="contact__tel contact__link"
            >
              (684) 555-0102
            </Link>

            <Link
              to="mailto:jackson.graham@example.com"
              className="contact__email contact__link"
            >
              jackson.graham@example.com
            </Link>
          </div>

          <div className="contact__block">
            <ul className="contact__list">
              <li className="contact__item">Lviv, Ua</li>
              <li className="contact__item">3605 Parker Rd.</li>
            </ul>

            <ul className="contact__list">
              <li className="contact__item">Kyiv, UA</li>
              <li className="contact__item">775 Rolling Green Rd.</li>
            </ul>
          </div>
        </div>

        <div className="contact__right">
          <h3 className="contact__subtitle">Get in touch</h3>

          <form action="" className="contact__form">
            <label htmlFor="name" className="contact__label">
              First name
              <input
                type="text"
                className="contact__input"
                placeholder="John"
                id="name"
              />
            </label>

            <label htmlFor="name" className="contact__label">
              Last name
              <input
                type="text"
                className="contact__input"
                placeholder="Doe"
                id="name"
              />
            </label>

            <label htmlFor="Email" className="contact__label">
              Email address
              <input
                type="email"
                className="contact__input"
                placeholder="deanna.curtis@gmail.com"
                id="Email"
              />
            </label>

            <label htmlFor="number" className="contact__label">
              Phone number
              <input
                type="number"
                className="contact__input"
                placeholder="(406) 555-0120"
                id="number"
              />
            </label>

            <label htmlFor="message" className="contact__label">
              Your message
              <textarea
                className="contact__input"
                placeholder="You can write here"
                id="message"
              />
            </label>

            <label htmlFor="checkbox" className="contact__label">
              <input type="checkbox" className="contact__input" id="name" />

              <span>
                I consent to having this website store my submitted information
                so they can respond to my enquiry.
              </span>
            </label>

            <button className="contact__button">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
