const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const http = require('http').createServer(app);
const port = 1000;

http.listen(`${port}`, () => {
  console.log(`Server is on ${port}`);
});

app.use('/', express.static(path.join(__dirname, '../client/build')));

app.use(cors());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/login', () => {
  'Hello';
});
