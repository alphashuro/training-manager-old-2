function create(facilitator, cb) {
  return Meteor.call('create/facilitator', facilitator, cb);
}

export default create;
