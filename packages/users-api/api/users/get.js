import users from '../../collections/users.js';

function all() {
  Meteor.subscribe('users');
  return users.find().fetch();
}

function one(_id) {
  Meteor.subscribe('user', _id);
  return users.findOne(_id);
}

const get = { one, all };

export default get;
export { all, one };
