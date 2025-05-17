# Brunel

A modern, responsive web application designed to streamline user registration and showcase success stories. Built with React, TypeScript, and Vite, Brunel offers a clean user experience with intuitive navigation and interactive features.

## Description

Brunel is a single-page application that provides users with a seamless registration process, an engaging FAQ section, and a visually appealing landing page highlighting success stories. The project leverages reusable components, custom hooks, and modern styling practices to ensure maintainability and scalability.

## Features

- **Responsive Landing Page:** Eye-catching hero section with success stories and illustrations.
- **User Registration:** Guided registration form with real-time validation and feedback.
- **Success Confirmation:** Friendly success screen with automatic redirection after registration.
- **FAQ Section:** Expandable/collapsible questions to address common user inquiries.
- **Reusable Components:** Modular design for easy extension and maintenance.
- **Custom Hooks:** Includes a custom `useInput` hook for streamlined form management.
- **Modern Tooling:** Built with React, TypeScript, Vite, and Tailwind CSS for fast development and performance.
- **Accessible Navigation:** Header and footer with clear links and calls to action.

## Live Demo

[Live Site URL](https://brunel-website.netlify.app/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd brunel
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Preview the production build:**

   ```bash
   npm run preview
   ```

## Usage

- **Development:**  
  Run `npm run dev` and open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

- **Registration Flow:**  
  Click "Get Projects" in the header to access the registration form. Upon successful submission, you'll see a confirmation screen and be redirected to the homepage.

- **FAQ:**  
  Scroll down on the homepage to find the FAQ section. Click on any question to expand and view the answer.

- **Customization:**  
  - Add or modify questions in the FAQ by editing the relevant component in `src/components/FAQ/`.
  - Update branding or navigation in `src/components/Header/` and `src/components/Footer/`.
  - Adjust form fields or validation in `src/components/Register/`.

---

Feel free to further personalize this README with your project's branding, contribution guidelines, or deployment instructions!
