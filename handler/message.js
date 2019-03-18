var data = require("../data/accessor.js");
const { addFriend, loadClient } = require('../client/epic_games.js');

var handler = async (msg) => {
  var author = msg.author;
  var content = msg.content.split(" ");
  var command = content[0];

  if (command === 'ping') {
    msg.reply('pong');
  }

  if(command === 'add') {
    var user;
    if(content.length == 1){
      user = msg.author;
    } else {
      user = msg.mentions.users.first();
    }
    var response = await data.addPoint(user.id, user.username);
    msg.reply(response);
  }

  if(command === 'meh') {
    if(content.length == 1) {
      msg.reply('Please supply a Epic username');
    } else {
      var response = await addFriend(content.slice(1).join(" "));
      msg.reply(response);
    }
  }
}

module.exports =  handler;
