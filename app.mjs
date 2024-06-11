import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express(); // Create an instance of the express app

const users = [
  { id: 1, username: 'john', password: 'password123', email: 'john@example.com' },
  { id: 2, username: 'jane', password: 'password456', email: 'jane@example.com' },
];

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});

app.get('/me', (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  const decoded = jwt.verify(token, 'secretkey');
  const user = users.find((u) => u.id === decoded.userId);
  if (!user) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  res.json(user);
});

app.listen(4000, () => {
  console.log('API listening on port 4000');
});