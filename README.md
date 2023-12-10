# Real Estate Clone Project Documentation

## Project Objective

The objective of this project is to create a real-estate-clone website with a particular focus on backend development, cloud technologies, and database management. The project will include essential features such as user registration, property listing and details, search functionality, and image storage. Given time constraints and a current full-time internship, the front-end will be minimalistic to balance the project's complexity.

## Target Audience

The target audience for this project will be real estate agents and individuals looking to list, buy, or rent properties.

## Key Features

### User Registration and Authentication

- Users can create accounts, log in, and manage their profiles.
- Implementation of JSON Web Tokens (JWT) for secure authentication.

### Property Listing Management

- Users can post, edit, and delete property listings.
- Listings include details like photos, price, location, property type, etc.

### Search and Filter Functionality

- Users can search for properties and apply various filters (e.g., price range, location, property type).

### Image Storage and Management

- Integration with Cloudinary for storing and managing property images.

### Admin Dashboard

- A dashboard for site administrators to manage listings and users.

## Technology Stack

- **Front-end**: React (for a simple and interactive UI) + Typesript
- **Back-end**: Node.js with Express.js (for RESTful API development) + Typescript
- **Database**: mySQL (relational database for structured data storage)
- **Cloud Services**:
  - AWS EC2 (for hosting the application server)
  - AWS RDS (for managed database service)
  - Cloudinary (for image storage)
  - AWS CodePipeline and CodeDeploy OR GITHUB ACTIONS (for CI/CD)
- **Authentication**: JWT for secure user authentication

## Scope of Work

### Backend Development

- API development for user management, property listings, search, etc.
- Database integration and schema design.
- Integration with cloud services (AWS, Cloudinary).

### Frontend Development

- Basic user interface for interacting with the backend.
- Responsive design for various devices.

### Testing

- Unit and integration testing for backend.
- Basic functional testing for frontend.

### Deployment and Maintenance

- Setting up CI/CD pipeline.
- Deployment on AWS.
- Ongoing maintenance and performance monitoring.
