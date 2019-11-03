const app = require('./src/startup/app');
const dbStart = require('./src/startup/db');

dbStart();

const port = process.env.PORT || 8686;
const server = app.listen(port, ()=>{
  console.log(`listening to port ${port}...`);
});

module.exports = server;