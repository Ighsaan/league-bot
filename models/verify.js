'use strict';
module.exports = (sequelize, DataTypes) => {
  const Verify = sequelize.define('Verify', {
    discordId: DataTypes.BIGINT,
    epicId: DataTypes.STRING,
    code: DataTypes.INTEGER
  }, {});
  Verify.associate = function(models) {
    // associations can be defined here
  };
  return Verify;
};
