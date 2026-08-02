# ADR-5: Separate Express Application and HTTP Server

* **Status:** Accepted
* **Date:** 2026-08-02

## Context

The backend application requires an HTTP server to receive incoming requests while also maintaining a clean and maintainable application structure.

A common approach is to create the Express application and start the HTTP server within the same file. While suitable for small applications, this tightly couples application configuration with server startup.

As the project grows, the backend will include middleware, API routes, database connections, testing, and deployment to AWS Lambda. Separating these concerns early provides a more maintainable foundation.

## Decision

The project separates the Express application from the HTTP server.

* `app.js` is responsible for configuring and exporting the Express application.
* `server.js` is responsible for importing the application, configuring the listening port, and starting the HTTP server.

## Consequences

### Benefits

* Separates application configuration from server startup.
* Improves maintainability as the backend grows.
* Makes the Express application easier to test independently.
* Simplifies future deployment scenarios, including serverless environments such as AWS Lambda.
* Keeps each file focused on a single responsibility.

### Trade-offs

* Introduces an additional file.
* Slightly increases the initial project structure.

These trade-offs are considered acceptable given the long-term benefits for maintainability and scalability.

## Alternatives Considered

### Single File Application

Create the Express application and start the HTTP server within the same file.

**Rejected because:**

* Mixes application configuration with runtime concerns.
* Becomes more difficult to maintain as the project grows.
* Makes testing and future deployment less flexible.
