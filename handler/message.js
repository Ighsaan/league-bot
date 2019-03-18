const add = require('./command/add.js');
const verify = require('./command/verify.js');
const code = require('./command/code.js');

var handler = async (msg) => {
  var author = msg.author;
  var content = msg.content.split(" ");
  var command = content[0];
  content = content.slice(1);

  switch(command) {
    case 'ping' : {
      msg.reply('pong');
      break;
    }
    case 'add' : {
      msg.reply(await add(msg.mentions.users.first()));
      break;
    }
    case 'verify' : {
      msg.reply(await verify(author, content));
      break;
    }
    case 'code' : {
      msg.reply(await code(author, content));
      break;
    }
  }
}

module.exports =  handler;
