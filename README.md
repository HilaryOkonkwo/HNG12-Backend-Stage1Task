# Number Classification API

## Overview

This is a simple Number Classification API that takes an integer as input and returns detailed mathematical properties of the number along with a fun fact. The API checks whether the number is prime, perfect, Armstrong, and its parity (even or odd). It also provides a fun fact about the number using the Numbers API.


## Technologies Used
 1. Node.js: Backend runtime environment.

 2. Express.js: Web framework for building the API.

 3. Axios: Promise-based HTTP client for fetching fun facts from Numbers API.

 4. CORS: Middleware for enabling Cross-Origin Resource Sharing.


## Project Structure
   
HNG12-Backend-Stage1Task/
    
    |--src
    |     |--controllers
    |       |--classifyNumber.js
    |    |--routes
    |       |--classifyRoutes.js
    |    |--utils
    |       |--logic.js
    |--app.js
    |--LICENSE
    |--package-lock.json
    |package.json

## Set Up Instructions
  
  To run this project locally

 1. Clone the repository:
  git clone https://github.com/HilaryOkonkwo/HNG12-Backend-Stage0Task

 2. in your terminal, run the command
 
  cd HNG12-Backend-Stage1Task 

 2. Install dependencies:

  npm install express cors

 3. Run the server:
  node app.js

 4. Access the API at:
  http://localhost:4000/api/classify-number?

## Usage
Once the server is running, you can make a GET request to /api/classify-number with a query parameter number to classify the number and get a fun fact. For example: http://localhost:4000/api/classify-number?number=371

## Deployment 
The project is deployed on Vercel, a platform known for its fast and easy deployment of web applications.

Live URL:

## API Endpoint

 1. Base URL: http://localhost:4000/api/

 2. GET /classify-number

This endpoint accepts a query parameter number and returns the following JSON response with various mathematical properties of the given number:

     Example Request:

            GET http://localhost:4000/api/classify-number?number=371

            Success Response (200 OK):

            {
            "number": 371,
            "is_prime": false,
            "is_perfect": false,
            "properties": ["armstrong", "odd"],
            "digit_sum": 11,
            "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
            }

            Error Response (400 Bad Request):

            {
            "number": "alphabet",
            "error": true
            }

## License
This project is licensed under the [MIT](https://github.com/HilaryOkonkwo/HNG12-Backend-Stage1Task/blob/main/LICENSE)

## Contact
 Feel free to reach out via:

 Email: somtoochukwuhilary@gmail.com

 [LinkedIn](https://www.linkedin.com/in/somtoochukwu-okonkwo-691947124/)

 [X](https://x.com/OkonkwoSomtoo)

 GitHub: https://github.com/HilaryOkonkwo

 Phone No: +2348164514675



