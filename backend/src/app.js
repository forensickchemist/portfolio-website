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

module.exports = app;