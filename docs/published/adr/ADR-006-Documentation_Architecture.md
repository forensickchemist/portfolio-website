# ADR-6: Establish Documentation Architecture

* **Status:** Accepted
* **Date:** 2026-08-02

## Context

This project is intended not only to produce a working portfolio application but also to demonstrate software engineering practices and technical decision-making.

As development progresses, documentation will expand to include project references, architectural decisions, milestone summaries, API documentation, and deployment guides.

Without a clear documentation structure, information can become duplicated, difficult to maintain, and harder to navigate.

## Decision

The project adopts a documentation architecture based on clearly defined responsibilities.

Documentation is organized under `docs/published/` and grouped by purpose rather than by file type.

The structure includes:

* **README.md** (repository root) — Repository landing page.
* **docs/published/README.md** — Documentation index.
* **PROJECT.md** — Project vision, goals, scope, architecture, and guiding principles.
* **PROJECT_MANAGEMENT.md** — Development workflow and project management practices.
* **GLOSSARY.md** — Shared project terminology.
* **adr/** — Architectural Decision Records.
* **milestones/** — Milestone summaries.
* **api/** — API documentation.
* **deployment/** — Deployment documentation.

Private planning notes and working documents are maintained separately under `docs/private/` and are intentionally excluded from version control.

## Consequences

### Benefits

* Every document has a single, well-defined responsibility.
* Reduces duplication across documentation.
* Establishes a single source of truth for project information.
* Scales naturally as the project grows.
* Makes documentation easier to navigate and maintain.

### Trade-offs

* Requires deciding where new documentation belongs.
* Introduces additional files and directories compared to a single README.

These trade-offs are acceptable because they improve long-term organization and maintainability.

## Alternatives Considered

### Single README

Maintain all project documentation within the repository's root `README.md`.

**Rejected because:**

* The README would become increasingly difficult to navigate.
* Different types of documentation have different audiences and lifecycles.
* Maintaining a single large document would increase duplication and reduce clarity.
