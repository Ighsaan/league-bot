const Sequelize = require('sequelize');
const UserModel = require('../models/user');
const GameModel = require('../models/game');

const sequelize = new Sequelize({
  username: process.env.POSTGRES_USER || 'dev',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DATABASE || 'league',
  password: process.env.POSTGRES_PASSWORD || 'ilpass123',
  port: process.env.POSTGRES_PORT || 5432,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

const User = UserModel(sequelize, Sequelize);
const Game = GameModel(sequelize, Sequelize);

Game.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Game, {foreignKey: 'userId'});

module.exports = {
  User,
  Game
}
