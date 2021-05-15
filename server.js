const express = require('express');
const cors = require('cors');
const app = express();
const cors = require('cors');

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});
const whitelist = [
  'http://localhost:3000',
  'http://localhost:8080',
  'https://dashboard-react-admin.herokuapp.com/',
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log('** Origin of request ' + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log('Origin acceptable');
      callback(null, true);
    } else {
      console.log('Origin rejected');
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(process.env.PORT || 8080, () => console.log('API is running'));
