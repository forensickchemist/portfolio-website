# Project Management

## Purpose

This document defines the project management workflow for the Personal Full-Stack Portfolio project.

The objective is to establish a consistent development process that keeps project planning, implementation, version control, and documentation synchronized throughout development.

The workflow prioritizes incremental development, maintainability, and understanding over speed.

---

# Project Management Principles

The following principles guide all development activities.

## 1. Rolling Milestone Backlog

The project is planned one milestone at a time.

Only the current milestone is broken down into implementation tasks. Future milestones remain intentionally high-level until they become the active focus.

This allows implementation experience to inform future planning while avoiding unnecessary upfront design.

---

## 2. GitHub Project as the Execution Board

The GitHub Project represents the current implementation status.

It is not intended to be a complete project roadmap or a permanent backlog.

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

| Column      | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| Backlog     | Planned tasks for the current milestone.                                          |
| Todo        | The next implementation task. Only one task should remain here at any given time. |
| In Progress | The task currently being implemented.                                             |
| Done        | Completed tasks that satisfy the Definition of Done.                              |

---

## 3. Incremental Development

Development proceeds one task at a time.

Each implementation session follows this workflow:

1. Move the Todo task to In Progress.
2. Understand the objective.
3. Discuss relevant concepts and trade-offs.
4. Implement incrementally.
5. Verify the implementation.
6. Commit and push changes.
7. Move the task to Done.
8. Promote the next Backlog item to Todo.

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

Documentation should describe completed work rather than anticipated work.

During milestone implementation:

* Documentation updates remain minimal.
* Focus remains on implementation.

At milestone completion:

* Public documentation is updated.
* README is updated if necessary.
* Milestone documentation is completed.

This prevents documentation from becoming a parallel development effort.

| Event                            | Documentation Produced   |
| -------------------------------- | ------------------------ |
| Milestone completed              | Milestone summary        |
| Architectural decision finalized | ADR                      |
| Public API implemented           | API documentation        |
| Deployment process established   | Deployment documentation |


---

## 6. Decision Timing Principle

Architectural and technology decisions are made immediately before they become implementation dependencies.

Questions are evaluated using a simple guideline:

> Does this decision affect the task we are about to implement?

If the answer is:

* **Yes** → Discuss and decide before implementation.
* **No** → Defer the discussion until the relevant milestone.

This keeps development focused while ensuring important decisions are made with sufficient context.

---

# Version Control

Git follows an incremental commit strategy.

Each commit should represent one logical unit of work and use Conventional Commits.

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

The project is organized into the following milestones.

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

These milestones define the high-level roadmap. Detailed implementation tasks are created only when a milestone becomes active.

---

# Project Management Philosophy

The purpose of this workflow is to support software development rather than replace it.

Planning provides direction.

The GitHub Project tracks execution.

Git records implementation history.

Documentation captures completed work.

The primary objective remains building a maintainable, well-understood full-stack application while reinforcing software engineering principles throughout the development process.
