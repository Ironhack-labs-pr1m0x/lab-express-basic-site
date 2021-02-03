const express = require('express');
const port = 5555;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});
app.get('/works', (req, res) => {
  res.sendFile(__dirname + '/views/work.html');
});
app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html');
});
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/views/404.html');
});

app.listen(port, () => {
  console.log('Server is running');
});
