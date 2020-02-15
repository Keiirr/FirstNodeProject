const app = require('./app');
var mongo = require('mongodb');

const db = require('./CreateDatabase');
const users = require('./InsertUsers');

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
