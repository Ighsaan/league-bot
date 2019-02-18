var category = {
  ADMIN: ["195588825240698880"],
  MODERATOR: [],
  USER: []
}

const has = function(type, userid) {
  return type.includes(userid);
}

const grant = function(type, userid) {
  if(!has(type, userid)) {
    type.push(userid);
  }
}

const remove = function(type, userid) {
  if(!has(type, userid)) {
    var index = type.indexOf(userid);
    type.splice(index, 1);
  }
}

module.exports = {
  has: has,
  grant: grant,
  remove: remove,
  category: category
}
