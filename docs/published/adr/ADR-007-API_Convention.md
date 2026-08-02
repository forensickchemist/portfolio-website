# ADR-7: API Response Convention

* **Status:** Accepted
* **Date:** 2026-08-02

## Context

As the project begins implementing REST API endpoints, it is important to establish a consistent response structure.

A standardized response format improves communication between the backend and frontend by making responses predictable and easier to consume. It also simplifies debugging, testing, and future maintenance because every endpoint follows the same general convention.

During the bootcamp, API responses included the HTTP status code within the JSON response body. While this approach provides a consistent structure, modern HTTP clients such as Axios already expose the HTTP status separately from the response body.

The project therefore needs to determine whether HTTP status information should be duplicated within the JSON payload or whether the HTTP protocol should remain the single source of truth.

## Decision

The project adopts a consistent JSON response wrapper for all API endpoints.

Successful responses will include:

* `success`
* `message`
* `data` (when applicable)

Additional fields such as pagination or metadata may be included when required by specific endpoints.

Error responses will include:

* `success`
* `message`

Validation errors may additionally include an `errors` collection describing individual validation failures.

HTTP status codes will **not** be duplicated within the JSON response body. Instead, the HTTP status code remains the authoritative indication of the request outcome and will be communicated through the HTTP response itself.

## Consequences

### Benefits

* Establishes a consistent response structure across all API endpoints.
* Makes responses predictable for the frontend.
* Simplifies frontend development by providing a consistent response contract.
* Avoids duplicating HTTP status information.
* Keeps responsibilities clearly separated between the HTTP protocol and the JSON payload.
* Allows future expansion through additional response metadata without changing the overall response structure.

### Trade-offs

* Developers must understand that HTTP status codes are accessed separately from the JSON response body.
* Team members familiar with the bootcamp response format may initially expect a `status` field within the JSON payload.

These trade-offs are acceptable because they encourage proper use of HTTP semantics while maintaining a clean and extensible API design.

## Alternatives Considered

### Include HTTP Status in the JSON Response

Include a `status` field within every JSON response alongside the HTTP status code.

**Rejected because:**

* The HTTP response already communicates the request status.
* Duplicating the status code introduces redundant information.
* Keeping the HTTP status as the single source of truth reduces the possibility of inconsistencies between the HTTP response and the JSON payload.
