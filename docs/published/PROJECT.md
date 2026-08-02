# Personal Full-Stack Portfolio

# Project Overview

The Personal Full-Stack Portfolio is a custom-built web application designed to serve two primary purposes:

1. A professional portfolio showcasing software development projects to employers and technical interviewers.
2. A capstone learning project that reinforces full-stack development and software engineering principles through practical implementation.

The project emphasizes understanding every architectural and implementation decision rather than simply producing a polished portfolio website. Every major feature is intended to be designed, built, tested, deployed, and documented in a way that can be confidently explained during technical interviews.

The portfolio aims to demonstrate not only completed projects, but also the engineering thought process behind them. Each project should communicate:

* The problem being solved
* Why a particular solution was chosen
* The application's architecture
* The technologies used
* Technical challenges encountered
* Lessons learned
* Future improvements

---

# Project Goals

The primary goals of this project are to:

* Build a professional full-stack portfolio website.
* Showcase software development projects as technical case studies.
* Reinforce bootcamp knowledge through practical implementation.
* Develop and consume REST APIs.
* Design and implement a MongoDB database.
* Practice authentication and authorization.
* Deploy a serverless backend using AWS Lambda.
* Understand API Gateway and serverless request flow.
* Build an administrative dashboard for managing portfolio content.
* Document the complete development journey.

Success is measured not only by delivering a working application, but also by the ability to explain every significant technical decision.

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

* Vue.js
* Bootstrap
* HTML5
* CSS3

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* JSON Web Tokens (JWT)
* bcryptjs

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

The project intentionally prioritizes technologies already introduced during the bootcamp to strengthen understanding rather than introducing unnecessary abstractions.

---

# System Architecture

```text
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

The backend will initially be developed and tested locally before deployment to AWS Lambda behind API Gateway.

MongoDB Atlas serves as the persistent database, while Express executes within the Lambda environment.

---

# Application Structure

## Database Overview

The application is expected to include the following collections:

* users
* projects
* notebookPosts
* contactMessages

The schema may evolve as development progresses.

---

## Website Structure

### Home

Introduction, featured projects, current learning focus, and recent Notebook posts.

### About

Professional introduction and developer journey.

### Projects

Technical case studies describing architecture, implementation, challenges, and lessons learned.

### Notebook

A publishing platform documenting software development, computer science topics, and genuine personal interests.

### Resume

A link to the latest professional resume.

### Contact

Professional contact information and contact form.

---

## Admin Dashboard

The private administration interface will support management of:

* Projects
* Notebook posts
* Contact messages

Authentication will use bcryptjs, JWT, protected API routes, and authorization middleware.

---

# Media Strategy

Images will not be stored directly in MongoDB.

Instead, MongoDB will store metadata and image URLs while media assets are hosted by an external storage provider such as:

* Cloudinary
* Amazon S3
* Cloudflare R2

The final provider will be selected during implementation.

---

# Deployment Strategy

The project follows a free-tier-first approach wherever practical.

Initial deployment targets include:

* MongoDB Atlas Free Tier
* AWS Lambda
* Amazon API Gateway
* Vercel

A custom domain is intentionally deferred until the application is production-ready.

---

# Engineering Principles

This project is intentionally educational.

Every implementation should reinforce understanding of:

* REST API design
* Express middleware
* MongoDB and Mongoose
* Authentication and authorization
* JWT
* Password hashing
* Serverless architecture
* API Gateway
* Deployment
* Environment variables
* Error handling
* Security

Development follows several guiding principles:

* Understanding takes priority over speed.
* Maintainability takes priority over shortcuts.
* Learning takes priority over convenience.
* Prefer clear, incremental implementations over unnecessary complexity.
* Document completed work rather than anticipated work.

Important technical decisions, implementation details, discoveries, and lessons learned are documented throughout development. The Notebook serves as a public record of that journey.

---

# Development Roadmap

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

# Project Management

Project planning and implementation follow the workflow defined in `docs/published/PROJECT_MANAGEMENT.md`.

GitHub Projects serves as the execution board for active development, while the documentation in `docs/published/` preserves the project's long-term technical knowledge and architectural decisions.
