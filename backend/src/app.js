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

import express from "express";

const app = express();

app.get("/health", (req, res) => {
      res.status(200).json({
            success: true,
            message: "API is healthy."
      });
});

export default app;