const { Client } = require('epicgames-client');

let client = new Client({
    email: 'thelightflame@gmail.com',
    password: 'Ighsaanwevy1!'
});

const loadClient = async () => {

    if(!await client.init() || !await client.login()) {
      throw 'Error while initialize or login process.';
    }
    console.log('Client Logged In');

    client.communicator.on('friend:added', handleFriendRequest(client));
}

const handleFriendRequest = (client) => {
  return async data => {
    await client.communicator.sendMessage(data.id, 'Hello');
    await data.remove()
  }
}

const addFriend = async (userId) => {
  let account = await client.lookup(userId);

  if(!account){
      return 'User not found';
  }

  await client.inviteFriend(userId);
  return 'User Added';
}

module.exports = {
  loadClient: loadClient,
  addFriend: addFriend
};
