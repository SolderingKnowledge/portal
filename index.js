const app = require('./server/server');

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});