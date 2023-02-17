'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const clothes = require('./clothes');
const Collection = require('./collection');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);

const foodModel = food(sequelize, DataTypes);
const clothesModel = clothes(sequelize, DataTypes);

module.exports = {
  sequelize,
  foodCollection: new Collection(foodModel),
  clothesCollection: new Collection(clothesModel),
};