# Authentication

The authentication in this app is handled through a login screen where users enter their username and password. Below is a detailed explanation of how the authentication process works and how to implement it.

## Login Screen

The `LoginScreen` component is responsible for capturing the user's username and password and handling the login process.

## API Integration

To handle authentication, the app communicates with a backend API. Here is how to set up and use the API for the login process:

### Setup API Endpoint

### Fetch Request

The `handleLogin` function sends a POST request to the login endpoint with the username and password.

### Handle Response

Based on the response from the server:

- **Successful Response (response.ok)**:
  - Parse the JSON data.
  - Navigate to the home screen or store the received token for authenticated requests.

- **Failed Response**:
  - Alert the user.
 
  ![image](https://github.com/AnilKumar3494/candy-store/assets/90452951/6dd9e9b2-fc6a-4f4c-9bb7-d5f581244699)
