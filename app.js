const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
  res.send('it works!');
});

app.get('/mercury', (req, res) => {
  res.send('This will be Mercury web page!');
});

app.get('/venus', (req, res) => {
  res.send('This will be Venus web page!');
});

// starting server
app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Express server is running...');
});
