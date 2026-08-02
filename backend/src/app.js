/*
Responsible for building the Express application:
create Express instance
register middleware
register routes
configure application behavior

Express App
      │
      ├── Middleware
      ├── Routes
      ├── Error handlers
      └── Configuration
*/

const express = require("express");

const app = express();

app.get("/health", (req, res) => {
      res.status(200).json({
            status: "It's A-okay."
      })
});

module.exports = app;