# ADR-2: Express

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

## Why Express?

Express.js was chosen because I have previous experience with it.

Using Express allows me to reinforce:

* Routing
* Middleware
* REST API design
* Error handling
* CORS
* Authentication middleware

Express will initially be developed and tested locally.

The application will later be adapted to run within AWS Lambda.

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