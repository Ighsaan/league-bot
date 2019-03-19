const { Client } = require('epicgames-client');
const verifyDao = require("../data/dao/verify.js");
const userDao = require("../data/dao/user.js");

let client = new Client({
    email: process.env.EPIC_USER || 'thelightflame@gmail.com',
    password: process.env.EPIC_PASSWORD || 'Qwerty1!'
});

const loadClient = async () => {

    if(!await client.init() || !await client.login()) {
      throw 'Error while initialize or login process.';
    }
    console.log('Client Logged In');

    client.communicator.on('friend:added', handleFriendRequest(client));
}

const handleFriendRequest = (client) => {
  return async friend => {
    var result = await verifyDao.getByEpicId(friend.id);

    if(!!result) {
      await client.communicator.sendMessage(friend.id, "code "+result.dataValues.code);
      await friend.remove();
    }
  }
}

const addFriend = async (epicId, discordId) => {
  var account = await client.lookup(epicId);
  if(!account){
    return 'Epic user not found';
  }

  var user = await userDao.getByEpicId(account.id);
  if(user) {
    return 'Epic user already verified';
  }

  var code = Math.floor(1000 + Math.random() * 9000);
  var verify = await verifyDao.getByEpicId(epicId);

  if(verify) {
    return 'Verification already pending for epic username';
  }

  await verifyDao.add(discordId, account.id, code);
  await client.inviteFriend(epicId);

  return 'Friend Request has been sent to your Epic games account, please'
  + ' accept the request and copy paste the message as is from the bot sent'
  + ' on Epic games';
}

module.exports = {
  loadClient: loadClient,
  addFriend: addFriend
};
