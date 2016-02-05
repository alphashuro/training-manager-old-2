import Facilitators from '../../collections/facilitators.js';

function all() {
  Meteor.subscribe('facilitators');
  return Facilitators.find().fetch();
}

function one(_id) {
  Meteor.subscribe('facilitator', _id);
  return Facilitators.findOne(_id);
}

const get = { one, all };

export { all, one };
export default get;
