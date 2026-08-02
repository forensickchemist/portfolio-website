# ADR-8: Centralized Error Handling Strategy

* **Status:** Accepted
* **Date:** 2026-08-02

## Context

As the project begins implementing REST API endpoints, the application needs a consistent strategy for handling errors.

Errors can occur for many reasons, including invalid client requests, failed database operations, validation failures, or unexpected runtime exceptions. Without a centralized approach, individual route handlers would need to duplicate error handling logic, resulting in inconsistent responses and reduced maintainability.

Express provides built-in support for centralized error-handling middleware, allowing application logic to remain focused on processing requests while delegating error handling to a single location.

## Decision

The project will use Express's centralized error-handling middleware as the single location for processing and formatting API errors.

Controllers are responsible for processing requests and delegating errors to the error-handling middleware using Express's error propagation mechanism.

During this milestone, the application will handle:

* Built-in JavaScript `Error` objects.
* Mongoose-generated errors.
* Validation errors.

The centralized error-handling middleware will produce responses that follow the project's established API response convention.

More specialized error handling, including custom error classes, will be deferred until future milestones when implementation complexity justifies their introduction.

## Consequences

### Benefits

* Establishes a consistent error-handling strategy across the application.
* Reduces duplicated error handling logic within controllers.
* Keeps controllers focused on request processing rather than response formatting.
* Produces consistent error responses for the frontend.
* Provides a scalable foundation for future enhancements.

### Trade-offs

* Requires understanding Express's error propagation and middleware execution flow.
* Adds a small amount of architectural complexity compared to handling errors directly within each controller.

These trade-offs are acceptable because they improve maintainability while aligning with established Express application architecture.

## Alternatives Considered

### Handle Errors Within Each Controller

Use `try...catch` blocks in every controller to format and return error responses directly.

**Rejected because:**

* Introduces duplicated error handling logic across controllers.
* Makes maintaining a consistent error response format more difficult.
* Mixes request processing responsibilities with error response formatting.
* Becomes increasingly difficult to maintain as the application grows.
