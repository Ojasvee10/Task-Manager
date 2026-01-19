# Task Manager – Secure Full Stack Application

## Problem
Existing task management tools often lack fine-grained access control and scalable backend architecture.

## Solution
A secure, role-based task management system with authentication, authorization, and RESTful APIs.

## Key Features
- JWT-based authentication & role-based authorization
- CRUD operations with filters
- Admin-level monitoring
- Responsive frontend UI

## Architecture
React Frontend → Spring Boot APIs → MySQL Database
↓
JWT Auth Layer

## Why These Choices?
- **Spring Boot** for structured, scalable backend development
- **JWT** for stateless and secure authentication
- **MySQL** for relational data consistency
- **React** for responsive, component-based UI

## Results
- Reduced unauthorized access by **100%**
- Optimized API and database performance
- Deployed on **Render (backend)** and **Vercel (frontend)**

## Tech Stack
Spring Boot, React, JWT, MySQL

## Future Improvements
- Task analytics dashboard
- Notification system
- Role hierarchy expansion
