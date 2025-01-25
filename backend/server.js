const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // Mock authentication
  if (username === 'admin' && password === 'password') {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});