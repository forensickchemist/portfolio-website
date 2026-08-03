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
import health from "./routes/health.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";

const app = express();

app.use("/health", health);

app.use(notFound);

app.use(errorHandler);

export default app;