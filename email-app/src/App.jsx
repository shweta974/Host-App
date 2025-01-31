import React, { useState } from "react";
import "./App.css";

function EmailApp() {
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState({ to: "", subject: "", body: "" });
  const [file, setFile] = useState(null); // File state

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Store the selected file
  };

  const sendEmail = () => {
    if (!newEmail.to || !newEmail.subject || !newEmail.body) {
      alert("Please fill in all fields.");
      return;
    }

    // Create an email object (including file)
    const emailData = { ...newEmail, file: file ? file.name : "No attachment" };

    setEmails([...emails, emailData]);
    setNewEmail({ to: "", subject: "", body: "" });
    setFile(null); // Reset file after sending
  };

  return (
    <div className="email-app">
      <h1>📧 Email App</h1>
      <div className="container">
        {emails.map((email, i) => (
          <p key={i}>
            <strong>{email.subject}</strong> - {email.body} (To: {email.to})  
            {email.file !== "No attachment" && <span> 📎 {email.file}</span>}
          </p>
        ))}
      </div>

      <input type="text" placeholder="To" value={newEmail.to} 
        onChange={(e) => setNewEmail({ ...newEmail, to: e.target.value })} />
      <input type="text" placeholder="Subject" value={newEmail.subject} 
        onChange={(e) => setNewEmail({ ...newEmail, subject: e.target.value })} />
      <textarea placeholder="Body" value={newEmail.body} 
        onChange={(e) => setNewEmail({ ...newEmail, body: e.target.value })}></textarea>

      {/* File Upload Input */}
      <input type="file" onChange={handleFileChange} />

      {/* Show Selected File Name */}
      {file && <p>📎 Attached: {file.name}</p>}

      <button onClick={sendEmail}>Send</button>
    </div>
  );
}

export default EmailApp;
