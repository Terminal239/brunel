# About

This project is built using the following technologies:

- **React:** Core UI library for building dynamic user interfaces.
- **Vite:** Fast development server and build tool, enhancing the development experience.
- **TypeScript:** Provides static typing capabilities to improve code maintainability and reduce errors.
- **Tailwind CSS:** Utility-first CSS framework for efficient styling.
- **clsx:** Utility for conditionally constructing and managing CSS class names.
- **ESLint (Tailwind standard) and Prettier:** Enforce consistent code style and formatting for better collaboration and readability.

## Live Demo

[Live Site URL](https://brunel-website.netlify.app/)

## Prerequisites:

- Node.js ([https://nodejs.org/](https://nodejs.org/))
- npm or yarn ([https://yarnpkg.com/](https://yarnpkg.com/))

## Installation

1. Clone this repository.
2. Navigate to the project directory: `cd brunel`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm run dev` or `yarn dev`
   - This will open a browser window at `http://localhost:5173`

## Assumptions and Considerations

1. Component Scaling: The header component is assumed to stretch infinitely upon zoom-out, while the footer maintains a maximum width.
2. Responsiveness: The website is designed to be fully responsive across desktop, tablet, and mobile devices. This may involve adjustments to the original design to ensure optimal display on smaller screens.
3. Accordion Data: Dummy data is used to populate the accordion, particularly for questions without answers.
4. Custom Hook: A custom useInput hook is implemented to streamline input handling and error notifications.
