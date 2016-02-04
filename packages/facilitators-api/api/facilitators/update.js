function update(facilitator, cb) {
  return Meteor.call('update/facilitator', facilitator, cb);
}

export default update;
