# ADR-4: AWS Lambda

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

## Why AWS Lambda?

AWS Lambda was selected because I have previous experience deploying Lambda functions and want to strengthen that skill.

The goal is to understand how a traditional Express application can be adapted to a serverless execution environment.

This allows me to practice:

* Function-based execution
* Stateless backend architecture
* Environment variables
* Cloud deployment
* Serverless API design

## Why Not Deploy Express Directly?

The project could be deployed as a traditional Node.js server.

However, using Lambda provides an opportunity to practice serverless architecture and AWS deployment, which are skills I specifically want to reinforce for job applications.

This decision is therefore driven by both practical considerations and learning goals.

## Tradeoff

The serverless architecture introduces additional complexity compared to deploying a traditional Express server.

Additional concepts include:

* API Gateway
* Lambda handlers
* Cold starts
* Stateless execution
* Cloud environment variables
* Serverless deployment

The increased complexity is intentional because learning serverless AWS architecture is one of the project's goals.