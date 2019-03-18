'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    discordId: DataTypes.BIGINT,
    epicId: DataTypes.BIGINT
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Game, {foreignKey: 'userId'});
  };
  return User;
};
