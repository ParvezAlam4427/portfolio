import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormMessage("MESSAGE SENT ✓ CONNECTION ESTABLISHED");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormMessage("ERROR ✗ FILL ALL REQUIRED FIELDS");
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">CONTACT ME()</h2>

      <div className="contact-container">
        {/* Left Panel — Info */}
        <div className="info-panel">
          <h3 className="info-title">Let's Build Something Amazing Together</h3>
          <p className="info-text">
            Ready to bring your ideas to life? Whether you need a web application, mobile app, or custom software solution, I'm here to help you succeed.
          </p>

          {/* Social Icons like HomePage */}
          <div className="social-icons">
            <a href="https://github.com/ParvezAlam4427" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="www.linkedin.com/in/parvez-alam-shaik-7b1117306" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Parvezalam2459?t=J7Mv-RlD9TzveF0Bo1-srg&s=09" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="parvezalamshaik59@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Panel — Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="label">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="label">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="parvezalamshaik59@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="label">SUBJECT</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Project discussion"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="label">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                className="form-control textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="send-btn" disabled={isSubmitting}>
              {isSubmitting ? "TRANSMITTING..." : "SEND_MESSAGE"}
            </button>

            {formMessage && (
              <div className={`form-message ${formMessage.includes("ERROR") ? "error" : "success"}`}>
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
