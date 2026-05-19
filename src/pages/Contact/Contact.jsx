import { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // WhatsApp number (without + sign, international format)
    const phone = "923294935185";

    // Build the message text
    const text = `*New Portfolio Message*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="contact-section" id="contact">
      <div className="section-title">
        <span className="section-tag">GET IN TOUCH</span>
        <h2>Contact Me</h2>
        <div className="title-line"></div>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            Whether you need a penetration test, security consultation,
            or just want to discuss cybersecurity — feel free to reach out.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <span>rajputmomin820@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon" />
            <span>+92 329 4935185</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Khanewal, Pakistan</span>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/muhammadtaharana" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/muhammad-taha-Rajpoot" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/923294935185" target="_blank" rel="noopener noreferrer" className="contact-social-btn whatsapp-btn">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">
            <FaWhatsapp className="btn-icon" />
            Send via WhatsApp
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;