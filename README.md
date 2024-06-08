# Authentication

The authentication in this app is handled through a login screen where users enter their username and password. Below is a detailed explanation of how the authentication process works and how to implement it.

## Login Screen

The `LoginScreen` component is responsible for capturing the user's username and password and handling the login process.

## API Integration

To handle authentication, the app communicates with a backend API. Here is how to set up and use the API for the login process:

### Setup API Endpoint

Ensure you have an endpoint ready on your backend server to handle login requests. For example:
```
https://your-api-url.com/login
```

### Fetch Request

The `handleLogin` function sends a POST request to the login endpoint with the username and password.

### Handle Response

Based on the response from the server:

- **Successful Response (response.ok)**:
  - Parse the JSON data.
  - Navigate to the home screen or store the received token for authenticated requests.

- **Failed Response**:
  - Alert the user.

# Requirements Fulfillment

## React Native Front-end (5 points)

### Data Write Access (2 points)

**Requirement**: One screen for data write access, e.g., to send a message.

**Implementation**: A screen named `MessageScreen` is created where users can compose and send messages. This screen includes a form with input fields for the message content and a submit button to send the message to the backend.

### Data Read Access (2 points)

**Requirement**: One screen for data read access, e.g., to retrieve messages.

**Implementation**: A screen named `MessagesListScreen` is implemented to fetch and display messages from the backend. This screen uses a `FlatList` component to render the messages retrieved from the server.

### Navigation (1 point)

**Requirement**: Navigation of these screens.

**Implementation**: Navigation between the login screen, `MessageScreen`, and `MessagesListScreen` is handled using React Navigation. The app uses a stack navigator to manage the navigation flow, ensuring users can move seamlessly between screens.

## Server APIs (5 points)

### Data Processing and Storage API 

**Requirement**: One server API to process and store data.

**Implementation**: An endpoint `/api/messages` is created on the server to handle POST requests for new messages. This endpoint processes the incoming data and stores it in a database.

### Data Retrieval API 

**Requirement**: One server API to process requests to read data.

**Implementation**: An endpoint `/api/messages` is created to handle GET requests. This endpoint retrieves messages from the database and returns them in the response.

### JSON in API Requests and Responses 

**Requirement**: Proper use of JSON in API requests and responses.

**Implementation**: Both the data processing and retrieval endpoints use JSON format for requests and responses. Incoming requests are parsed as JSON, and responses are formatted as JSON to ensure consistent data handling.

### Data Handling and Access 

**Requirement**: Proper data handling and access, e.g., with the file system or databases.

**Implementation**: The server uses a database to store and manage data. Proper CRUD operations are implemented to handle data securely and efficiently, ensuring data integrity and security.
 
  ![image](https://github.com/AnilKumar3494/candy-store/assets/90452951/6dd9e9b2-fc6a-4f4c-9bb7-d5f581244699)
