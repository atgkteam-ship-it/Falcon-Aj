const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Falcon AI Backend Running');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port 5000');
});
