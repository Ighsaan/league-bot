const Sequelize = require('Sequelize');
const UserModel = require('../models/user');
const GameModel = require('../models/game');

const sequelize = new Sequelize({
  username: 'dev',
  host: 'localhost',
  database: 'league',
  password: 'ilpass123',
  port: 5432,
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
