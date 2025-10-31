# YALW (Young African Leaders Worldwide)

## Overview

YALW is a bilingual (English/French) community platform for young African leaders from top universities and grandes écoles. The platform facilitates member registration, event management, contact forms, and newsletter subscriptions. Built as a full-stack web application with a modern React frontend and Express backend, it serves as the digital hub for a professional network focused on leadership development, entrepreneurship, and global connections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- Single-page application (SPA) architecture

**UI Component System**
- shadcn/ui component library (New York style variant)
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes with CSS variables

**State Management**
- TanStack Query (React Query) for server state management
- React Context API for language selection (English/French)
- React Hook Form with Zod validation for form handling

**Design System**
- Inter font family for all typography
- Custom color palette with neutral base colors and vibrant accent colors
- Professional, modern aesthetic inspired by LinkedIn, Stripe, and TED
- Subtle African design influences through geometric patterns and color accents
- Fully responsive layout with mobile-first approach

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- ESM (ES Modules) throughout the codebase
- RESTful API design pattern

**Data Layer**
- Drizzle ORM for database interactions
- PostgreSQL as the primary database (configured for Neon serverless)
- In-memory storage implementation (MemStorage) as development fallback
- Type-safe schema definitions using Drizzle and Zod

**API Endpoints**
- `POST /api/members` - Member registration
- `GET /api/members` - Retrieve all members
- `POST /api/contacts` - Contact form submissions
- `POST /api/newsletter` - Newsletter subscriptions

**Request Handling**
- JSON body parsing with raw body preservation
- URL-encoded form data support
- Request logging middleware with performance metrics
- Zod schema validation on all inputs

### Database Schema

**Members Table**
- User profile information (name, email, phone, university)
- Academic details (field of study)
- Professional links (LinkedIn profile)
- Interest areas (array field)
- Motivation statement
- UUID primary keys with automatic generation

**Contacts Table**
- Contact form submissions
- Name, email, subject, message fields
- Timestamp tracking

**Newsletters Table**
- Email subscription list
- Unique email constraint
- Timestamp tracking

### Development Environment

**Replit Integration**
- Vite plugin for runtime error overlay
- Cartographer plugin for enhanced debugging (development only)
- Dev banner plugin (development only)
- Custom error handling with process exit on critical errors

**Build & Deployment**
- Development: `npm run dev` with tsx for hot reloading
- Production build: Vite for client bundle, esbuild for server bundle
- Type checking: `tsc` with strict mode enabled
- Database migrations: Drizzle Kit push commands

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon Postgres serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM for PostgreSQL interactions
- **drizzle-zod**: Schema validation integration between Drizzle and Zod
- **express**: Web server framework
- **react**: UI library (v18+)
- **vite**: Frontend build tool and dev server

### UI & Styling
- **@radix-ui/***: 25+ accessible component primitives (dialogs, dropdowns, tooltips, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **clsx** & **tailwind-merge**: Conditional className utilities

### Form Handling & Validation
- **react-hook-form**: Performant form management
- **@hookform/resolvers**: Validation resolver for Zod integration
- **zod**: Runtime type validation and schema definition

### State & Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library

### Additional Libraries
- **date-fns**: Date manipulation and formatting
- **embla-carousel-react**: Carousel/slider component
- **cmdk**: Command palette component
- **lucide-react**: Icon library

### Development Tools
- **typescript**: Type system
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production server
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Session & Storage
- **connect-pg-simple**: PostgreSQL session store (configured but implementation not visible in provided files)

### Font Resources
- **Google Fonts**: Inter font family via CDN for multilingual support