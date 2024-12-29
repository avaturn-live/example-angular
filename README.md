# Angular Example

This repository contains example code written in Angular. Below are instructions to get started with the project.

## Getting Started

1. **Clone the Repository**  
   Clone the repository to your local machine:

   ```bash
   git clone git@github.com:avaturn-live/example-angular.git
   ```

   Navigate to the project directory:

   ```bash
   cd example-angular
   ```

2. **Install Dependencies**  
   Ensure that Node.js (recommended LTS version) and npm are installed. Then, install the project dependencies:

   ```bash
   npm install
   ```

3. **Create an Environment File**  
   Create a `.env` file in the root directory and add the following variable:

   ```env
   AVATURN_LIVE_TOKEN=your_avaturn_live_token
   ```

   The `AVATURN_LIVE_TOKEN` variable is required for the application to work. You can find detailed information about obtaining this token in the [Avaturn Live API documentation](https://docs.avaturn.live).

4. **Run the Project**  
   To run the application in development mode, execute the following command:
   ```bash
   npm run start
   ```
   The application will be available at [http://localhost:4200](http://localhost:4200).

## Additional Information

- If you have questions about working with the project, refer to the [Avaturn Live documentation](https://docs.avaturn.live).
- For questions and suggestions, please create an issue in this repository.
