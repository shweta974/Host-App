import React, { useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="mb-3">💬 Chat App</h1>

      <div className="border rounded p-3 w-100" style={{ maxWidth: "400px", minHeight: "300px", overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <p key={i} className="bg-light p-2 rounded my-1">{msg.text}</p>
        ))}
      </div>

      {/* Input and Button Container */}
      <div className="input-group mt-3 w-100" style={{ maxWidth: "400px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
