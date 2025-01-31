const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let messages = [];
let emails = [];

// Get all chat messages
app.get("/messages", (req, res) => res.json(messages));

// Post a new chat message
app.post("/messages", (req, res) => {
  messages.push(req.body);
  res.json({ status: "ok" });
});

// Get all emails
app.get("/emails", (req, res) => res.json(emails));

// Post a new email
app.post("/emails", (req, res) => {
  emails.push(req.body);
  res.json({ status: "ok" });
});

// Start Server
app.listen(5000, () => console.log("Backend API running on port 5000"));
