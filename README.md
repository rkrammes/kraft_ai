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
├─ node_modules/
├─ public/
│  └── index.html
├─ src/
│  ├─ AllIngredients.tsx
│  ├─ EditableTable.tsx
│  ├─ GradientButton.tsx
│  ├─ Login.tsx
│  ├─ NextIteration.tsx
│  ├─ RecipeDetail.tsx
│  ├─ RecipeForm.tsx
│  ├─ RecipeIteration.tsx
│  ├─ RecipeList.tsx
│  ├─ secret.tsx
│  ├─ App.tsx
│  ├─ index.tsx
│  ├─ supabaseClient.ts
│  └─ theme.ts
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.json
└─ tsconfig.tsbuildinfo

## Optimal Development Workflow (Vibecoding)

The following workflow outlines a highly efficient, AI-driven approach to software development called **"vibecoding"**. This allows the developer to guide and supervise coding tasks, with the AI proactively generating and refining code:

### Step 1: **Identify & Isolate**  
- The AI proactively reviews error messages, logs, or feature requests.
- It identifies the exact files and code snippets requiring attention.

### Step 2: **Open & Review**  
- The AI opens and analyzes the relevant files.
- It provides context and clearly explains the issue or needed feature.

### Step 3: **Propose a Patch**  
- The AI independently generates specific, clearly documented code edits.
- Each edit includes the rationale and expected outcome.

### Step 4: **Request Editorial Confirmation**  
- The AI presents the generated changes in a ready-to-review format.
- The human developer reviews and explicitly confirms or requests further adjustments.

### Step 5: **Apply the Patch**  
- **Primary:** Once approved, the AI applies or provides ready-to-paste code.
- **Fallback:** If automated tools are unavailable, the developer manually applies the provided code.

### Step 6: **Re-Test & Iterate**  
- The AI actively assists in re-testing the code, providing immediate feedback.
- The cycle repeats iteratively until all issues are resolved and features work optimally.

## Environment & Security Reminders

- Use environment variables for sensitive data (e.g., Supabase keys) and never commit real keys.
- Maintain inline code comments reflecting the vibecoding workflow for clarity and maintainability.

## Conclusion

This README serves as the project's blueprint, clearly defining our "vibecoding" approach—leveraging AI to maximize productivity and creativity. It ensures development remains swift, intuitive, and responsive to your editorial direction.

### References

- React. (n.d.). Retrieved from [https://reactjs.org/](https://reactjs.org/)
- TypeScript. (n.d.). Retrieved from [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- Supabase. (n.d.). Retrieved from [https://supabase.com/](https://supabase.com/)
- Styled Components. (n.d.). Retrieved from [https://styled-components.com/](https://styled-components.com/)
- React Router. (n.d.). Retrieved from [https://reactrouter.com/](https://reactrouter.com/)
- Create React App. (n.d.). Retrieved from [https://create-react-app.dev/](https://create-react-app.dev/)