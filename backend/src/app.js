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
            status: "This is healthy."
      })
});

module.exports = app;