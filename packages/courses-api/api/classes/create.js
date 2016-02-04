function create({ title, description, duration, price, courseId }, cb) {
  Meteor.call('create/class', {
    title,
    description,
    duration,
    price,
    courseId,
  }, cb);
}

export default create;
