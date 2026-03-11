import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_o51026r",
        "template_q1nof4p",
        templateParams,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setFormMessage("MESSAGE SENT ✓ CONNECTION ESTABLISHED");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error);
          setFormMessage("ERROR ✗ FAILED TO SEND MESSAGE");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">CONTACT ME()</h2>

      <div className="contact-container">

        {/* Left Info Panel */}
        <div className="info-panel">
          <h3 className="info-title">
            Let's Build Something Amazing Together
          </h3>

          <p className="info-text">
            Hello, I am a fresher software developer currently building my
            portfolio and looking for opportunities to work on real projects.
            I would love to connect and learn from professionals in the field.
          </p>

          <div className="social-icons">

            <a
              href="https://github.com/ParvezAlam4427"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/parvez-alam-shaik-7b1117306"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/Parvezalam2459"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

            <a href="mailto:parvezalamshaik59@gmail.com">
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label className="label">NAME</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="label">EMAIL</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="label">SUBJECT</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Project discussion"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="label">MESSAGE</label>
              <textarea
                name="message"
                className="form-control textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="send-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "TRANSMITTING..." : "SEND_MESSAGE"}
            </button>

            {formMessage && (
              <div
                className={`form-message ${
                  formMessage.includes("ERROR") ? "error" : "success"
                }`}
              >
                {formMessage}
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;