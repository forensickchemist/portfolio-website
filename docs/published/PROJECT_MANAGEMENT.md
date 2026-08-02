# Project Management

## Purpose

This document defines the project management workflow for the Personal Full-Stack Portfolio project.

Its purpose is to establish a consistent development process that keeps planning, implementation, version control, and documentation synchronized throughout the project's lifecycle.

The workflow emphasizes incremental development, maintainability, and understanding over speed.

---

# Project Management Principles

The following principles guide all development activities.

## 1. Rolling Milestone Backlog

Development is planned one milestone at a time.

Only the current milestone is broken down into implementation tasks. Future milestones remain intentionally high-level until they become the active focus.

This approach allows implementation experience to inform future planning while avoiding unnecessary upfront design.

---

## 2. GitHub Project as the Execution Board

The GitHub Project represents the project's current implementation status.

It is an execution board rather than a permanent project archive.

Tasks move through the following workflow:

```text
Backlog
    ↓
Todo
    ↓
In Progress
    ↓
Done
```

### Column Definitions

| Column      | Description                                                                                                                                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backlog     | Planned tasks for the current milestone.                                                                                                                                                                                                                                              |
| Todo        | The next implementation task. Normally only one task should remain here at a time.                                                                                                                                                                                                    |
| In Progress | The task currently being implemented.                                                                                                                                                                                                                                                 |
| Done        | Tasks that satisfy the Definition of Done. Completed tasks remain here until the milestone closes, after which they may be archived or removed from the active project board. Historical records are preserved through GitHub Issues, Git history, ADRs, and milestone documentation. |

---

## 3. Incremental Development

Implementation follows a consistent workflow:

1. Plan the current milestone.
2. Create GitHub Issues.
3. Move the next issue to **Todo**.
4. Move the active issue to **In Progress**.
5. Discuss objectives, concepts, and relevant trade-offs.
6. Implement incrementally.
7. Verify understanding.
8. Commit using Conventional Commits.
9. Push to GitHub.
10. Move the issue to **Done**.
11. Repeat until the milestone is complete.
12. Publish milestone documentation.
13. Close the milestone.
14. Archive completed issues from the active GitHub Project.
15. Begin the next milestone.

---

## 4. Definition of Done

A task is considered complete when:

* The implementation works as intended.
* Code has been committed.
* Code has been pushed to GitHub.
* The GitHub Project has been updated.
* The implementation is understood and can be confidently explained.

---

## 5. Documentation Philosophy

Documentation describes completed work rather than anticipated work.

During milestone implementation:

* Documentation updates remain minimal.
* The primary focus remains on implementation.

At milestone completion:

* Public documentation is updated.
* The repository README is updated when necessary.
* A milestone summary is published.
* Additional documentation is produced only when implementation creates it.

| Implementation Event             | Documentation Produced              |
| -------------------------------- | ----------------------------------- |
| Milestone completed              | Milestone summary                   |
| Architectural decision finalized | Architectural Decision Record (ADR) |
| Public API implemented           | API documentation                   |
| Deployment process established   | Deployment documentation            |

This approach keeps documentation aligned with implementation while preventing it from becoming a parallel development effort.

---

## 6. Decision Timing Principle

Architectural and technology decisions are made immediately before they become implementation dependencies.

Before discussing a decision, ask:

> **Does this decision affect the task currently being implemented?**

* **Yes** → Discuss and decide before implementation.
* **No** → Defer the discussion until the relevant milestone.

This principle keeps development focused while ensuring decisions are made with sufficient context.

---

# Version Control

Git follows an incremental commit strategy.

Each commit should represent a single logical unit of work and use the Conventional Commits specification.

Example:

```text
chore: initialize project structure
chore(backend): initialize Node.js backend
feat(api): create Express application
feat(api): add health check endpoint
```

Commit messages should clearly describe the purpose of the change.

---

# Development Roadmap

The project is organized into the following high-level milestones:

1. Project Foundation
2. Database & REST API
3. Frontend Foundation
4. Notebook System
5. Authentication & Authorization
6. Admin Dashboard
7. Media Management
8. Serverless Deployment
9. Quality Assurance
10. Documentation & Portfolio Completion

Detailed implementation tasks are created only when a milestone becomes active.

---

# Project Management Philosophy

The purpose of this workflow is to support software development rather than replace it.

* Planning provides direction.
* GitHub Projects tracks execution.
* Git records implementation history.
* Documentation captures completed work.

The primary objective remains building a maintainable, well-understood full-stack application while reinforcing sound software engineering practices throughout development.
