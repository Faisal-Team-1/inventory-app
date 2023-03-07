const express = require('express');
const seedData = require('./seedData');

const router = express.Router();

router.get('/items', (req, res) => {
  res.json(seedData.items);
});

module.exports = router;
