import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/chat">💬 Chat</Link></li>
            <li><Link to="/email">📧 Email</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📧 support@example.com</p>
          <p>📞 +123 456 7890</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">🌍 Website</a>
            <a href="#" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Micro-Frontend App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

