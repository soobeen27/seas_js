const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { getSeoulPopulation } = require('./seoul');
const PORT = 3000;

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/api/seoul', (req, res) => {
  const seoulData = getSeoulPopulation();
  res.json(seoulData);
});

app.listen(PORT, () => {
  console.log('서버 레디');
});
