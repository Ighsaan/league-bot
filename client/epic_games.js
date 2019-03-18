const { Client } = require('epicgames-client');
const data = require("../data/accessor.js");

let client = new Client({
    email: process.env.EPIC_USER,
    password: process.env.EPIC_PASSWORD
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
    var result = await data.getVerification(friend.id);

    if(!!result) {
      await client.communicator.sendMessage(friend.id, "code "+result.dataValues.code);
      await friend.remove();
    }
  }
}

const addFriend = async (epicId, discordId) => {
  var account = await client.lookup(epicId);
  if(!account){
    return 'User not found';
  }

  var user = await data.getUserByEpicId(account.id);
  if(user) {
    return 'Epic ID already verified';
  }

  var code = Math.floor(1000 + Math.random() * 9000);
  var result = await data.addVerification(discordId, account.id, code);

  if(!result) {
    return 'Verification already pending for epic username';
  }

  await client.inviteFriend(epicId);
  return 'User added';
}

module.exports = {
  loadClient: loadClient,
  addFriend: addFriend
};
