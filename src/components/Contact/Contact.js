import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";

const ContactCard = () => {
  const [submitted] = useState(false);
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bbw9z5t",
        "template_4a0ukhj",
        form.current,
        "tMJ5_ssSUkKEXSnWl"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Message failed to send.", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Card className="quote-card-view" style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h2 className="purple" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            &gt; Contact Me
          </h2>
          <br/>
          <br/>
          <br/>

          {/* Contact Info */}
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
            <li>
              📧 <span className="purple">jimohabdulquyum@gmail.com</span>
            </li>
            <br/>
            <li>
              📞 <span className="purple">+2349115150320,  +2349137702515</span>
            </li>
            <br/>

            <li>
              📍 <span className="purple">1, Alara Street, Sabo-Yaba, Lagos</span>
            </li>
          </ul>

          {/* Contact Form */}
          < form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              rows = "3"
              className="contact-input"
            />
            
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="contact-input"
            />

            <input
            type="subject"
            name="subject"
            required
            placeholder="Your Subject"
            className="contact-input"
            />
            
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="6"
              className="contact-input"
            />
            <Button type="submit" className="purple-btn">
              Send Message
            </Button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {submitted && (
              <span style={{ color: "#9b7ea0", textAlign: "center" }}>
                Message sent successfully!
              </span>
            )}
          </form>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
