// server.js
import express, { json } from 'express';
const app = express();
const port = 4000; // Change the port number to whatever you like

// Parse JSON bodies
app.use(json());

// In-memory storage for demo purposes (replace with a real database)
const users = [
  { id: 1, username: 'john', password: 'hello' },
  { id: 2, username: 'jane', password: 'world' },
];

// API endpoint to handle login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});