import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>🚀 Welcome to Micro-Frontend Dashboard</h1>
        <p>Seamlessly switch between <strong>Chat</strong> and <strong>Email</strong> applications.</p>
        <div className="cta-buttons">
          <Link to="/chat" className="btn">💬 Go to Chat</Link>
          <Link to="/email" className="btn">📧 Open Email</Link>
        </div>
      </header>

      {/* Feature Section */}
      <section className="features">
        <div className="feature-card">
          <h3>💬 Real-time Chat</h3>
          <p>Instantly send and receive messages with a simple UI.</p>
        </div>
        <div className="feature-card">
          <h3>📧 Manage Emails</h3>
          <p>Send and view emails with a lightweight email client.</p>
        </div>
        <div className="feature-card">
          <h3>🔗 Seamless Integration</h3>
          <p>Micro-frontends embedded into one smooth experience.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
