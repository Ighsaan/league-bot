var db = require('./implementation/postgresql.js');

var getLeaderBoard = async () => {
    var {rows} = await db.query("SELECT p.discordid, COUNT(*) as points from games g inner join users p on p.id = g.userid group by p.discordid");
    return rows;
}

var addPoint = async (username) => {
  var {rows, rowCount} = await db.query("SELECT id FROM users WHERE discordid = $1", [username]);
  var userid;
  if(rowCount == 0) {
    var insertResult = await db.query("INSERT INTO users (discordid) values($1) RETURNING id", [username]);
    userid = insertResult.rows[0].id;
  } else {
    userid = rows[0].id;
  }

  await db.query("INSERT INTO games (userid) values($1)", [userid]);
}

module.exports = {
  getLeaderBoard: getLeaderBoard,
  addPoint: addPoint
};
