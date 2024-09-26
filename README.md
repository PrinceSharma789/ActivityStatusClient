Getting Started with the Expo Project
Prerequisites
Before running the project, ensure you have the following installed:

Node.js - Required for running JavaScript applications.

Expo CLI - Required for running and managing Expo projects. Install it globally by running:
"npm install -g expo-cli"

Installing Dependencies
Once Node.js and Expo CLI are installed, navigate to the project directory and install the necessary dependencies by running:
"yarn"
This command will install all the required packages listed in the package.json file.

Running the Project
To start the Expo project, use the following command:
"yarn start"
This will start the Expo development server. You can then scan the QR code with your Expo Go app on your mobile device or open it in a simulator.

Connecting to the Backend
To connect the Expo app with the backend, follow these steps:
Start the Backend Server: Clone and start the backend server by following the instructions in the backend repository:
Backend Repo: [ActivityStatusServer](https://github.com/PrinceSharma789/ActivityStatusServer)

Update the Base URL:
Open the config.js file in your Expo project.
Replace the baseURL with your laptop's IP address to allow the mobile app to communicate with the backend server. The baseURL should look like this:
javascript
export const baseURL = "http://<YOUR_LAPTOP_IP>:<BACKEND_PORT>";
Replace <YOUR_LAPTOP_IP> with your actual IP address (e.g., 192.168.1.10) and <BACKEND_PORT> with the port on which the backend server is running (e.g., 3000).

Notes
Ensure both the backend server and the Expo project are running on the same network to connect properly.
The backend repo has all the necessary instructions for running the backend server.
