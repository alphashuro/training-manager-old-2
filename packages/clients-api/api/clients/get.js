import Clients from '../../collections/clients.js';

function all() {
  Meteor.subscribe('clients');
  return Clients.find().fetch();
}

function one(_id) {
  Meteor.subscribe('client', _id);
  return Clients.findOne(_id);
}

const get = { one, all };

export default get;
export { all, one };
