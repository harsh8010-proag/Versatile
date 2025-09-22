# Overview

Shreeram Computers is a modern educational technology website built as a full-stack web application for a computer training institute. The application provides comprehensive information about courses, services, and allows potential students to inquire about programs and enroll in courses. The platform features a premium dark gel aesthetic with gradient design patterns, creating a modern and professional user experience.

The application serves as both a marketing platform and a basic CRM system, allowing the institute to showcase their offerings while managing student inquiries and enrollments through a structured database system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using **React 18** with **TypeScript** and utilizes a modern component-based architecture:

- **UI Framework**: Implements shadcn/ui component library with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system featuring dark gel aesthetics, purple gradients, and glass morphism effects
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

The design system follows a dark-first approach with custom CSS variables and gradient utilities, emphasizing purple/blue color schemes with premium visual effects.

## Backend Architecture
The backend follows a **REST API** pattern built with **Express.js**:

- **Server Framework**: Express.js with TypeScript for type safety
- **Database Layer**: Drizzle ORM providing type-safe database operations
- **API Design**: RESTful endpoints for courses, services, contact submissions, and enrollments
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development Setup**: Custom Vite integration for seamless full-stack development

## Data Storage Architecture
The application uses **PostgreSQL** as the primary database with **Drizzle ORM**:

- **Database**: PostgreSQL (via Neon serverless) for production reliability and scalability
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Connection**: Connection pooling via Neon's serverless PostgreSQL driver
- **Type Safety**: Full type safety from database to frontend through shared schema definitions

### Core Data Models:
- **Users**: Basic authentication system (admin/staff access)
- **Courses**: Educational programs with categories, pricing, features, and difficulty levels
- **Services**: Additional offerings like consulting, support, and corporate training
- **Contact Submissions**: Customer inquiries with read status tracking
- **Course Enrollments**: Student registration data linked to specific courses

## Authentication & Authorization
Currently implements a basic user authentication system:

- **User Management**: Simple username/password authentication for administrative access
- **Session Handling**: Express sessions for maintaining user login state
- **Access Control**: Basic role-based access for managing content and viewing submissions

## Theme System
The application features a comprehensive theming system:

- **Dark-First Design**: Primary focus on dark mode with premium aesthetics
- **CSS Variables**: Dynamic theming through CSS custom properties
- **Component Variants**: Consistent styling across all UI components using class-variance-authority
- **Responsive Design**: Mobile-first approach with adaptive layouts

## Performance Optimizations
- **Query Caching**: TanStack Query for intelligent data caching and background updates
- **Code Splitting**: Vite's automatic code splitting for optimal bundle sizes
- **Asset Optimization**: Vite handles asset bundling and optimization
- **Development DX**: Hot module replacement and fast refresh for rapid development

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production database
- **Connection Pooling**: Built-in connection management through Neon's driver

## UI Component Libraries
- **Radix UI**: Headless UI primitives for accessibility and flexibility
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Drizzle Kit**: Database schema management and migration tool
- **TanStack Query**: Server state management and caching
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety across the entire application stack

## Build & Deployment
- **Vite**: Modern build tool for development and production
- **ESBuild**: Fast JavaScript bundler for server-side code
- **PostCSS**: CSS processing for Tailwind and autoprefixer

## Form & Validation
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Runtime type validation for API requests and form data
- **Drizzle Zod**: Integration between Drizzle schemas and Zod validation

The application is designed to be easily deployable on platforms like Replit, Vercel, or similar hosting services, with environment-based configuration for database connections and other external services.