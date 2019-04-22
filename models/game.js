'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    userId: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    Game.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Game;
};
