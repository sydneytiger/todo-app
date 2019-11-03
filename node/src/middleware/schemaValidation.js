const dataSchema = require('./data-schema');
const tv4 = require('tv4');

module.exports = (req, res, next) => {
  const result = tv4.validateResult(req.body, dataSchema)
  if(!result.valid) {
    return res.status(500).send(`post data validation error: ${result.error.message}`);
  }
  next();
}