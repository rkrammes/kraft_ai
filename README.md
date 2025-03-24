# KraftAI

## Overview

KraftAI is a modern web application built with React, TypeScript, and Supabase. It offers a scalable solution for managing recipes and dynamic content through a modular, component-based architecture.

## Key Technologies

- **React:** Library for building UIs. [React](https://reactjs.org/)
- **TypeScript:** A strongly typed superset of JavaScript. [TypeScript](https://www.typescriptlang.org/)
- **Supabase:** Open-source backend with PostgreSQL, real-time subscriptions, and auth. [Supabase](https://supabase.com/)
- **Styled Components:** CSS-in-JS library for dynamic styling. [Styled Components](https://styled-components.com/)
- **React Router:** Declarative routing for React SPAs. [React Router](https://reactrouter.com/)
- **Create React App:** Quick setup for modern React projects. [Create React App](https://create-react-app.dev/)

## Architecture

- **Client:** Built with React and TypeScript, using Styled Components for theming and React Router for navigation.
- **Backend:** Managed via Supabase for database, auth, and real-time capabilities.
- **Development:** Bootstrapped with Create React App ensuring TypeScript support and modern build tools.

## File Structure
kraft_ai/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── index.tsx         # App entry point
│   ├── App.tsx           # Main component & routing
│   ├── theme.ts          # Theming definitions and interfaces
│   ├── types.ts          # Type declarations (e.g., Recipe)
│   ├── supabaseClient.ts # Supabase client configuration
│   └── components/       # Reusable UI components
│       ├── RecipeList.tsx
│       └── RecipeForm.tsx
├── package.json
├── tsconfig.json
└── README.md

## Development Workflow

1. **Identify & Isolate:**  
   Examine error messages/logs to pinpoint the problematic file and code snippet.  Check connected apps including VS Code and Terminal.

2. **Open & Review:**  
   Open the file in VS Code, review the code context, and note the problematic snippet.

3. **Propose a Patch:**  
   Create a detailed review snippet outlining exact modifications (insertions, deletions, or replacements) along with rationale.

4. **Request Confirmation:**  
   Present the proposed changes for review and wait for explicit confirmation (e.g., “Yes, apply the changes”).

5. **Apply the Patch:**  
   - **Primary:** Use the `oboe.edit_file` tool to apply the patch automatically.
   - **Fallback:** If the tool isn’t available, provide complete production-ready content or diff instructions for manual update.

6. **Re-Test & Iterate:**  
   Re-run or compile the project to verify that the changes resolve the error. Repeat the process for any remaining issues.

## Environment & Security Reminders

- Use environment variables for sensitive data (e.g., Supabase keys) and never commit real keys.
- Maintain inline code comments reflecting the workflow for clarity.

## Conclusion

This README serves as the project’s blueprint and a guide to our strict, iterative workflow. It ensures that every edit is methodical and reversible, keeping our development process organized and efficient.

### References

- React. (n.d.). Retrieved from [https://reactjs.org/](https://reactjs.org/)
- TypeScript. (n.d.). Retrieved from [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- Supabase. (n.d.). Retrieved from [https://supabase.com/](https://supabase.com/)
- Styled Components. (n.d.). Retrieved from [https://styled-components.com/](https://styled-components.com/)
- React Router. (n.d.). Retrieved from [https://reactrouter.com/](https://reactrouter.com/)
- Create React App. (n.d.). Retrieved from [https://create-react-app.dev/](https://create-react-app.dev/)