# Personal Full-Stack Portfolio

## Executive Summary

The Personal Full-Stack Portfolio is a custom-built web application designed to serve two primary purposes:

1. A professional portfolio for showcasing software development projects to employers and technical interviewers.
2. A learning and capstone project that reinforces the full-stack technologies and software engineering concepts learned during my coding bootcamp.

Rather than focusing solely on producing a polished portfolio website, this project emphasizes understanding every architectural and implementation decision. Every major feature is intended to be designed, built, tested, deployed, and documented in a way that I can confidently explain during interviews.

---

# Project Vision

The portfolio should demonstrate more than completed projects—it should demonstrate how I think as a software developer.

Each project should communicate:

* The problem being solved
* Why a particular solution was chosen
* The application's architecture
* The technologies used
* Technical challenges encountered
* Lessons learned
* Future improvements

The development process itself is also considered part of the project. Technical decisions, discoveries, and lessons learned will be documented through the integrated Notebook.

---

# Project Goals

The primary goals of this project are:

* Build a professional personal portfolio website.
* Showcase software development projects as technical case studies.
* Reinforce bootcamp knowledge through practical implementation.
* Develop and consume REST APIs.
* Design and implement a MongoDB database.
* Practice authentication and authorization.
* Deploy a serverless backend using AWS Lambda.
* Understand API Gateway and serverless request flow.
* Build an administrative dashboard for managing content.
* Document the entire development process.

Success is measured not only by a working application but also by my ability to explain every significant technical decision.

---

# Project Scope

## Public Website

The portfolio will include:

* Home
* About
* Projects
* Notebook
* Resume
* Contact

## Administrative Features

Authenticated administration will provide management interfaces for:

* Projects
* Notebook posts
* Contact messages

---

# Technology Stack

## Frontend

* HTML5
* CSS3
* Bootstrap
* Vue.js

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* bcryptjs
* JSON Web Tokens (JWT)

## Serverless Infrastructure

* AWS Lambda
* Amazon API Gateway

## Deployment

* Vercel (Frontend)
* AWS Lambda (Backend)

## Development Tools

* Git
* GitHub
* dotenv

The project intentionally prioritizes technologies already introduced during my bootcamp to strengthen understanding rather than introducing unnecessary abstractions.

---

# System Architecture

```
Vue.js Frontend
        │
        ▼
     Vercel
        │
        ▼
 API Gateway
        │
        ▼
 AWS Lambda
        │
        ▼
 Express.js
        │
        ▼
  Mongoose
        │
        ▼
 MongoDB Atlas
```

The backend will initially be developed and tested locally before being deployed to AWS Lambda behind API Gateway.

MongoDB Atlas serves as the persistent database, while Express operates within the Lambda execution environment.

---

# Database Overview

The application is expected to use the following collections:

* users
* projects
* notebookPosts
* contactMessages

The exact schema may evolve as development progresses.

---

# Website Structure

## Home

Introduction, featured projects, current learning focus, and recent Notebook posts.

## About

Professional introduction and developer journey.

## Projects

Technical case studies explaining architecture, implementation, challenges, and lessons learned.

## Notebook

A personal publishing platform documenting software development, computer science topics, and genuine personal interests.

## Resume

A link to the latest professional resume.

## Contact

Professional contact information and contact form.

---

# Admin Dashboard

The application includes plans for a private administration interface used to manage portfolio content.

Planned capabilities include:

* Create, edit, publish, and delete projects
* Create, edit, publish, and delete Notebook posts
* Manage contact messages

Authentication will use bcryptjs, JWT, protected API routes, and authorization middleware.

---

# Media Strategy

Image files will not be stored directly in MongoDB.

Instead, MongoDB will store metadata and image URLs while media assets are hosted by an external storage provider such as:

* Cloudinary
* Amazon S3
* Cloudflare R2

The final provider will be selected later in development.

---

# Deployment Strategy

The project follows a free-tier-first approach wherever practical.

Initial deployment targets include:

* MongoDB Atlas Free Tier
* AWS Lambda
* API Gateway
* Vercel

A custom domain is intentionally deferred until the portfolio is production-ready.

---

# Development Philosophy

This project is intentionally educational.

Every implementation should reinforce my understanding of:

* REST API design
* Express middleware
* MongoDB
* Mongoose
* Authentication
* Authorization
* JWT
* Password hashing
* Serverless architecture
* API Gateway
* Deployment
* Environment variables
* Error handling
* Security

Preference is given to clear, incremental implementations over unnecessary complexity.

---

# Documentation Philosophy

The project itself is part of the learning experience.

Important technical decisions, implementation details, bugs, discoveries, and lessons learned will be documented throughout development.

The Notebook serves as a public record of that journey.

---

# High-Level Development Roadmap

1. Backend Foundation
2. Database & REST API
3. Frontend Development
4. Notebook System
5. Authentication
6. Admin Dashboard
7. Image Management
8. Serverless Deployment
9. Quality Assurance
10. Documentation & Portfolio Completion

---

# Security Principles

The project follows several core security principles:

* Never commit secrets to version control.
* Store credentials in environment variables.
* Never expose passwords or secret keys.
* Protect administrative functionality.
* Validate incoming data.
* Review authentication and authorization carefully.

---

# Future Enhancements

Potential future improvements include:

* Custom domain
* Rich media management
* Enhanced CMS capabilities
* Additional Notebook features
* Performance optimizations
* Accessibility improvements
* SEO enhancements
* Expanded project showcase

---

# Project Principles

The primary objective is not simply to complete a portfolio website.

The objective is to build a system whose architecture, implementation, and technical decisions can be confidently explained during technical interviews.

Understanding takes priority over speed.

Maintainability takes priority over shortcuts.

Learning takes priority over convenience.

---

## Project Management

Project planning and implementation are managed using GitHub Projects.

Development work is organized into feature-based milestones and tracked using a Kanban workflow. The project board reflects the current implementation status, while the documentation within the `docs/published` directory serves as the project's permanent knowledge base.

This separation allows project progress, technical documentation, and implementation to evolve independently while remaining synchronized throughout development.

For the project management workflow, please refer to: `docs/published/PROJECT_MANAGEMENT.md`.

