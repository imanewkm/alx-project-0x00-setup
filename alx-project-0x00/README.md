# ALX Project 0x00: Setup

## Introduction
This project demonstrates how to create a Next.js application using cli-tools like `npx` with `create-next-app`. We'll focus on setting up a project with TypeScript, ESLint, Tailwind CSS, and custom import aliases.

## Prerequisites
- Node.js installed on your machine
- npm (Node Package Manager)
- Visual Studio Code

## Project Setup

### Method 1: Interactive Setup
You can create a Next.js project using the interactive prompts:
```bash
npx create-next-app@latest
```
This will guide you through various configuration options.

### Method 2: Direct Configuration (Used in this project)
For this project, we use predefined options to set up our environment:

1. Open Visual Studio Code
2. Open a new terminal (Terminal -> New Terminal)
3. Navigate to your desired project directory
4. Run the following command:
    ```bash
    npx create-next-app@latest alx-project-0x00 --typescript
    ```
5. When prompted, select the following options:
    - ESLint: **Yes**
    - Tailwind CSS: **Yes**
    - Import alias: **Yes**
    - /src directory: **No**
    - App Router: **No**

## Running the Application
To start the development server on port 3000:
```bash
cd alx-project-0x00
npm run dev -- -p 3000
```

## Project Structure
After setup, your project will contain:
- TypeScript configuration
- ESLint for code quality
- Tailwind CSS for styling
- Custom import aliases for cleaner imports
- Pages router (not App router)

## Next Steps
- Explore the project structure
- Modify the homepage in `pages/index.tsx`
- Add new pages and components
- Customize your Tailwind CSS configuration