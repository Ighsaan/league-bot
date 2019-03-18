var data = require("../../data/accessor.js");

const command = async (user) => {
  var response;
  if(!user){
    return 'Please supply a user Eg. \'@User\'';
  } else {
    var result = await data.addPoint(user.id)
    return result ? 'Point added' : 'User not registered';
  }
}

module.exports = command;
