const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);

// routes
app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/mercury', (req, res) => {
  res.render('mercury.html');
});

app.get('/venus', (req, res) => {
  res.send('This will be Venus web page!');
});

// starting server
app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Express server is running...');
});
