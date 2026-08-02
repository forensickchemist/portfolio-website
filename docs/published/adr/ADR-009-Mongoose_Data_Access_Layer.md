# ADR-9: Adopt Mongoose as the Data Access Layer

* **Status:** Accepted
* **Date:** 2026-08-02

## Context

The project requires a mechanism for communicating with MongoDB Atlas from the Node.js backend.

Two viable approaches were considered:

* Use the official MongoDB Node.js Driver directly.
* Use Mongoose as an Object Data Modeling (ODM) library built on top of the official driver.

The official driver provides direct access to MongoDB and offers maximum flexibility with minimal abstraction. However, the project is intended to reinforce full-stack development concepts while maintaining a structured, maintainable codebase.

The application will manage multiple collections, including users, projects, notebook posts, and contact messages. These domain models will benefit from consistent schemas, validation, middleware, and a clear separation between application models and the underlying database.

## Decision

The project will use **Mongoose** as the application's data access layer for all interactions with MongoDB Atlas.

Mongoose serves as an abstraction over the official MongoDB Node.js driver while continuing to use the official driver internally for database communication.

The application will define schemas and models using Mongoose rather than interacting directly with MongoDB collections through the native driver.

## Consequences

### Benefits

* Provides a structured approach to modeling application data.
* Supports schema definitions that promote consistency across collections.
* Includes built-in validation before documents are persisted.
* Provides models that align database operations with the application's domain objects.
* Supports middleware that will be useful for future features such as authentication and auditing.
* Aligns with the project's educational goals by reinforcing common full-stack development practices.
* Remains compatible with MongoDB Atlas while leveraging the official MongoDB Node.js driver internally.

### Trade-offs

* Introduces an additional dependency.
* Adds an abstraction layer that developers must learn.
* May introduce a small performance overhead compared to using the native driver directly.

These trade-offs are considered acceptable because the project prioritizes maintainability, structured application design, and learning over minimal abstraction.

## Alternatives Considered

### Use the Official MongoDB Node.js Driver Directly

Interact directly with MongoDB collections using the official driver without an ODM.

**Rejected because:**

* Requires manual organization of application models and validation.
* Places greater responsibility on application code to maintain consistent document structures.
* Provides fewer built-in features for schema management and middleware.
* Offers less alignment with the project's educational objectives and planned architecture.
