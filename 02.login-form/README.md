## Table of Contents

Dependencies
Scripts
Linting and Formatting
Browserslist
Getting Started
Contributing
License
Dependencies
The project's dependencies are listed in the dependencies section of the package.json file. These dependencies include:

@testing-library/jest-dom: Utilities for testing React components using Jest.
@testing-library/react: Testing utilities for React applications.
@testing-library/user-event: Library for simulating user events in tests.
react: The core React library.
react-dom: The package for rendering React components in the browser.
react-scripts: Scripts for running, building, and testing React applications.
web-vitals: Metrics for measuring web performance.
The project also has a development dependency:

tailwindcss: A utility-first CSS framework for building responsive and efficient designs.
Scripts

## The available scripts in the project are:

start: Start the development server for the React app.
build: Build the production-ready bundle of the app.
test: Run tests using the testing framework.
eject: Eject from react-scripts to customize the build configuration.
Linting and Formatting
The project uses ESLint for linting and code style enforcement. The configuration is extended from the react-app preset, which enforces best practices for React development.

## Browserslist

The browserslist configuration defines the range of browser versions that the app is compatible with in both production and development environments.

# Getting Started

To get started with this project, follow these steps:

Clone the repository to your local machine.
Install the dependencies using npm install.
Run the app in development mode with npm start.
For production deployment, use npm run build to create an optimized build of the app.
