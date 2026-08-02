/*
Responsible for running the application.

Example responsibilities:

import the app
determine port
start HTTP server
log startup information

server.js

Import App
      │
      ▼
app.listen(PORT)
 */

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});