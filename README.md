# SearchPilot Task

Thank you for considering my application for the role. Below are the instructions to get started with the SearchPilot Task project.

## Project Overview

The SearchPilot Task project is a web application built using React for the frontend and Express for the backend. It allows users to perform various actions related to product search and validation.

### Task

- Display a list of products (Endpoint: `GET /api/products` and individual product endpoint: `GET /api/products/:id`)
- When user clicks on a product, user gets taken to a dynamic form and should see a form where they can edit product detail. Form should have these input fields:
  - Product name (User should be able to validate a unique product name `POST /api/validate`)
  - Product type
  - When product type is selected, user should then see options such as:
    - Size
    - Features
    - Brand
- Save the form (Endpoints: `PUT /api/products/:id`) - Please see the product detail page low fidelity mockup
- On the product list page, user can add a new product, which takes you to the product detail form page (Endpoint: `POST /api/products`)
- If anything appears ambiguous, please make your own choice on how to proceed. If there appears to be a roadblock of some sort, please do email us.

### Requirements

- Use React to build the frontend of the web application
- Implement all of the features shown in the design mockup and task list
- Ensure that the application is responsive and works on all devices
- Write clean, maintainable code that adheres to best practices

## Setup Instructions

To run the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/filipesf/searchpilot.git
   cd searchpilot
   ```

2. **Install Dependencies:**
   Before running the project, you need to install the dependencies. To do this, run:
   ```bash
   yarn install
   ```
   The `yarn preinstall` script will make sure to install the dependencies for the client directory.

3. **Start the Server and Client:**
   To start the server and client concurrently, run:
   ```bash
   yarn dev
   ```
   This command will start the server on `http://localhost:8080` and the client on `http://localhost:3000`.

## Dependencies Used

- **React:** Used for building the user interface efficiently.
- **React Router:** Chosen for its powerful routing capabilities, allowing for easy navigation between different views of the application.
- **React Query:** Utilised for managing and caching asynchronous data, providing a seamless user experience with minimal loading times.
- **Axios:** Used for making HTTP requests to the server, enabling communication between the frontend and backend.

## Notes and Considerations

- **Adjustments to `package.json` Scripts:** I have configured the `package.json` scripts to enable running both the server and the client with a single command (`yarn dev`). Additionally, a `preinstall` script is included to ensure the client's dependencies are installed before the main installation process.

- **Choice of React Router and React Query:** React Router was selected for its declarative approach to routing, making it easier to define navigation rules within the application. React Query was chosen for its ability to manage server state and caching data, leading to improved performance and responsiveness.

- **Styling Approach:** Although styled-components could have been implemented for more dynamic styling, CSS variables were deemed sufficient for this project's requirements.

- **Handling Undefined Values:** I encountered an issue where `updatedProduct.name` was occasionally undefined when reaching the `validate` API. This inconsistency may be due to asynchronous state updates. Given more time, I would collaborate with team members to address this issue more effectively.

- **Error Handling:** While error handling has been implemented, there is room for improvement to ensure a more robust and user-friendly experience. Enhancements could involve providing clearer error messages and handling edge cases more gracefully.

- **Focused Efforts:** Despite the inevitable challenges encountered during the development process, I approached this project with a commitment to delivering a high-quality outcome. While I acknowledge that there may be a few oversights, I assure you that I dedicated my best efforts and attention to detail. My primary focus was on crafting a user experience (UX) that goes beyond mere functionality, striving to add genuine value with the limited information available on the products.

- **Continuous Improvement:** I genuinely value the opportunity to receive feedback on my work. I believe that constructive criticism plays a crucial role in personal and professional growth. Therefore, I am open and receptive to any suggestions or insights that can help enhance the project further. Your feedback will not only aid in improving my skills but also contribute to the continual refinement of the project's overall quality.

Thank you once again for the opportunity to showcase my skills. If you have any questions or feedback, please feel free to reach out. I look forward to the possibility of working together.
