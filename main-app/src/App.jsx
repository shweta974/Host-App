import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
// import Home from "./Home"; // Import Home
// import "./Home.css"; 
import Home from "./component/Home";
import Footer from "./component/Footer";

function ChatApp() {
  return <iframe src="http://localhost:5001" className="iframe-content"></iframe>;
}

function EmailApp() {
  return <iframe src="http://localhost:5002" className="iframe-content"></iframe>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar">
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/chat" onClick={() => setMenuOpen(false)}>Chat</Link></li>
          <li><Link to="/email" onClick={() => setMenuOpen(false)}>Email</Link></li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/email" element={<EmailApp />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;




