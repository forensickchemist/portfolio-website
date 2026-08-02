# ADR-1: MONGODB vs DynamoDB

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


