# M1 — Project Foundation

## Overview

The Project Foundation milestone established the initial structure, development workflow, and documentation architecture for the Personal Full-Stack Portfolio application.

The primary objective of this milestone was to create a maintainable foundation for future development by configuring the backend application, defining project conventions, and establishing a scalable documentation strategy.

Rather than implementing business features, this milestone focused on preparing the project for incremental, milestone-driven development.

---

## Objectives

The milestone aimed to:

* Initialize the backend application.
* Configure the Express server.
* Establish the application's entry point.
* Configure the local development workflow.
* Implement an initial health check endpoint.
* Establish the initial backend directory structure.
* Finalize the project's documentation and development workflow.

---

## Completed Work

The following work was completed during this milestone:

* Created the GitHub repository and initialized the backend project.
* Installed and configured Express.js.
* Implemented the Express application (`app.js`).
* Configured the HTTP server entry point (`server.js`).
* Configured npm scripts for local development and application startup.
* Implemented the `/health` endpoint to verify backend availability.
* Verified the local development environment, including automatic server reloading with Nodemon.
* Established the initial backend directory structure to support future development.
* Organized the project's documentation into reference documents, Architectural Decision Records (ADRs), milestone summaries, and topic-specific documentation.
* Updated the repository README to serve as a high-level project overview and documentation entry point.

---

## Architectural Decisions

Several foundational architectural decisions were established during this milestone.

* The Express application was separated from the HTTP server entry point to improve modularity, maintainability, and future deployment flexibility.
* A structured documentation architecture was adopted to separate project references, technical documentation, Architectural Decision Records, and milestone summaries.

These decisions are documented in the Architectural Decision Records:

* **ADR-005** — Separate Express Application and HTTP Server
* **ADR-006** — Establish Documentation Architecture

---

## Resulting Project State

At the completion of this milestone, the project includes:

* A functional Express backend.
* A verified local development environment.
* A health check API endpoint.
* A scalable backend directory structure.
* An established GitHub Projects workflow.
* Published project reference documentation.
* Initial Architectural Decision Records documenting foundational design decisions.

The project is now prepared for implementing application features in subsequent milestones.

---

## Lessons Learned

The Project Foundation milestone reinforced several software engineering principles:

* Build incrementally and verify each implementation step before proceeding.
* Separate responsibilities to improve maintainability and scalability.
* Keep implementation, project management, version control, and documentation synchronized.
* Document completed work rather than anticipated work.
* Make architectural decisions when they become implementation dependencies rather than prematurely.

---

## Next Milestone

The next milestone, **M2 — Database & REST API**, will introduce the application's persistence layer and begin implementing the core REST API that will support the portfolio application.
