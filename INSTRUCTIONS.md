# Original Project Instructions

This document contains the original instructions provided for building this application.

## Initial Requirements

I want to generate a new React app. I'd like to use React 19, ideally with hooks, nothing class-based. I want everything to be written in TypeScript. Ideally, we would have a single entry point in maybe an index.html and a main.tsx file, or app.tsx, whatever you think is reasonable.

I want to have a page and/or app navigation menu along the left side that is collapsible, a la Azure or any modern application, along with a top menu header.

I would like to have this be built in a semi-micro-FE structure. Not like microservices on the backend, but I want consuming developers to be able to have their own app code in separate repositories, and I also want this application to be able to consume a common NPM package where we have shared components and utility functions.

Please instantiate all of this and in the base initial app show "Hello World" button that allows the user to show a modal that lets them enter in their contact information and then saves it to, for now, a front-end JSON object where in a second page we can see all users who have signed up. Please use MUI components and UI that's Material UI for all generally reusable front-end components.

## Additional Specifications

### Routing
Use React Router DOM for navigation and routing.

### Theming and Styling
Use something that can interact with MUI as well as AG Grid because eventually we'll be pulling in AG Grid as well as AG Charts. Theming should support dark and light mode across these two third-party component libraries.

## Implementation Approach

For other design decisions not specified above, use best practices and reasonable defaults.
