'use strict';

require('dotenv').config();

const { start } = require('./src/server');
const { sequelize } = require('./src/models');

sequelize.sync()
  .then(() => {
    console.log('Successful Connection!');
    start();
  })
  .catch(e => console.error(e));
