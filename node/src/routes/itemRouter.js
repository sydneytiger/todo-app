const express = require('express');
const router = express.Router();
const dataReader = require('../middleware/dataReader');
const dataWriter = require('../middleware/dataWriter');
const schemaValidation = require('../middleware/schemaValidation');

router.get('/user/:username', [dataReader], (req, res) => {
  res.send(res.body);
});

router.post('/', [schemaValidation, dataWriter], (req, res) => {
  res.send('Hello item post');
});

module.exports = router;