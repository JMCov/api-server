'use strict';

const logger = (req, res, next) => {
  // req.log = 'this is a log!';
  console.log('Method :', req.method, 'Path:', req.path);
  next();
};

module.exports = logger;
