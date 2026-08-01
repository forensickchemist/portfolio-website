# ARCHITECTURE DECISION: BACKEND & DATABASE

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

## Why MongoDB Atlas?

MongoDB Atlas was selected instead of introducing DynamoDB for this project.

One reason is that I already have experience with MongoDB and Mongoose from my bootcamp. Continuing with MongoDB allows me to reinforce those skills while still building a new architecture around serverless deployment.

Using MongoDB also allows me to focus my learning on the new concepts that are most relevant to this project:

* AWS Lambda
* API Gateway
* Serverless architecture
* Production deployment
* Authentication
* Environment variables
* Frontend/backend integration

Rather than learning both a new database technology and a new deployment architecture simultaneously, this approach allows me to deepen my existing MongoDB knowledge while expanding my AWS and serverless knowledge.

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

## Why AWS Lambda?

AWS Lambda was selected because I have previous experience deploying Lambda functions and want to strengthen that skill.

The goal is to understand how a traditional Express application can be adapted to a serverless execution environment.

This allows me to practice:

* Function-based execution
* Stateless backend architecture
* Environment variables
* Cloud deployment
* Serverless API design

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
