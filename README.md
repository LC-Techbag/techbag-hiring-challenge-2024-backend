# Node.js Techbag Vendor Management API Project

**Hiring Task: Recruitment Challenge 2024**

## Project Overview

This repository contains a Node.js project implementing a RESTful API for vendor management within a hypothetical subscription service. It demonstrates proficiency in Node.js, Express.js, TypeScript, database interactions, and API development best practices.

## Vendor Model Description

| column_name | type | key | description |
| --- | --- | --- | --- |
| id | uuid | PK | Uniquely generated ID which identifies the Vendor |
| name | string |  | Name of the Vendor |
| kyc_metadata | json |  | JSON which stores KYC metadata for the Vendor like Company PAN, Contracts, Agreeements, or more details if needed |
| email | string |  | Email of the admin user for this vendor |
| password | string |  | Hashed password for the vendor’s admin user (<https://www.npmjs.com/package/argon2>) |
| phone | number |  | Phone number for the vendor’s admin user |
| phone_country_code | number |  | Phone country code for the vendor’s admin user |
| created_at | DATETIME |  | The time at which the vendor was created. |
| updated_at | DATETIME |  | The time at which the vendor was last updated. |


1. Implement this model in `/src/models/vendor.ts`


## API Endpoints to be Implemented

* **POST /vendors**
  * Creates a new vendor record.
  * Implements password hashing using Argon2.
  * Input validation.

* **GET /vendors**
  * Lists existing vendors.
  * Supports optional filtering and pagination (if implemented).


1. Implement the logic for these endpoints in `/src/controllers/vendor.controller.ts`
2. Use the controller in the routes file at `/src/routes/vendor.routes.ts`

## Setup

1. **Clone Repository:**
   ```bash
   git clone https://github.com/LC-Techbag/techbag-hiring-2024-task.git
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

## Running the Application

1. **Build:**
   ```bash
   npm run build
   ```

2. **Start Server (Development):** 
   ```bash
   npm run dev
   ```

3. **Start Server (Production):** 
   ```bash
   npm run start
   ```

## Testing (Optional but Recommended)

* Implement Unit tests using Mocha, Jest, or a similar framework.
* Tests cover API endpoints, input validation, and database interactions (if applicable).

## Technology Stack

* Node.js
* Express.js
* TypeScript
* Sequelize (or relevant ORM/database library)
* Argon2

## For Applicants

* Follow the instructions above to set up and run the project.
* Complete the implementation of all API endpoints.
* Write thorough unit tests. (Optional but recommended)
* Ensure code quality and readability. (Important)

## Notes

* Consider authentication and authorization mechanisms.
* Please refrain from using AI Generated code for this hiring challenge (You are free to use AI in the job though!)