function update({_id, description, duration, price, title }, cb) {
  Meteor.call('update/class', {
    _id,
    title,
    description,
    duration,
    price,
  }, cb);
}

export default update;
