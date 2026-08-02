# ADR-3: API Gateway

## Decision

The portfolio will use:

* Express.js for the backend application framework.
* Mongoose as the MongoDB ODM.
* MongoDB Atlas as the database.
* AWS Lambda as the serverless compute platform.
* Amazon API Gateway as the API entry point.
* Vercel for frontend hosting.

The intended architecture is:

Vue.js
↓
Vercel
↓
Amazon API Gateway
↓
AWS Lambda
↓
Express.js
↓
Mongoose
↓
MongoDB Atlas

## Why API Gateway?

API Gateway is not a Node.js package or Express middleware.

It is an AWS-managed service that acts as the HTTP/API entry point to the Lambda backend.

The distinction is:

Express:
Handles application routing and middleware.

AWS Lambda:
Runs the backend code.

API Gateway:
Receives HTTP requests and routes them to Lambda.

The architecture is therefore:

Client
↓
API Gateway
↓
Lambda
↓
Express
↓
Mongoose
↓
MongoDB Atlas