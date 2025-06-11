# Multi Step Form

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Form Steps](#form-steps)
  - [Project Overview](#1-project-overview)
  - [Team & Roles](#2-team--roles)
  - [Tasks & Milestones](#3-tasks--milestones)
  - [Budget & Resources](#4-budget--resources)
  - [Review & Launch](#5-review--launch)
- [Tech Stack](#tech-stack)
- [Getting Started](getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Docker Support](#docker-support)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

---

# Overview

A modern, responsive multi-step form application built with React, TypeScript, and Vite. This project implements a sophisticated form wizard that guides users through a project creation process with multiple steps.

---

## Features

- **Multi-step Form Wizard**: A 5-step form process for project creation
- **Modern UI/UX**: Built with Tailwind CSS and shadcn
- **Type Safety**: Full TypeScript implementation
- **Form Validation**: Powered by React Hook Form and Zod
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Interactive Components**: Rich UI components including dropdowns, checkboxes, and date pickers
- **State Management**: Efficient form state management across steps

---

## Form Steps

1. **Project Overview**

   - Define basic project details
   - Project name, description, types, dates and client

2. **Team & Roles**

   - Assign team members
   - Assign leader

3. **Tasks & Milestones**

   - Create and manage project tasks
   - Set priorities and deadlines
   - Track task status

4. **Budget & Resources**

   - Plan project finances
   - Allocate resources
   - Set budget constraints

5. **Review & Launch**
   - Final review of all entered information
   - Project launch confirmation

---

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**:
  - Radix UI
  - Custom components
- **Form Management**:
  - React Hook Form
  - Zod for validation
- **Icons**:
  - Lucide React
  - React Icons
- **Date Handling**: date-fns
- **Routing**: React Router DOM
- **Notifications**: React Hot Toast

---

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Santos2175/multi-stepper-form.git
   cd multi-stepper-form
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Build for production:
   ```bash
   npm run build
   # or
   yarn build
   ```

---

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable components
│   ├── form/      # Form-specific components
│   └── ui/        # UI components
├── hooks/         # Custom React hooks
├── lib/           # Utility libraries
├── pages/         # Page components
├── schemas/       # Zod validation schemas
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

---

## Docker Support

The project includes Docker configuration for containerization:

- `Dockerfile` for building the application
- `.dockerignore` for excluding unnecessary files

---

## Authors

- Santosh Gurung - Initial work

---

## Acknowledgments

- Thanks to all the open-source libraries and tools used in this project
- Special thanks to the React and Vite communities

---
