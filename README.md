# Destination Search Application

## Overview

This project is a React-based web application that allows users to search for travel destinations and view details about selected destinations. It provides a user-friendly interface with a search combobox, destination details, and nearby location suggestions. The application is designed to handle asynchronous data fetching, error handling, and user input efficiently.

## Design Decisions

### User Interface (UI)

- **React**: The project uses React for building the user interface due to its component-based architecture, which promotes reusability and maintainability.
- **React-Select**: A popular library for the combobox, providing a customizable and accessible search input.
- **React Hooks**: Utilized for managing component state and side effects (`useState`, `useEffect`).
- **Sass**: Used for styling the application, leveraging its features for variables, nesting, and mixins to maintain clean and manageable styles.

### Technology Choices

- **TypeScript**: The project is implemented in TypeScript to leverage static typing, which helps in catching errors early and improving code quality.
- **Lodash**: Used for debouncing user input to reduce the number of API requests made during typing.
- **Routing**: Used React Router for the routing part.
- **Testing**: Jest and React Testing Library are used for unit testing the components to ensure they work as expected.
- **Axios (Optional)**: For handling HTTP requests. If Axios is used, it simplifies the HTTP request handling with built-in error handling and request/response transformations.


## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. **Install Dependencies**:
    ```bash
    npm install
    or
    yarn install
   
3. **Start the Development Server**:
    ```bash
   npm start
   or
   yarn start
   
4. **Run Tests**:
   ```bash
   npm test
   or 
   yarn test

The tests included are for demonstration purposes to show how testing can be implemented with Jest.
